// ═══════════════════════════════════════════════════
// 文章列表：每写一篇新文章，就在下面数组里加一项
// 然后新建对应的文章文件（参考 posts/template.html）
// ═══════════════════════════════════════════════════
const POSTS = [
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
