# From an SOW to a machine that runs RISC-V tests every day

## What this work set out to solve

The SOW's problem statement names three gaps: **architectural side channels**, **extensions**, and **hardware-behavior variance across early-adopter development boards**. The goal is a localized KernelCI automation that catches regressions across **compilers, toolchains, and microarchitectures**. Of those three gaps, we only touched **extensions**, and only on QEMU; the other two were left undone. The SOW breaks the whole thing into four phases; below I go phase by phase through what we did.

## What we did, phase by phase

### Phase 1 · Setup & first issue

- **Local containerized test pipeline** — all tests run in Docker containers (tuxrun uses docker as its container runtime). The pipeline wasn't built from scratch: it borrows the upstream `kernelci-pipeline` job definitions, plus a local stack of our own (API + artifact server + callback + scheduler, `deploy/stack.sh`). **No LAVA**; we nominally stood up a `lab` (runtime name `pull-labs-riscv`) but turned out not to need it much — the vast majority of the work is "pull a build straight from the API and run it."
- **Upstream tracking issue board** — [kernelci/kernelci-project#585](https://github.com/kernelci/kernelci-project/issues/585), the integration tracking thread kept in sync with upstream.
- **First validation script parsed locally** — `verify.py`: one command gates the whole tree. One of its `pipeline yaml` checks runs `tests/validate_yaml.py`, which verifies that the PR1 test profile (YAML) we submitted still parses.

### Phase 2 · Core logic

The SOW asks for three things here: deploy the main execution logic; have a script automatically catch configuration drift; and test regression pass-rates for targeted extensions on QEMU/Spike.

**Main execution logic** — the execution engine under `lib/` (`runner.py` / `judge.py` / `sink.py`, the last holding `Sink` / `Ledger` / `Callback`), centered on a single `Job.run()` shared by all three entry points (CLI, worker, web), plus a resident `poller` (`pull_worker.py`) that polls for and claims jobs.

**Configuration drift** — the same job, built two days apart, can come out of a different `.config`: one toolchain bump, one defconfig change, and it quietly starts testing a different kernel than the one you think you're testing. Our approach is to diff two builds' `.config` files line by line and turn the difference into a number. `drift.py` compares a "newer" and an "older" build's config, prints `--- added` / `--- removed` / `--- changed`, and answers with its exit code: 0 means same, 1 means drifted. "Has the config drifted" goes from a feeling to a return value a script can branch on.

**Regression pass-rate for extensions** — the SOW only names "Vector/Hypervisor" as examples, but if you actually look at a RISC-V kernel config, **far more than those two extensions are on**.

A normal RISC-V kernel is based on `rv64ima` — I (integer), M (multiply/divide), A (atomics) — and on top of that adds:

- `f` / `d`: single- and double-precision floating point;
- `c`: compressed instructions;
- `v`: vector;
- plus a string of Z extensions: `Zba` / `Zbb` (bit manipulation), `Zicbom` / `Zicboz` / `Zicbop` (cache operations), `Zacas` (atomic compare-and-swap), `Svnapot` / `Svpbmt` (page-table related), `Supm` (user pointer masking), `Zicsr` / `Zifencei` (CSR and memory barriers)…

Most of these are on by default in defconfig. So the "targeted extensions" aren't two — they're a whole string of them.

We run the kernel's own two test collections, which cover the main items in that string:

- **riscv collection** — vector state and CSR checks (`vstate_prctl` / `vstate_ptrace`), `hwprobe` (reports the extensions the machine actually supports), `cbo` (cache operations, the `Zicbo*` ones), `pointer_masking` (pointer masking, the `Supm` one)…
- **kvm collection** — virtualization, driving a RISC-V virtual CPU with KVM.

Those with **dedicated self-tests** are vector (`vstate_*`), pointer masking (`pointer_masking`), cache (`cbo`), and virtualization (KVM). The rest — `Zba` / `Zbb` / `Zacas` / `Svnapot` / `Svpbmt` — are enabled and exercised by the kernel's own code paths, but have **no dedicated self-test**: they count as "reached", not "tested".

Virtualization has the same caveat: we only test **part** of it. QEMU's TCG is an emulator, not hardware; some KVM self-tests ask for capabilities that only exist when a real accelerator is underneath, and an emulator can't provide them. So we **explicitly exclude** what can't pass — three perf benchmarks, two stress tests, two that burn their budget or hang outright under TCG, plus `arch_timer` (an aarch64 test) and a `demand_paging_test` that also times out, nine in all — rather than pretend they're green or rediscover them red every night.

Also worth clearing up, because it's easy to confuse: this "regression pass-rate" is reported in **two places** and they look different — the CLI's `trend.py` reads job-node history from the API and lists it node by node; the web trend panel reads the local ledger and draws a per-test timeline. The verdict logic is the same (pass→fail records a regression, passing again clears it); only the data source and the way it's sliced differ.

### Phase 3 · Upstream integration

The SOW asks for a formal PR to the mainline KernelCI parent codebase, integrating the RISC-V test profile suite.

- Test profile suite → [kernelci/kernelci-pipeline#1599](https://github.com/kernelci/kernelci-pipeline/pull/1599); RISC-V kselftest backend → [kernelci/tuxlava#50](https://github.com/kernelci/tuxlava/pull/50). `kernelci-pipeline`.

### Phase 4 · Documentation & demo

The SOW asks for: a comprehensive test-execution runbook; a technical blog post + demo; LF badges.

- runbook → `RUNBOOK.md`
- technical blog + demo → this post, plus the recorded demo video.

## How the project is put together

**What we test with — we don't build our own; we take what's ready on the official site.** The kernel isn't something we compile ourselves. On the KernelCI site, every new commit gets built by someone else; artifacts live on `storage.kernelci.org`, metadata on `api.kernelci.org`. What we do is not build another build system, but **read these builds off the official API** — download, filter, run, record.

**The RISC-V build stream actually has three jobs** — `kbuild-gcc-14-riscv`, its SMP variant `kbuild-gcc-14-riscv-smp`, and a clang one, `kbuild-clang-21-riscv-smp` (clang-21, also the SMP variant). **This project currently only hooks up `kbuild-gcc-14-riscv`**; the other two — including the clang/LLVM one — aren't wired in yet. So everything we pull is a GCC-14 kernel.

The code is layered, three layers from the outside in:

- **upper layer**: entry points and viewers — twelve CLI scripts + the web GUI + the worker, all "selectors or viewers";
- **middle layer**: `lib/` — data structures + the execution engine, running the "pick a build → make it local → run a job → get a verdict" flow;
- **lower layer**: the outside world — KernelCI's HTTP API, tuxrun/QEMU, the local filesystem.

To make that "fetch → run → record" reusable, we wrapped the flow in a set of data structures rather than scattering it across scripts. Roughly one stream:

- **remote**: `Api` (ask the site) → `Kbuild` (one build) → `Kbuilds` (a batch of builds);
- **local**: `Build` / `Builds` (the "register" recording which builds exist) → `Job` (a job to run) → `Run` (one run) → `Outcome` (one verdict);
- **landing**: the verdict goes into `Ledger` (the ledger, kept permanently on disk), or back to the pipeline via `Callback`.

On top of that structure sit three entry points:

- **CLI** — one command, one thing: `table.py` manages the table (read / filter / run), `results.py` reads the ledger back, `drift.py` diffs configs, `trend.py` reports regressions. The exit code is the result.
- **Web (GUI)** — port `8079` by default: a build table, a "what hasn't run and why" todo, and an analysis page. Everything on the page is read-only except the buttons, and every button is one command in the engine.
- **worker (resident)** — `pull_worker.py` polls the production API for jobs, claims, runs, and reports back; it's the never-stopping entry point behind "runs every day".

Those three can be split further: the **CLI** and the **web** are the "normal", human-facing entry points, the ones the SOW actually names as deliverables; the **worker** is more like the hired help — it isn't an SOW deliverable, just the layer that keeps "runs every day" going without anyone watching. It talks to tasks dispatched from upstream, and right now it hasn't gotten the token yet, so it isn't actually connected.

The finer details are in `RUNBOOK.md`; not repeating them here.

**Demo** — a short demo walks through both of those entry points. The GUI side: pulling build resources, running, viewing results (logs at the GUI's `/runs/<id>/log` — this page didn't make it into the recording, so the address is spelled out here), viewing configuration drift (not necessarily of the run builds — the earlier builds aren't pulled), and regression analysis (unlike the CLI's, this analyzes the local ledger). The CLI side: a few `table.py` features like viewing `todo` and `index-pull` (this shows the post-pull result, so there are many entries — the previous ones get counted in, and these are only the cards that were pulled), plus a simple run, config drift, and regression analysis. One honest note: the demo has no audio or subtitles, the editing is rough, and it's just a simple walkthrough — the coverage isn't comprehensive.

<video controls src="de.mp4" style="max-width:100%;border-radius:8px"></video>

## What's still missing — back to the SOW, item by item

Bottom line first: this thing still isn't the "comprehensive" testing the SOW describes — it's a small slice made solid, with the gaps spelled out one by one.

1. **The compiler dimension is incomplete**: we only wired up `kbuild-gcc-14-riscv`. The clang-21 (`kbuild-clang-21-riscv-smp`) and the gcc `-smp` variant on the site aren't hooked up yet. The SOW says "across compilers and toolchains"; we're only halfway there.
2. **Architectural side channels and hardware-behavior variance across real boards are not done**: those two gaps we stayed on QEMU the whole time and never touched real hardware. (Though someone else seems to be picking that up.)
3. **The worker is submitted but not actually taking jobs yet**: the test profile is merged upstream (PR #1599), the pipeline is dispatching jobs for this machine and they're visible on the production API, but nothing claims them, so nodes end in timeout. It's stuck on aligning a callback token — the last link I plan to close next.
4. **The code itself**: the design still has room to improve — both the architecture and the code likely hold a good number of small issues, and it isn't exactly pleasant to use yet.

## Links

- SOW: [riscv-admin/dev-partners#49](https://github.com/riscv-admin/dev-partners/issues/49)
- test profile upstream: [kernelci/kernelci-pipeline#1599](https://github.com/kernelci/kernelci-pipeline/pull/1599)
- RISC-V kselftest backend in tuxlava: [kernelci/tuxlava#50](https://github.com/kernelci/tuxlava/pull/50)
- integration tracking issue: [kernelci/kernelci-project#585](https://github.com/kernelci/kernelci-project/issues/585)
- code repo: [Hao-Chen2337/kernelci-riscv](https://github.com/Hao-Chen2337/kernelci-riscv)
