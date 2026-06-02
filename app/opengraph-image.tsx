import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Boulder BioLabs — Medical Device Microbiology Testing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1422, #0B2545 55%, #081019)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
          <div style={{ fontSize: "64px", fontWeight: 400, color: "#C9CFD6", letterSpacing: "-0.01em" }}>Boulder</div>
          <div style={{ width: "2px", height: "66px", background: "#7C8794" }} />
          <div style={{ fontSize: "40px", fontWeight: 400, color: "#5B8FC7" }}>BioLabs</div>
        </div>
        <div style={{ color: "#fff", fontSize: "46px", fontWeight: 700, textAlign: "center", maxWidth: "900px", lineHeight: 1.2 }}>
          Medical Device Microbiology Testing
        </div>
        <div style={{ color: "#75D69C", fontSize: "26px", fontWeight: 700, marginTop: "18px", textAlign: "center" }}>
          Sterility · Bioburden · Endotoxin · EO &amp; CD Residuals
        </div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px", marginTop: "26px", textAlign: "center", maxWidth: "760px" }}>
          Co-located with Boulder Sterilization · ISO 13485 quality management
        </div>
      </div>
    ),
    { ...size }
  );
}
