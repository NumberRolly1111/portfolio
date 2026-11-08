(function () {
  "use strict";

  var TG = "https://t.me/bauyrzhanov_12_";
  var GH = "https://github.com/NumberRolly1111";
  var page = document.body.getAttribute("data-page") || "";

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  var NAV = [
    ["home", "index.html", "Главная"],
    ["services", "services.html", "Услуги"],
    ["portfolio", "portfolio.html", "Портфолио"],
    ["about", "about.html", "Обо мне"],
    ["contacts", "contacts.html", "Контакты"]
  ];

  /* ---------- шапка и подвал ---------- */
  function buildLayout() {
    var hdr = document.getElementById("site-header");
    if (hdr) {
      var items = NAV.filter(function (n) { return n[0] !== "contacts"; }).concat([["contacts", "contacts.html", "Обсудить проект"]]);
      var mlinks = items.map(function (n, i) {
        return '<a href="' + n[1] + '" style="--i:' + i + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
      }).join("");
      var ICON_TG = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4 3 11l6 2.2L11 20l3-4.2 5 3.7L21 4Z"/><path d="m9 13.2 12-9.2"/></svg>';
      var ICON_GH = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.1-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>';
      hdr.innerHTML =
        '<div class="aurora" aria-hidden="true"><i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i></div>' +
        '<header class="hdr">' +
        '<a class="logo" href="index.html" aria-label="W-Dev, на главную">W<i>-</i>Dev</a>' +
        '<div class="clock" aria-hidden="true"><span>АСТ<b data-tz="5">--:--</b></span><span>МСК<b data-tz="3">--:--</b></span></div>' +
        '<button class="menu-btn" type="button" aria-label="Открыть меню" aria-expanded="false"><span class="lbl">Меню</span><span class="lines"><i></i><i></i></span></button>' +
        "</header>" +
        '<nav class="mnav" aria-label="Основное меню" aria-hidden="true">' + mlinks +
        '<div class="soc">' +
        '<a href="' + TG + '" style="--i:' + (items.length) + '" target="_blank" rel="noopener" aria-label="Telegram">' + ICON_TG + "</a>" +
        '<a href="' + GH + '" style="--i:' + (items.length + 1) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICON_GH + "</a>" +
        "</div></nav>";
    }

    var ftr = document.getElementById("site-footer");
    if (ftr) {
      ftr.innerHTML =
        '<footer class="ftr"><div class="wrap">' +
        '<div class="ftr-top">' +
        '<div><a class="logo" href="index.html">W<i>-</i>Dev</a><p>Дизайнер и разработчик из Астаны. Делаю сайты и игры для Telegram Mini App.</p></div>' +
        '<div><h4>Разделы</h4><ul>' + NAV.map(function (n) { return '<li><a href="' + n[1] + '">' + n[2] + "</a></li>"; }).join("") + "</ul></div>" +
        '<div><h4>Связь</h4><ul><li><a href="' + TG + '" target="_blank" rel="noopener">Telegram</a></li>' +
        '<li><a href="' + GH + '" target="_blank" rel="noopener">GitHub</a></li></ul></div>' +
        "</div>" +
        '<div class="ftr-bot"><span>© <span id="y"></span> W-Dev</span>' +
        '<span>Создано <a href="' + TG + '" target="_blank" rel="noopener">@bauyrzhanov_12_</a></span></div>' +
        "</div></footer>";
      var y = document.getElementById("y");
      if (y) y.textContent = new Date().getFullYear();
    }

    var veil = document.createElement("div");
    veil.className = "veil";
    document.body.appendChild(veil);
  }

  /* ---------- меню ---------- */
  function initMenu() {
    var b = document.querySelector(".menu-btn");
    var m = document.querySelector(".mnav");
    var h = document.querySelector(".hdr");
    if (!b) return;
    var lbl = b.querySelector(".lbl");
    function set(open) {
      document.body.classList.toggle("menu-open", open);
      b.setAttribute("aria-expanded", open ? "true" : "false");
      b.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
      if (lbl) lbl.textContent = open ? "Закрыть" : "Меню";
      if (m) m.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    }
    b.addEventListener("click", function () { set(!document.body.classList.contains("menu-open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
    function onScroll() { if (h) h.classList.toggle("scrolled", window.scrollY > 24); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // время астаны (UTC+5) и москвы (UTC+3)
    function tick() {
      var now = Date.now();
      document.querySelectorAll(".clock b").forEach(function (el) {
        var d = new Date(now + Number(el.getAttribute("data-tz")) * 3600000);
        el.textContent = String(d.getUTCHours()).padStart(2, "0") + ":" + String(d.getUTCMinutes()).padStart(2, "0");
      });
    }
    tick();
    setInterval(tick, 15000);
  }

  /* ---------- плавный переход между страницами ---------- */
  function initTransitions() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      var url;
      try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return;
      e.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(function () { location.href = a.href; }, 560);
    });
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) {
        document.body.classList.remove("leaving", "menu-open");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---------- появление при прокрутке ---------- */
  function splitWords() {
    document.querySelectorAll("[data-split]").forEach(function (el) {
      var words = el.textContent.trim().split(/\s+/);
      el.setAttribute("aria-label", el.textContent.trim());
      el.innerHTML = words.map(function (w, i) {
        return '<span class="w" aria-hidden="true" style="--i:' + i + '">' + w + "</span>";
      }).join(" ");
      el.classList.add("split");
    });
  }

  function initReveal() {
    var els = document.querySelectorAll("[data-reveal], .split");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- проекты ---------- */
  var coverHTML = function (p) {
    return '<div class="cover" style="--c1:' + p.c1 + ";--c2:" + p.c2 + '">' +
      (p.img ? '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy">' : '<span class="glyph" aria-hidden="true">' + p.glyph + "</span>") +
      "</div>";
  };

  function renderWorks() {
    var host = document.getElementById("works");
    if (!host || !window.PROJECTS) return;
    var list = window.PROJECTS.filter(function (p) { return host.hasAttribute("data-featured") ? p.featured : true; });
    host.innerHTML = list.map(function (p, i) {
      return '<button class="work" type="button" data-id="' + p.id + '" data-cat="' + p.cat + '" data-reveal style="--d:' + ((i % 2) * 0.18) + 's">' +
        coverHTML(p) +
        '<div class="work-info"><div class="t">' + p.type + "</div><h3>" + p.title + ARROW + "</h3><p>" + p.short + "</p></div></button>";
    }).join("");

    host.addEventListener("click", function (e) {
      var b = e.target.closest(".work");
      if (b) openModal(b.getAttribute("data-id"), b);
    });

    var f = document.getElementById("filters");
    if (f) {
      f.addEventListener("click", function (e) {
        var c = e.target.closest(".chip");
        if (!c) return;
        f.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        var cat = c.getAttribute("data-cat");
        host.querySelectorAll(".work").forEach(function (w) {
          w.classList.toggle("hide", cat !== "all" && w.getAttribute("data-cat") !== cat);
        });
      });
    }
  }

  var modal, lastFocus;
  function openModal(id, from) {
    var p = (window.PROJECTS || []).filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
      document.body.appendChild(modal);
    }
    lastFocus = from;
    modal.innerHTML =
      '<div class="sheet"><button class="close" type="button" aria-label="Закрыть">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      coverHTML(p) +
      '<div class="sheet-body"><div><div class="t">' + p.type + "</div><h2>" + p.title + "</h2><p>" + p.desc + "</p></div>" +
      "<div><h4>Технологии</h4><div class=\"tags\">" + p.stack.map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</div>" +
      (p.links.length ? '<div class="sheet-links">' + p.links.map(function (l, i) {
        return '<a class="btn' + (i ? " ghost" : "") + '" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + ARROW.replace("<svg", '<svg width="16" height="16"') + "</a>";
      }).join("") + "</div>" : '<p style="color:var(--muted);font-size:15px">Публичной ссылки пока нет.</p>') +
      "</div></div></div>";
    modal.setAttribute("aria-label", p.title);
    modal.querySelector(".close").addEventListener("click", closeModal);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        modal.classList.add("open");
        modal.querySelector(".close").focus({ preventScroll: true });
      });
    });
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* ---------- лента стека ---------- */
  function renderTicker() {
    var t = document.getElementById("ticker");
    if (!t || !window.STACK) return;
    var items = window.STACK.map(function (s) { return "<span>" + s + "</span>"; }).join("");
    t.innerHTML = '<div class="ticker-track" aria-hidden="true">' + items + items + "</div>";
  }

  /* ---------- faq ---------- */
  function initFaq() {
    document.querySelectorAll(".qa").forEach(function (qa) {
      var b = qa.querySelector("button");
      b.setAttribute("aria-expanded", "false");
      b.addEventListener("click", function () {
        var open = qa.classList.toggle("open");
        b.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- форма: собирает сообщение и открывает telegram ---------- */
  function initForm() {
    var f = document.getElementById("brief");
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(f);
      var text = "Здравствуйте! Меня зовут " + (d.get("name") || "") + ".\nЧто нужно: " + (d.get("kind") || "") + ".\n\n" + (d.get("about") || "");
      var contact = (d.get("contact") || "").toString().trim();
      if (contact) text += "\n\nКак со мной связаться: " + contact;
      var btn = f.querySelector("button[type=submit]");
      var note = f.querySelector(".note");
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
      window.open(TG + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      if (note) note.textContent = "Telegram открыт с готовым сообщением. Если текст не подставился, он уже скопирован — просто вставьте его в чат.";
      if (btn) btn.blur();
    });
  }

  /* ---------- запуск ---------- */
  buildLayout();
  initMenu();
  initTransitions();
  renderWorks();
  renderTicker();
  initFaq();
  initForm();
  splitWords();
  // небольшая пауза, чтобы первая анимация успела проиграться после загрузки шрифтов
  window.addEventListener("load", function () { setTimeout(initReveal, 120); });
  if (document.readyState === "complete") setTimeout(initReveal, 120);
})();
