import { style } from "@vanilla-extract/css"

export const NormalTextStyle = style({
  fontSize: "18px",
  width: "100%",
  fontWeight: 500,
  lineHeight: "30px",
  textAlign: "left",
  color: "#1E1E1E",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "13px",
      lineHeight: "24px",
    },
  },
})
