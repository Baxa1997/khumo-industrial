import { ImageResponse } from "next/og";
import { company } from "@/lib/data";

export const alt = "Khumo Industrial — marking printers in Uzbekistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link-preview image shown when the site is shared on Telegram, Instagram, Facebook etc. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#003063", color: "#fff", padding: "72px 80px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="110" height="90" viewBox="0 0 44 36">
            <path d="M4 2v32M4 20L18 2M10.2 12L19 34" stroke="#fff" strokeWidth="6" fill="none" />
            <path d="M27 2v32M41 2v32M27 18h14" stroke="#f4511e" strokeWidth="6" fill="none" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: 3 }}>KHUMO</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 12, color: "#f4511e" }}>INDUSTRIAL</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Marking printers in Uzbekistan</div>
          <div style={{ fontSize: 36, color: "#c5d3e1" }}>CIJ · TIJ · Laser marking — supply, setup, service</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
          <div style={{ display: "flex", background: "#f4511e", borderRadius: 999, padding: "14px 34px", fontWeight: 700 }}>Official Cyklop distributor</div>
          <div style={{ display: "flex" }}>{company.phone}</div>
        </div>
      </div>
    ),
    size,
  );
}
