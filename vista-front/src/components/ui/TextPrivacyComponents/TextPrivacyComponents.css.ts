import { style } from "@vanilla-extract/css"

export const NormalTextStyle = style({
  fontFamily: "Noto Sans JP",
  fontSize: "18px",
  width: "100%",
  fontWeight: 500,
  lineHeight: "30px",
  // letterSpacing: "0.01em",
  textAlign: "left",
  color: "#1E1E1E",
  "@media": {
    "screen and (max-width: 768px)": {
      fontFamily: "Inter",
      fontSize: "13px",
      lineHeight: "24px",
    },
  },
})
