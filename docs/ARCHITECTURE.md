# Архитектура проекта — handoff для ИИ-агента

> **Статус (13.10.2026):** GitHub-интеграция (build-time REST/GraphQL клиент, `/profile`, README-модалка, браузерный `github-client`, API-роут, env `GITHUB_*`) удалена. Инварианты статического экспорта ниже по-прежнему актуальны, а разделы про GitHub — нет.

Документ описывает, **что это за проект, как он устроен и какие инварианты нельзя нарушать**. Написан так, чтобы агент, который раньше не видел репозиторий, мог сразу вносить правки, не сломав статический экспорт.

---

## 0. Что это

Персональное портфолио Bilolidin (full-stack разработчик, Кыргызстан). Одностраничник-портфолио + каталог проектов + GitHub-профиль + кейс-стади.

**Стек:** Next.js 16.3 (App Router) · React 18.3 · TypeScript 5.6 (`strict`) · Tailwind CSS 3.4 · Radix UI (через локальные копии shadcn/ui-компонентов) · `next/font` · `react-markdown`.

⚠️ **Версия Next.js новее тренировочных данных.** В репозитории лежит `AGENTS.md` с предупреждением: перед написанием кода читать гайды в `node_modules/next/dist/docs/`. Не полагаться на память о Next 13/14.

**Языки интерфейса:** `en` (по умолчанию, URL без префикса), `ru`, `uz`.

**Главный факт всего проекта:** это **полностью статический сайт**. `next build` с `output: "export"` пишет готовый HTML/CSS/JS в `out/`, который раздаётся CDN. Серверного рантайма нет вообще: ни Serverless Functions, ни Edge, ни ISR. Так проект перестал сжигать лимит Vercel Fluid Active CPU (на запрос тратится 0 ms server time).

---

## 1. Жёсткие инварианты (нарушение = сломанный билд)

Из `output: "export"` следует, что во **время запроса** не существует никакого сервера. Поэтому запрещено:

| Нельзя | Почему | Что здесь вместо этого |
|---|---|---|
| `next/headers` (`headers()`, `cookies()`), `draftMode()` | требуют серверного рантайма | локаль берётся из сегмента маршрута / `usePathname()` |
| Server Actions (`"use server"`) | нет сервера для POST | вся логика — на клиенте или в данных |
| `src/middleware.ts` / `src/proxy.ts` | middleware не экспортируется | было удалено; редиректы `/en/*` живут в `vercel.json` |
| Route Handlers (`app/api/**/route.ts`) | станут функциями | было удалено (`/api/readme`); README тянется из браузера |
| `export const dynamic = "force-dynamic"`, `revalidate` как runtime-ISR | нет сервера для ISR | `force-static` для robots/sitemap/icon/og |
| `next/image` с оптимизатором | оптимизатор — серверная функция | `images.unoptimized: true` |
| `useSearchParams` без `Suspense` | выкидывает страницу из статики | query/hash читаются в `useEffect` (см. `Navbar`) |

Обязательные правила:

- Любой динамический сегмент объявляет `generateStaticParams()` + `dynamicParams = false`.
- Клиентские API (`useState`, `useEffect`, `usePathname`, Radix dialog/select, `localStorage`) только в файлах с `"use client"`.
- Динамические данные допустимы только на **этапе сборки** (fetch в Server Component) — они запекаются в HTML.
- `next start` не работает с `output: "export"`. Локальный предпросмотр — `npm start` (см. §7).

---

## 2. Карта репозитория

```
next.config.ts        output:"export", images.unoptimized, turbopack.root,
                      experimental.globalNotFound = true
vercel.json           headers (immutable для /_next/static, security-заголовки,
                      Content-Type для /icon и /opengraph-image) + 301 /en/* → /*
tailwind.config.ts    цвета замаплены на CSS-переменные; fontFamily на var(--font-*)
components.json       конфиг shadcn/ui (style new-york, cssVariables, aliases @/)
scripts/serve.mjs     локальный «CDN»: раздаёт out/, повторяет 301 из vercel.json
out/                  артефакт сборки (генерируется, в git не нужен)
docs/ARCHITECTURE.md  этот файл

src/app/              маршруты Next.js (тонкие адаптеры, см. §3)
src/views/            тела страниц (Server Components) + getMetadata() для SEO
src/components/       презентационные компоненты (см. §6)
src/data/             контент-реестры: projects, home, contact, site
src/i18n/             локали, словари, хелперы URL и метаданных
src/lib/              github.ts (сборка), github-client.ts (браузер), utils.ts
src/hooks/            use-in-view.ts (scroll-анимации)
src/types/            доменные типы (Project и пр.)
```

### Структура `src/app` (важно: **нет** `src/app/layout.tsx`)

```
src/app/(default)/            ← дерево БЕЗ префикса в URL = английский
  layout.tsx                  root layout: SiteShell locale="en"
  page.tsx  about/  contact/  profile/  projects/  projects/[id]/  projects/prolab-academy/
  error.tsx loading.tsx not-found.tsx     (тонкие клиентские обёртки над src/views/*State)

src/app/[locale]/             ← дерево с префиксом = ru, uz
  layout.tsx                  root layout: generateStaticParams из prefixedLocales
  page.tsx  about/  …         (зеркало (default), делегирует в те же src/views)

src/app/global-not-found.tsx  брендированный 404 для URL вне обоих деревьев → out/404.html
src/app/icon.tsx              next/og → /icon (PNG)
src/app/opengraph-image.tsx   next/og → /opengraph-image (PNG 1200×635)
src/app/robots.ts sitemap.ts  → /robots.txt, /sitemap.xml (force-static)
src/app/globals.css           Tailwind + CSS-переменные тем + fallback-шрифты
```

**Почему два root layout и нет корневого `app/layout.tsx`.** В Next.js с `localePrefix: "as-needed"` (en без префикса) приходится держать два независимых дерева: у каждого свой `<html>`, свой набор `generateStaticParams` и свои метаданные. Корневой layout был бы общим предком и навязал бы один `<html lang>`; его нет — вместо него `SiteShell` (§5), который рендерит документ сам и вызывается из обоих layout-ов.

**Почему `experimental.globalNotFound`.** У сайта два root layout, поэтому у несуществующего URL нет layout-цепочки, из которой Next собрал бы `not-found`. Флаг включает `app/global-not-found.tsx`, который рендерит документ целиком (включая `<head>`, тему и fallback-шрифты). Результат — `out/404.html`.

---

## 3. Три слоя рендеринга

Правки почти всегда затрагивают один из слоёв; их разделение — сознательное.

1. **Маршрут** (`src/app/**/page.tsx`) — 4–20 строк. Извлекает `locale`/`id` из `params`, объявляет `generateStaticParams`, делегирует в view. Два файла-близнеца: `(default)/X` и `[locale]/X`.
2. **View** (`src/views/*.tsx`) — тело страницы (Server Component) и `getMetadata(locale, …)`. Здесь собираются данные (`getGithubData()`, `projects`, словарь) и раскладываются по компонентам.
3. **Компонент** (`src/components/**`) — презентация. Клиентские — только те, что перечислены выше в инвариантах (`"use client"`).

Типовой маршрут:

```tsx
// src/app/(default)/projects/page.tsx
import ProjectsView, { getMetadata } from "@/views/ProjectsView";
import { defaultLocale } from "@/i18n/config";

export function generateMetadata() { return getMetadata(defaultLocale); }
export default function Page() { return <ProjectsView locale={defaultLocale} />; }
```

**Отклонение от схемы:** `error.tsx`, `loading.tsx`, `not-found.tsx` в обоих деревьях — это клиентские реэкспорты `src/views/ErrorState.tsx | LoadingState.tsx | NotFoundState.tsx`. Они не получают `params` (у `not-found` его нет, `error` — клиентская граница), поэтому локаль определяют сами: `localeFromPathname(usePathname())`. Логика одна на оба дерева, поэтому компонент может быть только клиентским.

### URL-схема

| URL | Файл | Язык |
|---|---|---|
| `/`, `/about`, `/projects`, `/projects/[id]`, `/profile`, `/contact` | `(default)/…` | en (`lang="en"`) |
| `/ru/*`, `/uz/*` | `[locale]/…` | ru / uz |
| `/en`, `/en/*` | — | 301 → `/`, `/*` (`vercel.json` + `serve.mjs`) |
| всё остальное | `out/404.html` | 404, `noindex`, брендированный |

SEO на каждой странице: `alternatesFor(path, locale)` даёт canonical и `hreflang` (`ru`/`en`/`uz`/`x-default`), `socialMetadata()` — OG/Twitter. Хелперы в `src/i18n/metadata.ts`.

---

## 4. i18n

- **`src/i18n/config.ts` — единственный источник правды о локалях:** `locales`, `defaultLocale = "en"`, `prefixedLocales` (все, кроме дефолтной), `isLocale()`, `resolveLocale()` (для ненадёжных `params`), `localeFromPathname()` (для клиентских компонентов), `localePath(path, locale)` — **все ссылки в проекте строятся через `localePath`**, ручных `/${locale}` быть не должно.
- **`src/i18n/types.ts`** — интерфейс `UiDictionary`: полный список строк UI. Все три словаря (`en.ts`, `ru.ts`, `uz.ts`) объявлены как `satisfies UiDictionary`, поэтому пропущенный или лишний ключ — ошибка типов: расхождение словарей ловится `npm run typecheck`.
- **`src/i18n/index.ts`** — `getDictionary(locale)` с фолбэком на en.
- **Контент** (описания проектов, тексты кейса) лежит не в словарях, а в `src/data/*`, где русский — базовый язык, а перевод — в `localized.en` (§5).
- Смена языка в `Navbar`: цикл en → ru → uz → en, текущий маршрут вычисляется из pathname, а query и hash переносятся (читаются в `useEffect` — `useSearchParams` вывел бы все страницы из статики).

**Добавить локаль:** дополнить `locales` в `config.ts`, добавить словарь в `i18n/`, при необходимости — `localized.<locale>` в проектах и `openGraphLocale()` в `metadata.ts`. Префиксные маршруты, sitemap и hreflang подхватят её автоматически (`prefixedLocales` и `locales` выводятся из массива).

---

## 5. Данные, GitHub и доменная модель

### `src/data`

| Файл | Что внутри |
|---|---|
| `projects.ts` | реестр курируемых проектов; локализация; связь с GitHub; кейс-стади PROlab |
| `home.ts` | принципы работы, иконки стека (`lucide-react`, `react-icons`) |
| `contact.ts` | email, GitHub, Telegram, Instagram (используется в JSON-LD и футере) |
| `site.ts` | `siteUrl` из `NEXT_PUBLIC_SITE_URL` (фолбэк на прод-Vercel) — база для canonical/OG/sitemap/JSON-LD |

### Модель проекта (`src/types/index.ts`)

`Project`: `id`, `title`, `description`, `tags[]`, `githubUrl`, `liveUrl?`, `role?`, `tier` (`secondary | experiment`), `image?`, `caseStudy?` (общего вида), `customCaseStudy?` (специальная вёрстка), `localized?: { en: … }`.

`src/data/projects.ts` экспортирует и хелперы, которыми пользуются страницы:

- `localizeProject(s)` — подставляет `localized.en` для en-локали;
- `projectsForPinnedRepos`, `projectsNotPinned`, `missingProjectsForPinnedRepos` — сопоставляют записи реестра с репозиториями GitHub по `owner/repo` из `githubUrl` (`repositoryIdentity`);
- `projectForRepository(fullNameOrUrl, locale)` — выдаёт локализованную копию проекта для GitHub-карточки (чтобы на `/ru` не показывался английский текст из GitHub);
- `getProject(id)`, `isCustomCaseStudy(project)`.

**Кейс-стади:** проект с `customCaseStudy` (сейчас `prolab-academy`) получает собственную страницу `projects/prolab-academy`; остальные идут через generic `projects/[id]`, чей `generateStaticParams` **исключает** кастомные (`isCustomCaseStudy`), чтобы не было двух страниц на один URL.

### GitHub: два разных механизма

**`src/lib/github.ts` — только на сборке.** `getGithubData()` собирает всё через `Promise.allSettled` и **никогда не роняет страницу**:

- `user` — REST `/users/{login}`;
- `repos` — REST `/users/{login}/repos?per_page=100`, форки отфильтрованы;
- `pinnedRepos` — GraphQL `pinnedItems` (нужен токен). Если токена нет / он протух / GraphQL вернул пусто → детерминированный фолбэк `featuredReposFromProjects`: берутся репозитории, стоящие за курируемыми проектами из `projects.ts`. Секция «Selected work» не исчезает никогда;
- `languageStats` — топ-5 языков по числу репозиториев + «Other»;
- `recentRepos` — 4 последних по `updated_at`.

Тонкости: `githubFetch` при 401/403 с токеном **повторяет запрос анонимно** (токен — только апгрейд лимита, а не необходимость). `getGithubUser`/`getGithubRepos` объявлены `async` специально: синхронный `throw` из `getUsername()` (нет `GITHUB_USERNAME`) развернул бы список аргументов `Promise.allSettled` и превратил отсутствующую переменную окружения в провал сборки. **Проверено:** без `GITHUB_USERNAME` билд завершается с EXIT=0, а страницы рендерят деградированное состояние (`home.githubError` + кнопка профиля на главной).

**`src/lib/github-client.ts` — только в браузере.** README репозитория тянется напрямую из `api.github.com` (у него разрешительный CORS), поэтому серверный прокси-роут не нужен. Отсутствие README (`404`) — это `null`, а не ошибка.

### Переменные окружения

| Переменная | Где нужна | Обязательна | Без неё |
|---|---|---|---|
| `GITHUB_USERNAME` | build-time | да (для GitHub-секций) | сборка проходит, секции GitHub показывают сообщение об ошибке |
| `GITHUB_TOKEN` | build-time | нет | REST работает анонимно (60 req/час на IP сборщика); pinned недоступен → фолбэк на курируемые проекты. Протухший токен безопасен |
| `NEXT_PUBLIC_SITE_URL` | build-time | нет, дефолт в коде — канонический домен | canonical/hreflang/OG/sitemap запекают `https://www.bilolidin.dev`; переменная нужна только для превью-деплоя |

**Свежесть данных.** GitHub запекается в HTML при сборке; `next: { revalidate: 3600 }` влияет только на fetch-кеш во время билда. Чтобы обновить данные, нужен **новый деплой** (в т.ч. пересборка по расписанию/вебхуку).

---

## 6. Тема, стили, компоненты

**Тема** — атрибут `data-theme="light|dark"` на `<html>` + CSS-переменные:

- `src/app/globals.css`: светлая палитра висит на голом `:root` (страница читаема даже без JS/атрибута), тёмная — на `:root[data-theme="dark"]`; там же маппинг на семантические токены shadcn и **fallback-стеки шрифтов** (нужны документам без `next/font` — глобальному 404).
- `src/components/layout/theme-script.ts` — крошечный inline-скрипт «до первой отрисовки»: читает `localStorage.theme`, иначе `prefers-color-scheme`, и ставит атрибут. Вставлен в `<body>` `SiteShell` и в `<head>` глобального 404.
- `src/components/layout/ThemeProvider.tsx` (client) — `useSyncExternalStore` над модульным стором; **переустанавливает `data-theme` при каждой смене `pathname`**, потому что React реконсилит `<html>` и мог потерять императивно выставленный атрибут (это был реальный баг: после soft-навигации страница становилась чёрной на чёрной). `ThemeToggle` — кнопка с иконками и `aria`-подписями из словаря.
- `tailwind.config.ts`: `darkMode: ["class"]` — **рудимент**: тема работает через `[data-theme]` и CSS-переменные, Tailwind-вариантов `dark:` в разметке нет (единственные совпадения `"dark"` — имена иконок/ключи в `ThemeToggle`).

**UI-компоненты** (`src/components/ui`): локальные копии shadcn/ui поверх Radix (`dialog`, `select`, `sheet`, `button`, `badge`, `skeleton`) + `reveal.tsx` (анимация появления через `use-in-view`) и `architecture-diagram.tsx`. `cn()` — в `src/lib/utils.ts` (`clsx` + `tailwind-merge`).

**Прочие папки:** `components/layout` (SiteShell, Navbar, Footer, ThemeProvider, ThemeToggle, theme-script), `components/home` (секции главной), `components/project`/`components/projects` (карточки, кейс-стади), `components/profile/RepoExplorer.tsx` (клиентский: фильтр, сортировка, раскрытие README), `components/effects/CursorGrid.tsx` (фон).

`SiteShell` — общий каркас обоих деревьев: `<html lang>`, шрифты `Inter` + `JetBrains_Mono` (латиница + кириллица, `display: swap`), инлайн-тема, JSON-LD (Person + WebSite), `ThemeProvider`, `CursorGrid`, `Navbar`, `<main className="… pt-16">`, `Footer`. Всё внутри статично.

---

## 7. Сборка, проверка, деплой

```bash
npm run dev        # next dev — разработка (сервер есть только у dev-режима)
npm run lint       # eslint .
npm run typecheck  # tsc --noEmit
npm run build      # next build → out/ (41 HTML-страница, ~283 файла)
npm start          # node scripts/serve.mjs — раздаёт out/ как CDN на 127.0.0.1:3000
```

`scripts/serve.mjs` — не «ещё один dev-сервер», а локальная репетиция продакшена: раздаёт именно `out/`, повторяет 301 `/en/*` из `vercel.json`, отдаёт `out/404.html` как 404, умеет `HEAD`, ставит `Content-Type` для расширений без точки (`icon`, `opengraph-image`), защищён от path traversal.

**Артефакты экспорта, которые нельзя «чистить»:** `out/**/*.txt` (например `out/profile/__next._full.txt`) — это RSC-payload'ы для клиентской навигации; без них ломаются soft-переходы. Также обязательны `out/_next/**` (ассеты, в `vercel.json` получают `immutable`), `out/404.html`, `out/icon`, `out/opengraph-image`, `robots.txt`, `sitemap.xml`. Обратите внимание: страницы лежат как `out/about.html` рядом с папкой `out/about/` с payload'ами — «чистые» URL разрешаются в соседний `.html` (это делает и `serve.mjs`, и статический хостинг).

**Vercel:** хостинг — тариф Hobby с кастомным доменом. Проект распознаётся как Next.js, но при `output: "export"` Next выкладывает `out/` как статический вывод — Serverless Functions не создаются, Fluid Active CPU не расходуется. `vercel.json` добавляет заголовки и легаси-редиректы. Данные обновляются только при новом деплое. Базовый URL метаданных берётся из `NEXT_PUBLIC_SITE_URL`, а при её отсутствии — из дефолта `https://www.bilolidin.dev` в `src/data/site.ts`.

**Что уже проверено на реальном `out/`:** сборка/lint/typecheck = EXIT 0; 41 страница, 0 серверных точек входа; `/`, `/ru`, `/uz` с hreflang; 301 `/en/*`; брендированный 404 со статусом 404; переключение темы и её сохранение при soft-навигации и перезагрузке; локализованные карточки проектов на всех языках; раскрытие README на `/profile` через браузерный фолбэк.

---

## 8. Рецепты и известные ограничения

**Добавить проект:** запись в `src/data/projects.ts` (`id`, русский текст, `tags`, `githubUrl`, `tier`, при необходимости `localized.en`, `caseStudy`). Если у проекта есть `customCaseStudy` — отдельная страница-маршрут в **обоих** деревьях + исключение из `[id]`. Обновятся `/projects`, главная (карточка подтянется к GitHub-репозиторию по `githubUrl`), sitemap.

**Добавить страницу:** `src/views/<Name>View.tsx` с `getMetadata(locale)` → два тонких `page.tsx` (`(default)/` и `[locale]/`) → добавить путь в `sitemap.ts`, если страница публичная. Три файла — цена схемы с двумя root layout.

**Ограничения, о которых надо знать:**

- `/profile` отдаёт ~316 КБ HTML: `RepoExplorer` — клиентский компонент, и весь список из 33 репозиториев сериализуется в разметку. Кандидат на оптимизацию (пагинация/фильтр на сервере или урезание полей).
- Данные GitHub устаревают между деплоями; анонимный лимит 60 запросов/час на IP сборщика.
- `AUDIT_REPORT.md` (и частично `I18N_*.md`, `PROJECTS_REPORT.md`) — исторические документы, ссылаются на старый аккаунт `b4631119-oss` и старое состояние роутинга; не источник правды.
- Иконки/OG генерируются через `next/og` на сборке — изменение шрифтов/размеров требует пересборки.
