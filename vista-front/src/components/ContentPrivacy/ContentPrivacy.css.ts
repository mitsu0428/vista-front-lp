import { style } from "@vanilla-extract/css";

export const mainContent = style({
  background: "#FBFBFB",
  padding: "81px 117px 0",
});
export const privacyTextWrapper = style({
  padding: "49px 25px",
});
export const privacyTextSectionWrapper = style({
  margin: "0 0 49px",
  ":last-of-type": {
    margin: "0",
  },
});
