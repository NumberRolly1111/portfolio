// данные проектов. чтобы добавить скриншот, положи файл в img/ и впиши его в поле img, например img: "img/study-on.jpg"
window.PROJECTS = [
  {
    id: "name-roulette",
    img: "img/name-roulette.jpg",
    hero: "img/name-roulette-case.jpg",
    points: ["Рейтинг игроков", "Реферальная система", "Мини-игра «Минное поле»", "Покупки за Telegram Stars", "Сохранение прогресса на Cloudflare Workers и D1"],
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
      { label: "Бот в Telegram", url: "https://t.me/NumberRollyBot" }
    ]
  },
  {
    id: "wardensmp",
    img: "img/wardensmp.jpg",
    hero: "img/wardensmp-case.jpg",
    points: ["Каталог привилегий с корзиной и пересчётом валют", "Страница мониторинга онлайна", "Правила и программа для медиа", "Паспорт игрока с рейтингом по времени игры и балансу"],
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
      { label: "Telegram сервера", url: "https://t.me/w_smp" }
    ]
  },
  {
    id: "study-on",
    img: "img/study-on.jpg",
    hero: "img/study-on-case.jpg",
    points: ["Данные из карточки школы в 2ГИС", "Оформление в стиле школы", "Заявки с сайта уходят прямо в WhatsApp"],
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
    links: []
  },
  {
    id: "kotiko",
    img: "img/kotiko.jpg",
    hero: "img/kotiko-case.jpg",
    points: ["Сайт на чистых HTML, CSS и JavaScript", "Работает на собственном домене"],
    title: "Kotiko",
    type: "Сайт котокафе",
    cat: "web",
    glyph: "K",
    c1: "#c4562b",
    c2: "#3b1230",
    featured: false,
    short: "Сайт котокафе в Астане.",
    desc: "Сайт котокафе Kotiko в Астане на чистых HTML, CSS и JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: []
  },
  {
    id: "dinastiyastomclinic",
    img: "img/dinastiyastomclinic.jpg",
    hero: "img/dinastiyastomclinic-case.jpg",
    points: ["Страницы услуг: имплантация, брекеты, лечение, ортопедия, детская стоматология", "Цены, рассрочка 0-0-24, команда и отзывы с оценками из 2ГИС", "Запись на приём и быстрая связь через WhatsApp"],
    title: "Dinastiya Stom Clinic",
    type: "Сайт стоматологии",
    cat: "web",
    glyph: "D",
    c1: "#c9a24a",
    c2: "#2a1f0b",
    featured: false,
    short: "Сайт стоматологии в Астане: услуги, цены, рассрочка и запись на приём.",
    desc: "Сайт стоматологической клиники Dinastiya Stom Clinic в Астане на чистых HTML, CSS и JavaScript. Отдельные страницы для имплантации, брекетов, лечения, ортопедии и детской стоматологии, блок с ценами и рассрочкой, команда врачей, отзывы и быстрая запись на приём. Оформление выдержано в золотых тонах логотипа клиники.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: []
  }
];

window.SERVICES = [
  { id: "landing", title: "Одностраничный лендинг", text: "Для запуска услуги, акции или продукта. Ведёт посетителя к заявке.", price: 80, days: 5 },
  { id: "multi", title: "Многостраничный сайт", text: "Полноценный сайт компании с несколькими разделами. Вызывает доверие у клиентов.", price: 160, days: 7 },
  { id: "card", title: "Сайт-визитка", text: "Компактное онлайн-представительство для специалиста или малого бизнеса.", price: 60, days: 3 },
  { id: "corp", title: "Корпоративный сайт", text: "Представительный сайт компании: услуги, команда, проекты и контакты в одной системе.", price: 160, days: 7 },
  { id: "miniapp", title: "Telegram Mini App", text: "Игра или приложение, которое открывается прямо в Telegram, с рейтингом и оплатой через Stars.", price: 130, days: 5 },
  { id: "plugin", title: "Плагин для Minecraft", text: "Плагин под ваш сервер на Paper: вход, модерация, проверки и другие механики.", price: 12, days: null },
  { id: "rework", title: "Доработка проекта", text: "Исправлю ошибки, обновлю дизайн или добавлю новые функции в готовый сайт, приложение или бота.", price: 30, days: 3 }
];

window.STACK = ["HTML", "CSS", "JavaScript", "Telegram Mini App", "Telegram-боты", "Cloudflare Workers", "D1", "GitHub Pages", "Java", "Paper", "Maven", "SQLite"];

// иконки соцсетей
(function () {
  var s = function (inner, fill) { return '<svg viewBox="0 0 24 24" width="20" height="20" ' + (fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"') + ">" + inner + "</svg>"; };
  window.ICONS = {
    tg: s('<path d="M21 4 3 11l6 2.2L11 20l3-4.2 5 3.7L21 4Z"/><path d="m9 13.2 12-9.2"/>'),
    ig: s('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>'),
    wa: s('<path d="M3.5 20.5l1.4-4.6A8.5 8.5 0 1 1 8.2 19.2l-4.7 1.3Z"/><path d="M9.2 8.8c.2 2.2 2.8 4.8 5 5l1.2-1.2-1.7-1-.8.7c-.8-.3-1.4-.9-1.7-1.7l.7-.8-1-1.7-1.7 1.7Z"/>'),
    tt: s('<path d="M14 4v10.2a3.6 3.6 0 1 1-3.6-3.6"/><path d="M14 4c.3 2.4 2 4 4.6 4.2"/>')
  };
})();
