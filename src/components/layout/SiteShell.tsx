import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguagePrompt } from "@/components/layout/LanguagePrompt";
import { themeScript } from "@/components/layout/theme-script";
import { siteUrl } from "@/data/site";
import { contact } from "@/data/contact";
import { htmlLang, localePath, type Locale } from "@/i18n/config";
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
  const d = getDictionary(locale);
  const pageUrl = `${siteUrl}${localePath("/", locale)}`;
  const sameAs = [contact.instagram, contact.telegram, contact.github];
  // Entity graph shared by every locale: the person, the one service he sells
  // and the page itself. Search engines and AI answer engines use it to decide
  // what the site is about and where the work happens.
  const personId = `${siteUrl}/#person`;
  const serviceId = `${siteUrl}/#service`;
  const address = {
    "@type": "PostalAddress",
    addressLocality: "Osh",
    addressCountry: "KG",
  };
  const languages = ["en", "ru", "uz", "ky", "es"];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Bilolidin",
    jobTitle: "Digital Product Developer",
    description: d.meta.description,
    url: pageUrl,
    image: `${siteUrl}/opengraph-image`,
    email: `mailto:${contact.email}`,
    address,
    knowsLanguage: languages,
    knowsAbout: [
      "Web development",
      "Next.js",
      "React",
      "TypeScript",
      "Web services",
      "Business process automation",
    ],
    sameAs,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: "Bilolidin — Digital Product Developer",
    url: pageUrl,
    image: `${siteUrl}/opengraph-image`,
    description: d.meta.description,
    email: `mailto:${contact.email}`,
    founder: { "@id": personId },
    address,
    // Local work in Kyrgyzstan, remote work everywhere else.
    areaServed: [
      { "@type": "Country", name: "Kyrgyzstan" },
      { "@type": "Country", name: "Uzbekistan" },
      { "@type": "Country", name: "Kazakhstan" },
      { "@type": "Country", name: "Russia" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsLanguage: languages,
    sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: d.services.title,
      itemListElement: d.services.items.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: { "@type": "Service", name: item.title, description: item.description },
      })),
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Bilolidin — Digital Product Developer",
    url: pageUrl,
    inLanguage: htmlLang[locale],
    publisher: { "@id": personId },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: d.meta.title,
    description: d.meta.description,
    inLanguage: htmlLang[locale],
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": serviceId },
    mainEntity: { "@id": serviceId },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: htmlLang[locale],
    mainEntity: d.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              serviceSchema,
              webSiteSchema,
              webPageSchema,
              faqSchema,
            ]),
          }}
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
