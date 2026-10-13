import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio is a pure static site: `next build` writes a fully rendered
  // site to `out/`, which any CDN can serve without a Node.js server.
  output: "export",
  images: {
    // A static export cannot run the on-demand image optimizer, so images are
    // served as-is (GitHub avatars already come from a fast CDN).
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // The site has two root layouts (`(default)` and `[locale]`), so unmatched
    // URLs have no layout to compose a 404 from — `app/global-not-found.tsx`
    // supplies the whole document instead of Next's unbranded default.
    globalNotFound: true,
  },
};

export default nextConfig;
