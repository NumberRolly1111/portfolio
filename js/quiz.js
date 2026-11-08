(function () {
  "use strict";
  var root = document.getElementById("quiz");
  if (!root) return;

  var t = window.t || function (x) { return x; };
  var WA = "https://wa.me/77751213271";
  var lastText = "";
  var TG = "https://t.me/ddwwks";
  var IG = "https://www.instagram.com/bauyrzhanov_12_/";
  var TT = "https://www.tiktok.com/@bauyrzhanov_12_";

  var DIRS = [
    ["Сайт", "Лендинг, многостраничный сайт, визитка, корпоративный сайт"],
    ["Telegram Mini App", "Игра или приложение внутри Telegram"],
    ["Плагин для Minecraft", "Плагин под ваш сервер на Paper"],
    ["Доработка существующего проекта", "Правки и улучшения готового сайта или приложения"],
    ["Другое / не определился", "Помогу выбрать формат"]
  ];

  var FORMATS = {
    "Сайт": [
      ["Одностраничный лендинг", "Запуск услуги, акции или продукта, от $80"],
      ["Многостраничный сайт", "Несколько разделов, от $160"],
      ["Сайт-визитка", "Компактное представительство, от $60"],
      ["Корпоративный сайт", "Услуги, команда, проекты и контакты, от $160"],
      ["Пока не знаю", "Подскажу подходящий вариант"]
    ],
    "Telegram Mini App": [
      ["Игра", "Рейтинг, награды, оплата через Stars, от $130"],
      ["Приложение или сервис", "Полезный инструмент внутри Telegram, от $130"],
      ["Пока не знаю", "Подскажу подходящий вариант"]
    ],
    "Плагин для Minecraft": [
      ["Новый плагин", "Под ваш сервер на Paper, от $12"],
      ["Доработка существующего плагина", "Исправить или добавить функции"],
      ["Пока не знаю", "Подскажу подходящий вариант"]
    ],
    "Доработка существующего проекта": [
      ["Исправить ошибки", "Что-то работает не так, от $30"],
      ["Обновить дизайн", "Новый стиль и анимации"],
      ["Добавить функции", "Новые разделы, формы, оплата"],
      ["Пока не знаю", "Разберёмся вместе"]
    ],
    "Другое / не определился": [
      ["Нужна консультация", "Расскажу, что подойдёт под вашу задачу"],
      ["Пока не знаю", "Опишу задачу на одном из следующих шагов"]
    ]
  };

  var HAVE = {
    "Сайт": [
      ["Ничего нет", "Начинаем с нуля"],
      ["Есть тексты и фото", "Нужно собрать их в готовый вид"],
      ["Есть логотип и фирменный стиль", "Дизайн сделаю в вашем стиле"],
      ["Есть макет или пример сайта", "Сделаю по образцу"]
    ],
    "Telegram Mini App": [
      ["Только идея", "Продумаем механику вместе"],
      ["Есть описание и правила", "Опишу, как это будет работать"],
      ["Есть дизайн или референсы", "Сделаю в нужном стиле"],
      ["Есть бот или часть кода", "Доработаю и подключу Mini App"]
    ],
    "Плагин для Minecraft": [
      ["Только идея", "Продумаем команды и механику вместе"],
      ["Есть список функций и команд", "Сделаю по вашему описанию"],
      ["Есть сервер, нужна версия ядра", "Укажите ядро и версию в описании"],
      ["Есть готовый плагин или исходники", "Доработаю существующий код"]
    ],
    "Доработка существующего проекта": [
      ["Есть исходники и доступ", "Можно сразу приступать"],
      ["Есть список правок", "Оценю объём и сроки"],
      ["Есть только готовый сайт или приложение", "Разберусь в коде сам"],
      ["Не знаю, что именно улучшить", "Проведу короткий разбор"]
    ],
    "Другое / не определился": [
      ["Ничего нет", "Начинаем с обсуждения"],
      ["Есть описание задачи", "Расскажите на следующем шаге"],
      ["Есть примеры или референсы", "Покажите, что нравится"]
    ]
  };

  var BUDGET = {
    "Сайт": [
      ["До $100", "Визитка или небольшой лендинг"],
      ["$100 – $200", "Лендинг или многостраничный сайт"],
      ["$200 – $400", "Сайт с дополнительными функциями"],
      ["От $400", "Крупный проект"],
      ["Пока не знаю", "Подскажу, во что вложиться в первую очередь"]
    ],
    "Telegram Mini App": [
      ["$130 – $200", "Простая игра или сервис"],
      ["$200 – $400", "Рейтинг, награды, оплата через Stars"],
      ["От $400", "Сложная механика и крупный проект"],
      ["Пока не знаю", "Оценю после обсуждения"]
    ],
    "Плагин для Minecraft": [
      ["$12 – $30", "Простая команда или механика"],
      ["$30 – $60", "Несколько функций и база данных"],
      ["От $60", "Большой плагин со сложной логикой"],
      ["Пока не знаю", "Оценю после обсуждения"]
    ],
    "Доработка существующего проекта": [
      ["$30 – $60", "Небольшие правки"],
      ["$60 – $120", "Несколько изменений или новый раздел"],
      ["От $120", "Крупная переработка"],
      ["Пока не знаю", "Оценю после разбора"]
    ],
    "Другое / не определился": [
      ["До $100", "Небольшая задача"],
      ["$100 – $300", "Задача средней сложности"],
      ["От $300", "Крупный проект"],
      ["Пока не знаю", "Оценю после обсуждения"]
    ]
  };

  var PLACEHOLDER = {
    "Сайт": "Например: сайт для кофейни, нужны меню, карта и заявки в WhatsApp",
    "Telegram Mini App": "Например: игра-рулетка с рейтингом и наградами за приглашённых друзей",
    "Плагин для Minecraft": "Например: плагин авторизации для Paper 1.21 с командами /register и /login",
    "Доработка существующего проекта": "Например: на сайте не отправляется форма, нужно починить и обновить дизайн"
  };

  var STEPS = [
    { key: "dir", label: "Направление", title: "Что вам нужно?", hint: "Выберите направление, его можно поменять в любой момент.", type: "choice", opts: function () { return DIRS; } },
    { key: "fmt", label: "Формат", title: "Какой формат подойдёт?", hint: "Если не уверены, выберите «Пока не знаю».", type: "choice", opts: function () { return FORMATS[A.dir] || []; } },
    { key: "have", label: "Что уже есть", title: "Что у вас уже готово?", hint: "Так проще понять, с чего начинать.", type: "choice", opts: function () { return HAVE[A.dir] || HAVE["Сайт"]; } },
    { key: "when", label: "Сроки", title: "Когда нужен результат?", hint: "Минимальные сроки указаны в карточках услуг.", type: "choice", opts: function () {
      return [
        ["Срочно, в течение недели", "Подберём самый быстрый вариант"],
        ["В течение месяца", "Спокойный темп без спешки"],
        ["Не горит", "Важнее качество, чем скорость"],
        ["Пока не знаю", "Назовите ориентир, когда обсудим задачу"]
      ];
    } },
    { key: "budget", label: "Бюджет", title: "На какой бюджет рассчитываете?", hint: "Это ориентир, итоговую стоимость назову после обсуждения.", type: "choice", opts: function () { return BUDGET[A.dir] || BUDGET["Сайт"]; } },
    { key: "about", label: "О проекте", title: "Расскажите о проекте", hint: "Пара предложений: чем занимаетесь и чего хотите добиться. Этот шаг можно пропустить.", type: "text" },
    { key: "contact", label: "Контакты", title: "Как с вами связаться?", hint: "Отвечу в том мессенджере, который вы укажете.", type: "contact" }
  ];

  var A = {};
  var cur = 0;
  var furthest = 0;
  var done = false;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function valueOf(st) {
    if (st.key === "contact") return A.contact ? (A.name ? A.name + ", " : "") + A.contact : "";
    return A[st.key] || "";
  }
  function answeredCount() {
    return STEPS.filter(function (st) { return st.key === "contact" ? (A.name && A.contact) : !!A[st.key]; }).length;
  }
  function canNext() {
    var st = STEPS[cur];
    if (st.type === "choice") return !!A[st.key];
    if (st.type === "text") return true;
    return !!(A.name && A.name.trim() && A.contact && A.contact.trim());
  }

  function bodyHTML(st) {
    if (st.type === "choice") {
      return '<div class="opts" role="radiogroup" aria-label="' + esc(t(st.title)) + '">' + st.opts().map(function (o) {
        var on = A[st.key] === o[0];
        return '<button type="button" class="opt" role="radio" aria-checked="' + on + '" data-v="' + esc(o[0]) + '"><i class="rd"></i><span><b>' + esc(t(o[0])) + '</b><span class="d">' + esc(t(o[1])) + "</span></span></button>";
      }).join("") + "</div>";
    }
    if (st.type === "text") {
      return '<div class="field"><label for="q-about">' + t("О проекте") + '</label><textarea id="q-about" data-f="about" placeholder="' + esc(t(PLACEHOLDER[A.dir] || "Расскажите, что нужно сделать и какого результата хотите")) + '">' + esc(A.about || "") + "</textarea></div>";
    }
    return '<div class="fields">' +
      '<div class="field"><label for="q-name">' + t("Как вас зовут") + '</label><input id="q-name" data-f="name" type="text" autocomplete="name" value="' + esc(A.name || "") + '"></div>' +
      '<div class="field"><label for="q-contact">' + t("Telegram, WhatsApp или телефон") + '</label><input id="q-contact" data-f="contact" type="text" placeholder="' + esc(t("@username или номер")) + '" value="' + esc(A.contact || "") + '"></div>' +
      "</div>";
  }

  function sideHTML() {
    var rows = STEPS.map(function (st, i) {
      var v = valueOf(st);
      var can = i <= furthest;
      return '<button type="button" class="qrow' + (i === cur && !done ? " cur" : "") + '" data-go="' + i + '"' + (can ? "" : " disabled") + '><span class="l">' + t(st.label) + '</span><span class="v">' + (v ? esc(t(v)) : "—") + "</span></button>";
    }).join("");
    return '<div class="qs-head"><span>' + t("Ваша заявка") + '</span><span>' + answeredCount() + " / " + STEPS.length + "</span></div>" +
      '<p class="qs-note">' + t("Обновляется по мере ответов. Любой пункт можно изменить: нажмите на него.") + '</p>' + rows +
      '<div class="qs-foot"><p>' + t("Удобнее написать сразу?") + '</p><div class="soc2">' +
      '<a href="' + TG + '" target="_blank" rel="noopener" aria-label="Telegram">' + window.ICONS.tg + "</a>" +
      '<a href="' + WA + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + window.ICONS.wa + "</a>" +
      '<a href="' + IG + '" target="_blank" rel="noopener" aria-label="Instagram">' + window.ICONS.ig + "</a>" +
      '<a href="' + TT + '" target="_blank" rel="noopener" aria-label="TikTok">' + window.ICONS.tt + "</a></div></div>";
  }

  function render(swap) {
    var card = root.querySelector(".qcard");
    var side = root.querySelector(".qside");
    if (done) {
      card.innerHTML = '<div class="qdone"><h2 class="qtitle">' + t("Заявка собрана") + '</h2>' +
        '<p class="qhint">' + t("В Telegram открылся чат со мной с готовым сообщением. Нажмите «Отправить» в чате. Если текст не подставился, он уже скопирован: просто вставьте его. Удобнее WhatsApp? Нажмите кнопку ниже.") + '</p>' +
        '<div class="qnav qnav-wrap"><button type="button" class="btn ghost" data-act="again">' + t("Заполнить заново") + '</button><a class="btn ghost" href="' + WA + "?text=" + encodeURIComponent(lastText) + '" target="_blank" rel="noopener">' + t("Открыть WhatsApp") + '</a><a class="btn light" href="' + TG + "?text=" + encodeURIComponent(lastText) + '" target="_blank" rel="noopener">' + t("Открыть Telegram") + "</a></div></div>";
      side.innerHTML = sideHTML();
      return;
    }
    var st = STEPS[cur];
    var bars = STEPS.map(function (s, i) { return '<i class="' + (i <= cur ? "on" : "") + '"></i>'; }).join("");
    var last = cur === STEPS.length - 1;
    card.innerHTML =
      '<div class="qbody' + (swap ? " swap" : "") + '">' +
      '<div class="qtop"><span>' + t("Шаг") + ' ' + pad(cur + 1) + " / " + pad(STEPS.length) + '</span><div class="bars" aria-hidden="true">' + bars + "</div></div>" +
      '<h2 class="qtitle">' + t(st.title) + '</h2><p class="qhint">' + t(st.hint) + "</p>" +
      bodyHTML(st) +
      '<div class="qnav">' + (cur ? '<button type="button" class="btn ghost" data-act="back">' + t("Назад") + '</button>' : "<span></span>") +
      '<button type="button" class="btn light" data-act="next"' + (canNext() ? "" : " disabled") + ">" + (last ? t("Отправить") : t("Далее")) + (last ? "" : " →") + "</button></div></div>";
    side.innerHTML = sideHTML();
  }

  function refreshLive() {
    var nb = root.querySelector('[data-act="next"]');
    if (nb) nb.disabled = !canNext();
    root.querySelector(".qside").innerHTML = sideHTML();
  }

  function go(i) {
    cur = Math.max(0, Math.min(STEPS.length - 1, i));
    if (cur > furthest) furthest = cur;
    done = false;
    render(true);
  }

  function send() {
    var lines = [
      "Здравствуйте! Меня зовут " + A.name + ".",
      "",
      "Направление: " + (A.dir || "не указано"),
      "Формат: " + (A.fmt || "не указан"),
      "Что уже есть: " + (A.have || "не указано"),
      "Сроки: " + (A.when || "не указаны"),
      "Бюджет: " + (A.budget || "не указан")
    ];
    if (A.about && A.about.trim()) lines.push("", "О проекте: " + A.about.trim());
    lines.push("", "Как со мной связаться: " + A.contact.trim());
    var text = lines.join("\n");
    lastText = text;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
    window.open(TG + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    done = true;
    render(true);
  }

  root.addEventListener("click", function (e) {
    var opt = e.target.closest(".opt");
    if (opt) {
      var st = STEPS[cur];
      var v = opt.getAttribute("data-v");
      if (st.key === "dir" && A.dir !== v) { delete A.fmt; delete A.have; delete A.budget; }
      A[st.key] = v;
      furthest = Math.max(furthest, cur);
      render(false);
      return;
    }
    var act = e.target.closest("[data-act]");
    if (act) {
      var a = act.getAttribute("data-act");
      if (a === "back") go(cur - 1);
      else if (a === "next" && canNext()) { cur === STEPS.length - 1 ? send() : go(cur + 1); }
      else if (a === "again") { A = {}; cur = 0; furthest = 0; done = false; render(true); }
      return;
    }
    var row = e.target.closest("[data-go]");
    if (row && !row.disabled) go(Number(row.getAttribute("data-go")));
  });

  root.addEventListener("input", function (e) {
    var f = e.target.getAttribute && e.target.getAttribute("data-f");
    if (!f) return;
    A[f] = e.target.value;
    refreshLive();
  });

  root.innerHTML = '<div class="qcard" data-reveal></div><aside class="qside" data-reveal style="--d:.12s" aria-label="Ваша заявка"></aside>';
  render(false);
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.querySelectorAll("[data-reveal]").forEach(function (e) { e.classList.add("in"); }); }); });
})();
