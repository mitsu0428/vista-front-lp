import { style } from "@vanilla-extract/css"

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
  "@media": {
    "screen and (max-width: 768px)": {
      width: "278px", // = 272(width) + 3(border) + 3(border)
      height: "74px", // = 68(height) + 3(border) + 3(border)
    },
  },
})

export const buttonStyleInToggle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "229px",
  height: "59px",
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
})

export const headerButtonStyle = style([
  buttonStyle,
  {
    width: "231px",
    height: "65px",
    boxShadow: "none",
    border: "none",
    borderRadius: "0",
  },
])

export const textPrimary = style({
  fontSize: "54px",
  fontWeight: 400,
  lineHeight: "59.45px",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "35px",
    },
  },
})

export const textPrimaryInToggle = style({
  fontSize: "30px",
  fontWeight: 400,
  lineHeight: "33.03px",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "35px",
    },
  },
})

export const headerTextPrimary = style([
  textPrimary,
  {
    fontSize: "34px",
    lineHeight: "normal",
  },
])

export const textSecondary = style({
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: 0,
  marginTop: "-9px",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "16px",
    },
  },
})

export const textSecondaryInToggle = style({
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.01em",
  textAlign: "left",
  margin: 0,
  marginTop: "-9px",
})

export const headerTextSecondary = style([
  textSecondary,
  {
    fontSize: "15px",
  },
])
