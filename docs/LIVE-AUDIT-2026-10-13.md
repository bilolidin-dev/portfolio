# Разбор живого сайта www.bilolidin.dev — 13.10.2026

> **Обновление (13.10.2026):** в репозитории исправлены отсутствующий якорь `#work`, «Loading…» в первом HTML, дубль в `title` главной, канонический домен, `noindex` и `/favicon.ico` на 404, битые и чужие ссылки проектов; GitHub-интеграция удалена целиком (вместе с страницей `/profile`). Ниже — состояние прода на момент аудита.

Аудит продакшена: https://www.bilolidin.dev/ (домен подтверждён в предыдущем опросе; в `NEXT_PUBLIC_SITE_URL` репозитория он пока не прописан).
Метод: браузерный обход всех маршрутов из `sitemap.xml`, чтение отрендеренного DOM, ответов и заголовков, плюс сверка с локальным репозиторием и его артефактом `out/`.

---

## 1. Содержание (пересказ текста по разделам)

### Главная `/` (EN; RU и UZ — полные переводы)

**Hero**
- Плашка: `OPEN TO WORK` (пульсирующая точка).
- Имя: `Bilolidin`.
- Заголовок (h1): `Full-Stack Developer`.
- Абзац: «I create web products end to end — from interface to database. I work with frontend and backend parts of projects, databases, and integrations. My projects include an online exam platform for an educational center, a day-planning system, and a desktop utility for transferring files over a local network.»
- Тех-подпись: `React · Next.js · TypeScript · Firebase`.
- Кнопки: `View projects`, `Contact`. Справа — схема `Frontend → API → Backend → Database`.

**Stack** (`#stack`) — три группы чипов:
- Core stack: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git.
- Work with: Firebase / Firestore, Supabase, PostgreSQL, Python, Django, C#, .NET, Avalonia.
- Tools / infrastructure: Framer Motion, Playwright, Docker, Linux.

**How I work** (`#how-i-work`) — 4 принципа:
1. Think in systems — «I understand the whole chain: from interface through API and backend to the database. Not isolated pieces, but a complete architecture.»
2. Build for production — «I consider security, validation, error handling, performance, testing, and deployment — not only whether it works on my machine.»
3. Solve problems — «I can investigate complex bugs and understand their cause instead of simply copying solutions from Stack Overflow.»
4. Keep learning — «I keep expanding my full-stack practice: working with frontend, backend parts of projects, databases, and integrations — Next.js, Supabase, PostgreSQL, Python, Django, and C#.»

**About** (`#about`): «Full-Stack Developer from Kyrgyzstan.» + «I develop web products with React and Next.js, and work with backend systems and databases. I use TypeScript, Firebase, Supabase, PostgreSQL, and other technologies depending on the project. This portfolio brings together projects I developed independently.» + кнопка `Details` → `/about`.

**Experience** (`#experience`): `2026 — present` · `Frontend development` · `Internship` · «Frontend tasks in real projects — my first work experience outside personal projects.»

**GitHub** (`#github`): **на живом сайте пусто** — «GitHub data could not be loaded. Try refreshing the page later.» + кнопка `Open GitHub profile`. Ни карточек репозиториев, ни языковой полосы, ни ленты активности.

**Contact** (`#contact`): абзац «I build web applications and continue growing as a Full-Stack developer…» (то же, что на `/contact`) + четыре кнопки: GitHub, Telegram, Instagram, Email.

### `/about`
h1 `About me`, вводный абзац (тот же, что в блоке About на главной), затем `STACK` — те же три группы чипов. Ссылка `Back` на главную. Экран минимальный: ни таймлайна, ни контактов.

### `/contact`
h1 `Contact` + тот же абзац + 4 кнопки. Мета-описание подставляет email: «… — bilolmen998@gmail.com.»

### `/projects` — 8 проектов

Шапка: h1 `All projects`, подзаголовок «Production products, complex systems, and side projects.»
Секция `SELECTED PROJECTS`: **«Pinned projects are currently unavailable.»** — пусто (те же GitHub-данные).
Секция `OTHER PROJECTS`: все 8 проектов.

| Проект | Роль | Описание (EN) | Теги | Ссылки |
|---|---|---|---|---|
| **PROlab Academy** | Solo Developer | «PROlab Academy educational-center platform (Osh, Kyrgyzstan): programming courses for beginners (JavaScript, HTML, CSS) and online exams with anti-cheating protection, separate teacher and student flows, and access control through Row Level Security in Supabase. The repository contains the platform's exam module.» | Next.js, TypeScript, Supabase, PostgreSQL, JWT, RLS, E2E Testing | Live: prolab-academy.site · Code: `github.com/b4631119-oss/academy-exam` — **404** |
| **LifeOS** | Solo Developer | «A personal planning system: hourly day schedule, habits with streaks, and tasks linked to long-term goals. Sign-in through Google; all documents are isolated by owner in Firestore.» | Next.js, TypeScript, Firebase, Firestore, Tailwind CSS | Live: os-life-one.vercel.app ✅ · Code: `…/lifeOS` ✅ (редирект) |
| **macOS Portfolio** | Solo Developer | «An interactive portfolio styled as a macOS desktop: draggable and resizable windows, a Dock for launching applications, a context menu, and an xterm.js terminal. Profile and repository data are loaded through the GitHub API, with animations built using Framer Motion.» | Next.js, TypeScript, Tailwind CSS, Framer Motion, GitHub API | Live: mac-os-portfolio-app.vercel.app ⚠️ (текст извлечь не удалось) · Code: `…/macOs-portfolio` ✅ |
| **Real-Time Chat App** | Solo Developer | «A web chat built with Next.js, Firebase Authentication, and Cloud Firestore. The repository also contains Firestore security rules.» | Next.js, TypeScript, Firebase, Firestore, Auth | Code: `…/chat-app` ✅ (Live на карточке нет) |
| **LocalBridge** | Solo Developer | «A cross-platform desktop utility for transferring files, text, and links between devices on one local network — without cloud services, accounts, or manual IP lookup. Written in C# with an Avalonia UI.» | C#, .NET, Avalonia, P2P, LAN | Code: `…/LocalBridge` ✅ |
| **Cuaderno** | Solo Developer | «A digital notebook for notes: pages with autosave and customizable covers. Authentication and data storage use Firebase and Firestore.» | Next.js, TypeScript, Firebase, Firestore, Auth | Live: cuaderno-nine.vercel.app ✅ · Code: `…/cuaderno` ✅ |
| **Calendar App** | Solo Developer | «A single-page calendar application built with Next.js: custom calendar components, state managed with React Context, responsive Tailwind CSS layout, and Framer Motion animations.» | Next.js, React, TypeScript, Tailwind CSS, Framer Motion | Live: kalendar-app-one.vercel.app — **чужое демо** (см. проблемы) · Code: `…/CalendarApp` ✅ |
| **Greenshop** | Solo Developer | «A build from a ready-made design (the design is not mine): a multi-page static plant-shop website with a home page, catalog, blog, cart, and checkout. No framework or build tool: HTML, CSS, and JavaScript with responsive mobile and desktop layouts.» | HTML, CSS, JavaScript | Code: `…/greenshop` ✅ (Live нет) |

### Страницы проектов
- **`/projects/prolab-academy`** (кастомный кейс): бейдж `Featured`, секции `Overview`, `Role`, `Architecture` (`Next.js → Server Actions → Supabase → PostgreSQL`), `Features` (10 пунктов: Authentication, Teacher dashboard, Student system, Exams, Tests, Results, Answer persistence, RLS-based access control, E2E testing, Production deployment), `Technology stack` (Frontend / Backend & data / Quality), `Notes`. Ссылки: `Open project` → prolab-academy.site, `Code` → `academy-exam` (**404**), `Back to projects` → `/#work` (**якоря нет**).
- **`/projects/lifeos`**: секции `Overview`, `Role and scope`, `Key features` (8 пунктов), `Architecture`, `Technical decisions` (owner-scoped Firestore rules, @dnd-kit, SVG-графики, next-intl). Live/Code работают.
- **`/projects/macos-portfolio`**: те же 5 секций (окна, Dock, контекстное меню, xterm.js, AbortController, Framer Motion).
- **`/projects/chat-app`, `/localbridge`, `/cuaderno`, `/calendar-app`, `/greenshop`**: только заголовок, теги, описание и кнопки Live/Code — без кейс-секций.

### RU / UZ
Локализация полная: навигация (`Проекты`, `Обо мне`, `Стек`, `GitHub`, `Контакты`, `Переключить на узбекский`), h1 (`Фулстек-разработчик`), кейс-секции (`ОБЗОР`, `РОЛЬ И SCOPE`, `КЛЮЧЕВЫЕ ФУНКЦИИ`, `АРХИТЕКТУРА`, `ТЕХНИЧЕСКИЕ РЕШЕНИЯ`), узбекская версия (`Full-Stack dasturchi`, `Men haqimda`, `Barcha loyihalar`). Цепочка переключения: EN → RU → UZ → EN.

---

## 2. Структура

**Маршруты (39 URL в sitemap, 13 путей × 3 языка):**

| Путь | EN | RU | UZ |
|---|---|---|---|
| Главная | `/` | `/ru` | `/uz` |
| О проекте | `/about` | `/ru/about` | `/uz/about` |
| Проекты | `/projects` | `/ru/projects` | `/uz/projects` |
| 8 страниц проектов | `/projects/<id>` | `/ru/projects/<id>` | `/uz/projects/<id>` |
| Профиль | `/profile` | `/ru/profile` | `/uz/profile` |
| Контакты | `/contact` | `/ru/contact` | `/uz/contact` |
| 404 | любой неизвестный URL | — | — |

`id`: `prolab-academy`, `lifeos`, `macos-portfolio`, `chat-app`, `localbridge`, `cuaderno`, `calendar-app`, `greenshop`. Легаси-префикс `/en/*` редиректит на путь без префикса (проверено: `/en/about` → `/about`).

**Навигация:** логотип `BILOLIDIN` → `/`; якорные ссылки `Projects → /#work`, `About → /#about`, `Stack → /#stack`, `GitHub → /#github`, `Contact → /#contact`; кнопка-CTA `Contact`; переключатель языка (глобус); переключатель темы. На мобильном — панель-меню с теми же пунктами + язык/тема/CTA.
**Футер:** слово-марка, роль, тех-подпись, `© 2026 Bilolidin`, иконки GitHub, Telegram, Instagram, Email.
**Языки:** EN (без префикса), RU, UZ; у каждой страницы canonical и `hreflang` ru/en/uz/x-default.
**Темы:** тёмная и светлая; по умолчанию — как в ОС; выбор хранится в `localStorage` («theme»), применяется до первой отрисовки; переживает перезагрузку и клиентские переходы (проверено). Переключение — круговой волной (View Transitions), при `prefers-reduced-motion` анимации отключаются.

---

## 3. Технологии и как это работает (по коду страницы и заголовкам)

| Что | Определено | Доказательство |
|---|---|---|
| Фреймворк | Next.js (App Router, Turbopack-сборка) | чанки `/_next/static/immutable/chunks/turbopack-*.js`, `x-powered-by: Next.js` |
| Рендеринг | **серверный, на каждый запрос** (не статика) | `cache-control: private, no-cache, no-store, max-age=0, must-revalidate`, `vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch`, `x-matched-path: /[locale]`, `x-vercel-cache: MISS` |
| CSS | Tailwind-классы в одном CSS-файле + CSS-переменные темы | чанк `2cvwl_aj7ko_y.css`, инлайн-стили `--bg/--ink` |
| Шрифты | самохостинг (Inter + моно) | 4 предзагружаемых `.woff2` из `/_next/static/immutable/media/` |
| Хостинг | Vercel | `server: Vercel`, `x-vercel-id: fra1::iad1`, `strict-transport-security` |
| Аналитика | **отсутствует** | в сетевом логе нет ни одного запроса аналитики/мониторинга |
| Данные GitHub | на сервере при запросе, с ошибкой | главная/проекты/профиль показывают состояния ошибки; ответ страницы не содержит ни одного репозитория |
| README репозиториев | легаси-роут `/api/readme` | `GET /api/readme?...` → **502** `{"content":null}` |
| OG-картинка и иконка | генерируются на сервере | `/opengraph-image` → 200 `image/png`, `/icon` → 200 `image/png`, `/manifest.json` → 200 |
| Форма HTML | Suspense-стриминг: `<main>` содержит «Загрузка…», контент — в скрытом сегменте | `main` = `Загрузка…`, один `div#S:0` с текстом (1526 символов) |

**Как это работает сейчас:** браузер запрашивает страницу → Vercel поднимает Node-функцию → сервер заново рендерит React-дерево и пытается сходить в GitHub API → отдаёт HTML (кэш отключён) → клиентский JS раскрывает контент из скрытого сегмента. Каждый переход и каждый prefetch (`?_rsc=…`) снова бьёт в функцию — это и есть расход Fluid Active CPU.

**Как это должно работать после деплоя репозитория:** `next build` заранее рендерит 41 HTML-страницу в `out/`, данные GitHub запекаются на сборке, CDN отдаёт готовые файлы — серверных вызовов на запрос нет.

---

## 4. SEO

| Элемент | Состояние на живом сайте |
|---|---|
| Title главной | **`Bilolidin — Full-Stack Developer — Bilolidin`** (двойной суффикс) |
| Title внутренних | `About me — Bilolidin`, `All projects — Bilolidin`, `Контакты — Bilolidin`, `LifeOS — Bilolidin` — корректно |
| Description | есть на всех проверенных страницах, у `/contact` с подставленным email |
| Canonical | **`https://portfolio-devroot.vercel.app/...`** на всех страницах — не кастомный домен |
| hreflang | ru/en/uz/x-default присутствуют, но ведут на `portfolio-devroot.vercel.app`; атрибут выводится как `hrefLang` |
| Open Graph / Twitter | `og:title`, `og:description`, `og:url` (vercel.app), `og:image` = `/opengraph-image`, `og:locale` + alternate ru_RU/uz_UZ; `twitter:card=summary_large_image` |
| JSON-LD | Person + WebSite; `sameAs` → `github.com/b4631119-oss` (аккаунт-404) |
| sitemap.xml | 39 URL, все на `portfolio-devroot.vercel.app`, с alternates |
| robots.txt | `User-Agent: * Allow: /` + `Sitemap: https://portfolio-devroot.vercel.app/sitemap.xml` |
| 404 | статус 404, но **`robots: index, follow`**, title без «404», дефолтная страница Next |
| Дубль хоста | `https://portfolio-devroot.vercel.app/` отдаёт тот же сайт (200) → дублирование контента |

---

## 5. Контакты

| Канал | Значение | Проверка |
|---|---|---|
| Email | `bilolmen998@gmail.com` (`mailto:` в меню, футере, на `/contact`) | формат корректен |
| Telegram | `https://t.me/Teg123489` | 200, профиль «DevRoot / Fulstak developer» |
| Instagram | `https://www.instagram.com/bilolidin.dev/` | не проверял (Instagram закрывает доступ неавторизованным) |
| GitHub | футер/контакты/JSON-LD → `https://github.com/b4631119-oss` | **404** — профиль не существует (аккаунт переименован в `bilolidin-dev`) |

---

## 6. Проблемы

### Критичные

| # | Проблема | Детали |
|---|---|---|
| 1 | **В проде стоит старая серверная сборка** | Каждая страница рендерится на запрос (`no-store`, `x-matched-path: /[locale]`, `x-vercel-cache: MISS`). Именно это жжёт Fluid Active CPU. Статический экспорт из репозитория не задеплоен |
| 2 | **GitHub-данные не работают во всём сайте** | Главная: «GitHub data could not be loaded»; `/projects`: «Pinned projects are currently unavailable»; `/profile`: вся страница — одно сообщение об ошибке, ни статистики, ни репозиториев. Похоже на невалидный `GITHUB_TOKEN` (старый код без анонимного фолбэка) |
| 3 | **Ссылка на профиль GitHub ведёт в 404** | `github.com/b4631119-oss` больше не существует; отдают 404 футер, страница контактов и JSON-LD. Ссылки на репозитории спасает только редирект GitHub на `bilolidin-dev` |
| 4 | **Canonical/OG/sitemap/robots указывают на `portfolio-devroot.vercel.app`** | Кастомный домен не прописан как канонический; версия на vercel.app публично доступна → дублирование и индексация не того хоста |

### Содержание и ссылки

| # | Проблема | Детали |
|---|---|---|
| 5 | PROlab: кнопка `Code` битая | `academy-exam` → 404. В репозитории ссылка уже заменена на `bilolidin-dev/academy`, но тот репозиторий описывает **другой проект** — статичные курсы без аккаунтов, личных кабинетов и БД, тогда как кейс рассказывает про экзамены, роли учитель/ученик и RLS |
| 6 | Calendar App: кнопка `Live` ведёт на чужой проект | `kalendar-app-one.vercel.app` — «Calendar To-Do / TaskMate Calendar», подпись «Portfolio project by **Arnob Mahmud** — contact@arnobmahmud.com». При этом свой репозиторий `bilolidin-dev/CalendarApp` — про Next.js 15 / React 19 / Tailwind v4 / localStorage, а не про React Context, как сказано на сайте |
| 7 | Мёртвый якорь `#work` | Пункт «Projects» в шапке, кнопка `View projects` в hero и `Back to projects` на PROlab-странице ведут на `/#work`; элемента с `id="work"` нет ни на живом сайте, ни в коде — клики не скроллят никуда. **Этот дефект есть и в текущем репозитории** |
| 8 | Двойной суффикс в title главной | `Bilolidin — Full-Stack Developer — Bilolidin` (EN/RU/UZ). В текущем репозитории артефакт уже чистый (`<title>Bilolidin — Full-Stack Developer</title>`) |
| 9 | RU-терминология | «РОЛЬ И SCOPE» — слово не переведено; в остальном RU-версия полная |
| 10 | Дубль CTA в шапке | В навигации два «Contact» подряд (якорная ссылка + кнопка) |

### UX и качество

| # | Проблема | Детали |
|---|---|---|
| 11 | Первый HTML — «Загрузка…» | `<main>` содержит только «Загрузка…», контент лежит в скрытом сегменте (`div hidden id="S:0"`) и раскрывается JS. Без JS страница пустая. **Проверено, что причина — `loading.tsx`:** при его удалении сборка рендерит контент инлайн (главная: 3699 символов в `<main>`, скрытых сегментов 0). В текущем репозитории схема та же |
| 12 | 404 не брендирован и индексируется | Дефолтная страница Next.js, `robots: index, follow`, только EN, без ссылки домой. В репозитории уже есть брендированная версия с `noindex` |
| 13 | `/favicon.ico` → 404 | Работает только `<link rel="icon" href="/icon">`; прямые запросы браузера к `/favicon.ico` падают |
| 14 | Мобильное меню без слово-марки | Панель открывается корректно, но в ней нет «BILOLIDIN» и визуального заголовка |
| 15 | Пропуск уровня заголовков | На `/projects`: `h1` → сразу `h3` (карточки), `h2` нет |
| 16 | `/profile` — тупик | Страница существует, но показывает только ошибку; раскрытие README недоступно (нет репозиториев) |

**Проверено и работает:** мобильная вёрстка 390×844 без горизонтального скролла и с корректным переносом RU-заголовка; панель-меню; контраст текста (4.86:1 для приглушённого на светлом, 4.88:1 для текста на акцентной кнопке); переключение и сохранение темы; редиректы `/en/*`; `/icon`, `/opengraph-image`, `/manifest.json`; отсутствие аналитики; Telegram; демо LifeOS и Cuaderno.

**Не удалось проверить:** содержимое `mac-os-portfolio-app.vercel.app` (приложение рендерится клиентским JS, текст извлечь не удалось); Instagram (закрыт для неавторизованных); текущее состояние переменных окружения Vercel; подключён ли проект к этому репозиторию и на какую ветку.

---

## Приложение: что уже исправлено в репозитории, а что нет

| Проблема | В репозитории |
|---|---|
| Статический экспорт вместо SSR | ✅ есть (`output: "export"`, 0 серверных точек входа) |
| Анонимный фолбэк GitHub + фолбэк pinned на курируемые проекты | ✅ есть |
| Ссылки на `bilolidin-dev` | ✅ есть |
| Брендированный 404 с `noindex` | ✅ есть |
| Копия «Selected projects are currently unavailable.» | ✅ есть |
| Двойной суффикс title | ✅ исправлено |
| Мёртвый якорь `#work` | ❌ **остался** (шапка, hero, PROlab back) |
| Контент в скрытом сегменте из-за `loading.tsx` | ❌ **остался** (фикс проверен: удаление `loading.tsx` рендерит контент инлайн) |
| PROlab: ссылка на репозиторий, описывающий другой проект | ❌ остался (решение владельца — оставить `academy`) |
| Calendar App: чужое Live-демо | ❌ остался (`liveUrl` → kalendar-app-one) |
| `NEXT_PUBLIC_SITE_URL` под кастомный домен | ❌ не задан (по умолчанию — vercel.app) |

---

## Резюме для нового чата (10 строк)

1. Портфолио Bilolidin: Next.js-сайт на 3 языках (EN без префикса, /ru, /uz), 8 проектов, кейсы, страница GitHub-профиля, контакты.
2. Репозиторий — полностью статический экспорт (`output: "export"`, 41 HTML, CDN, ноль серверных функций); в проде же крутится **старая SSR-сборка**, каждая страница рендерится на запрос — источник расхода Fluid Active CPU.
3. На живом сайте данные GitHub не работают нигде: главная, /projects и /profile показывают ошибку.
4. Все ссылки ведут на старый аккаунт `b4631119-oss`: ссылка на профиль — 404, репозитории спасает редирект на `bilolidin-dev`.
5. Canonical, OG, hreflang, sitemap и robots указывают на `portfolio-devroot.vercel.app`, а не на кастомный домен; тот хост доступен публично.
6. SEO: title главной дублируется («… — Bilolidin — Bilolidin»), 404 отдаётся с `index, follow` и без брендинга, `/favicon.ico` — 404.
7. Контент: PROlab `Code` → 404 (`academy-exam`), Calendar App `Live` → чужое демо, подписанное другим автором.
8. Первый HTML — состояние «Загрузка…»: контент в скрытом сегменте и раскрывается только JS; лечится удалением `loading.tsx` (проверено сборкой).
9. Работает корректно: мобильная вёрстка, меню, темы с сохранением, редиректы `/en/*`, локализация RU/UZ, контрасты, отсутствие аналитики.
10. В текущем репозитории уже исправлены статический экспорт, GitHub-фолбэки, 404, title и ссылки; осталось исправить якорь `#work`, `loading.tsx`, задать `NEXT_PUBLIC_SITE_URL` и задеплоить.
