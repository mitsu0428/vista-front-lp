import { style } from "@vanilla-extract/css"

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
  "@media": {
    "screen and (max-width: 768px)": {
      height: "46px",
    },
  },
})

export const iconStyle = style({
  display: "block",
  width: "24px",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "21px",
    },
  },
})
export const textPrimary = style({
  display: "block",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: "0 0 0 15px",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "0 0 0 9px",
    },
  },
})
