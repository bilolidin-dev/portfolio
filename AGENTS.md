# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project map

This repository is a **fully static** Next.js portfolio (`output: "export"`, three locales, GitHub data baked in at build time). Before touching routes, config, i18n or data fetching, read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) (implementation invariants and recipes) and [`docs/OVERVIEW.md`](docs/OVERVIEW.md) (product/UX, screens, data flows, glossary). ARCHITECTURE.md maps the two root layouts, the `src/views` layer, the build-time GitHub fallbacks, the export artifacts that must not be pruned, and the invariants that would break the static export (`next/headers`, Server Actions, route handlers, middleware, dynamic rendering). Build/preview: `npm run build && npm start`.
