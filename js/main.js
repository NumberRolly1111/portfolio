(function () {
  "use strict";

  // адрес без .html: /services.html -> /services, /index.html -> /
  (function cleanUrl() {
    var p = location.pathname;
    if (/\.html$/.test(p) && window.history && history.replaceState) {
      var c = p.replace(/index\.html$/, "").replace(/\.html$/, "");
      history.replaceState(null, "", (c || "/") + location.search + location.hash);
    }
  })();

  var TG = "https://t.me/ddwwks";
  var IG = "https://www.instagram.com/bauyrzhanov_12_/";
  var TT = "https://www.tiktok.com/@bauyrzhanov_12_";
  var LABEL = { tg: "Telegram", ig: "Instagram", tt: "TikTok" };
  var LINK = { tg: TG, ig: IG, tt: TT };
  function soc(key, i) {
    return '<a href="' + LINK[key] + '"' + (i == null ? "" : ' style="--i:' + i + '"') + ' target="_blank" rel="noopener" aria-label="' + LABEL[key] + '">' + window.ICONS[key] + "</a>";
  }
  var page = document.body.getAttribute("data-page") || "";

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var LOGO = 'G<i>web</i>studio';

  var NAV = [
    ["home", "/", "Главная"],
    ["services", "/services", "Услуги"],
    ["portfolio", "/portfolio", "Портфолио"],
    ["about", "/about", "Обо мне"],
    ["contacts", "/contacts", "Контакты"]
  ];

  /* ---------- шапка и подвал ---------- */
  function buildLayout() {
    var hdr = document.getElementById("site-header");
    if (hdr) {
      var items = NAV.filter(function (n) { return n[0] !== "contacts"; }).concat([["quiz", "/quiz", "Обсудить проект"]]);
      var mlinks = items.map(function (n, i) {
        return '<a href="' + n[1] + '" style="--i:' + i + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
      }).join("");
      hdr.innerHTML =
        '<div class="aurora" aria-hidden="true"><i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i></div>' +
        '<header class="hdr">' +
        '<a class="logo" href="/" aria-label="Gwebstudio, на главную">' + LOGO + "</a>" +
        '<button class="menu-btn" type="button" aria-label="Открыть меню" aria-expanded="false"><span class="lbl">Меню</span><span class="lines"><i></i><i></i></span></button>' +
        "</header>" +
        '<nav class="mnav" aria-label="Основное меню" aria-hidden="true">' + mlinks +
        '<div class="soc">' + soc("tg", items.length) + soc("ig", items.length + 1) + soc("tt", items.length + 2) + "</div></nav>";
    }

    var ftr = document.getElementById("site-footer");
    if (ftr) {
      var flinks = NAV.map(function (n) { return '<a href="' + n[1] + '">' + n[2] + "</a>"; }).join("") + '<a href="/quiz">Обсудить проект</a>';
      ftr.innerHTML =
        '<footer class="ftr"><div class="wrap">' +
        '<a class="big-logo" href="/" aria-label="Gwebstudio, на главную">' + LOGO + "<b></b></a>" +
        '<div class="ftr-mid"><p>Дизайнер и разработчик из Астаны. Делаю сайты, игры для Telegram Mini App и плагины для Minecraft: от идеи до запуска.</p>' +
        '<nav class="ftr-nav" aria-label="Разделы">' + flinks + "</nav></div>" +
        '<div class="ftr-bot"><span>© <span id="y"></span> Gwebstudio. Создано <a href="' + IG + '" target="_blank" rel="noopener">@bauyrzhanov_12_</a></span>' +
        '<div class="icons">' + soc("tg") + soc("ig") + soc("tt") + "</div></div>" +
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
      setTimeout(function () { location.href = a.href; }, 360);
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
    var els = document.querySelectorAll("[data-reveal], .split, [data-bg]");
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

  /* ---------- услуги ---------- */
  function renderServices() {
    var host = document.getElementById("svc-grid");
    if (!host || !window.SERVICES) return;
    var cards = window.SERVICES.map(function (s, i) {
      return '<a class="svc" href="/quiz" data-reveal style="--d:' + ((i % 3) * 0.12) + 's">' +
        "<h3>" + s.title + "</h3><p>" + s.text + "</p>" +
        '<div class="meta"><b>от $' + s.price + "</b><span>" + (s.days ? "от " + s.days + " " + (s.days === 3 ? "дней" : "дней") : "срок обсуждается") + "</span></div></a>";
    }).join("");
    var quiz = '<div class="svc quiz-card" data-reveal>' +
      '<div class="q">?</div><div><h3>Не знаете, что выбрать?</h3><p>Ответьте на несколько вопросов, и по ответам я подскажу подходящий формат.</p></div>' +
      '<a class="btn light" href="/quiz">Пройти квиз</a></div>';
    host.innerHTML = cards + quiz;
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
      return '<button class="work" type="button" data-id="' + p.id + '" data-cat="' + p.cat + '" data-reveal style="--d:' + ((i % 2) * 0.12) + 's">' +
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
      b.setAttribute("aria-expanded", qa.classList.contains("open") ? "true" : "false");
      b.addEventListener("click", function () {
        var open = qa.classList.toggle("open");
        b.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- запуск ---------- */
  buildLayout();
  initMenu();
  initTransitions();
  renderServices();
  renderWorks();
  renderTicker();
  initFaq();
  splitWords();
  // небольшая пауза, чтобы первая анимация успела проиграться после загрузки шрифтов
  window.addEventListener("load", function () { setTimeout(initReveal, 120); });
  if (document.readyState === "complete") setTimeout(initReveal, 120);
})();
