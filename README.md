# W-Dev portfolio

Статический сайт-портфолио на чистых HTML, CSS и JavaScript.

- `index.html`, `services.html`, `portfolio.html`, `about.html`, `contacts.html`, `quiz.html`, `404.html` (на GitHub Pages открываются без `.html`: `/services`, `/quiz`)
- `css/style.css` — стили и все анимации (скорость появления задаётся переменной `--slow`)
- `js/data.js` — проекты, услуги с ценами и лента технологий
- `js/quiz.js` — квиз «обсудить проект»
- `js/main.js` — шапка, меню, подвал, переходы между страницами, модалка проекта, карточки услуг

Чтобы добавить проект, допишите объект в `js/data.js`. Чтобы заменить заглушку скриншотом, положите картинку в `img/` и укажите её в поле `img`.

Сайт можно публиковать на GitHub Pages (Settings → Pages → ветка main, корень).
