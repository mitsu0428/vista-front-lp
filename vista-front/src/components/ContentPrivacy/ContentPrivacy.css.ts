import { style } from "@vanilla-extract/css";

export const mainContent = style({
  background: "#FBFBFB",
  padding: "81px 117px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "84px 24px 47px",
    },
  },
});
export const pcOnly = style({
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});
export const spOnly = style({
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
});
export const privacyTextWrapper = style({
  padding: "49px 25px",
});
export const privacyTextWrapperSP = style([
  privacyTextWrapper,
  {
    padding: "25px 12px",
  },
]);
export const privacyTextSectionWrapper = style({
  margin: "0 0 49px",
  ":last-of-type": {
    margin: "0",
  },
});
export const privacyTextSectionWrapperSP = style([
  privacyTextSectionWrapper,
  {
    margin: "0 0 20px",
  },
]);
