# Bilolidin — Full-Stack Developer Portfolio

A modern, performant portfolio website built with **Next.js 16**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features a dark-first design, smooth animations, and a fully typed codebase.

The site is **fully static**: `next build` exports every page to `out/`, and a CDN serves those files. There is no server runtime, no middleware, and no API route to execute — so hosting costs nothing per request and there is nothing that can consume serverless compute.

🔗 **Live Demo**: [https://www.bilolidin.dev/](https://www.bilolidin.dev/)

---

## ✨ Features

- **Static export** (`output: "export"`) — the entire site is pre-rendered HTML, CSS and JS in `out/`
- **Zero serverless functions** — no API routes, no middleware, no image optimizer
- **Dark-first design** with a polished light mode — no flash on load
- **Reveal-on-scroll animations** via `IntersectionObserver` (respects `prefers-reduced-motion`)
- **Cursor-reactive dot-grid background** — subtle ambient texture that follows the cursor
- **Pulse-flow animation** on architecture diagrams
- **Two-way theme toggle** (Light / Dark, initial value follows `prefers-color-scheme`) with View Transitions API ripple effect
- **Fully typed** with strict TypeScript
- **SEO-ready**: Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- **Error/NotFound pages** with graceful fallbacks (a branded `404.html` with `noindex`)
- **PWA-ready** manifest.json + dynamic favicon/OG image generation

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS |
| **UI** | shadcn/ui (Radix UI), Lucide Icons, react-icons (Simple Icons) |
| **Backend / Data** | Supabase, PostgreSQL, Firebase/Firestore, Python/Django, C#/.NET |
| **DevOps** | Git, GitHub Actions, Docker, Linux, Vercel |
| **Tools** | Figma, PyCharm, Git, GitHub, ESLint, TypeScript |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (the repository ships a `package-lock.json`)

### Installation

```bash
# Clone the repo
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Create .env.local manually (see "Environment Variables" below)
# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To inspect the real deployable artifact, build the export and serve it the way a
CDN would (this replaces `next start`, which does not work with a static export):

```bash
npm run build          # writes out/
npm start              # serves out/ on http://127.0.0.1:3000 (PORT/HOST respected)
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com      # Optional: overrides the default https://www.bilolidin.dev
```

**This is a build-time value.** Because the site is a static export, the URL is
baked into canonical tags, `hreflang` alternates, Open Graph metadata, the
sitemap and `robots.txt` while `next build` renders the pages. Set it as a
**build** environment variable on the host too (on Vercel: Project → Settings →
Environment Variables); a runtime variable would have no effect.

The site has no server-side data source: every page renders from the typed data
in `src/data/` at build time, so there is no API key to configure and nothing to
fetch at runtime.

---

## 📦 Available Scripts

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build → static export in out/
npm start            # Serve the built out/ directory (static file server)
npm run lint         # ESLint
npm run typecheck    # TypeScript check (tsc --noEmit)
```

---

## 📚 Documentation

- [docs/OVERVIEW.md](docs/OVERVIEW.md) — полное описание проекта: экраны и UX, пользовательские сценарии, архитектура, данные и интеграции, роли, фичи, ограничения (§1–11).
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — технический handoff: инварианты статического экспорта, слои, i18n, артефакты сборки и рецепты правок (разделы про GitHub относятся к прежней версии сайта).
- [docs/LIVE-AUDIT-2026-10-13.md](docs/LIVE-AUDIT-2026-10-13.md) — разбор живого сайта www.bilolidin.dev: содержание, структура, технологии, SEO, контакты и расхождения с этим репозиторием.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (default)/           # English page tree, served from prefix-free URLs
│   │   ├── layout.tsx       # Root layout for the default locale
│   │   ├── page.tsx         # Homepage composition
│   │   ├── about/           # About page
│   │   ├── projects/        # Project index, dynamic details, and PROlab case study
│   │   ├── contact/         # Contact page
│   │   ├── error.tsx, not-found.tsx
│   ├── [locale]/            # RU/UZ tree, statically generated for each locale
│   │   ├── layout.tsx       # Locale validation (generateStaticParams) and metadata
│   │   └── …                # The same routes, each a thin wrapper over src/views
│   ├── global-not-found.tsx # Branded 404 document for unmatched URLs (→ out/404.html)
│   ├── sitemap.ts           # Sitemap with language alternates
│   ├── robots.ts            # Robots.txt generation
│   ├── icon.tsx, opengraph-image.tsx  # Generated favicon and OG image
│   └── globals.css          # Design tokens, focus styles and animations
├── views/                   # Shared page bodies + error/not-found states
├── i18n/
│   ├── config.ts            # Supported locales, default locale, path helpers
│   ├── types.ts             # Required dictionary contract
│   ├── en.ts, ru.ts, uz.ts   # Typed UI dictionaries
│   ├── metadata.ts          # Canonical and hreflang helpers
├── components/              # home, layout, project, UI and effects
├── data/                    # Project registry, home data, contact and site configuration
│   └── projects.ts          # All projects, tiers, links and optional localized content
├── lib/
│   └── utils.ts             # Class-name helper (clsx + tailwind-merge)
├── types/                   # Shared TypeScript interfaces
└── …
public/                     # Manifest and optional project assets
scripts/serve.mjs           # Static preview server that mirrors the CDN behaviour
```

### Localization

English is the default language and owns the prefix-free URLs (`/`, `/about`, `/projects`). Russian and Uzbek live under `/ru/...` and `/uz/...`. The legacy `/en/...` prefix that older URLs used is redirected to the prefix-free path by `vercel.json` (and by `scripts/serve.mjs` locally), so existing links and indexed pages keep working.

Because there is no middleware any more, the two locales are two root layouts: `app/(default)/` and `app/[locale]/`. Both render the same page bodies from `src/views/` with the locale passed in as a prop, which keeps the content in one place while letting each locale tree be fully static. Each page emits its own canonical URL and EN/RU/UZ/x-default alternate links.

# Как добавить проект

1. Откройте `src/data/projects.ts`.
2. Добавьте одну запись в массив `projects` и сохраните обязательные поля: `id`, `title`, `description`, `tags` и `tier`.
3. Выберите tier для организации проекта: `secondary` (избранные, в порядке массива) или `experiment`.
4. Добавьте английскую версию в `localized.en` для описания и, если нужно, case study. Ссылки GitHub/Live и теги остаются общими. `githubUrl` необязателен: без него карточка просто не показывает кнопку Code.
5. `caseStudy` необязателен. Для специальной страницы PROlab используется существующее поле `customCaseStudy`; обычным проектам его заполнять не нужно.
6. `image` необязателен. Если позже появится скриншот, создайте `public/projects/<id>/cover.webp` и добавьте `image` в эту же запись; для английского alt-текста используйте `localized.en.image`.
7. Не нужно вручную менять homepage, `/projects`, `generateStaticParams`, sitemap, metadata, canonical, hreflang или карточки.
8. Проверьте изменения командой `npm run build`.

Из одной записи проект автоматически используется в homepage, списке проектов, локализованной detail-странице, metadata, sitemap и организации остальных проектов по tier. Секция Selected Work строится из этого же массива: проекты с tier `secondary` попадают в неё в порядке записи. Проекты без `image` отображаются без пустого блока превью.

---

## 🎨 Design System

### Colors (CSS Variables)

The variables are declared under `:root` (light) and `:root[data-theme="dark"]`,
and the theme is applied by setting `data-theme` on `<html>`. The bare `:root`
block is intentional: it keeps the page readable even when the attribute is
missing (JavaScript disabled, or a document that does not apply the theme).

```css
:root[data-theme="dark"] {
  --bg: #0a0a0c;
  --bg-elevated: #111114;
  --ink: #f5f5f7;
  --muted: #8d8d93;
  --accent: #5b8dff;
  --accent-2: #a78bfa;
  --line: #232326;
  --glow: rgba(91, 141, 255, 0.15);
  --radius: 0.5rem;
}

:root,
:root[data-theme="light"] {
  --bg: #fafafa;
  --bg-elevated: #ffffff;
  --ink: #0a0a0c;
  --muted: #6e6e73;
  --accent: #3568d8;
  --accent-2: #8b5cf6;
  --line: #e5e5e7;
  --glow: rgba(53, 104, 216, 0.08);
  --radius: 0.5rem;
}
```

### Fonts

- **Sans**: Inter (400/500/600/700) via `next/font/google`
- **Mono**: JetBrains Mono (400/500/600) via `next/font/google`

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then import the repository in Vercel
vercel deploy
```

Steps that matter for this project:

1. Set `NEXT_PUBLIC_SITE_URL` to `https://www.bilolidin.dev` in the **build**
   environment so canonical URLs, `hreflang`, Open Graph tags and the sitemap
   point at the custom domain (the same value is the code default).
2. Keep the detected **Next.js** framework preset. With `output: "export"` there
   is nothing for Vercel to run as a function, and `vercel.json` adds the CDN
   headers and the legacy `/en` redirects (static-export builds cannot declare
   headers in `next.config.ts`).
3. After the first deploy, open **Deployments → your deployment → Resources** and
   confirm it lists **no functions and no middleware** — only static assets. That
   is the real proof that page views cannot consume Fluid Active CPU.

`vercel.json` also pins `public, max-age=31536000, immutable` on `/_next/static/*`
(content-hashed assets) so repeat visits are served from the edge cache.

### Docker

Docker is **not set up** in this repository: there is no `Dockerfile`, and `next.config.ts` does not enable `output: "standalone"`, which a `.next/standalone`-based image requires.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Bilolidin** — Full-Stack Developer  
📍 Osh, Kyrgyzstan  
🔗 [GitHub](https://github.com/bilolidin-dev) • [Telegram](https://t.me/Teg123489) • [Email](mailto:bilolmen998@gmail.com)