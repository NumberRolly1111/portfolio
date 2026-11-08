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

window.STACK = ["HTML", "CSS", "JavaScript", "Telegram Mini App", "Telegram-боты", "Cloudflare Workers", "D1", "GitHub Pages", "Java", "Paper", "Maven", "SQLite"];
