import { ImageResponse } from "next/og";

export const alt = "Jean-Luc Oudart-Sintes — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0a0a0a",
        color: "#ededed",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          left: 260,
          width: 700,
          height: 400,
          borderRadius: 9999,
          backgroundColor: "#312e81",
          filter: "blur(120px)",
          opacity: 0.4,
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: "0.2em",
          color: "#71717a",
          marginBottom: 32,
        }}
      >
        SYSADMIN • CYBERSÉCURITÉ • FULL-STACK • TOULOUSE
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 92,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        Jean-Luc
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 92,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
          color: "#a5b4fc",
        }}
      >
        Oudart-Sintes
      </div>
    </div>,
    { ...size },
  );
}
