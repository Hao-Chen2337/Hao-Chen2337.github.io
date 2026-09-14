// ═══════════════════════════════════════════════════
// 文章列表：每写一篇新文章，就在下面数组里加一项
// 然后新建对应的文章文件（参考 posts/template.html）
// ═══════════════════════════════════════════════════
const POSTS = [
  {
    title: "从零开始参与开源",
    date: "2026-09-14",           // 格式：YYYY-MM-DD
    tags: ["开源", "甲辰计划", "RISC-V", "LLVM"],
    url: "posts/from-zero-to-open-source.html",
    summary: "甲辰计划线上实习记录：从读 K3 手册、部署 llama.cpp，到在真机定位 Q5_0 缺失分支、给 clang-tidy 修 bug。"
  },
  {
    title: "llama.cpp × SpaceMiT 调研",
    date: "2026-09-05",           // 格式：YYYY-MM-DD
    tags: ["RISC-V", "大模型", "调研"],
    url: "llama-spacemit/",       // 文章文件路径
    summary: "在 RISC-V（SpaceMiT）芯片上跑 llama.cpp 的调研笔记，含三部分 slide deck。"
  },
  // 以后加新文章，就在上面再添一项，格式照抄：
  // { title: "标题", date: "2026-09-05", tags: ["标签"], url: "posts/xxx.html", summary: "摘要" },
];
