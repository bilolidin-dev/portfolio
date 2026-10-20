import { ImageResponse } from "next/og";

// Rendered once at build time into `out/opengraph-image` — no runtime for this route.
export const dynamic = "force-static";

export default function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0d14",
          color: "#f2f4f8",
          fontFamily: "system-ui, sans-serif",
          padding: 88,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#8a93a6" }}>
          <div style={{ width: 48, height: 2, backgroundColor: "#7aa2ff" }} />
          Digital Product Developer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <span style={{ fontSize: 168, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.9 }}>
            Bilolidin
          </span>
          <span style={{ fontSize: 40, color: "#c9cfdb", lineHeight: 1.25 }}>
            I build and grow digital products for business.
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8a93a6" }}>bilolidin.dev</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
