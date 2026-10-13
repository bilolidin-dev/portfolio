import { ImageResponse } from "next/og";

// Rendered once at build time into `out/icon` — no runtime for this route.
export const dynamic = "force-static";

export default function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0c",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <span
            style={{
              fontSize: 140,
              fontWeight: 700,
              color: "#5b8dff",
              lineHeight: 1,
              fontFamily: "JetBrains Mono, ui-monospace, monospace",
            }}
          >
            B
          </span>
        </div>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}