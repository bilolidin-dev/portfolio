import type { Metadata } from "next";
import "./globals.css";
import { themeScript } from "@/components/layout/theme-script";
import { siteUrl } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale } from "@/i18n/config";

/**
 * Branded 404 for URLs that match no route at all — the page a static host
 * serves from `404.html` (or with `try_files … /404.html`).
 *
 * It must be a full HTML document: it bypasses the layouts on purpose, because
 * the site has two root layouts (the prefix-free default locale and `[locale]`).
 * That also means it applies the theme and the stylesheet itself.
 *
 * Only the default locale's strings are used here: an unmatched URL carries no
 * language, and client-side detection would cost this page JavaScript it does
 * not need. Fonts fall back to `system-ui`/`ui-monospace` (see tailwind config).
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404 — Bilolidin",
  description: "The requested page could not be found.",
  // A 404 must never be indexed, even if a host answers it with HTTP 200.
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  const d = getDictionary(defaultLocale);

  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        <main className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md space-y-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-bg-elevated">
                <span className="text-3xl" aria-hidden="true">
                  🔍
                </span>
              </div>
              <p className="font-mono text-sm text-accent">404</p>
              <h1 className="font-sans text-3xl font-bold text-ink">{d.states.notFound}</h1>
              <p className="max-w-xs text-sm text-muted">{d.states.notFoundDescription}</p>
            </div>
            {/* A full document load is intended: this page bypasses the layouts
                (and therefore the client router), so `next/link` navigation does
                not apply here and a plain anchor is the reliable choice. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              ← {d.buttons.returnHome}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
