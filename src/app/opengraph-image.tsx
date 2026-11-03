import { ImageResponse } from "next/og";

export const alt = "Gaggaboom – Kerstin Kleinenbrands. Moderation, Reels und Vodcasts aus Köln.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          width: "100%", height: "100%", padding: 72,
          background: "#111111", color: "#ffffff", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4 }}>
          KERSTIN KLEINENBRANDS · KÖLN
        </div>
        <div style={{ display: "flex", fontSize: 118, fontWeight: 700, letterSpacing: -6, color: "#dfff00" }}>
          GAGGABOOM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 40 }}>Zwischen Menschen und Marken.</div>
          <div style={{ fontSize: 26, color: "#cccccc" }}>Moderation · Reels · Interviews · Vodcasts</div>
        </div>
      </div>
    ),
    size,
  );
}
