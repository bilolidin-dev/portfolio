import { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Emitted once at build time into `out/robots.txt`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}