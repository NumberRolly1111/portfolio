// данные проектов. чтобы добавить скриншот, положи файл в img/ и впиши его в поле img, например img: "img/study-on.jpg"
window.PROJECTS = [
  {
    id: "name-roulette",
    title: "Нейм-рулетка",
    type: "Telegram Mini App · игра",
    cat: "telegram",
    glyph: "NR",
    c1: "#0b3b8f",
    c2: "#5b2fd0",
    featured: true,
    short: "Игра в Telegram: крутишь рулетку и собираешь юзернеймы.",
    desc: "Telegram Mini App с рулеткой юзернеймов. В игре есть рейтинг игроков, реферальная система, мини-игра «Минное поле» и покупки за Telegram Stars. Прогресс сохраняется, серверная часть работает на Cloudflare Workers и D1.",
    stack: ["HTML", "CSS", "JavaScript", "Telegram Mini App", "Cloudflare Workers", "D1"],
    links: [
      { label: "Открыть игру", url: "https://site.wsmp.workers.dev/" },
      { label: "Бот в Telegram", url: "https://t.me/NumberRollyBot" },
      { label: "Канал игры", url: "https://t.me/NameRolly" }
    ]
  },
  {
    id: "wardensmp",
    title: "WardenSMP",
    type: "Сайт и магазин сервера",
    cat: "web",
    glyph: "W",
    c1: "#0a4fa8",
    c2: "#0b1020",
    featured: true,
    short: "Сайт Minecraft-сервера с магазином, мониторингом и паспортом игрока.",
    desc: "Сайт сервера WardenSMP: каталог привилегий с корзиной и пересчётом валют, страница мониторинга онлайна, правила, программа для медиа и паспорт игрока с рейтингом по времени игры и балансу. Дизайн в фирменном синем цвете сервера, страницы переходят друг в друга плавно.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Cloudflare Workers", "D1"],
    links: [
      { label: "Открыть сайт", url: "https://site.w-smp.in" },
      { label: "Код на GitHub", url: "https://github.com/NumberRolly1111/w-smp" },
      { label: "Telegram сервера", url: "https://t.me/w_smp" }
    ]
  },
  {
    id: "study-on",
    title: "Study On",
    type: "Сайт языковой школы",
    cat: "web",
    glyph: "S",
    c1: "#1b7a6b",
    c2: "#0b2a3d",
    featured: true,
    short: "Сайт школы английского в Астане, заявки уходят в WhatsApp.",
    desc: "Сайт школы английского языка в Астане на чистых HTML, CSS и JavaScript. Данные взяты из карточки школы в 2ГИС, оформление повторяет стиль школы, заявки с сайта отправляются прямо в WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [{ label: "Код на GitHub", url: "https://github.com/NumberRolly1111/study-on" }]
  },
  {
    id: "kotiko",
    title: "Kotiko",
    type: "Сайт котокафе",
    cat: "web",
    glyph: "K",
    c1: "#c4562b",
    c2: "#3b1230",
    featured: true,
    short: "Сайт котокафе в Астане.",
    desc: "Сайт котокафе Kotiko в Астане на чистых HTML, CSS и JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Открыть сайт", url: "https://kotiko.w-smp.in" }]
  },
  {
    id: "w-plugins",
    title: "W-плагины",
    type: "Плагины для Minecraft",
    cat: "minecraft",
    glyph: "W-",
    c1: "#12722b",
    c2: "#0a1f3a",
    featured: false,
    short: "Набор плагинов для Paper: вход, модерация, проверка на читы.",
    desc: "Свои плагины для Paper в едином стиле сообщений. W-Auth отвечает за регистрацию и вход, W-ModerCommands даёт ban, mute и warn с историей наказаний в SQLite, W-Check запускает ручную проверку игрока на читы с таймером до автобана.",
    stack: ["Java", "Paper", "Maven", "SQLite"],
    links: []
  }
];

window.SERVICES = [
  { id: "landing", title: "Одностраничный лендинг", text: "Для запуска услуги, акции или продукта. Ведёт посетителя к заявке.", price: 80, days: 5 },
  { id: "multi", title: "Многостраничный сайт", text: "Полноценный сайт компании с несколькими разделами. Вызывает доверие у клиентов.", price: 160, days: 7 },
  { id: "card", title: "Сайт-визитка", text: "Компактное онлайн-представительство для специалиста или малого бизнеса.", price: 60, days: 3 },
  { id: "corp", title: "Корпоративный сайт", text: "Представительный сайт компании: услуги, команда, проекты и контакты в одной системе.", price: 160, days: 7 },
  { id: "miniapp", title: "Telegram Mini App", text: "Игра или приложение, которое открывается прямо в Telegram, с рейтингом и оплатой через Stars.", price: 130, days: 5 },
  { id: "plugin", title: "Плагин для Minecraft", text: "Плагин под ваш сервер на Paper: вход, модерация, проверки и другие механики.", price: 12, days: null }
];

window.STACK = ["HTML", "CSS", "JavaScript", "Telegram Mini App", "Telegram-боты", "Cloudflare Workers", "D1", "GitHub Pages", "Java", "Paper", "Maven", "SQLite"];

// иконки соцсетей
(function () {
  var s = function (inner, fill) { return '<svg viewBox="0 0 24 24" width="20" height="20" ' + (fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"') + ">" + inner + "</svg>"; };
  window.ICONS = {
    tg: s('<path d="M21 4 3 11l6 2.2L11 20l3-4.2 5 3.7L21 4Z"/><path d="m9 13.2 12-9.2"/>'),
    ig: s('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>'),
    tt: s('<path d="M14 4v10.2a3.6 3.6 0 1 1-3.6-3.6"/><path d="M14 4c.3 2.4 2 4 4.6 4.2"/>')
  };
})();
