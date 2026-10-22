import type { Metadata } from "next";
import { siteUrl } from "@/data/site";
import { htmlLang, localePath, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export { localePath };

export function openGraphLocale(locale: Locale): string {
  return { en: "en_US", ru: "ru_RU", uz: "uz_UZ", "uz-cyrl": "uz_UZ", ky: "ky_KG", es: "es_ES" }[locale];
}

/** Open Graph locales of the other languages (both Uzbek scripts share uz_UZ). */
function alternateOgLocales(locale: Locale): string[] {
  const own = openGraphLocale(locale);
  return [...new Set(locales.map(openGraphLocale))].filter((item) => item !== own);
}

/**
 * Search-console tokens are build-time values: put them in the build
 * environment (Vercel → Settings → Environment Variables) and the `<meta>`
 * verification tag appears on every page of the next build.
 */
const verification = {
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
    ? { yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION }
    : {}),
};

/** Root-layout metadata shared by the prefix-free default locale and the `/{locale}` trees. */
export function rootMetadata(locale: Locale): Metadata {
  const { title: siteTitle, description: siteDescription } = getDictionary(locale).meta;
  return {
    title: {
      default: siteTitle,
      template: "%s — Bilolidin",
    },
    description: siteDescription,
    metadataBase: new URL(siteUrl),
    robots: {
      index: true,
      follow: true,
    },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
    icons: {
      icon: "/icon",
    },
    manifest: "/manifest.json",
    alternates: alternatesFor("/", locale),
    openGraph: {
      type: "website",
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName: "Bilolidin",
      locale: openGraphLocale(locale),
      alternateLocale: alternateOgLocales(locale),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 635,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: ["/opengraph-image"],
    },
    other: { "content-language": locale },
  };
}

export function alternatesFor(path: string, locale: Locale) {
  return {
    canonical: localePath(path, locale),
    languages: hreflangMap(path),
  };
}

export function socialMetadata(path: string, locale: Locale, title: string, description: string, image = "/opengraph-image") {
  const url = `${siteUrl}${localePath(path, locale)}`;
  const ogLocale = openGraphLocale(locale);
  return {
    openGraph: {
      type: "website" as const,
      title,
      description,
      url,
      locale: ogLocale,
      alternateLocale: alternateOgLocales(locale),
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: [image] },
  };
}

/** hreflang → absolute URL for every locale, plus `x-default`. */
export function hreflangMap(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((locale) => [htmlLang[locale], `${siteUrl}${localePath(path, locale)}`])),
    "x-default": `${siteUrl}${path}`,
  };
}
