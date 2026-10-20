import type { MetadataRoute } from "next";

// Emitted once at build time into `out/sitemap.xml`.
export const dynamic = "force-static";
import { siteUrl } from "@/data/site";
import { defaultLocale, localePath, locales, type Locale } from "@/i18n/config";

function entry(
  path: string,
  locale: Locale,
  priority: number,
  changeFrequency: "daily" | "weekly" | "monthly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${localePath(path, locale)}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        ru: `${siteUrl}${localePath(path, "ru")}`,
        en: `${siteUrl}${localePath(path, "en")}`,
        uz: `${siteUrl}${localePath(path, "uz")}`,
        "x-default": `${siteUrl}${localePath(path, defaultLocale)}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // One-page site: the home page in every locale.
  return locales.map((locale) => entry("/", locale, 1, "monthly"));
}
