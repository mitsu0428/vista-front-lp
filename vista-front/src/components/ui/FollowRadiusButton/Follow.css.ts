import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  width: "232px",
  height: "52px",
  background: "#FFDCEA",
  color: "#F27EAE",
  padding: "12px 25px",
  // boxShadow: "0px 4px 14px 0px #00000040",
  border: "2px solid #F27EAE",
  borderRadius: "26px",
  cursor: "pointer",
  // textAlign: "center",
  // outline: "none",
  // transition: "all 0.3s ease",
  // position: "relative",
  // zIndex: 2,

  // ":hover": {
  //   background: "#fff",
  //   color: "#3BD0FF",
  // },
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
