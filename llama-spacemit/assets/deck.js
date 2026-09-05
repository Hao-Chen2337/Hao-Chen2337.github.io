/* ============================================================
   deck.js —— v3 共享运行时（ES5 风格，无 import/require）
   职责：轻量高亮 / codeview 引用渲染 / 注释层 / 文件弹窗 /
        mermaid 渲染 / 面包屑 / 页脚导航 / initDeck
   数据源：window.DECK_CODE（deck_code.js）与 window.ANNOTS（assets/annotations.js）
   ============================================================ */
(function () {
  'use strict';
  if (window.DECKINIT) return;          // 防重复初始化
  window.DECKINIT = true;

  window.ANNOTS = window.ANNOTS || {};
  var DC = window.DECK_CODE || { refs: {}, files: {} };
  var REPO = '/home/bianbu/Project/llama.cpp/';   // 复制路径用

  /* ================= 轻量代码高亮（v2 移植，行为一致） ================= */
  function escH(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function hlLine(t) {
    var i = t.indexOf('//'), h = t.indexOf('#'), ci = -1;
    if (i >= 0 && (h < 0 || i < h)) ci = i; else if (h >= 0) ci = h;
    var body = ci >= 0 ? t.slice(0, ci) : t, com = ci >= 0 ? t.slice(ci) : '';
    var out = '', re = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:return|int|void|struct|if|for|while|static|const|enum|bool|size_t|float|char|double|unsigned|long|inline|auto|break|continue|switch|case|default|else|true|false|NULL|nullptr)\b|\b\d+(?:\.\d+)?\b|([A-Za-z_]\w*)(?=\())/g;
    var m, last = 0;
    while ((m = re.exec(body))) {
      out += escH(body.slice(last, m.index));
      var tok = m[0];
      if (tok[0] === '"' || tok[0] === "'") out += '<span class="s">' + escH(tok) + '</span>';
      else if (/^\d/.test(tok)) out += '<span class="n">' + tok + '</span>';
      else if (m[2]) out += '<span class="f">' + escH(tok) + '</span>';
      else out += '<span class="k">' + escH(tok) + '</span>';
      last = m.index + tok.length;
    }
    out += escH(body.slice(last));
    if (com) out += '<span class="c">' + escH(com) + '</span>';
    return out;
  }
  function highlightCmd() {
    var blocks = document.querySelectorAll('.cmd');
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (b.querySelector('span')) continue;         // 已手工着色, 跳过
      var code = b.querySelector('code') || b;
      var lines = code.textContent.split('\n');
      for (var j = 0; j < lines.length; j++) lines[j] = hlLine(lines[j]);
      code.innerHTML = lines.join('\n');
    }
  }

  /* ================= 注释层工具 ================= */
  function annMap(id) {
    // line -> 最强 kind（key > warn > info），anns 列表供侧栏
    var list = window.ANNOTS[id] || [];
    var byLine = {}, pri = { key: 3, warn: 2, info: 1 };
    for (var i = 0; i < list.length; i++) {
      var a = list[i], lo = a.lines[0], hi = a.lines[1] || a.lines[0];
      for (var ln = lo; ln <= hi; ln++) {
        var cur = byLine[ln];
        if (!cur || pri[a.kind] > pri[cur]) byLine[ln] = a.kind;
      }
    }
    return { list: list, byLine: byLine };
  }
  function annPanelHtml(id, list) {
    if (!list.length) return '';
    var html = '<div class="ann-panel" id="ann-' + id + '">';
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      var lab = a.lines[0] === a.lines[1] ? 'L' + a.lines[0] : 'L' + a.lines[0] + '-' + a.lines[1];
      html += '<div class="ann-note"><span class="al">' + lab + '</span>'
        + '<span class="at">' + escH(a.note) + '</span>'
        + '<span class="ak ' + (a.kind || 'info') + '">' + (a.kind || 'info') + '</span></div>';
    }
    return html + '</div>';
  }

  /* ================= codeview 引用渲染 ================= */
  function renderCodeViews(root) {
    var views = (root || document).querySelectorAll('.codeview[data-ref]');
    for (var i = 0; i < views.length; i++) renderCodeView(views[i]);
  }
  function renderCodeView(v) {
    if (v.getAttribute('data-rendered')) return;
    v.setAttribute('data-rendered', '1');
    var id = v.getAttribute('data-ref');
    var ref = DC.refs[id];
    if (!ref) {
      v.innerHTML = '<span class="src-missing">⚠ 引用缺失: ' + escH(id) + '（deck_code.js 中不存在，需重新生成）</span>';
      return;
    }
    var am = annMap(id);
    var html = '<div class="cv-head">'
      + '<span class="src" data-open="' + escH(id) + '">' + escH(ref.file) + ':' + ref.first + '-' + ref.last + '</span>'
      + '<span class="cv-title">' + escH(shortPath(ref.file)) + ' · ' + ref.lineCount + ' 行</span>'
      + (am.list.length ? '<button class="ann-toggle" data-ann="' + escH(id) + '">注释 ' + am.list.length + ' 条</button>' : '')
      + '</div><div class="cv-body">';
    var prev = ref.first - 1;
    for (var k = 0; k < ref.lines.length; k++) {
      var ln = ref.lines[k][0], text = ref.lines[k][1];
      if (ln - prev > 1) html += elisionRow(ln - prev - 1);
      var kind = am.byLine[ln];
      html += '<div class="codel' + (kind ? ' ann-' + kind : '') + '"><span class="ln">' + ln + '</span><span class="lc">' + hlLine(text) + '</span></div>';
      prev = ln;
    }
    html += '</div>' + annPanelHtml(id, am.list);
    v.innerHTML = html;
    var tog = v.querySelector('.ann-toggle');
    if (tog) tog.addEventListener('click', function () {
      var p = document.getElementById('ann-' + id);
      if (p) p.classList.toggle('hide');
    });
  }
  function elisionRow(n) {
    return '<div class="codel elrow"><span class="ln">⋮</span><span class="lc">// ……省略 ' + n + ' 行……</span></div>';
  }
  function shortPath(p) {
    return p.length > 46 ? '…' + p.slice(-45) : p;
  }

  /* ================= 文件查看弹窗 ================= */
  var modal = null, modalKey = null;
  function openSrcModal(id) {
    var ref = DC.refs[id];
    if (!ref) return;
    var f = DC.files[ref.file] || { lines: ref.lines, windows: [[ref.first, ref.last]], lineCount: ref.lineCount };
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'srcmodal-mask';
      modal.innerHTML = '<div class="srcmodal-box">'
        + '<div class="srcmodal-head"><span class="sp"></span><div class="srcmodal-views"></div><span class="srcmodal-tools">'
        + '<button class="smt-new">新标签打开</button>'
        + '<button class="smt-cite">复制引用</button>'
        + '<button class="smt-copy">复制路径</button>'
        + '<button class="smt-close">关闭 ✕</button>'
        + '</span></div>'
        + '<div class="srcmodal-body"></div>'
        + '<div class="srcmodal-foot"></div></div>';
      document.body.appendChild(modal);
      modal.addEventListener('click', function (e) { if (e.target === modal) closeSrcModal(); });
    }
    modal.querySelector('.sp').textContent = ref.file + '  [' + ref.first + '-' + ref.last + ']';
    var v = modal.querySelector('.srcmodal-views');
    v.innerHTML = '<button class="sv" data-sv="ref">引用区间</button>'
      + '<button class="sv" data-sv="win">合并窗口</button>'
      + '<button class="sv" data-sv="full">完整文件</button>';
    modal.setAttribute('data-view', 'win');
    modal._page = 0;
    var FULL_PAGE = 1200;   // 完整文件按页渲染（大文件分页，不一次性倾倒 DOM）
    var renderBody = function () {
      var view = modal.getAttribute('data-view');
      var el = modal.querySelector('.srcmodal-body');
      var foot = modal.querySelector('.srcmodal-foot');
      if (view === 'ref') {
        el.innerHTML = rowsHtml(f.lines, ref.first, ref.last, ref.first, ref.last, true);
        foot.textContent =
          '引用区间 ' + ref.first + '-' + ref.last + ' · ' + (ref.last - ref.first + 1) + ' 行（精确原文，无省略）';
      } else if (view === 'full') {
        var pages = Math.max(1, Math.ceil(f.lineCount / FULL_PAGE));
        if (modal._page >= pages) modal._page = pages - 1;
        if (modal._page < 0) modal._page = 0;
        var lo = modal._page * FULL_PAGE + 1;
        var hi = Math.min(f.lineCount, (modal._page + 1) * FULL_PAGE);
        el.innerHTML = rowsHtml(f.lines, ref.first, ref.last, lo, hi, false);
        foot.innerHTML = '<span class="pg-info">完整文件 · ' + f.lineCount + ' 行 · 显示 ' + lo + '-' + hi + ' 行</span>'
          + '<span class="pg-spacer"></span>'
          + '<button class="pg" data-pg="prev"' + (modal._page <= 0 ? ' disabled' : '') + '>‹ 上一页</button>'
          + '<span class="pg-info">' + (modal._page + 1) + ' / ' + pages + ' 页</span>'
          + '<button class="pg" data-pg="next"' + (modal._page >= pages - 1 ? ' disabled' : '') + '>下一页 ›</button>'
          + '<button class="pg" data-pg="jump">跳到引用 L' + ref.first + '-' + ref.last + '</button>';
      } else {
        el.innerHTML = modalRows(f, ref);
        foot.textContent =
          (f.windows.length === 1 && f.windows[0][0] === 1 && f.windows[0][1] === f.lineCount)
            ? '完整文件 · ' + f.lineCount + ' 行'
            : '窗口视图（合并各引用 ±30 行，缺口已省略）· 文件共 ' + f.lineCount + ' 行';
      }
      var cur = el.querySelector('.srow.cur');
      if (cur) cur.scrollIntoView({ block: 'center' });
    };
    modal.querySelector('.srcmodal-foot').onclick = function (e) {
      var b = e.target && e.target.closest ? e.target.closest('button[data-pg]') : null;
      if (!b || b.disabled) return;
      var act = b.getAttribute('data-pg');
      if (act === 'prev') { modal._page--; renderBody(); }
      else if (act === 'next') { modal._page++; renderBody(); }
      else if (act === 'jump') { modal._page = Math.floor((ref.first - 1) / FULL_PAGE); renderBody(); }
    };
    Array.prototype.forEach.call(v.querySelectorAll('.sv'), function (btn) {
      btn.onclick = function () {
        if (btn.classList.contains('disabled')) return;
        modal.setAttribute('data-view', btn.getAttribute('data-sv'));
        if (btn.getAttribute('data-sv') === 'full') {
          modal._page = Math.floor((ref.first - 1) / FULL_PAGE);   // 打开时直接落在引用附近
        }
        Array.prototype.forEach.call(v.querySelectorAll('.sv'), function (b) { b.classList.toggle('on', b === btn); });
        renderBody();
      };
    });
    v.querySelector('[data-sv="win"]').classList.add('on');
    modal.querySelector('.smt-new').onclick = function () { openInNewTab(ref, f); };
    modal.querySelector('.smt-cite').onclick = function () { copyCitation(ref.file, ref.first, ref.last, this); };
    modal.querySelector('.smt-copy').onclick = function () { copyPath(ref.file, this); };
    modal.querySelector('.smt-close').onclick = closeSrcModal;
    modal.style.display = 'flex';
    if (!modalKey) {
      modalKey = function (e) {
        if (e.key === 'Escape') { closeSrcModal(); e.stopPropagation(); return; }
        e.stopPropagation();      // 弹窗打开时屏蔽 reveal 按键导航
      };
      document.addEventListener('keydown', modalKey, true);
    }
    renderBody();
  }
  function rowsHtml(lines, refFirst, refLast, lo, hi, allCur) {
    var html = '', prev = lo - 1;
    for (var k = 0; k < lines.length; k++) {
      var ln = lines[k][0];
      if (ln < lo) continue;
      if (ln > hi) break;
      if (ln - prev > 1) html += modalElide(ln - prev - 1);
      var cur = allCur || (refFirst != null && ln >= refFirst && ln <= refLast);
      html += '<div class="srow' + (cur ? ' cur' : '') + '"><span class="sln">' + ln + '</span><span class="slc">' + escH(lines[k][1]) + '</span></div>';
      prev = ln;
    }
    return html;
  }
  function modalRows(f, ref) {
    var html = '', prev = 0;
    for (var w = 0; w < f.windows.length; w++) {
      var a = f.windows[w][0], b = f.windows[w][1];
      if (a - prev > 1) html += modalElide(a - prev - 1);
      html += rowsHtml(f.lines, ref.first, ref.last, a, b, false);
      prev = b;
    }
    return html;
  }
  function modalElide(n) {
    return '<div class="srow elrow"><span class="sln">⋮</span><span class="slc">…… 省略 ' + n + ' 行 ……</span></div>';
  }
  function closeSrcModal() {
    if (modal) modal.style.display = 'none';
    if (modalKey) { document.removeEventListener('keydown', modalKey, true); modalKey = null; }
  }
  function openInNewTab(ref, f) {
    // 精确引用页：只看本次引用的区间（±3 行上下文），蓝行 = 引用行；不再整窗口倾倒。
    var ctx = 3;
    var lo = Math.max(1, ref.first - ctx), hi = Math.min(f.lineCount, ref.last + ctx);
    var rows = '', prev = lo - 1;
    for (var k = 0; k < f.lines.length; k++) {
      var ln = f.lines[k][0];
      if (ln < lo) continue;
      if (ln > hi) break;
      if (ln - prev > 1) rows += '<div class="elrow">⋯ 省略 ' + (ln - prev - 1) + ' 行</div>';
      var cur = ln >= ref.first && ln <= ref.last;
      rows += '<div class="l' + (cur ? ' cur' : '') + '"><span class="ln">' + pad(ln, f.lineCount) + '</span>'
        + '<span class="tx">' + escH(f.lines[k][1]) + '</span></div>';
      prev = ln;
    }
    var title = ref.file + ':' + ref.first + '-' + ref.last;
    var doc = '<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><title>' + escH(title) + '</title>'
      + '<style>body{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:13px;line-height:1.5;'
      + 'margin:0;background:#fbfdff;color:#0f172a}'
      + '.h{position:sticky;top:0;background:#e0f4fb;border-bottom:1px solid #9adcec;padding:10px 16px;color:#0e7490}'
      + '.h b{display:block;font-size:14px}.h .sub{font-size:11px;color:#0891b2;margin-top:2px}'
      + '.l{display:grid;grid-template-columns:3.2em 1fr;white-space:pre}.l .ln{color:#94a3b8;text-align:right;padding-right:.7em;user-select:none;border-right:1px solid #dbeafe;background:#f8fbff}'
      + '.l .tx{padding-left:.7em}.l.cur{background:#dbeafe}.l.cur .ln{background:#cfe8fb;color:#0369a1;font-weight:700}'
      + '.elrow{color:#94a3b8;font-style:italic;padding:.2em 1em;background:#f8fafc}'
      + '</style></head><body>'
      + '<div class="h"><b>' + escH(ref.file) + '  [' + ref.first + '-' + ref.last + ']</b>'
      + '<div class="sub">引用区间 ' + (ref.last - ref.first + 1) + ' 行 · ±3 行上下文 · 来源 /home/bianbu/Project/llama.cpp · 蓝行 = 本次引用原文</div></div>'
      + rows + '</body></html>';
    var url = URL.createObjectURL(new Blob([doc], { type: 'text/html' }));
    var wnd = window.open(url, '_blank');
    if (!wnd) alert('浏览器拦截了新窗口，请允许弹窗后重试');
    setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
  }
  function copyCitation(path, first, last, btn) {
    copyPath2(path + ':' + first + '-' + last, btn);
  }
  function copyPath2(text, btn) {
    var done = function () {
      var old = btn.textContent;
      btn.textContent = '已复制 ✓';
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }
  function pad(n, total) {
    var w = String(total).length, s = String(n);
    while (s.length < w) s = ' ' + s;
    return s;
  }
  function copyPath(path, btn) {
    var full = REPO + path;
    var done = function () {
      var old = btn.textContent;
      btn.textContent = '已复制 ✓';
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(full).then(done, function () { fallbackCopy(full); done(); });
    } else { fallbackCopy(full); done(); }
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ================= mermaid ================= */
  var mermaidReady = false, mermaidMissing = false;
  function initMermaid() {
    if (mermaidReady || mermaidMissing) return;
    if (typeof mermaid === 'undefined') { mermaidMissing = true; return; }
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      useMaxWidth: false,       // 否则 mermaid 会给 svg 写内联 max-width，窄图被自然宽封顶
      theme: 'base',
      themeVariables: {
        primaryColor: '#f0f9ff', primaryBorderColor: '#06b6d4', primaryTextColor: '#0f172a',
        lineColor: '#0e7490', secondaryColor: '#f5f3ff', tertiaryColor: '#fdf2f8',
        fontFamily: 'inherit', fontSize: '16px'
      }
    });
    mermaidReady = true;
  }
  function renderMermaidIn(slide) {
    if (!slide) return;
    initMermaid();
    if (!mermaidReady) return;
    var els = slide.querySelectorAll('.mermaid:not([data-mr])');
    for (var i = 0; i < els.length; i++) {
      (function (el) {
        var code = el.textContent;          // HTML 实体已解码（< 需写 &lt;）
        if (!code.trim()) { el.setAttribute('data-mr', '1'); return; }
        window.__mmSeq = (window.__mmSeq || 0) + 1;
        var uid = 'mm' + window.__mmSeq;
        try {
          mermaid.render(uid, code).then(function (r) {
            el.innerHTML = r.svg;
            el.setAttribute('data-mr', '1');
            el.addEventListener('click', function () { openZoom(el); });
          }).catch(function (err) {
            el.innerHTML = '<span class="src-missing">⚠ mermaid 渲染失败: ' + escH(String(err && err.message || err).slice(0, 120)) + '</span>';
            el.setAttribute('data-mr', '1');
            console.warn('mermaid render failed:', err);
          });
        } catch (e) {
          el.setAttribute('data-mr', '1');
          console.warn('mermaid exception:', e);
        }
      })(els[i]);
    }
  }

  /* ================= 全屏放大（mermaid svg + codeview/panel/demo-stage） ================= */
  var mmMask = null;
  function ensureZoomMask() {
    if (mmMask) return;
    mmMask = document.createElement('div');
    mmMask.className = 'mm-mask';
    mmMask.innerHTML = '<div class="mm-bar">'
      + '<button data-z="0.6">60%</button><button data-z="1">100%</button>'
      + '<button data-z="1.5">150%</button><button data-z="2.5">250%</button>'
      + '<button data-close="1">关闭 ✕</button>'
      + '<span class="mm-tip">滚轮 / 拖拽滚动 · 点击空白处或 ✕ 关闭 · ESC 退出</span></div>'
      + '<div class="mm-wrap"></div>';
    document.body.appendChild(mmMask);
    mmMask.addEventListener('click', function (e) {
      if (e.target === mmMask) { closeZoom(); return; }
      var b = e.target && e.target.closest ? e.target.closest('button') : null;
      if (!b) return;
      if (b.getAttribute('data-close')) { closeZoom(); return; }
      var z = parseFloat(b.getAttribute('data-z'));
      if (z) {
        mmMask.querySelector('.mm-wrap').style.setProperty('--mmz', (z * 100) + '%');
        mmMask.querySelector('.mm-wrap').style.setProperty('--mmfz', z);
      }
    });
  }
  function openZoom(el) {
    if (!el) return;
    ensureZoomMask();
    var wrap = mmMask.querySelector('.mm-wrap');
    var svg = el.querySelector('svg');
    if (el.classList && el.classList.contains('mermaid') && svg) {
      // mermaid：克隆已渲染 svg，按 --mmz 宽度缩放（与 v3.3 既有行为一致）
      wrap.classList.remove('mm-figwrap');
      wrap.innerHTML = svg.outerHTML;
    } else {
      // codeview / panel / demo-stage：克隆整块，按 --mmfz 字号缩放
      var clone = el.cloneNode(true);
      clone.classList.add('mm-fig');
      wrap.innerHTML = '';
      wrap.appendChild(clone);
      wrap.classList.add('mm-figwrap');
    }
    wrap.style.setProperty('--mmz', '100%');
    wrap.style.setProperty('--mmfz', '1');
    mmMask.style.display = 'flex';
    if (!mmMask._k) {
      mmMask._k = function (e) {
        if (e.key === 'Escape') closeZoom();
        e.stopPropagation();       // 放大层打开时屏蔽 reveal 按键导航
      };
      document.addEventListener('keydown', mmMask._k, true);
    }
  }
  function closeZoom() {
    if (!mmMask) return;
    mmMask.style.display = 'none';
    if (mmMask._k) { document.removeEventListener('keydown', mmMask._k, true); mmMask._k = null; }
  }
  // 放大视图只读：点击代码块/面板/演示区内的交互控件时不进入放大层
  function zoomExcluded(t) {
    if (!t || !t.closest) return false;
    return !!(t.closest('button, a, input, select, textarea, .src[data-open], .ann-toggle, .demo-node, .demo-btn, .pill, .buildbtn, .qopt, .mm-bar'));
  }
  function wireFigureZoom() {
    document.addEventListener('click', function (e) {
      if (zoomExcluded(e.target)) return;
      var t = e.target;
      var cv = t.closest ? t.closest('.codeview') : null;
      if (cv) { openZoom(cv); return; }
      var ds = t.closest ? t.closest('.demo-stage') : null;
      if (ds) { openZoom(ds); return; }
      var pn = t.closest ? t.closest('.panel') : null;
      if (pn) { openZoom(pn); return; }
    });
  }

  /* ================= KaTeX 数学渲染 ================= */
  var katexMissingWarned = false;
  function renderMathIn(root) {
    if (typeof katex === 'undefined') {
      if (!katexMissingWarned && document.querySelector('[data-math]')) {
        katexMissingWarned = true;
        console.warn('katex 未加载，[data-math] 将原样显示');
      }
      return;
    }
    var els = (root || document).querySelectorAll('[data-math]:not([data-mr])');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], src = el.getAttribute('data-math');
      el.setAttribute('data-mr', '1');
      try { katex.render(src, el, { throwOnError: false, displayMode: el.getAttribute('data-display') === '1' }); }
      catch (e) { console.warn('katex render failed:', src, e); }
    }
  }

  /* ================= 面包屑 ================= */
  window.CRUMB_MAPS = {
    P1: ['旅程地图', '入口', '发起解码', '调度', '分片执行', '跳转·注入', '求值引擎', 'IME 内核'],
    P2: ['建图 vs 执行', '三层抽象', 'sched 调度', 'iface 注入', 'SpaceMiT 接入'],
    P3: ['三层抽象', '注册实例化', '调度器', '分片', '搬运', 'liveness', 'alloc+compute', 'SpaceMiT 全景', '总结']
  };
  function renderCrumbs() {
    var cs = document.querySelectorAll('.crumb[data-map]');
    for (var i = 0; i < cs.length; i++) {
      var c = cs[i];
      if (c.getAttribute('data-rendered')) continue;
      c.setAttribute('data-rendered', '1');
      var steps = window.CRUMB_MAPS[c.getAttribute('data-map')] || [];
      var html = '';
      for (var j = 0; j < steps.length; j++) html += '<span class="cstep">' + (j + 1) + ' ' + escH(steps[j]) + '</span>';
      c.innerHTML = html;
    }
  }
  function updateCrumb(slide) {
    if (!slide) return;
    var cr = slide.querySelector('.crumb[data-map]');
    if (!cr) return;
    var sec = cr.closest('section[data-crumb]');
    var idx = sec ? parseInt(sec.getAttribute('data-crumb'), 10) : 0;
    var steps = cr.querySelectorAll('.cstep');
    for (var i = 0; i < steps.length; i++) {
      var n = i + 1;
      steps[i].className = 'cstep' + (n < idx ? ' done' : '') + (n === idx ? ' on' : '');
    }
  }

  /* ================= 页脚导航 ================= */
  var PART_TITLES = {
    1: '模型实测', 2: '热点分析', 3: '正确性/调试'
  };
  function injectDeckNav(opts) {
    var part = parseInt((opts && opts.part) || (document.body.getAttribute('data-part')) || '0', 10);
    var nav = document.createElement('div');
    nav.className = 'decknav';
    var html = '<a href="index.html">🏠 首页</a><span class="sep">·</span>';
    for (var n = 1; n <= 3; n++) {
      html += '<a href="part' + n + '.html"' + (n === part ? ' class="on"' : '') + '>Part ' + n + ' ' + PART_TITLES[n] + '</a>';
    }
    nav.innerHTML = html;
    document.body.appendChild(nav);
  }

  /* ================= 每页可下滑：按 Reveal 缩放比限制 section 高度 ================= */
  var scrollHintEl = null;
  function fitSlidesToViewport() {
    if (!window.Reveal || !Reveal.getScale) return;
    var nav = document.querySelector('.decknav');
    var navH = nav ? nav.offsetHeight : 0;
    var sc = Reveal.getScale();
    if (!sc || sc <= 0) return;
    var maxH = Math.floor((window.innerHeight - navH - 12) / sc);
    var secs = document.querySelectorAll('.reveal .slides section');
    for (var i = 0; i < secs.length; i++) secs[i].style.maxHeight = maxH + 'px';
  }
  function updateScrollHint() {
    var slide = Reveal.getCurrentSlide();
    var show = slide && slide.scrollHeight > slide.clientHeight + 4;
    if (!scrollHintEl) {
      scrollHintEl = document.createElement('div');
      scrollHintEl.className = 'scrollhint';
      scrollHintEl.textContent = '↕ 下滑查看更多';
      document.body.appendChild(scrollHintEl);
    }
    scrollHintEl.classList.toggle('on', !!show);
  }

  /* ================= 侧栏目录（opt-in：body[data-toc] 才启用） ================= */
  var tocEl = null;
  function injectToc() {
    if (!document.body.hasAttribute('data-toc') || tocEl) return;
    tocEl = document.createElement('nav');
    tocEl.className = 'toc';
    tocEl.innerHTML = '<button class="toc-toggle" type="button">☰ 目录</button><div class="toc-list"></div>';
    document.body.appendChild(tocEl);
    tocEl.querySelector('.toc-toggle').addEventListener('click', function () {
      tocEl.classList.toggle('open');
      this.textContent = tocEl.classList.contains('open') ? '✕ 关闭' : '☰ 目录';
    });
    tocEl.querySelector('.toc-list').addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[data-slide]') : null;
      if (!a) return;
      e.preventDefault();
      if (window.Reveal) Reveal.slide(parseInt(a.getAttribute('data-slide'), 10));
      tocEl.classList.remove('open');
      var tg = tocEl.querySelector('.toc-toggle');
      if (tg) tg.textContent = '☰ 目录';
    });
    renderTocItems();
  }
  function renderTocItems() {
    if (!tocEl) return;
    var slides = document.querySelectorAll('.reveal .slides > section');
    var html = '<ol>';
    for (var i = 0; i < slides.length; i++) {
      var h = slides[i].querySelector('h1, h2');
      var t = h ? h.textContent : ('第 ' + (i + 1) + ' 页');
      html += '<li><a href="#" data-slide="' + i + '">' + escH(t) + '</a></li>';
    }
    html += '</ol>';
    tocEl.querySelector('.toc-list').innerHTML = html;
  }
  function updateToc() {
    if (!tocEl || !Reveal.getIndices) return;
    var idx = Reveal.getIndices().h;
    var links = tocEl.querySelectorAll('a[data-slide]');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('on', parseInt(links[i].getAttribute('data-slide'), 10) === idx);
    }
  }

  /* ================= initDeck ================= */
  window.initDeck = function (opts) {
    opts = opts || {};
    if (typeof Reveal === 'undefined') {
      console.warn('reveal.js 未加载');
      return;
    }
    var cfg = { hash: true, margin: 0, width: '100%', height: '100%' };
    for (var k in opts) if (k !== 'part') cfg[k] = opts[k];
    var onSlide = function () {
      var slide = Reveal.getCurrentSlide();
      // 左右翻页时清空所有滚动（section + 窗口），避免上一页 scrollTop/窗口滚动被带到下一页
      var _secs = document.querySelectorAll('.reveal .slides section');
      for (var _i = 0; _i < _secs.length; _i++) _secs[_i].scrollTop = 0;
      if (window.scrollTo) window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      // 过渡动画结束后再兜底清一次（浏览器 scroll anchoring 可能延迟写回）
      setTimeout(function () {
        var _s2 = document.querySelectorAll('.reveal .slides section');
        for (var _j = 0; _j < _s2.length; _j++) _s2[_j].scrollTop = 0;
        if (window.scrollTo) window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      }, 80);
      renderCrumbs();
      renderCodeViews(slide);
      renderMermaidIn(slide);
      renderMathIn(slide);
      updateCrumb(slide);
      renderCodeViews(document);      // 兜底：未渲染的补上
      renderMathIn(document);
      fitSlidesToViewport();
      updateScrollHint();
      updateToc();
    };
    Reveal.initialize(cfg);
    Reveal.on('slidechanged', onSlide);
    Reveal.on('ready', onSlide);
    injectDeckNav(opts);
    injectToc();
    wireFigureZoom();
    window.addEventListener('resize', function () { setTimeout(fitSlidesToViewport, 80); });
    window.addEventListener('load', function () {
      highlightCmd();
      renderCodeViews(document);
      onSlide();
    });
    // 全局 .src 徽标点击 → 文件弹窗
    document.addEventListener('click', function (e) {
      var t = e.target;
      var src = t && t.closest ? t.closest('.src[data-open]') : null;
      if (src) { e.preventDefault(); openSrcModal(src.getAttribute('data-open')); }
    });
  };
  window.openSrcModal = openSrcModal;   // 供页面脚本直接调用
})();
