import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "361px",
  height: "90px",
  background: "#3BD0FF",
  color: "#fff",
  boxShadow: "0px 4px 14px 0px #00000040",
  border: "3px solid #fff",
  borderRadius: "45px",
  cursor: "pointer",
  textAlign: "center",
  outline: "none",
  transition: "all 0.3s ease",
  position: "relative",
  zIndex: 2,

  ":hover": {
    background: "#fff",
    color: "#3BD0FF",
  },
});

export const textPrimary = style({
  fontFamily: "Passion One, sans-serif",
  fontSize: "54px",
  fontWeight: 400,
  lineHeight: "59.45px",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: 0,
});

export const textSecondary = style({
  fontFamily: "Noto Sans JP, sans-serif",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: 0,
});
