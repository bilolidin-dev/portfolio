import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguagePrompt } from "@/components/layout/LanguagePrompt";
import { themeScript } from "@/components/layout/theme-script";
import { siteUrl } from "@/data/site";
import { contact } from "@/data/contact";
import { htmlLang, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

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
    jobTitle: "Digital Product Developer",
    description: getDictionary(locale).meta.description,
    url: siteUrl,
    email: `mailto:${contact.email}`,
    inLanguage: htmlLang[locale],
    sameAs: [contact.instagram, contact.telegram, contact.github],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bilolidin — Digital Product Developer",
    url: siteUrl,
    inLanguage: htmlLang[locale],
  };

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg text-ink antialiased`}>
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
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer locale={locale} />
          </div>
          <LanguagePrompt locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
