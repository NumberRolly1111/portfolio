// переводы интерфейса. ключ: русский текст, значение: [казахский, английский]
// язык хранится в localStorage ("gws-lang"), переключается кнопками в шапке или ссылкой ?lang=kk
(function () {
  "use strict";

  var T = {
    /* ---------- навигация и общие элементы ---------- */
    "Главная": ["Басты бет", "Home"],
    "Услуги": ["Қызметтер", "Services"],
    "Портфолио": ["Портфолио", "Portfolio"],
    "Обо мне": ["Мен туралы", "About"],
    "Контакты": ["Байланыс", "Contacts"],
    "Обсудить проект": ["Жобаны талқылау", "Discuss a project"],
    "Обсудить проект →": ["Жобаны талқылау →", "Discuss a project →"],
    "Меню": ["Мәзір", "Menu"],
    "Закрыть": ["Жабу", "Close"],
    "Открыть меню": ["Мәзірді ашу", "Open menu"],
    "Закрыть меню": ["Мәзірді жабу", "Close menu"],
    "Основное меню": ["Негізгі мәзір", "Main menu"],
    "Разделы": ["Бөлімдер", "Sections"],
    "Язык": ["Тіл", "Language"],
    "на главную": ["басты бетке", "home"],
    "Создано": ["Жасаған", "Created by"],
    "Политика конфиденциальности": ["Құпиялылық саясаты", "Privacy policy"],
    "Делаю современные сайты для бизнеса в Казахстане и России: от первой идеи до результата, который приводит клиентов и заявки.": [
      "Қазақстан мен Ресейдегі бизнеске арналған заманауи сайттар жасаймын: алғашқы идеядан клиенттер мен өтінімдер әкелетін нәтижеге дейін.",
      "I build modern websites for businesses in Kazakhstan and Russia: from the first idea to a result that brings in clients and leads."
    ],

    /* ---------- слова на фоне заголовков ---------- */
    "Работы": ["Жұмыстар", "Work"],
    "Вопросы": ["Сұрақтар", "FAQ"],
    "Навыки": ["Дағдылар", "Skills"],
    "Этапы": ["Кезеңдер", "Steps"],
    "Квиз": ["Квиз", "Quiz"],
    "Ошибка": ["Қате", "Error"],
    "Кейс": ["Кейс", "Case"],
    "Политика": ["Саясат", "Policy"],

    /* ---------- заголовки и описания страниц ---------- */
    "GwebStudio — сайты и игры для Telegram Mini App": ["GwebStudio — сайттар мен Telegram Mini App ойындары", "GwebStudio — websites and Telegram Mini App games"],
    "Дизайнер и разработчик из Астаны. Делаю сайты на чистом коде, игры для Telegram Mini App и плагины для Minecraft.": [
      "Астанадан келген дизайнер және әзірлеуші. Таза кодпен сайттар, Telegram Mini App ойындарын және Minecraft плагиндерін жасаймын.",
      "Designer and developer from Astana. I build hand-coded websites, Telegram Mini App games and Minecraft plugins."
    ],
    "Услуги — GwebStudio": ["Қызметтер — GwebStudio", "Services — GwebStudio"],
    "Услуги: лендинг от $80, многостраничный сайт от $160, визитка от $60, корпоративный сайт от $160, Telegram Mini App от $130, плагин для Minecraft от $12, доработка проекта от $30.": [
      "Қызметтер: лендинг $80 бастап, көпбетті сайт $160 бастап, визитка $60 бастап, корпоративтік сайт $160 бастап, Telegram Mini App $130 бастап, Minecraft плагині $12 бастап, жобаны жетілдіру $30 бастап.",
      "Services: landing page from $80, multi-page website from $160, business card site from $60, corporate website from $160, Telegram Mini App from $130, Minecraft plugin from $12, project rework from $30."
    ],
    "Портфолио — GwebStudio": ["Портфолио — GwebStudio", "Portfolio — GwebStudio"],
    "Работы GwebStudio: сайты для бизнеса, игры для Telegram Mini App, боты и плагины для Minecraft.": [
      "GwebStudio жұмыстары: бизнеске арналған сайттар, Telegram Mini App ойындары, боттар және Minecraft плагиндері.",
      "GwebStudio work: business websites, Telegram Mini App games, bots and Minecraft plugins."
    ],
    "Обо мне — GwebStudio": ["Мен туралы — GwebStudio", "About — GwebStudio"],
    "GwebStudio: дизайнер и разработчик из Астаны. Делаю сайты, игры для Telegram Mini App, боты и плагины.": [
      "GwebStudio: Астанадан келген дизайнер және әзірлеуші. Сайттар, Telegram Mini App ойындары, боттар және плагиндер жасаймын.",
      "GwebStudio: designer and developer from Astana. I make websites, Telegram Mini App games, bots and plugins."
    ],
    "Контакты — GwebStudio": ["Байланыс — GwebStudio", "Contacts — GwebStudio"],
    "Связаться с GwebStudio: Telegram, WhatsApp, Instagram и квиз для обсуждения проекта.": [
      "GwebStudio-мен байланысу: Telegram, WhatsApp, Instagram және жобаны талқылауға арналған квиз.",
      "Contact GwebStudio: Telegram, WhatsApp, Instagram and a quiz to discuss your project."
    ],
    "Обсудить проект — GwebStudio": ["Жобаны талқылау — GwebStudio", "Discuss a project — GwebStudio"],
    "Ответьте на несколько вопросов, и я пойму, какой сайт, приложение или плагин вам нужен.": [
      "Бірнеше сұраққа жауап беріңіз, мен сізге қандай сайт, қосымша немесе плагин керек екенін түсінемін.",
      "Answer a few questions and I will understand what kind of website, app or plugin you need."
    ],
    "Страница не найдена — GwebStudio": ["Бет табылмады — GwebStudio", "Page not found — GwebStudio"],
    "Политика конфиденциальности — GwebStudio": ["Құпиялылық саясаты — GwebStudio", "Privacy policy — GwebStudio"],
    "Какие данные использует сайт GwebStudio и как они хранятся.": [
      "GwebStudio сайты қандай деректерді пайдаланады және олар қалай сақталады.",
      "What data the GwebStudio website uses and how it is stored."
    ],

    /* ---------- главная ---------- */
    "Дизайн и разработка · Астана": ["Дизайн және әзірлеу · Астана", "Design and development · Astana"],
    "Сайты и Telegram-игры, в которые хочется возвращаться": ["Қайта оралғың келетін сайттар мен Telegram ойындары", "Websites and Telegram games you want to come back to"],
    "Делаю сайты для бизнеса в Казахстане и России. Они не только хорошо выглядят, но и работают на результат: показывают, чем вы полезны, вызывают доверие и превращают посетителей в заявки.": [
      "Қазақстан мен Ресейдегі бизнеске сайттар жасаймын. Олар тек әдемі көрінбейді, нәтиже береді: сізге не үшін керек екенін көрсетеді, сенім тудырады және келушілерді өтінімге айналдырады.",
      "I build websites for businesses in Kazakhstan and Russia. They do not just look good, they deliver results: they show how you are useful, build trust and turn visitors into leads."
    ],
    "Смотреть работы": ["Жұмыстарды көру", "View work"],
    "Написать в Telegram": ["Telegram-ға жазу", "Message on Telegram"],
    "Принимаю проекты": ["Жобаларды қабылдаймын", "Open for projects"],
    "Астана, Казахстан": ["Астана, Қазақстан", "Astana, Kazakhstan"],
    "Избранные работы": ["Таңдаулы жұмыстар", "Selected work"],
    "Сайты, игры и плагины. Нажмите на проект, чтобы открыть подробный кейс.": [
      "Сайттар, ойындар және плагиндер. Толық кейсті ашу үшін жобаны басыңыз.",
      "Websites, games and plugins. Click a project to open the full case."
    ],
    "Всё портфолио": ["Барлық портфолио", "Full portfolio"],
    "Что вам нужно сделать?": ["Сізге не жасау керек?", "What do you need built?"],
    "Выберите формат под задачу: в карточке указаны цена и сроки. Если сомневаетесь, квиз поможет определиться.": [
      "Міндетке сай формат таңдаңыз: карточкада баға мен мерзім көрсетілген. Күмәндансаңыз, квиз таңдауға көмектеседі.",
      "Pick a format for your task: each card shows the price and timing. If you are unsure, the quiz will help you decide."
    ],
    "Все услуги": ["Барлық қызметтер", "All services"],
    "Частые вопросы": ["Жиі қойылатын сұрақтар", "Frequently asked questions"],
    "Не нашли ответа? Заполните квиз или напишите в Telegram.": [
      "Жауап таппадыңыз ба? Квизді толтырыңыз немесе Telegram-ға жазыңыз.",
      "Did not find an answer? Fill in the quiz or message me on Telegram."
    ],
    "Сколько стоит сайт?": ["Сайт қанша тұрады?", "How much does a website cost?"],
    "Зависит от типа сайта и задачи. Ориентиры «от» указаны в карточках услуг: например, сайт-визитка — от $60, лендинг — от $80. Точную стоимость называю после того, как обсудим проект.": [
      "Сайт түріне және міндетке байланысты. «Бастап» бағасы қызмет карточкаларында көрсетілген: мысалы, визитка-сайт — $60 бастап, лендинг — $80 бастап. Нақты құнын жобаны талқылағаннан кейін айтамын.",
      "It depends on the type of site and the task. Starting prices are shown on the service cards: for example, a business card site from $60, a landing page from $80. I give the exact price after we discuss the project."
    ],
    "Сколько времени занимает разработка?": ["Әзірлеу қанша уақыт алады?", "How long does development take?"],
    "Сайт-визитка — от 3 дней, лендинг и Telegram Mini App — от 5, многостраничный и корпоративный сайт — от 7. Точный срок называю после обсуждения задачи.": [
      "Визитка-сайт — 3 күннен бастап, лендинг және Telegram Mini App — 5 күннен, көпбетті және корпоративтік сайт — 7 күннен. Нақты мерзімді міндетті талқылағаннан кейін айтамын.",
      "A business card site takes from 3 days, a landing page and a Telegram Mini App from 5, a multi-page or corporate site from 7. I give the exact timing after we discuss the task."
    ],
    "На чём вы делаете сайты?": ["Сайттарды немен жасайсыз?", "What do you build websites with?"],
    "На чистом HTML, CSS и JavaScript, без конструкторов. Так сайт быстро открывается и его легко менять. Размещаю на GitHub Pages или Cloudflare.": [
      "Таза HTML, CSS және JavaScript-пен, конструкторларсыз. Сайт тез ашылады және оны өзгерту оңай. GitHub Pages немесе Cloudflare-де орналастырамын.",
      "With plain HTML, CSS and JavaScript, no site builders. This way the site opens fast and is easy to change. I host it on GitHub Pages or Cloudflare."
    ],
    "Смогу ли я вносить правки по ходу работы?": ["Жұмыс барысында түзетулер енгізе аламын ба?", "Can I request changes along the way?"],
    "Да. Сначала согласуем структуру, потом внешний вид, и вы видите результат на каждом шаге.": [
      "Иә. Алдымен құрылымды, содан кейін сыртқы түрін келісеміз, сіз нәтижені әр қадамда көресіз.",
      "Yes. First we agree on the structure, then on the look, and you see the result at every step."
    ],
    "Делаете ли вы игры для Telegram?": ["Telegram үшін ойындар жасайсыз ба?", "Do you make games for Telegram?"],
    "Да, это одно из моих основных направлений. Например, Нейм-рулетка: игра внутри Telegram с рейтингом, рефералами и покупками за Stars.": [
      "Иә, бұл менің негізгі бағыттарымның бірі. Мысалы, Нейм-рулетка: рейтингі, рефералдары және Stars арқылы сатып алулары бар Telegram ішіндегі ойын.",
      "Yes, it is one of my main directions. For example, Name Roulette: a game inside Telegram with a leaderboard, referrals and purchases with Stars."
    ],
    "Как с вами связаться?": ["Сізбен қалай байланысуға болады?", "How can I contact you?"],
    "Проще всего написать в Telegram: @ddwwks или в WhatsApp: +7 775 121 32 71. Можно также пройти квиз, и я получу готовое описание вашей задачи.": [
      "Ең оңайы Telegram-ға жазу: @ddwwks немесе WhatsApp-қа: +7 775 121 32 71. Сондай-ақ квизден өтуге болады, сонда мен тапсырманың дайын сипаттамасын аламын.",
      "The easiest way is Telegram: @ddwwks or WhatsApp: +7 775 121 32 71. You can also take the quiz and I will get a ready description of your task."
    ],

    /* ---------- услуги ---------- */
    "Что я могу сделать для вас": ["Мен сіз үшін не істей аламын", "What I can do for you"],
    "Беру проект целиком: придумываю структуру, рисую дизайн, пишу код и запускаю. В карточках указаны минимальная цена и срок, точную стоимость называю после обсуждения.": [
      "Жобаны толық алам: құрылымын ойлап табамын, дизайнын салам, код жазамын және іске қосамын. Карточкаларда ең төменгі баға мен мерзім көрсетілген, нақты құнын талқылағаннан кейін айтамын.",
      "I take the project end to end: I plan the structure, design it, write the code and launch it. Cards show the minimum price and timing; I give the exact cost after we talk."
    ],
    "Как проходит работа": ["Жұмыс қалай жүреді", "How the work goes"],
    "Пять шагов от первого сообщения до запуска.": ["Алғашқы хабарламадан іске қосуға дейінгі бес қадам.", "Five steps from the first message to launch."],
    "Бриф": ["Бриф", "Brief"],
    "Вы описываете задачу, я задаю уточняющие вопросы.": ["Сіз міндетті сипаттайсыз, мен нақтылайтын сұрақтар қоям.", "You describe the task, I ask clarifying questions."],
    "Структура": ["Құрылым", "Structure"],
    "Согласуем, какие страницы и блоки нужны.": ["Қандай беттер мен блоктар керек екенін келісеміз.", "We agree on which pages and blocks are needed."],
    "Дизайн": ["Дизайн", "Design"],
    "Показываю стиль и анимации, вносим правки.": ["Стиль мен анимацияларды көрсетемін, түзетулер енгіземіз.", "I show the style and animations, we make edits."],
    "Разработка": ["Әзірлеу", "Development"],
    "Пишу код и проверяю сайт на телефоне и компьютере.": ["Код жазамын және сайтты телефон мен компьютерде тексеремін.", "I write the code and test the site on phone and desktop."],
    "Запуск": ["Іске қосу", "Launch"],
    "Размещаю сайт, подключаю домен и передаю вам доступ.": ["Сайтты орналастырамын, доменді қосамын және қолжетімділікті тапсырамын.", "I publish the site, connect the domain and hand over access."],

    "Одностраничный лендинг": ["Бір беттік лендинг", "One-page landing"],
    "Для запуска услуги, акции или продукта. Ведёт посетителя к заявке.": ["Қызметті, акцияны немесе өнімді іске қосуға арналған. Келушіні өтінімге жетелейді.", "For launching a service, promotion or product. Leads the visitor to a request."],
    "Многостраничный сайт": ["Көпбетті сайт", "Multi-page website"],
    "Полноценный сайт компании с несколькими разделами. Вызывает доверие у клиентов.": ["Бірнеше бөлімі бар компанияның толыққанды сайты. Клиенттерде сенім тудырады.", "A full company website with several sections. Builds trust with clients."],
    "Сайт-визитка": ["Визитка-сайт", "Business card site"],
    "Компактное онлайн-представительство для специалиста или малого бизнеса.": ["Маманға немесе шағын бизнеске арналған шағын онлайн-өкілдік.", "A compact online presence for a specialist or small business."],
    "Корпоративный сайт": ["Корпоративтік сайт", "Corporate website"],
    "Представительный сайт компании: услуги, команда, проекты и контакты в одной системе.": ["Компанияның көрнекті сайты: қызметтер, команда, жобалар және байланыстар бір жүйеде.", "A representative company site: services, team, projects and contacts in one system."],
    "Telegram Mini App": ["Telegram Mini App", "Telegram Mini App"],
    "Игра или приложение, которое открывается прямо в Telegram, с рейтингом и оплатой через Stars.": ["Telegram ішінде тікелей ашылатын ойын немесе қосымша, рейтингпен және Stars арқылы төлеммен.", "A game or app that opens right inside Telegram, with a leaderboard and payments via Stars."],
    "Плагин для Minecraft": ["Minecraft плагині", "Minecraft plugin"],
    "Плагин под ваш сервер на Paper: вход, модерация, проверки и другие механики.": ["Paper-дегі сервериңізге арналған плагин: кіру, модерация, тексерулер және басқа механикалар.", "A plugin for your Paper server: login, moderation, checks and other mechanics."],
    "Доработка проекта": ["Жобаны жетілдіру", "Project rework"],
    "Исправлю ошибки, обновлю дизайн или добавлю новые функции в готовый сайт, приложение или бота.": ["Қателерді түзетемін, дизайнды жаңартамын немесе дайын сайтқа, қосымшаға не ботқа жаңа функциялар қосамын.", "I fix bugs, refresh the design or add new features to an existing site, app or bot."],
    "срок обсуждается": ["мерзімі талқыланады", "timing to be discussed"],
    "Не знаете, что выбрать?": ["Нені таңдарыңызды білмейсіз бе?", "Not sure what to choose?"],
    "Ответьте на несколько вопросов, и по ответам я подскажу подходящий формат.": ["Бірнеше сұраққа жауап беріңіз, жауаптарыңыз бойынша қолайлы форматты ұсынамын.", "Answer a few questions and I will suggest a suitable format."],
    "Пройти квиз": ["Квизден өту", "Take the quiz"],

    /* ---------- портфолио и кейсы ---------- */
    "Сайты, игры, боты и плагины. Нажмите на любую работу, чтобы открыть кейс с описанием, технологиями и ссылками.": [
      "Сайттар, ойындар, боттар және плагиндер. Сипаттамасы, технологиялары және сілтемелері бар кейсті ашу үшін кез келген жұмысты басыңыз.",
      "Websites, games, bots and plugins. Click any project to open the case with a description, technologies and links."
    ],
    "Все": ["Барлығы", "All"],
    "Сайты": ["Сайттар", "Websites"],
    "Telegram": ["Telegram", "Telegram"],
    "Minecraft": ["Minecraft", "Minecraft"],
    "Нейм-рулетка": ["Нейм-рулетка", "Name Roulette"],
    "Telegram Mini App · игра": ["Telegram Mini App · ойын", "Telegram Mini App · game"],
    "Игра в Telegram: крутишь рулетку и собираешь юзернеймы.": ["Telegram-дағы ойын: рулетканы айналдырып, юзернеймдер жинайсың.", "A Telegram game: spin the roulette and collect usernames."],
    "Telegram Mini App с рулеткой юзернеймов. В игре есть рейтинг игроков, реферальная система, мини-игра «Минное поле» и покупки за Telegram Stars. Прогресс сохраняется, серверная часть работает на Cloudflare Workers и D1.": [
      "Юзернейм рулеткасы бар Telegram Mini App. Ойында ойыншылар рейтингі, реферал жүйесі, «Минное поле» шағын ойыны және Telegram Stars арқылы сатып алулар бар. Прогресс сақталады, сервер бөлігі Cloudflare Workers және D1 негізінде жұмыс істейді.",
      "A Telegram Mini App with a username roulette. The game has a player leaderboard, a referral system, a Minesweeper mini-game and purchases with Telegram Stars. Progress is saved, and the server side runs on Cloudflare Workers and D1."
    ],
    "Рейтинг игроков": ["Ойыншылар рейтингі", "Player leaderboard"],
    "Реферальная система": ["Реферал жүйесі", "Referral system"],
    "Мини-игра «Минное поле»": ["«Минное поле» шағын ойыны", "“Minefield” mini-game"],
    "Покупки за Telegram Stars": ["Telegram Stars арқылы сатып алулар", "Purchases with Telegram Stars"],
    "Сохранение прогресса на Cloudflare Workers и D1": ["Cloudflare Workers және D1 арқылы прогресті сақтау", "Progress saved with Cloudflare Workers and D1"],
    "Открыть игру": ["Ойынды ашу", "Open the game"],
    "Бот в Telegram": ["Telegram-дағы бот", "Telegram bot"],
    "Канал игры": ["Ойын арнасы", "Game channel"],

    "WardenSMP": ["WardenSMP", "WardenSMP"],
    "Сайт и магазин сервера": ["Сервердің сайты мен дүкені", "Server website and store"],
    "Сайт Minecraft-сервера с магазином, мониторингом и паспортом игрока.": ["Дүкені, мониторингі және ойыншы паспорты бар Minecraft-сервер сайты.", "A Minecraft server website with a store, monitoring and a player passport."],
    "Сайт сервера WardenSMP: каталог привилегий с корзиной и пересчётом валют, страница мониторинга онлайна, правила, программа для медиа и паспорт игрока с рейтингом по времени игры и балансу. Дизайн в фирменном синем цвете сервера, страницы переходят друг в друга плавно.": [
      "WardenSMP сервері сайты: себеті мен валюта қайта есептеуі бар привилегиялар каталогы, онлайн мониторинг беті, ережелер, медиа бағдарламасы және ойын уақыты мен баланс бойынша рейтингі бар ойыншы паспорты. Дизайн сервердің фирмалық көк түсінде, беттер бір-біріне баяу ауысады.",
      "The WardenSMP server website: a privilege catalog with a cart and currency conversion, an online monitoring page, rules, a media program and a player passport with rankings by playtime and balance. The design uses the server's signature blue, and pages transition smoothly."
    ],
    "Каталог привилегий с корзиной и пересчётом валют": ["Себеті мен валюта қайта есептеуі бар привилегиялар каталогы", "Privilege catalog with a cart and currency conversion"],
    "Страница мониторинга онлайна": ["Онлайн мониторинг беті", "Online monitoring page"],
    "Правила и программа для медиа": ["Ережелер және медиа бағдарламасы", "Rules and a media program"],
    "Паспорт игрока с рейтингом по времени игры и балансу": ["Ойын уақыты мен баланс бойынша рейтингі бар ойыншы паспорты", "Player passport with rankings by playtime and balance"],
    "Открыть сайт": ["Сайтты ашу", "Open the site"],
    "Код на GitHub": ["GitHub-тағы код", "Code on GitHub"],
    "Telegram сервера": ["Сервер Telegram-ы", "Server Telegram"],

    "Study On": ["Study On", "Study On"],
    "Сайт языковой школы": ["Тіл мектебінің сайты", "Language school website"],
    "Сайт школы английского в Астане, заявки уходят в WhatsApp.": ["Астанадағы ағылшын тілі мектебінің сайты, өтінімдер WhatsApp-қа түседі.", "Website of an English school in Astana, requests go to WhatsApp."],
    "Сайт школы английского языка в Астане на чистых HTML, CSS и JavaScript. Данные взяты из карточки школы в 2ГИС, оформление повторяет стиль школы, заявки с сайта отправляются прямо в WhatsApp.": [
      "Астанадағы ағылшын тілі мектебінің таза HTML, CSS және JavaScript-те жасалған сайты. Деректер 2ГИС-тегі мектеп карточкасынан алынған, безендіру мектеп стилін қайталайды, сайттан өтінімдер тікелей WhatsApp-қа жіберіледі.",
      "A website for an English language school in Astana in plain HTML, CSS and JavaScript. The data comes from the school's 2GIS listing, the design follows the school's style, and requests from the site go straight to WhatsApp."
    ],
    "Данные из карточки школы в 2ГИС": ["Деректер 2ГИС-тегі мектеп карточкасынан", "Data from the school's 2GIS listing"],
    "Оформление в стиле школы": ["Мектеп стиліндегі безендіру", "Design in the school's style"],
    "Заявки с сайта уходят прямо в WhatsApp": ["Сайттан өтінімдер тікелей WhatsApp-қа түседі", "Requests from the site go straight to WhatsApp"],

    "Kotiko": ["Kotiko", "Kotiko"],
    "Сайт котокафе": ["Котокафе сайты", "Cat cafe website"],
    "Сайт котокафе в Астане.": ["Астанадағы котокафе сайты.", "A website for a cat cafe in Astana."],
    "Сайт котокафе Kotiko в Астане на чистых HTML, CSS и JavaScript.": ["Астанадағы Kotiko котокафесінің таза HTML, CSS және JavaScript-те жасалған сайты.", "A website for the Kotiko cat cafe in Astana in plain HTML, CSS and JavaScript."],
    "Сайт на чистых HTML, CSS и JavaScript": ["Таза HTML, CSS және JavaScript-те жасалған сайт", "A site in plain HTML, CSS and JavaScript"],
    "Работает на собственном домене": ["Өз доменінде жұмыс істейді", "Runs on its own domain"],

    "W-плагины": ["W-плагиндер", "W-plugins"],
    "Плагины для Minecraft": ["Minecraft плагиндері", "Minecraft plugins"],
    "Набор плагинов для Paper: вход, модерация, проверка на читы.": ["Paper-ге арналған плагиндер жиынтығы: кіру, модерация, чит тексеруі.", "A set of plugins for Paper: login, moderation, cheat checks."],
    "Свои плагины для Paper в едином стиле сообщений. W-Auth отвечает за регистрацию и вход, W-ModerCommands даёт ban, mute и warn с историей наказаний в SQLite, W-Check запускает ручную проверку игрока на читы с таймером до автобана.": [
      "Хабарламалардың бірыңғай стиліндегі Paper-ге арналған өз плагиндерім. W-Auth тіркелу мен кіруге жауап береді, W-ModerCommands SQLite-тағы жаза тарихымен ban, mute және warn береді, W-Check ойыншыны чит бойынша қолмен тексеруді автобанға дейінгі таймермен іске қосады.",
      "My own plugins for Paper with a consistent message style. W-Auth handles registration and login, W-ModerCommands provides ban, mute and warn with a punishment history in SQLite, W-Check starts a manual cheat check on a player with a timer before an automatic ban."
    ],
    "W-Auth: регистрация и вход": ["W-Auth: тіркелу және кіру", "W-Auth: registration and login"],
    "W-ModerCommands: ban, mute и warn с историей в SQLite": ["W-ModerCommands: SQLite-тағы тарихы бар ban, mute және warn", "W-ModerCommands: ban, mute and warn with a history in SQLite"],
    "W-Check: ручная проверка на читы с таймером до автобана": ["W-Check: автобанға дейінгі таймері бар чит бойынша қолмен тексеру", "W-Check: manual cheat check with a timer before an automatic ban"],

    "Что внутри": ["Ішінде не бар", "What is inside"],
    "Технологии": ["Технологиялар", "Technologies"],
    "Год": ["Жыл", "Year"],
    "Предыдущий проект": ["Алдыңғы жоба", "Previous project"],
    "Нужен похожий проект?": ["Осыған ұқсас жоба керек пе?", "Need a similar project?"],
    "Расскажите о задаче, и я предложу подходящий формат и следующий шаг.": ["Міндет туралы айтыңыз, мен қолайлы формат пен келесі қадамды ұсынамын.", "Tell me about your task and I will suggest a suitable format and the next step."],
    "Тип проекта": ["Жоба түрі", "Project type"],
    "Ссылки": ["Сілтемелер", "Links"],
    "Публичной ссылки пока нет.": ["Ашық сілтеме әзірге жоқ.", "There is no public link yet."],
    "Следующий проект": ["Келесі жоба", "Next project"],
    "Все работы": ["Барлық жұмыстар", "All work"],

    /* ---------- обо мне ---------- */
    "Я дизайнер и разработчик": ["Мен дизайнер және әзірлеушімін", "I am a designer and developer"],
    "Астана": ["Астана", "Astana"],
    "Я GwebStudio: дизайнер и разработчик из Астаны, делаю сайты и игры для Telegram. Мне нравится, когда у проекта есть свой характер, поэтому я не беру готовые шаблоны: сам подбираю цвета, шрифты и анимации под каждую тему.": [
      "Мен GwebStudio: Астанадан келген дизайнер және әзірлеушімін, сайттар мен Telegram ойындарын жасаймын. Жобаның өз мінезі болғаны ұнайды, сондықтан дайын шаблондарды алмаймын: түстерді, қаріптерді және анимацияларды әр тақырыпқа өзім таңдаймын.",
      "I am GwebStudio: a designer and developer from Astana, making websites and Telegram games. I like a project to have its own character, so I do not use ready-made templates: I choose colors, fonts and animations for each topic myself."
    ],
    "Работаю и в дизайне, и в разработке, поэтому не теряю время на передачу задачи между людьми. Вы общаетесь с одним человеком, который отвечает за результат целиком.": [
      "Дизайнда да, әзірлеуде де жұмыс істеймін, сондықтан міндетті адамдар арасында беруге уақыт жоғалтпаймын. Сіз нәтижеге толық жауап беретін бір адаммен сөйлесесіз.",
      "I work in both design and development, so no time is lost handing the task between people. You talk to one person who is responsible for the whole result."
    ],
    "Мои проекты: сайты для школы английского и котокафе, магазин и паспорт игрока для Minecraft-сервера, а также Telegram Mini App «Нейм-рулетка».": [
      "Менің жобаларым: ағылшын тілі мектебі мен котокафеге арналған сайттар, Minecraft-серверге арналған дүкен және ойыншы паспорты, сондай-ақ «Нейм-рулетка» Telegram Mini App.",
      "My projects: websites for an English school and a cat cafe, a store and player passport for a Minecraft server, and the Telegram Mini App “Name Roulette”."
    ],
    "Роль": ["Рөлі", "Role"],
    "Дизайнер и разработчик": ["Дизайнер және әзірлеуші", "Designer and developer"],
    "Город": ["Қала", "City"],
    "Направления": ["Бағыттар", "Focus"],
    "Сайты, Telegram Mini App, боты, плагины": ["Сайттар, Telegram Mini App, боттар, плагиндер", "Websites, Telegram Mini App, bots, plugins"],
    "Instagram и TikTok": ["Instagram және TikTok", "Instagram and TikTok"],
    "Чем я работаю": ["Мен немен жұмыс істеймін", "What I work with"],
    "Инструменты, которыми собраны проекты из портфолио.": ["Портфолиодағы жобалар құрастырылған құралдар.", "The tools behind the projects in the portfolio."],
    "HTML и CSS": ["HTML және CSS", "HTML and CSS"],
    "JavaScript": ["JavaScript", "JavaScript"],
    "Адаптивная вёрстка": ["Адаптивті верстка", "Responsive layout"],
    "GitHub Pages": ["GitHub Pages", "GitHub Pages"],
    "Telegram и серверы": ["Telegram және серверлер", "Telegram and servers"],
    "Telegram-боты": ["Telegram-боттар", "Telegram bots"],
    "Ссылка": ["Сілтеме", "Link"],
    "Telegram-боты и Stars": ["Telegram-боттар және Stars", "Telegram bots and Stars"],
    "Cloudflare Workers": ["Cloudflare Workers", "Cloudflare Workers"],
    "Базы D1": ["D1 базалары", "D1 databases"],
    "Java": ["Java", "Java"],
    "Paper и Maven": ["Paper және Maven", "Paper and Maven"],
    "SQLite": ["SQLite", "SQLite"],
    "Сайты для серверов": ["Серверлерге арналған сайттар", "Websites for servers"],

    /* ---------- контакты ---------- */
    "Давайте обсудим ваш проект": ["Жобаңызды талқылайық", "Let us discuss your project"],
    "Напишите мне в Telegram или WhatsApp, либо ответьте на несколько вопросов в квизе, и я получу готовое описание задачи.": [
      "Маған Telegram немесе WhatsApp-қа жазыңыз, не болмаса квизде бірнеше сұраққа жауап беріңіз, сонда мен міндеттің дайын сипаттамасын аламын.",
      "Message me on Telegram or WhatsApp, or answer a few questions in the quiz, and I will get a ready description of your task."
    ],
    "Семь коротких вопросов о вашем проекте": ["Жобаңыз туралы жеті қысқа сұрақ", "Seven short questions about your project"],

    /* ---------- 404 ---------- */
    "Такой страницы нет. Возможно, ссылка устарела.": ["Мұндай бет жоқ. Мүмкін, сілтеме ескірген.", "This page does not exist. The link may be out of date."],
    "На главную": ["Басты бетке", "Back to home"],

    /* ---------- политика конфиденциальности ---------- */
    "Эта страница объясняет, какие данные использует сайт GwebStudio и как они хранятся. Обновлено 8 ноября 2026.": [
      "Бұл бет GwebStudio сайты қандай деректерді пайдаланатынын және олардың қалай сақталатынын түсіндіреді. 2026 жылғы 8 қарашада жаңартылды.",
      "This page explains what data the GwebStudio website uses and how it is stored. Updated November 8, 2026."
    ],
    "Кто отвечает за сайт": ["Сайт үшін кім жауап береді", "Who runs the site"],
    "Сайт ведёт GwebStudio (Астана, Казахстан). По вопросам о данных пишите в Telegram @ddwwks или в WhatsApp +7 775 121 32 71.": [
      "Сайтты GwebStudio жүргізеді (Астана, Қазақстан). Деректер туралы сұрақтар бойынша Telegram @ddwwks немесе WhatsApp +7 775 121 32 71 нөміріне жазыңыз.",
      "The site is run by GwebStudio (Astana, Kazakhstan). For questions about data, write on Telegram @ddwwks or WhatsApp +7 775 121 32 71."
    ],
    "Какие данные есть на сайте": ["Сайтта қандай деректер бар", "What data the site has"],
    "На сайте нет аккаунтов, форм с отправкой на сервер, рекламных трекеров и аналитики. Сайт не сохраняет ваши данные на своих серверах.": [
      "Сайтта аккаунттар, серверге жіберілетін формалар, жарнамалық трекерлер және аналитика жоқ. Сайт сіздің деректеріңізді өз серверлерінде сақтамайды.",
      "The site has no accounts, no forms that send data to a server, no advertising trackers and no analytics. The site does not store your data on its own servers."
    ],
    "Квиз и заявка": ["Квиз және өтінім", "Quiz and request"],
    "В квизе вы вводите имя, контакт и описание проекта. Эти ответы остаются в вашем браузере. Когда вы нажимаете «Отправить», сайт собирает текст сообщения и открывает Telegram с этим текстом. Сообщение попадает ко мне, только если вы сами отправите его в Telegram или WhatsApp.": [
      "Квизде сіз атыңызды, байланысты және жоба сипаттамасын енгізесіз. Бұл жауаптар браузеріңізде қалады. «Жіберу» түймесін басқанда, сайт хабарлама мәтінін жинап, Telegram-ды осы мәтінмен ашады. Хабарлама маған тек сіз оны Telegram немесе WhatsApp-қа өзіңіз жіберсеңіз ғана түседі.",
      "In the quiz you enter your name, contact and a project description. These answers stay in your browser. When you press “Send”, the site assembles the message text and opens Telegram with it. The message reaches me only if you send it yourself in Telegram or WhatsApp."
    ],
    "Что сохраняется в браузере": ["Браузерде не сақталады", "What is saved in your browser"],
    "Для работы сайта используется память браузера: выбранный язык интерфейса и отметка о том, что вы уже видели заставку при первом заходе. Это не персональные данные, их можно удалить в настройках браузера.": [
      "Сайт жұмысы үшін браузер жады қолданылады: таңдалған интерфейс тілі және алғашқы кіргенде қосылу экранын көргеніңіз туралы белгі. Бұл жеке деректер емес, оларды браузер баптауларында жоюға болады.",
      "The site uses browser storage for the interface language you chose and a mark that you have already seen the intro screen on your first visit. This is not personal data and you can delete it in your browser settings."
    ],
    "Сторонние сервисы": ["Үшінші тарап сервистері", "Third-party services"],
    "Шрифты загружаются с Google Fonts, поэтому браузер обращается к серверам Google. Сайт размещён на GitHub Pages, и хостинг может записывать технические данные запросов, например IP-адрес. Ссылки на Telegram, WhatsApp, Instagram, TikTok и GitHub ведут на сторонние сайты со своими правилами.": [
      "Қаріптер Google Fonts-тан жүктеледі, сондықтан браузер Google серверлеріне жүгінеді. Сайт GitHub Pages-те орналасқан, хостинг сұраулардың техникалық деректерін, мысалы IP-мекенжайды жазуы мүмкін. Telegram, WhatsApp, Instagram, TikTok және GitHub-қа сілтемелер өз ережелері бар үшінші тарап сайттарына апарады.",
      "Fonts are loaded from Google Fonts, so your browser contacts Google servers. The site is hosted on GitHub Pages, and the host may record technical request data such as the IP address. Links to Telegram, WhatsApp, Instagram, TikTok and GitHub lead to third-party sites with their own rules."
    ],
    "Как использую данные из заявки": ["Өтінімдегі деректерді қалай қолданамын", "How I use request data"],
    "Информацию из сообщения использую только для того, чтобы ответить вам и обсудить проект. Не передаю её третьим лицам и не использую для рассылок.": [
      "Хабарламадағы ақпаратты тек сізге жауап беру және жобаны талқылау үшін қолданамын. Оны үшінші тұлғаларға бермеймін және тарату үшін пайдаланбаймын.",
      "I use the information from your message only to reply and discuss the project. I do not share it with third parties or use it for mailings."
    ],
    "Ваши права": ["Сіздің құқықтарыңыз", "Your rights"],
    "Вы можете попросить удалить переписку или уточнить, какие данные у меня есть: напишите в Telegram или WhatsApp. Если на сайте появится аналитика, эта страница будет обновлена.": [
      "Сіз жазбаны жоюды немесе менде қандай деректер бар екенін нақтылауды сұрай аласыз: Telegram немесе WhatsApp-қа жазыңыз. Сайтта аналитика пайда болса, бұл бет жаңартылады.",
      "You can ask me to delete our conversation or tell you what data I have: write on Telegram or WhatsApp. If analytics appears on the site, this page will be updated."
    ],

    /* ---------- квиз ---------- */
    "Несколько вопросов, и я пойму, что вам нужно": ["Бірнеше сұрақ, сонда сізге не керек екенін түсінемін", "A few questions and I will understand what you need"],
    "Шаг": ["Қадам", "Step"],
    "Направление": ["Бағыт", "Direction"],
    "Формат": ["Формат", "Format"],
    "Что уже есть": ["Не дайын", "What you have"],
    "Сроки": ["Мерзім", "Timing"],
    "Бюджет": ["Бюджет", "Budget"],
    "О проекте": ["Жоба туралы", "About the project"],
    "Что вам нужно?": ["Сізге не керек?", "What do you need?"],
    "Выберите направление, его можно поменять в любой момент.": ["Бағытты таңдаңыз, оны кез келген сәтте өзгертуге болады.", "Choose a direction; you can change it at any time."],
    "Какой формат подойдёт?": ["Қандай формат сәйкес келеді?", "Which format fits?"],
    "Если не уверены, выберите «Пока не знаю».": ["Сенімді болмасаңыз, «Әзірге білмеймін» дегенді таңдаңыз.", "If you are not sure, choose “Not sure yet”."],
    "Что у вас уже готово?": ["Сізде не дайын?", "What do you already have?"],
    "Так проще понять, с чего начинать.": ["Осылай неден бастау керегін түсіну оңай.", "This makes it easier to see where to start."],
    "Когда нужен результат?": ["Нәтиже қашан керек?", "When do you need the result?"],
    "Минимальные сроки указаны в карточках услуг.": ["Ең аз мерзімдер қызмет карточкаларында көрсетілген.", "Minimum timing is shown on the service cards."],
    "На какой бюджет рассчитываете?": ["Қандай бюджетке сүйенесіз?", "What budget do you have in mind?"],
    "Это ориентир, итоговую стоимость назову после обсуждения.": ["Бұл бағдар, соңғы құнды талқылағаннан кейін айтамын.", "This is a guide; I will give the final price after we talk."],
    "Расскажите о проекте": ["Жоба туралы айтыңыз", "Tell me about the project"],
    "Пара предложений: чем занимаетесь и чего хотите добиться. Этот шаг можно пропустить.": ["Екі-үш сөйлем: немен айналысасыз және неге жеткіңіз келеді. Бұл қадамды өткізіп жіберуге болады.", "A couple of sentences: what you do and what you want to achieve. You can skip this step."],
    "Отвечу в том мессенджере, который вы укажете.": ["Сіз көрсеткен мессенджерде жауап беремін.", "I will reply in the messenger you specify."],

    "Сайт": ["Сайт", "Website"],
    "Лендинг, многостраничный сайт, визитка, корпоративный сайт": ["Лендинг, көпбетті сайт, визитка, корпоративтік сайт", "Landing page, multi-page site, business card, corporate site"],
    "Игра или приложение внутри Telegram": ["Telegram ішіндегі ойын немесе қосымша", "A game or app inside Telegram"],
    "Плагин под ваш сервер на Paper": ["Paper-дегі сервериңізге арналған плагин", "A plugin for your Paper server"],
    "Доработка существующего проекта": ["Бар жобаны жетілдіру", "Rework of an existing project"],
    "Правки и улучшения готового сайта или приложения": ["Дайын сайтқа немесе қосымшаға түзетулер мен жақсартулар", "Edits and improvements to a finished site or app"],
    "Другое / не определился": ["Басқа / әлі шешпедім", "Other / undecided"],
    "Помогу выбрать формат": ["Форматты таңдауға көмектесемін", "I will help you pick a format"],

    "Запуск услуги, акции или продукта, от $80": ["Қызметті, акцияны немесе өнімді іске қосу, $80 бастап", "Launching a service, promotion or product, from $80"],
    "Несколько разделов, от $160": ["Бірнеше бөлім, $160 бастап", "Several sections, from $160"],
    "Компактное представительство, от $60": ["Шағын өкілдік, $60 бастап", "A compact presence, from $60"],
    "Услуги, команда, проекты и контакты, от $160": ["Қызметтер, команда, жобалар және байланыстар, $160 бастап", "Services, team, projects and contacts, from $160"],
    "Пока не знаю": ["Әзірге білмеймін", "Not sure yet"],
    "Подскажу подходящий вариант": ["Қолайлы нұсқаны ұсынамын", "I will suggest a suitable option"],
    "Игра": ["Ойын", "Game"],
    "Рейтинг, награды, оплата через Stars, от $130": ["Рейтинг, сыйлықтар, Stars арқылы төлем, $130 бастап", "Leaderboard, rewards, payment via Stars, from $130"],
    "Приложение или сервис": ["Қосымша немесе сервис", "App or service"],
    "Полезный инструмент внутри Telegram, от $130": ["Telegram ішіндегі пайдалы құрал, $130 бастап", "A useful tool inside Telegram, from $130"],
    "Новый плагин": ["Жаңа плагин", "New plugin"],
    "Под ваш сервер на Paper, от $12": ["Paper-дегі сервериңізге арналған, $12 бастап", "For your Paper server, from $12"],
    "Доработка существующего плагина": ["Бар плагинді жетілдіру", "Rework of an existing plugin"],
    "Исправить или добавить функции": ["Түзету немесе функция қосу", "Fix or add features"],
    "Исправить ошибки": ["Қателерді түзету", "Fix bugs"],
    "Что-то работает не так, от $30": ["Бір нәрсе дұрыс жұмыс істемейді, $30 бастап", "Something is not working right, from $30"],
    "Обновить дизайн": ["Дизайнды жаңарту", "Refresh the design"],
    "Новый стиль и анимации": ["Жаңа стиль және анимациялар", "New style and animations"],
    "Добавить функции": ["Функциялар қосу", "Add features"],
    "Новые разделы, формы, оплата": ["Жаңа бөлімдер, формалар, төлем", "New sections, forms, payment"],
    "Разберёмся вместе": ["Бірге түсінеміз", "We will figure it out together"],
    "Нужна консультация": ["Кеңес керек", "I need a consultation"],
    "Расскажу, что подойдёт под вашу задачу": ["Міндетіңізге не сәйкес келетінін айтамын", "I will tell you what suits your task"],
    "Опишу задачу на одном из следующих шагов": ["Міндетті келесі қадамдардың бірінде сипаттаймын", "I will describe the task in one of the next steps"],

    "Ничего нет": ["Ештеңе жоқ", "Nothing yet"],
    "Начинаем с нуля": ["Нөлден бастаймыз", "We start from scratch"],
    "Есть тексты и фото": ["Мәтіндер мен фото бар", "I have texts and photos"],
    "Нужно собрать их в готовый вид": ["Оларды дайын түрге келтіру керек", "They need to be put together into a finished site"],
    "Есть логотип и фирменный стиль": ["Логотип және фирмалық стиль бар", "I have a logo and brand style"],
    "Дизайн сделаю в вашем стиле": ["Дизайнды сіздің стильде жасаймын", "I will design it in your style"],
    "Есть макет или пример сайта": ["Макет немесе сайт үлгісі бар", "I have a mockup or an example site"],
    "Сделаю по образцу": ["Үлгі бойынша жасаймын", "I will build it from the example"],
    "Только идея": ["Тек идея", "Just an idea"],
    "Продумаем механику вместе": ["Механиканы бірге ойластырамыз", "We will work out the mechanics together"],
    "Есть описание и правила": ["Сипаттама мен ережелер бар", "I have a description and rules"],
    "Опишу, как это будет работать": ["Бұл қалай жұмыс істейтінін сипаттаймын", "I will describe how it will work"],
    "Есть дизайн или референсы": ["Дизайн немесе референстер бар", "I have a design or references"],
    "Сделаю в нужном стиле": ["Қажетті стильде жасаймын", "I will build it in the needed style"],
    "Есть бот или часть кода": ["Бот немесе код бөлігі бар", "I have a bot or part of the code"],
    "Доработаю и подключу Mini App": ["Жетілдіріп, Mini App қосамын", "I will finish it and connect the Mini App"],
    "Продумаем команды и механику вместе": ["Командалар мен механиканы бірге ойластырамыз", "We will work out commands and mechanics together"],
    "Есть список функций и команд": ["Функциялар мен командалар тізімі бар", "I have a list of features and commands"],
    "Сделаю по вашему описанию": ["Сіздің сипаттамаңыз бойынша жасаймын", "I will build it from your description"],
    "Есть сервер, нужна версия ядра": ["Сервер бар, ядро нұсқасы керек", "I have a server, need a core version"],
    "Укажите ядро и версию в описании": ["Сипаттамада ядро мен нұсқаны көрсетіңіз", "Specify the core and version in the description"],
    "Есть готовый плагин или исходники": ["Дайын плагин немесе бастапқы код бар", "I have a ready plugin or source code"],
    "Доработаю существующий код": ["Бар кодты жетілдіремін", "I will improve the existing code"],
    "Есть исходники и доступ": ["Бастапқы код пен қолжетімділік бар", "I have the source code and access"],
    "Можно сразу приступать": ["Бірден бастауға болады", "We can start right away"],
    "Есть список правок": ["Түзетулер тізімі бар", "I have a list of changes"],
    "Оценю объём и сроки": ["Көлемі мен мерзімін бағалаймын", "I will estimate the scope and timing"],
    "Есть только готовый сайт или приложение": ["Тек дайын сайт немесе қосымша бар", "I only have a finished site or app"],
    "Разберусь в коде сам": ["Кодты өзім түсінемін", "I will figure out the code myself"],
    "Не знаю, что именно улучшить": ["Нені жақсарту керегін білмеймін", "I do not know what exactly to improve"],
    "Проведу короткий разбор": ["Қысқа талдау жасаймын", "I will run a short review"],
    "Начинаем с обсуждения": ["Талқылаудан бастаймыз", "We start with a discussion"],
    "Есть описание задачи": ["Міндет сипаттамасы бар", "I have a task description"],
    "Расскажите на следующем шаге": ["Келесі қадамда айтып беріңіз", "Tell me in the next step"],
    "Есть примеры или референсы": ["Мысалдар немесе референстер бар", "I have examples or references"],
    "Покажите, что нравится": ["Не ұнайтынын көрсетіңіз", "Show me what you like"],

    "Срочно, в течение недели": ["Шұғыл, бір апта ішінде", "Urgent, within a week"],
    "Подберём самый быстрый вариант": ["Ең жылдам нұсқаны таңдаймыз", "We will pick the fastest option"],
    "В течение месяца": ["Бір ай ішінде", "Within a month"],
    "Спокойный темп без спешки": ["Асықпай, сабырлы қарқын", "A calm pace without rushing"],
    "Не горит": ["Асықпаймын", "No rush"],
    "Важнее качество, чем скорость": ["Сапа жылдамдықтан маңыздырақ", "Quality matters more than speed"],
    "Назовите ориентир, когда обсудим задачу": ["Міндетті талқылағанда бағдарды айтыңыз", "Give me a rough guide once we discuss the task"],

    "До $100": ["$100 дейін", "Up to $100"],
    "Визитка или небольшой лендинг": ["Визитка немесе шағын лендинг", "A business card site or small landing page"],
    "$100 – $200": ["$100 – $200", "$100 – $200"],
    "Лендинг или многостраничный сайт": ["Лендинг немесе көпбетті сайт", "A landing page or multi-page site"],
    "$200 – $400": ["$200 – $400", "$200 – $400"],
    "Сайт с дополнительными функциями": ["Қосымша функциялары бар сайт", "A site with extra features"],
    "От $400": ["$400 бастап", "From $400"],
    "Крупный проект": ["Ірі жоба", "A large project"],
    "Подскажу, во что вложиться в первую очередь": ["Алдымен неге салым салу керегін ұсынамын", "I will suggest what to invest in first"],
    "$130 – $200": ["$130 – $200", "$130 – $200"],
    "Простая игра или сервис": ["Қарапайым ойын немесе сервис", "A simple game or service"],
    "Рейтинг, награды, оплата через Stars": ["Рейтинг, сыйлықтар, Stars арқылы төлем", "Leaderboard, rewards, payment via Stars"],
    "Сложная механика и крупный проект": ["Күрделі механика және ірі жоба", "Complex mechanics and a large project"],
    "Оценю после обсуждения": ["Талқылағаннан кейін бағалаймын", "I will estimate after we talk"],
    "$12 – $30": ["$12 – $30", "$12 – $30"],
    "Простая команда или механика": ["Қарапайым команда немесе механика", "A simple command or mechanic"],
    "$30 – $60": ["$30 – $60", "$30 – $60"],
    "Несколько функций и база данных": ["Бірнеше функция және дерекқор", "Several features and a database"],
    "От $60": ["$60 бастап", "From $60"],
    "Большой плагин со сложной логикой": ["Күрделі логикасы бар үлкен плагин", "A large plugin with complex logic"],
    "Небольшие правки": ["Шағын түзетулер", "Small edits"],
    "$60 – $120": ["$60 – $120", "$60 – $120"],
    "Несколько изменений или новый раздел": ["Бірнеше өзгеріс немесе жаңа бөлім", "Several changes or a new section"],
    "От $120": ["$120 бастап", "From $120"],
    "Крупная переработка": ["Ірі қайта өңдеу", "A major rework"],
    "Оценю после разбора": ["Талдаудан кейін бағалаймын", "I will estimate after the review"],
    "$100 – $300": ["$100 – $300", "$100 – $300"],
    "Небольшая задача": ["Шағын міндет", "A small task"],
    "Задача средней сложности": ["Орташа күрделі міндет", "A task of medium complexity"],
    "От $300": ["$300 бастап", "From $300"],

    "Например: сайт для кофейни, нужны меню, карта и заявки в WhatsApp": ["Мысалы: кофеханаға арналған сайт, мәзір, карта және WhatsApp-қа өтінімдер керек", "For example: a website for a coffee shop with a menu, a map and requests to WhatsApp"],
    "Например: игра-рулетка с рейтингом и наградами за приглашённых друзей": ["Мысалы: рейтингі және шақырылған достар үшін сыйлықтары бар рулетка-ойын", "For example: a roulette game with a leaderboard and rewards for invited friends"],
    "Например: плагин авторизации для Paper 1.21 с командами /register и /login": ["Мысалы: /register және /login командалары бар Paper 1.21 авторизация плагині", "For example: an authorization plugin for Paper 1.21 with /register and /login commands"],
    "Например: на сайте не отправляется форма, нужно починить и обновить дизайн": ["Мысалы: сайтта форма жіберілмейді, түзету және дизайнды жаңарту керек", "For example: the form on the site does not submit, it needs a fix and a design refresh"],
    "Расскажите, что нужно сделать и какого результата хотите": ["Не істеу керегін және қандай нәтиже қалайтыныңызды айтыңыз", "Describe what needs to be done and the result you want"],
    "Как вас зовут": ["Атыңыз кім", "Your name"],
    "Telegram, WhatsApp или телефон": ["Telegram, WhatsApp немесе телефон", "Telegram, WhatsApp or phone"],
    "@username или номер": ["@username немесе нөмір", "@username or number"],
    "Ваша заявка": ["Сіздің өтініміңіз", "Your request"],
    "Обновляется по мере ответов. Любой пункт можно изменить: нажмите на него.": ["Жауап берген сайын жаңарады. Кез келген тармақты өзгертуге болады: оны басыңыз.", "Updates as you answer. You can change any item: just click it."],
    "Удобнее написать сразу?": ["Бірден жазған ыңғайлы ма?", "Prefer to write right away?"],
    "Назад": ["Артқа", "Back"],
    "Далее": ["Әрі қарай", "Next"],
    "Отправить": ["Жіберу", "Send"],
    "Заявка собрана": ["Өтінім жиналды", "Your request is ready"],
    "В Telegram открылся чат со мной с готовым сообщением. Нажмите «Отправить» в чате. Если текст не подставился, он уже скопирован: просто вставьте его. Удобнее WhatsApp? Нажмите кнопку ниже.": [
      "Telegram-да менімен чат дайын хабарламамен ашылды. Чатта «Жіберу» түймесін басыңыз. Мәтін қойылмаса, ол көшірілген: жай ғана қойыңыз. WhatsApp ыңғайлы ма? Төмендегі түймені басыңыз.",
      "A chat with me has opened in Telegram with a ready message. Press “Send” in the chat. If the text did not appear, it is already copied: just paste it. Prefer WhatsApp? Use the button below."
    ],
    "Заполнить заново": ["Қайта толтыру", "Start over"],
    "Открыть Telegram": ["Telegram-ды ашу", "Open Telegram"],
    "Открыть WhatsApp": ["WhatsApp-ты ашу", "Open WhatsApp"]
  };

  var LANGS = ["ru", "kk", "en"];
  var lang = "ru";
  try {
    var q = (location.search.match(/[?&]lang=(ru|kk|en)\b/) || [])[1];
    if (q) localStorage.setItem("gws-lang", q);
    var saved = localStorage.getItem("gws-lang");
    if (LANGS.indexOf(saved) > -1) lang = saved;
  } catch (e) {}
  var idx = LANGS.indexOf(lang) - 1; // 0 = kk, 1 = en

  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }

  // t("русский текст") -> перевод на выбранный язык (или тот же текст, если перевода нет)
  function t(s) {
    if (idx < 0 || s == null) return s;
    var k = norm(s);
    var v = T[k];
    return v && v[idx] ? v[idx] : s;
  }

  // «от $80» и «от 5 дней»
  function priceFrom(n) { return lang === "ru" ? "от $" + n : lang === "kk" ? "$" + n + " бастап" : "from $" + n; }
  function daysFrom(n) { return lang === "ru" ? "от " + n + " дней" : lang === "kk" ? n + " күннен бастап" : "from " + n + " days"; }

  window.I18N = { lang: lang, t: t, priceFrom: priceFrom, daysFrom: daysFrom, dict: T };
  window.t = t;
  document.documentElement.lang = lang === "kk" ? "kk" : lang;

  window.setLang = function (l) {
    try { localStorage.setItem("gws-lang", l); } catch (e) {}
    document.body.classList.add("leaving");
    setTimeout(function () { location.reload(); }, 240);
  };

  if (idx < 0) return;

  // перевод статичной разметки: текстовые узлы и несколько атрибутов
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function (n) {
    var p = n.parentNode;
    if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return;
    var raw = n.nodeValue;
    if (!/[А-Яа-яЁё]/.test(raw)) return;
    var k = norm(raw);
    var v = T[k];
    if (!v || !v[idx]) return;
    n.nodeValue = raw.match(/^\s*/)[0] + v[idx] + raw.match(/\s*$/)[0];
  });
  document.querySelectorAll("[data-bg],[placeholder],[aria-label]").forEach(function (el) {
    ["data-bg", "placeholder", "aria-label"].forEach(function (a) {
      if (el.hasAttribute(a)) el.setAttribute(a, t(el.getAttribute(a)));
    });
  });
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t(meta.getAttribute("content")));
  document.title = t(document.title);
})();
