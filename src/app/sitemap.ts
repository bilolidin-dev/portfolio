import type { MetadataRoute } from "next";

// Emitted once at build time into `out/sitemap.xml`.
export const dynamic = "force-static";
import { siteUrl } from "@/data/site";
import { localePath, locales, type Locale } from "@/i18n/config";
import { hreflangMap } from "@/i18n/metadata";

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
    alternates: { languages: hreflangMap(path) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // One-page site: the home page in every locale.
  return locales.map((locale) => entry("/", locale, 1, "monthly"));
}
