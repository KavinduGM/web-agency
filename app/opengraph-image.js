import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GroovyMark WebX — Web Development & AI Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #6D28D9 0%, #8B4FF0 45%, #06B6D4 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Top brand bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>
              GroovyMark WebX
            </div>
            <div style={{ fontSize: 14, opacity: 0.85, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Web Development × AI Automation
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            We build the digital products that move B2B businesses forward.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              opacity: 0.9,
              maxWidth: 900,
              lineHeight: 1.45,
            }}
          >
            Custom websites · eCommerce · AI agents · workflow automation. Engineered for outcomes.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: 16,
            opacity: 0.85,
          }}
        >
          <span>groovymarkwebx.com</span>
          <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span>★ 5.0 client rating</span>
            <span>·</span>
            <span>8+ countries served</span>
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
