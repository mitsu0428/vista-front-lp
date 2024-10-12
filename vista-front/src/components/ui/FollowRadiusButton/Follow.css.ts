import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "flex",
  alignItems: "center",
  width: "232px",
  height: "52px",
  background: "#FFDCEA",
  color: "#F27EAE",
  padding: "12px 25px",
  border: "2px solid #F27EAE",
  borderRadius: "26px",
  cursor: "pointer",
});

export const iconStyle = style({
  display: "block",
  width: "24px",
});
export const textPrimary = style({
  display: "block",
  fontFamily: "Passion One, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: "0 0 0 15px",
});
