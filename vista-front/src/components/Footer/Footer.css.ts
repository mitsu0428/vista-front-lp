import { style } from "@vanilla-extract/css"

// フッター全体のスタイル
export const footerContainer = style({
  width: "100%",
  height: "42px",
  backgroundColor: "#F27EAE",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // marginTop: "116px",
})

// フッター内のテキストスタイル
export const footerTextStyle = style({
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16.94px",
  textAlign: "center",
  color: "#FFFFFF",
})
