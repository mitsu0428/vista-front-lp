import { style } from "@vanilla-extract/css"

export const header = style({
  height: "65px",
  width: "100%",
  backgroundColor: "#FFDCEA",
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 0 0 20px",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

export const logoHeader = style({
  width: "125px",
  height: "46px",
  margin: "10px 0 10px 11px",
})

export const logoHamburger = style({
  width: "90px",
  height: "33px",
})

export const logoImage = style({
  width: "100%",
  height: "100%",
})

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "26px",
  fontSize: "20px",
  color: "#F276AA",
  margin: "0 32px 0 0",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})
export const spNav = style({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  marginTop: "35px",
  marginLeft: "35px",
})
export const navWrapper = style({
  display: "flex",
})

export const hamburgerButton = style({
  width: "66px",
  height: "66px",
  backgroundColor: "#F276AA",
  position: "absolute",
  top: "0",
  right: "0",
  zIndex: "10",
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  border: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
    },
  },
})

export const bar1 = style({
  width: "43px",
  height: "3px",
  backgroundColor: "white",
  transition: "0.4s",
})

export const bar2 = style({
  width: "43px",
  height: "3px",
  backgroundColor: "white",
  transition: "0.4s",
})

export const bar3 = style({
  width: "43px",
  height: "3px",
  backgroundColor: "white",
  transition: "0.4s",
})

export const bar1Open = style({
  transform: "rotate(-45deg) translate(-8px, 8px)",
})

export const bar2Open = style({
  opacity: 0,
})

export const bar3Open = style({
  transform: "rotate(45deg) translate(-8px, -8px)",
})

export const menu = style({
  width: "308px",
  height: "391px",
  backgroundColor: "white",
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "20px",
  fontSize: "17px",
  color: "#F276AA",
  zIndex: "10",
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
})

export const logoAndCloseButton = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
})

export const closeButton = style({
  alignSelf: "flex-end",
  fontSize: "25px",
  color: "#F276AA",
  background: "none",
  border: "none",
  cursor: "pointer",
})
