import { style } from "@vanilla-extract/css"

export const pcOnly = style({
  padding: "0 0 116px",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

export const spOnly = style({
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
})

export const mainContent = style({
  background: "#FBFBFB",
})

// PC
export const mainVisualWrapper = style({
  margin: "65px 0 0 0",
  position: "relative",
})

export const mainVisual = style({
  width: "100%",
})

export const introductionWrapper = style({
  position: "relative",
  margin: "-55px 0 0 0",
})

export const introduction = style({
  width: "100%",
})

export const introductionDescriptionWrapper = style({
  padding: "52px 0 40px",
})

export const introductionDescriptionMain = style({
  width: "973px",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#F27EAE",
  textAlign: "center",
  fontFamily: "Noto Sans JP",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "38px" /* 152% */,
  letterSpacing: "0.75px",
})

export const introductionDescriptionDetail = style({
  width: "741px",
  margin: "17px auto 0",
  color: "#1E1E1E",
  textAlign: "center",
  fontFamily: "Noto Sans JP",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "30px" /* 166.667% */,
  letterSpacing: "0.54px",
})

export const introduction2Wrapper = style({
  position: "relative",
  zIndex: "2",
})

export const introduction2 = style({
  width: "100%",
})

export const aboutUsWrapper = style({
  position: "relative",
  margin: "-57px 0 0 0",
})

export const aboutUs = style({
  width: "100%",
})

export const flowWrapper = style({
  position: "relative",
})

export const flow = style({
  width: "684px",
  margin: "193px 24% 105px 22%",
})

export const requirementsWrapper = style({
  position: "relative",
  // padding: "252px 0 105px",
})

export const requirements = style({
  width: "100%",
  margin: "252px auto 105px",
})

export const faqWrapper = style({
  position: "relative",
})

export const faq = style({
  width: "100%",
  margin: "43px 0 222px",
})

export const messageWrapper = style({
  position: "relative",
})

export const message = style({
  width: "100%",
})

export const subtitleWrapper = style({
  position: "absolute",
  width: "100%",
  top: "110px",
})

export const aboutUsSubtitleWrapper = style({
  position: "absolute",
  top: "232px",
  left: "132px",
})

export const flowSubtitleWrapper = style({
  position: "absolute",
  top: "0",
  left: "116px",
})

export const flowDescription = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
})

export const requirementsSubtitleWrapper = style({
  position: "absolute",
  top: "0",
  left: "113px",
})

export const faqSubtitleWrapper = style({
  position: "absolute",
  top: "0",
  left: "113px",
})

export const messageSubtitleWrapper = style({
  position: "absolute",
  top: "0",
  left: "113px",
})

export const followButtonFieldWrapper = style({
  width: "472px",
  position: "absolute",
  bottom: "134px",
  right: "136px",
})

export const followButtonField = style({
  display: "flex",
  columnGap: "8px",
  margin: "7px 0 0",
})

export const beLiverWrapper = style({
  width: "fit-content",
  position: "absolute",
  left: "0",
  right: "0",
  // MEMO: component化してpropsで受け取るか検討
  // bottom: "54px",
  margin: "0 auto",
})

// SP
export const mainVisualWrapperSP = style([
  mainVisualWrapper,
  {
    marginTop: "0",
    paddingBottom: "87px",
  },
])

export const introductionWrapperSP = style([
  introductionWrapper,
  {
    margin: "0",
  },
])

export const introductionDescriptionWrapperSP = style([
  introductionDescriptionWrapper,
  {
    padding: "35px",
  },
])

export const introductionDescriptionMainSP = style([
  introductionDescriptionMain,
  {
    width: "100%",
    fontSize: "18px",
    lineHeight: "24px" /* 152% */,
    letterSpacing: "0.54px",
  },
])

export const introductionDescriptionVistaSP = style([
  {
    color: "#F27EAE",
    margin: "8px 0 0",
    textAlign: "center",
    fontFamily: "Noto Sans JP",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "22px" /* 110% */,
    letterSpacing: "0.6px",
  },
])

export const introductionDescriptionDetailSP = style([
  introductionDescriptionDetail,
  {
    width: "100%",
    margin: "21px 0 0",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.28px",
  },
])

export const introduction2WrapperSP = style([introduction2Wrapper])

export const aboutUsWrapperSP = style([
  aboutUsWrapper,
  {
    margin: "0",
  },
])

export const flowWrapperSP = style([
  flowWrapper,
  {
    margin: "35px 24px 71px",
  },
])

export const flowSP = style([
  flow,
  {
    display: "block",
    width: "100%",
    margin: "0",
  },
])

export const requirementsWrapperSP = style([
  requirementsWrapper,
  {
    // margin: "0",
    // margin: "35px 0 71px",
  },
])

export const requirementsSP = style([
  requirements,
  {
    // display: "block",
    // width: "100%",
    margin: "0 0 143px",
  },
])

export const faqWrapperSP = style([
  faqWrapper,
  {
    // display: "block",
    // width: "100%",
    // margin: "0 0 143px",
  },
])

export const faqSP = style([
  faq,
  {
    // display: "block",
    // width: "100%",
    margin: "0 0 135px",
  },
])

export const messageWrapperSP = style([
  messageWrapper,
  {
    margin: "0",
  },
])

export const subtitleWrapperSP = style([
  subtitleWrapper,
  {
    top: "0",
  },
])

export const aboutUsSubtitleWrapperSP = style([
  aboutUsSubtitleWrapper,
  {
    top: "90px",
    left: "28px",
  },
])

export const flowSubtitleWrapperSP = style([
  flowSubtitleWrapper,
  {
    position: "static",
    margin: "0 0 24px",
  },
])

export const requirementsSubtitleWrapperSP = style([
  requirementsSubtitleWrapper,
  {
    position: "static",
    margin: "0 27px 15px",
  },
])

export const faqSubtitleWrapperSP = style([
  faqSubtitleWrapper,
  {
    position: "static",
    margin: "0 27px 25px",
  },
])

export const messageSubtitleWrapperSP = style([
  messageSubtitleWrapper,
  {
    top: "76px",
    left: "27px",
  },
])

export const afterMessageWrapperSP = style({
  marginTop: "-330px",
})

export const followButtonFieldWrapperSP = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

export const followButtonFieldSPFollow = style({
  // MEMO: FollowタグのWidthが232pxなので合わせる
  width: "232px",
})

export const followButtonFieldSP = style([
  followButtonField,
  {
    display: "flex",
    flexDirection: "column",
    rowGap: "11px",
    marginTop: "11px",
    marginBottom: "24px",
  },
])
