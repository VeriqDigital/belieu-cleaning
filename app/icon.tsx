import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#db1f69",
        color: "white",
        fontFamily: "serif",
        fontSize: 24,
        fontWeight: 700,
      }}
    >
      B
    </div>,
    size,
  );
}
