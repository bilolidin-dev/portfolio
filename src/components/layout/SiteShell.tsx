import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CursorGrid } from "@/components/effects/CursorGrid";
import { themeScript } from "@/components/layout/theme-script";
import { siteUrl } from "@/data/site";
import { contact } from "@/data/contact";
import type { Locale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

/**
 * Root layout shell for one locale tree. It renders `<html lang>` itself, so it
 * must only be used from a root layout (the `(default)` and `[locale]` trees).
 * Everything inside is static, which keeps the whole site exportable.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bilolidin",
    jobTitle: "Full-Stack Developer",
    url: siteUrl,
    inLanguage: locale,
    sameAs: [contact.github, contact.telegram, contact.instagram],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bilolidin — Full-Stack Developer",
    url: siteUrl,
    inLanguage: locale,
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg text-ink`}>
        {/* Parser-blocking and first in the body, so the theme is on <html>
            before anything paints. Rendering them here (instead of a literal
            <head>) keeps the document valid and avoids duplicating Next's own
            head, which the metadata API fills in. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, webSiteSchema]) }}
        />
        <ThemeProvider>
          <CursorGrid />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
