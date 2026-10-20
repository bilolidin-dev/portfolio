#!/usr/bin/env node
// Serves the static export in `out/` exactly like a CDN would.
// `next start` does not work with `output: "export"`, so use
// `npm run build && npm start` to preview the real deployable artifact.
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { basename, extname, resolve, sep } from "node:path";

const root = resolve(process.cwd(), process.argv[2] ?? "out");
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webmanifest": "application/manifest+json",
};

// next/og metadata routes are written without a file extension, but are PNGs.
const extensionlessTypes = {
  icon: "image/png",
  "opengraph-image": "image/png",
};

// Mirrors the `redirects` block in vercel.json, so the local preview of the
// export behaves like the CDN. `/en` is the legacy prefix for the default
// locale, whose URLs are prefix-free now.
const redirects = [
  { pattern: /^\/en$/, destination: "/" },
  { pattern: /^\/en(\/.*)?$/, destination: "$1" },
  // Pages removed in the move from portfolio to personal brand site.
  { pattern: /^(\/(?:ru|uz|uz-cyrl|ky|es))\/(?:about|contact|profile|projects)(?:\/.*)?$/, destination: "$1" },
  { pattern: /^\/(?:about|contact|profile|projects)(?:\/.*)?$/, destination: "/" },
];

function redirectFor(pathname) {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  for (const rule of redirects) {
    const match = rule.pattern.exec(trimmed);
    if (match) return rule.destination.replace("$1", match[1] ?? "");
  }
  return null;
}

function contentTypeFor(filePath) {
  return (
    contentTypes[extname(filePath).toLowerCase()] ??
    extensionlessTypes[basename(filePath)] ??
    "application/octet-stream"
  );
}

/** Maps a URL path to a file in `out/`, mirroring how static hosts resolve clean URLs. */
function resolveFile(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  const candidates =
    trimmed === ""
      ? ["/index.html"]
      : [trimmed, `${trimmed}.html`, `${trimmed}/index.html`];

  for (const candidate of candidates) {
    const filePath = resolve(root, `.${candidate}`);
    if (!filePath.startsWith(root + sep)) continue; // path traversal guard
    if (existsSync(filePath) && statSync(filePath).isFile()) return filePath;
  }
  return null;
}

function sendFile(response, filePath, status = 200) {
  response.writeHead(status, {
    "Content-Type": contentTypeFor(filePath),
    "Content-Length": statSync(filePath).size,
    "Cache-Control": status === 200 ? "public, max-age=0, must-revalidate" : "no-store",
  });
  createReadStream(filePath)
    .on("error", () => response.destroy())
    .pipe(response);
}

const server = createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url ?? "/", `http://${host}:${port}`).pathname);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Bad Request");
    return;
  }

  const redirect = redirectFor(pathname);
  if (redirect) {
    response.writeHead(301, { Location: redirect });
    response.end();
    return;
  }

  const filePath = resolveFile(pathname);
  if (!filePath) {
    const notFound = resolveFile("/404.html");
    if (!notFound) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not Found");
      return;
    }
    sendFile(response, notFound, 404);
    return;
  }

  if (request.method === "HEAD") {
    response.writeHead(200, {
      "Content-Type": contentTypeFor(filePath),
      "Content-Length": statSync(filePath).size,
    });
    response.end();
    return;
  }

  sendFile(response, filePath);
});

server.listen(port, host, () => {
  const address = server.address();
  const boundPort = typeof address === "object" && address ? address.port : port;
  console.log(`Serving static export from ${root} → http://${host}:${boundPort}`);
});
