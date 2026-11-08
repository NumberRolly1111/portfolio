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
  var WA = "https://wa.me/77751213271";
  var t = window.t || function (x) { return x; };
  var LABEL = { tg: "Telegram", wa: "WhatsApp", ig: "Instagram", tt: "TikTok" };
  var LINK = { tg: TG, wa: WA, ig: IG, tt: TT };
  function soc(key, i) {
    return '<a href="' + LINK[key] + '"' + (i == null ? "" : ' style="--i:' + i + '"') + ' target="_blank" rel="noopener" aria-label="' + LABEL[key] + '">' + window.ICONS[key] + "</a>";
  }
  var page = document.body.getAttribute("data-page") || "";

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var LOGO = 'G<i>web</i>Studio';

  var NAV = [
    ["home", "/", t("Главная")],
    ["services", "/services", t("Услуги")],
    ["portfolio", "/portfolio", t("Портфолио")],
    ["about", "/about", t("Обо мне")],
    ["contacts", "/contacts", t("Контакты")]
  ];

  /* ---------- шапка и подвал ---------- */
  function buildLayout() {
    var hdr = document.getElementById("site-header");
    if (hdr) {
      var items = NAV.filter(function (n) { return n[0] !== "contacts"; }).concat([["quiz", "/quiz", t("Обсудить проект")]]);
      var mlinks = items.map(function (n, i) {
        return '<a href="' + n[1] + '" style="--i:' + i + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
      }).join("");
      var cur = (window.I18N && window.I18N.lang) || "ru";
      var langs = [["ru", "RU"], ["kk", "KZ"], ["en", "EN"]].map(function (l) {
        return '<button type="button" data-l="' + l[0] + '" aria-pressed="' + (l[0] === cur) + '" lang="' + l[0] + '">' + l[1] + "</button>";
      }).join("");
      hdr.innerHTML =
        '<div class="aurora" aria-hidden="true"><i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i></div>' +
        '<header class="hdr">' +
        '<a class="logo" href="/" aria-label="GwebStudio, ' + t("на главную") + '">' + LOGO + "</a>" +
        '<div class="clock" aria-hidden="true"><span>АСТ<b data-tz="5">--:--</b></span><span>МСК<b data-tz="3">--:--</b></span></div>' +
        '<div class="lang" role="group" aria-label="' + t("Язык") + '">' + langs + "</div>" +
        '<button class="menu-btn" type="button" aria-label="' + t("Открыть меню") + '" aria-expanded="false"><span class="lbl">' + t("Меню") + '</span><span class="lines"><i></i><i></i></span></button>' +
        "</header>" +
        '<nav class="mnav" aria-label="' + t("Основное меню") + '" aria-hidden="true">' + mlinks +
        '<div class="soc">' + soc("tg", items.length) + soc("wa", items.length + 1) + soc("ig", items.length + 2) + soc("tt", items.length + 3) + "</div></nav>";
      hdr.querySelectorAll(".lang button").forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.getAttribute("data-l") !== cur) window.setLang(b.getAttribute("data-l"));
        });
      });
    }

    var ftr = document.getElementById("site-footer");
    if (ftr) {
      var flinks = NAV.map(function (n) { return '<a href="' + n[1] + '">' + n[2] + "</a>"; }).join("") + '<a href="/quiz">' + t("Обсудить проект") + "</a>";
      ftr.innerHTML =
        '<footer class="ftr"><div class="wrap">' +
        '<a class="big-logo" href="/" aria-label="GwebStudio, ' + t("на главную") + '">' + LOGO + "<b></b></a>" +
        '<div class="ftr-mid"><p>' + t("Делаю современные сайты для бизнеса в Казахстане и России: от первой идеи до результата, который приводит клиентов и заявки.") + "</p>" +
        '<nav class="ftr-nav" aria-label="' + t("Разделы") + '">' + flinks + "</nav></div>" +
        '<div class="ftr-bot"><span>© <span id="y"></span> GwebStudio. ' + t("Создано") + ' <a href="' + IG + '" target="_blank" rel="noopener">@bauyrzhanov_12_</a></span>' +
        '<a href="/privacy">' + t("Политика конфиденциальности") + "</a>" +
        '<div class="icons">' + soc("tg") + soc("wa") + soc("ig") + soc("tt") + "</div></div>" +
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
      b.setAttribute("aria-label", open ? t("Закрыть меню") : t("Открыть меню"));
      if (lbl) lbl.textContent = open ? t("Закрыть") : t("Меню");
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
        "<h3>" + t(s.title) + "</h3><p>" + t(s.text) + "</p>" +
        '<div class="meta"><b>' + window.I18N.priceFrom(s.price) + "</b><span>" + (s.days ? window.I18N.daysFrom(s.days) : t("срок обсуждается")) + "</span></div></a>";
    }).join("");
    var quiz = '<div class="svc quiz-card" data-reveal>' +
      '<div class="q">?</div><div><h3>' + t("Не знаете, что выбрать?") + "</h3><p>" + t("Ответьте на несколько вопросов, и по ответам я подскажу подходящий формат.") + "</p></div>" +
      '<a class="btn light" href="/quiz">' + t("Пройти квиз") + "</a></div>";
    host.innerHTML = cards + quiz;
  }

  /* ---------- проекты ---------- */
  var coverHTML = function (p, big) {
    var src = big && p.hero ? p.hero : p.img;
    return '<div class="cover" style="--c1:' + p.c1 + ";--c2:" + p.c2 + '">' +
      (src ? '<img src="/' + src + '" alt="' + t(p.title) + '" loading="lazy">' : '<span class="glyph" aria-hidden="true">' + p.glyph + "</span>") +
      "</div>";
  };

  function renderWorks() {
    var host = document.getElementById("works");
    if (!host || !window.PROJECTS) return;
    var list = window.PROJECTS.filter(function (p) { return host.hasAttribute("data-featured") ? p.featured : true; });
    host.innerHTML = list.map(function (p, i) {
      return '<a class="work" href="/work/' + p.id + '" data-cat="' + p.cat + '" data-reveal style="--d:' + ((i % 2) * 0.12) + 's">' +
        coverHTML(p) +
        '<div class="work-info"><div class="t">' + t(p.type) + "</div><h3>" + t(p.title) + ARROW + "</h3><p>" + t(p.short) + "</p></div></a>";
    }).join("");

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

  /* ---------- страница кейса ---------- */
  var CAT = { web: "Сайты", telegram: "Telegram", minecraft: "Minecraft" };
  function renderCase() {
    var host = document.getElementById("case-body");
    if (!host || !window.PROJECTS) return;
    var id = document.body.getAttribute("data-id");
    var list = window.PROJECTS;
    var i = list.map(function (x) { return x.id; }).indexOf(id);
    if (i < 0) return;
    var p = list[i];
    var prev = list[(i + list.length - 1) % list.length];
    var next = list[(i + 1) % list.length];
    document.title = t(p.title) + " — " + t("Кейс") + " — GwebStudio";

    var crumbs = document.getElementById("case-crumbs");
    if (crumbs) crumbs.innerHTML = '<a href="/">' + t("Главная") + '</a><i>/</i><a href="/portfolio">' + t("Портфолио") + "</a><i>/</i><span>" + t(p.type) + "</span>";
    var kick = document.getElementById("case-type");
    var h1 = document.getElementById("case-title");
    if (kick) kick.textContent = t(p.type);
    if (h1) h1.textContent = t(p.title);
    var act = document.getElementById("case-actions");
    if (act) {
      act.innerHTML = (p.links[0] ? '<a class="btn light" href="' + p.links[0].url + '" target="_blank" rel="noopener">' + t(p.links[0].label) + ARROW.replace("<svg", '<svg width="16" height="16"') + "</a>" : "") +
        '<a class="btn ghost" href="/portfolio">' + t("Все работы") + "</a>";
    }

    var host0 = p.links[0] ? p.links[0].url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
    var facts = [
      [t("Тип проекта"), t(p.type)],
      [t("Направление"), t(CAT[p.cat] || p.cat)],
      [t("Год"), "2026"],
      [t("Технологии"), p.stack.join(", ")]
    ];
    if (host0) facts.push([t("Ссылка"), '<a href="' + p.links[0].url + '" target="_blank" rel="noopener">' + host0 + "</a>"]);
    var more = p.links.slice(1).map(function (l) {
      return '<a class="btn ghost" href="' + l.url + '" target="_blank" rel="noopener">' + t(l.label) + ARROW.replace("<svg", '<svg width="16" height="16"') + "</a>";
    }).join("");

    host.innerHTML =
      '<div class="case-cover" data-reveal>' + coverHTML(p, true) + "</div>" +
      '<div class="case-grid">' +
      '<aside class="case-side" data-reveal><ul class="case-facts">' + facts.map(function (f) { return "<li><span>" + f[0] + "</span><b>" + f[1] + "</b></li>"; }).join("") + "</ul>" +
      (more ? '<div class="sheet-links">' + more + "</div>" : "") +
      (!p.links.length ? '<p class="muted">' + t("Публичной ссылки пока нет.") + "</p>" : "") + "</aside>" +
      '<div data-reveal style="--d:.12s"><h2>' + t("О проекте") + '</h2><p class="case-desc">' + t(p.desc) + "</p>" +
      "<h3>" + t("Что внутри") + '</h3><ul class="pts">' + p.points.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul></div></div>" +
      '<div class="case-nav" data-reveal>' +
      '<a class="link-card" href="/work/' + prev.id + '"><div><span>' + t("Предыдущий проект") + "</span><b>" + t(prev.title) + "</b></div>" + ARROW + "</a>" +
      '<a class="link-card" href="/work/' + next.id + '"><div><span>' + t("Следующий проект") + "</span><b>" + t(next.title) + "</b></div>" + ARROW + "</a></div>" +
      '<div class="case-cta" data-reveal><div><h2>' + t("Нужен похожий проект?") + "</h2><p>" + t("Расскажите о задаче, и я предложу подходящий формат и следующий шаг.") + '</p></div><a class="btn light" href="/quiz">' + t("Обсудить проект") + "</a></div>";
  }

  /* ---------- лента стека ---------- */
  function renderTicker() {
    var tk = document.getElementById("ticker");
    if (!tk || !window.STACK) return;
    var items = window.STACK.map(function (s) { return "<span>" + t(s) + "</span>"; }).join("");
    tk.innerHTML = '<div class="ticker-track" aria-hidden="true">' + items + items + "</div>";
  }

  /* ---------- faq ---------- */
  function initFaq() {
    var all = document.querySelectorAll(".qa");
    all.forEach(function (qa) {
      var b = qa.querySelector("button");
      b.setAttribute("aria-expanded", qa.classList.contains("open") ? "true" : "false");
      b.addEventListener("click", function () {
        var willOpen = !qa.classList.contains("open");
        // открыт только один вопрос: остальные закрываются
        all.forEach(function (o) {
          o.classList.remove("open");
          o.querySelector("button").setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          qa.classList.add("open");
          b.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------- запуск ---------- */
  buildLayout();
  initMenu();
  initTransitions();
  renderServices();
  renderWorks();
  renderCase();
  renderTicker();
  initFaq();
  splitWords();
  // небольшая пауза, чтобы первая анимация успела проиграться после загрузки шрифтов
  var intro = document.querySelector(".intro");
  var wait = intro ? 1250 : 120;
  if (intro) {
    intro.addEventListener("animationend", function (e) { if (e.animationName === "introOut") intro.remove(); });
    setTimeout(function () { if (intro.parentNode) intro.remove(); }, 4000);
  }
  var started = false;
  function startReveal() { if (started) return; started = true; setTimeout(initReveal, wait); }
  window.addEventListener("load", startReveal);
  if (document.readyState === "complete") startReveal();
})();
