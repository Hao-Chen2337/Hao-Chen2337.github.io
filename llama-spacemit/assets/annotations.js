// annotations.js —— 自动生成自 DESIGN.md 第 7 节注释层表（2026-08-24 15:09）
// 重新生成: python3 extract_deck_code.py  （注释不改变源码原文）
window.ANNOTS = {
 "p1_bench_main": [
  {
   "lines": [
    4,
    5
   ],
   "note": "main() 只做一件事：把参数原样转给 llama_bench()。逻辑都不在这，在 sibling 的 llama-bench.cpp。",
   "kind": "key"
  }
 ],
 "p1_cli_main": [
  {
   "lines": [
    4,
    5
   ],
   "note": "与 llama-bench 一样是薄壳：转给 llama_cli()。",
   "kind": "key"
  }
 ],
 "p1_llamabench_entry": [
  {
   "lines": [
    2191,
    2192
   ],
   "note": "llama_bench 函数体起点：先设 C locale（数字格式），后面才是参数解析→建上下文→跑 benchmark。",
   "kind": "info"
  }
 ],
 "p1_decode_pp": [
  {
   "lines": [
    2131,
    2131
   ],
   "note": "预填充：一次把 n_tokens 个 prompt token 打包成 batch 解码。失败打印并返回 false（bench 会报错）。",
   "kind": "key"
  },
  {
   "lines": [
    2132,
    2132
   ],
   "note": "与 p1_decode_tg 不同，pp 不逐 token llama_synchronize——批量算完一起同步。",
   "kind": "info"
  }
 ],
 "p1_decode_tg": [
  {
   "lines": [
    2153,
    2153
   ],
   "note": "生成：一次只解码 1 个 token（token 由前一步采样得到）。",
   "kind": "key"
  },
  {
   "lines": [
    2155,
    2155
   ],
   "note": "每生成一个 token 就同步一次，等待整图执行完再采样下一个。",
   "kind": "info"
  }
 ],
 "p1_cli_context": [
  {
   "lines": [
    100,
    109
   ],
   "note": "有 --server-base 走外部 server；没有则进 else 分支 spawn 本地 llama-server 子进程（代码在本 ref 下方，可开弹窗看全文）。",
   "kind": "key"
  }
 ],
 "p1_cli_context_h": [
  {
   "lines": [
    41,
    44
   ],
   "note": "头文件注释原文：连接 --server-base 或 spawn 一个本地 llama-server 子进程。这是\"cli 不直接解码\"的官方说明。",
   "kind": "key"
  }
 ],
 "p1_llama_decode": [
  {
   "lines": [
    4129,
    4135
   ],
   "note": "llama_decode 是薄封装：真正干活的是 ctx->decode(batch)。ret!=0 且 !=1 才报错（1 表示正常结束条件）。",
   "kind": "key"
  }
 ],
 "p1_decode_inner": [
  {
   "lines": [
    1383,
    1385
   ],
   "note": "decode() 尾部：ubatch 输入已设好（1380 set_inputs），现在按批量与否调用 graph_compute。batched 决定用哪个线程池。",
   "kind": "key"
  }
 ],
 "p1_graph_compute": [
  {
   "lines": [
    2474,
    2483
   ],
   "note": "先按 batched 选线程数/线程池，再通过 set_threadpool 函数指针塞给 CPU 后端。",
   "kind": "info"
  },
  {
   "lines": [
    2490,
    2490
   ],
   "note": "黄金点第 4 跳：把整张图交给调度器异步计算。sched 内部会分片、分配、下发。",
   "kind": "key"
  }
 ],
 "p1_sched_async": [
  {
   "lines": [
    1950,
    1956
   ],
   "note": "is_reset/is_alloc 标志：图拓扑没变就不用重分片，直接复用上次的 split。",
   "kind": "key"
  },
  {
   "lines": [
    1957,
    1961
   ],
   "note": "没分配过就先 alloc_graph（内部 split_graph），最后统一 compute_splits 执行。",
   "kind": "key"
  }
 ],
 "p1_sched_alloc": [
  {
   "lines": [
    1928,
    1933
   ],
   "note": "cur_copy/next_copy 双缓冲轮换：一个拷贝在跑，另一个准备下一次输入，避免等待。",
   "kind": "warn"
  },
  {
   "lines": [
    1935,
    1937
   ],
   "note": "alloc_graph 内部：split_graph 切分图 → alloc_splits 分配内存。",
   "kind": "info"
  }
 ],
 "p1_compute_splits": [
  {
   "lines": [
    1597,
    1603
   ],
   "note": "逐 split 循环：每个 split 绑一个后端，先把输入拷过去，再下发计算。",
   "kind": "key"
  }
 ],
 "p1_split_compute": [
  {
   "lines": [
    1731,
    1731
   ],
   "note": "单个 split 的实际执行点：iface.graph_compute 就是后端\"算图\"入口（CPU 后端 → P1-7）。",
   "kind": "key"
  }
 ],
 "p1_graph_compute_async": [
  {
   "lines": [
    452,
    452
   ],
   "note": "全部逻辑就这一行：取实例体内 iface 表的 graph_compute 槽做函数指针跳转——不是直调，这就是「凭空出现」的 CPU 函数。",
   "kind": "key"
  }
 ],
 "p1_cpu_iface_table": [
  {
   "lines": [
    206,
    206
   ],
   "note": "报名处：编译期把 ggml_backend_cpu_graph_compute 的地址填进槽；async 系列全 NULL（CPU 无命令队列，全程同步）。",
   "kind": "key"
  }
 ],
 "p1_cpu_device_init": [
  {
   "lines": [
    405,
    405
   ],
   "note": "设备 init_backend 薄壳 → ggml_backend_cpu_init（:217），那里 new 实例并把整张表拷进实例 .iface。",
   "kind": "info"
  }
 ],
 "p1_cpu_graph_compute": [
  {
   "lines": [
    172,
    176
   ],
   "note": "ggml_graph_plan 先估算 work 缓冲与线程任务，不够就 new 一块更大的。",
   "kind": "info"
  },
  {
   "lines": [
    190,
    190
   ],
   "note": "交给 CPU 通用求值引擎 ggml_graph_compute。",
   "kind": "key"
  }
 ],
 "p1_ggml_graph_compute": [
  {
   "lines": [
    3356,
    3362
   ],
   "note": "入口断言：cplan 必须有线程数；work_data 若需要必须非空。",
   "kind": "info"
  }
 ],
 "p1_nodes_loop": [
  {
   "lines": [
    3094,
    3101
   ],
   "note": "按 nodes[] 数组序（= 拓扑序）逐个节点执行；NOP 跳过；没标 COMPUTE 的不算。",
   "kind": "key"
  },
  {
   "lines": [
    3108,
    3111
   ],
   "note": "先试 fused op 融合（如 flash_attn），融合不了才走 ggml_compute_forward 单算子。",
   "kind": "warn"
  }
 ],
 "p1_ime_trait": [
  {
   "lines": [
    188,
    214
   ],
   "note": "SpaceMiT 的钩子：MUL_MAT 且 src0 是支持的量化类型（Q2_K..Q5_K）→ 接管；否则返回 false 落回通用内核。",
   "kind": "key"
  },
  {
   "lines": [
    202,
    202
   ],
   "note": "MUL_MAT 走 forward_mul_mat；222 行 MUL_MAT_ID 走 forward_mul_mat_id。",
   "kind": "info"
  }
 ],
 "p1_forward_mul_mat": [
  {
   "lines": [
    239,
    247
   ],
   "note": "读出 src0（权重）/src1（激活）/dst，取批量与 K、N 维度。",
   "kind": "info"
  },
  {
   "lines": [
    267,
    273
   ],
   "note": "IME2 分支：Q6_K/Q8_0 权重把 gemm_kernel 绑定为 i8i8——A 激活量化为 int8、B 权重按 int8 布局。",
   "kind": "key"
  },
  {
   "lines": [
    280,
    282
   ],
   "note": "其余量化类型（Q4_0/Q4_K 等）走 i8i4_hp 等其它内核（行号在本 ref 下方，可弹窗看全文）。",
   "kind": "info"
  }
 ],
 "p1_gemm_i8i8_dispatch": [
  {
   "lines": [
    5653,
    5662
   ],
   "note": "count_m>=4（一次 ≥4 行）用 m4 内核，否则用 m1；返回值告诉调用者处理了几行。",
   "kind": "key"
  },
  {
   "lines": [
    5674,
    5674
   ],
   "note": "tg 单 token 时 count_m 通常为 1 → 正是热点 gemm_kernel_i8i8_m1（定义 4773）。",
   "kind": "key"
  }
 ],
 "p2_ggml_example": [
  {
   "lines": [
    35,
    38
   ],
   "note": "ggml_init 一次性把 16MB 内存池分配好（参数里 mem_buffer=NULL 表示内部分配）。",
   "kind": "key"
  },
  {
   "lines": [
    41,
    49
   ],
   "note": "建节点：x/a/b 是输入与参数；x2/f 由 ggml_mul/ggml_add 创建——此刻**没有计算**。",
   "kind": "key"
  },
  {
   "lines": [
    62,
    64
   ],
   "note": "ggml_new_graph + build_forward_expand：把 f 沿 src[] 展开成 DAG（登记进 nodes/leafs）。",
   "kind": "key"
  },
  {
   "lines": [
    69,
    72
   ],
   "note": "唯一的计算点：ggml_graph_compute_with_ctx。之前全是\"写菜谱\"，这里才是\"炒菜\"。",
   "kind": "key"
  }
 ],
 "p2_tensor_struct": [
  {
   "lines": [
    676,
    680
   ],
   "note": "ne=每维元素数；nb=每维字节步长，nb[0]=类型字节数，nb[1] 按块折算（见 p2_nb_strides）。",
   "kind": "key"
  },
  {
   "lines": [
    682,
    687
   ],
   "note": "op 与 op_params 描述\"这个节点做什么运算\"；flags 标记 INPUT/OUTPUT/PARAM。",
   "kind": "info"
  },
  {
   "lines": [
    692,
    692
   ],
   "note": "src[] 是指向操作数的指针数组——图结构就是靠它串起来的（邻接表）。",
   "kind": "key"
  },
  {
   "lines": [
    695,
    699
   ],
   "note": "view_src/view_offs：视图零拷贝；data 是数据指针（池内或后端 buffer）。",
   "kind": "info"
  }
 ],
 "p2_context_struct": [
  {
   "lines": [
    978,
    983
   ],
   "note": "池的\"账本\"：mem_buffer 起点、mem_size 上限、objects_begin/end 串起所有已分配对象。",
   "kind": "key"
  }
 ],
 "p2_object_header": [
  {
   "lines": [
    958,
    962
   ],
   "note": "每个对象 24 字节头：offs（池内偏移）/size/next/type。",
   "kind": "info"
  }
 ],
 "p2_cgraph": [
  {
   "lines": [
    331,
    336
   ],
   "note": "size 容量（默认 2048）/n_nodes 待求值节点数/n_leafs 常量数。",
   "kind": "key"
  },
  {
   "lines": [
    339,
    344
   ],
   "note": "nodes=数据会变的算子节点；leafs=常量/输入/权重指针；use_counts 记每个 tensor 被谁用着。",
   "kind": "key"
  }
 ],
 "p2_visit_parents": [
  {
   "lines": [
    7121,
    7132
   ],
   "note": "visited_hash_set 保证同一节点只登记一次（DAG 共享子图只算一次）；use_counts[src]++。",
   "kind": "key"
  },
  {
   "lines": [
    7148,
    7167
   ],
   "note": "叶子（op==NONE 且非 PARAM）进 leafs，否则进 nodes——这就是 nodes/leafs 的分界。",
   "kind": "key"
  }
 ],
 "p2_build_expand": [
  {
   "lines": [
    7172,
    7190
   ],
   "note": "建图三连：ggml_build_forward_expand → ggml_build_forward_impl → ggml_visit_parents_graph。",
   "kind": "key"
  }
 ],
 "p2_arena_alloc": [
  {
   "lines": [
    1631,
    1635
   ],
   "note": "ggml_init 一次性对齐分配整块 arena；tensor/对象全在这块内存里 bump 分配。",
   "kind": "key"
  }
 ],
 "p2_nb_strides": [
  {
   "lines": [
    1831,
    1836
   ],
   "note": "nb[0]=类型字节；nb[1]=nb[0]*(ne[0]/块大小)；nb[i]=nb[i-1]*ne[i-1]——量化块按行打包。",
   "kind": "key"
  }
 ],
 "p2_new_tensor": [
  {
   "lines": [
    1804,
    1816
   ],
   "note": "tensor 元数据与数据同池：data = result+1，紧跟结构体后面。",
   "kind": "key"
  }
 ],
 "p2_quant_q4_0": [
  {
   "lines": [
    195,
    198
   ],
   "note": "Q4_0：1 个 half 缩放 + 32 元素 4bit 打包 = 18 字节；static_assert 防布局漂移。",
   "kind": "key"
  }
 ],
 "p2_quant_q8_0": [
  {
   "lines": [
    252,
    255
   ],
   "note": "Q8_0：half + 32 个 int8 = 34 字节——常被选为 vec_dot_type（点积工作格式）。",
   "kind": "key"
  }
 ],
 "p2_quant_q4_k": [
  {
   "lines": [
    325,
    337
   ],
   "note": "Q4_K 超级块：8 个 32 元素子块，dm(2half)+scales[12]+qs[128] = 144 字节。",
   "kind": "info"
  }
 ],
 "p2_quant_q6_k": [
  {
   "lines": [
    358,
    367
   ],
   "note": "Q6_K：16 个 16 元素子块，ql+qh+scales+d = 210 字节——K3 i8i8 内核的目标类型之一。",
   "kind": "key"
  }
 ],
 "p2_type_enum": [
  {
   "lines": [
    390,
    412
   ],
   "note": "编号即 GGUF 里的类型码；中间留空是历史删除的类型（Q4_2/Q4_3 等），不能重排。",
   "kind": "warn"
  }
 ],
 "p2_dispatch_table": [
  {
   "lines": [
    215,
    242
   ],
   "note": "每行 = 一个量化类型的内核三件套：from_float（转换）/vec_dot（点积）/vec_dot_type（工作格式）。",
   "kind": "key"
  }
 ],
 "p2_forward_switch": [
  {
   "lines": [
    1711,
    1723
   ],
   "note": "第一层分派：按 op switch，MUL_MAT 等各自调 forward 函数。",
   "kind": "key"
  }
 ],
 "p2_vec_dot_type": [
  {
   "lines": [
    1272,
    1272
   ],
   "note": "第二层分派：按 src0 类型查表得到 vec_dot_type——Q4_0 权重会把 F32 激活先转 Q8_0 再点积。",
   "kind": "key"
  }
 ],
 "p2_build_mul_mat": [
  {
   "lines": [
    1491,
    1491
   ],
   "note": "线性层/注意力投影：cur = w @ cur，w 是权重（量化类型在此）。",
   "kind": "key"
  }
 ],
 "p2_build_mul_mat_id": [
  {
   "lines": [
    1523,
    1523
   ],
   "note": "MoE：按 ids 选专家权重 w 做 mul_mat_id——对应 P3-8 的按 ids 拷贝。",
   "kind": "key"
  }
 ],
 "p2_build_flash_attn": [
  {
   "lines": [
    2540,
    2542
   ],
   "note": "融合注意力：q/k/v 一次调用，K3 走 rvv 的 tiled f16 内核（Part 5 热点之一）。",
   "kind": "key"
  }
 ],
 "p2_build_expand_llama": [
  {
   "lines": [
    2630,
    2630
   ],
   "note": "每层把 cur 登记进图——一整个 transformer 就是几百行这样的 builder 调用。",
   "kind": "key"
  }
 ],
 "p3_buft_iface": [
  {
   "lines": [
    17,
    30
   ],
   "note": "buffer_type 接口：alloc_buffer 真正分配；get_alignment/get_alloc_size 可缺省。",
   "kind": "key"
  }
 ],
 "p3_buft_struct": [
  {
   "lines": [
    31,
    35
   ],
   "note": "buffer_type 结构：iface 表 + 所属 device + 私有 context。",
   "kind": "info"
  }
 ],
 "p3_buffer_i": [
  {
   "lines": [
    41,
    60
   ],
   "note": "buffer 接口：get_base 拿基址；set/get/memset/cpy 数据搬运；clear 清空。",
   "kind": "key"
  }
 ],
 "p3_buffer_struct": [
  {
   "lines": [
    64,
    68
   ],
   "note": "buffer 结构：iface + buft（我是哪种内存）+ size + usage。",
   "kind": "info"
  }
 ],
 "p3_backend_i": [
  {
   "lines": [
    132,
    132
   ],
   "note": "核心字段 graph_compute：后端\"算这张图\"的入口——P1-7 的 CPU 实现就在这。",
   "kind": "key"
  },
  {
   "lines": [
    108,
    130
   ],
   "note": "配套字段：set/get_tensor_async（异步搬运）、synchronize、event_record/wait（跨流同步）。",
   "kind": "info"
  }
 ],
 "p3_reg_register": [
  {
   "lines": [
    160,
    172
   ],
   "note": "registry 构造时按编译开关逐个注册后端；GGML_USE_CPU 下注册 CPU。",
   "kind": "key"
  }
 ],
 "p3_reg_api": [
  {
   "lines": [
    298,
    300
   ],
   "note": "ggml_backend_register 内部入注册表——第三方后端也走这里。",
   "kind": "info"
  }
 ],
 "p3_cpu_reg": [
  {
   "lines": [
    699,
    711
   ],
   "note": "CPU reg：一个静态 ggml_backend_reg，含 iface（get_device 等）+ DL 导出宏。",
   "kind": "key"
  }
 ],
 "p3_cpu_init": [
  {
   "lines": [
    217,
    233
   ],
   "note": "CPU 实例：new 出 context（线程数/工作缓冲），new 出 backend 填 guid/iface/device。",
   "kind": "key"
  }
 ],
 "p3_cpu_iface": [
  {
   "lines": [
    199,
    210
   ],
   "note": "CPU iface 表：graph_compute 绑定到 ggml_backend_cpu_graph_compute（P1-7）。",
   "kind": "key"
  }
 ],
 "p3_cpu_register_buft": [
  {
   "lines": [
    52,
    55
   ],
   "note": "spacemit 构建：把 spacemit buffer_type 追加进 CPU device 的 bufts——权重可放进 HPAGE/TCM buffer。",
   "kind": "key"
  }
 ],
 "p3_sched_new": [
  {
   "lines": [
    1787,
    1789
   ],
   "note": "硬性约定：后端数组最后一位必须是 CPU——任何算子 CPU 都能兜底。",
   "kind": "warn"
  }
 ],
 "p3_sched_reserve": [
  {
   "lines": [
    1908,
    1916
   ],
   "note": "reserve：拿\"最坏图\"测一遍分片与大小，gallocr 一次性定缓冲；之后每 token 复用。",
   "kind": "key"
  }
 ],
 "p3_split_graph": [
  {
   "lines": [
    1074,
    1081
   ],
   "note": "pass1：叶子（权重）按所在 buffer 定后端；不覆盖用户显式指定。",
   "kind": "key"
  },
  {
   "lines": [
    1084,
    1094
   ],
   "note": "节点同样按 buffer 定后端——\"权重在哪个后端，算它的节点就归谁\"。",
   "kind": "key"
  }
 ],
 "p3_split_pass2": [
  {
   "lines": [
    1113,
    1121
   ],
   "note": "pass2 扩散：相邻节点尽量同后端，减少跨后端搬中间结果；CPU 是最低优先级不会被主动选中。",
   "kind": "key"
  }
 ],
 "p3_split_pass5": [
  {
   "lines": [
    1286,
    1293
   ],
   "note": "pass5：把连续同后端的节点切成一个 split，并找出需要跨后端拷贝的输入。",
   "kind": "key"
  }
 ],
 "p3_input_copy": [
  {
   "lines": [
    1611,
    1624
   ],
   "note": "搬输入：INPUT 标志的立即拷（防用户覆盖）；否则等该后端用完旧输入再覆盖（event 同步）。",
   "kind": "key"
  }
 ],
 "p3_moe_ids": [
  {
   "lines": [
    1658,
    1666
   ],
   "note": "MoE 搬运：先读 ids 张量，去重后按位图只拷贝本次用到的专家权重。",
   "kind": "key"
  }
 ],
 "p3_alloc_example": [
  {
   "lines": [
    27,
    36
   ],
   "note": "官方用法：reserve(最坏图) 一次 → alloc_graph(实际图) 复用 → graph_compute。",
   "kind": "key"
  }
 ],
 "p3_gallocr_alloc": [
  {
   "lines": [
    722,
    731
   ],
   "note": "先数每个 tensor 有几个孩子/几个 view——决定它什么时候可以释放。",
   "kind": "key"
  }
 ],
 "p3_gallocr_alloc_loop": [
  {
   "lines": [
    762,
    771
   ],
   "note": "主循环：先分配父节点，再分配本节点（拓扑序保证父先算）。",
   "kind": "key"
  }
 ],
 "p3_gallocr_free": [
  {
   "lines": [
    798,
    812
   ],
   "note": "节点算完：n_children--；归零且无 view 引用就归还内存；view 源联动释放。",
   "kind": "key"
  }
 ],
 "p3_gallocr_bestfit": [
  {
   "lines": [
    206,
    225
   ],
   "note": "空闲块表 best-fit：找\"最小但装得下\"的块，装完把块缩小，空块移除。",
   "kind": "key"
  }
 ],
 "p3_gallocr_reserve": [
  {
   "lines": [
    965,
    967
   ],
   "note": "reserve 公共 API：按图预分配缓冲，返回是否够用。",
   "kind": "info"
  }
 ],
 "p3_gallocr_alloc_api": [
  {
   "lines": [
    1051,
    1055
   ],
   "note": "alloc_graph：图大小变了会自动 reserve 重分配（sched 里由 is_alloc 控制）。",
   "kind": "warn"
  }
 ],
 "p3_ime_buft": [
  {
   "lines": [
    1649,
    1662
   ],
   "note": "spacemit buffer_type：get_alloc_size 用 nbytes（含 repack 后的重排大小）。",
   "kind": "key"
  }
 ],
 "p3_ime_allocbuf": [
  {
   "lines": [
    1484,
    1488
   ],
   "note": "权重 buffer 的真实分配：spine_mem_pool_alloc(size, 64)，对齐 64——HPAGE/TCM 之一。",
   "kind": "key"
  }
 ],
 "p3_ime_get_traits": [
  {
   "lines": [
    1615,
    1624
   ],
   "note": "每块 spacemit buffer 内的 tensor 都能查出自己的实现（ime/rvv）——派发钩子。",
   "kind": "key"
  }
 ],
 "p3_ime_env_backend": [
  {
   "lines": [
    102,
    117
   ],
   "note": "内存后端字符串：HPAGE=透明大页、HPAGE1GB=1G 巨页；默认是 HPAGE。",
   "kind": "key"
  }
 ],
 "p3_ime_env_print": [
  {
   "lines": [
    262,
    264
   ],
   "note": "use_ime2 由核簇判定（A100 架构 → IME2）；mem_backend 从 SPACEMIT_MEM_BACKEND 读。",
   "kind": "key"
  },
  {
   "lines": [
    267,
    277
   ],
   "note": "TCM 初始化：可用则记录 blk_size/blk_num；SPACEMIT_DISABLE_TCM 可关（Part 6 的临时绕过）。",
   "kind": "warn"
  },
  {
   "lines": [
    288,
    292
   ],
   "note": "启动日志（LLAMA_DEBUG 可见）：num_cores=16 / num_perfer_cores=8 / use_ime2=1 / mem_backend=HPAGE。",
   "kind": "info"
  }
 ],
 "p6_ime_tcm_abort": [
  {
   "lines": [
    1704,
    1708
   ],
   "note": "Bug A：线程号超过首选核数 8 时当数组下标用 → 越界 GGML_ABORT（-t 16 必触发）。",
   "kind": "warn"
  },
  {
   "lines": [
    1724,
    1729
   ],
   "note": "Bug B：TCM 块被死线程占住 → wait 1 秒超时 GGML_ABORT → 又泄漏 → 级联自锁。",
   "kind": "warn"
  }
 ]
};
