import type { Metadata } from "next";
import { siteUrl } from "@/data/site";
import { localePath, locales, type Locale } from "@/i18n/config";

export { localePath };

export function openGraphLocale(locale: Locale): string {
  return { en: "en_US", ru: "ru_RU", uz: "uz_UZ" }[locale];
}

const siteTitle = "Bilolidin — Full-Stack Developer";
const siteDescription =
  "Full-stack разработчик из Кыргызстана: платформа онлайн-экзаменов, система планирования дня и десктопная утилита для локальной сети. React, Next.js, TypeScript, Firebase, Supabase.";

/** Root-layout metadata shared by the prefix-free default locale and the `/{locale}` trees. */
export function rootMetadata(locale: Locale): Metadata {
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
      alternateLocale: locales.filter((item) => item !== locale).map(openGraphLocale),
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
    languages: {
      ru: `${siteUrl}${localePath(path, "ru")}`,
      en: `${siteUrl}${localePath(path, "en")}`,
      uz: `${siteUrl}${localePath(path, "uz")}`,
      "x-default": `${siteUrl}${path}`,
    },
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
      alternateLocale: locales.filter((item) => item !== locale).map(openGraphLocale),
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: [image] },
  };
}
