import { style } from "@vanilla-extract/css";

// 共通のスタイルを定義
const baseSubtitleStyle = style({
  fontFamily: "Passion One",
  fontWeight: 400,
  width: "100%",
  lineHeight: "158.54px",
  letterSpacing: "0.01em",
  display: "inline-block",
  margin: 0,
});

// MEMO: 濃いピンク文字のスタイル（Center）
export const PinkFillStyleTextCenter = style([
  baseSubtitleStyle,
  {
    textAlign: "center",
    color: "#EB5C96",
    border: "none",
  },
]);

// MEMO: 濃いピンク文字のスタイル（Left）
export const PinkFillStyleTextLeft = style([
  baseSubtitleStyle,
  {
    textAlign: "left",
    color: "#EB5C96",
    border: "none",
  },
]);

// MEMO: 薄いピンク文字＋ボーダー付きのスタイル
export const PinkNotFillStyleWithBorderTextLeft = style([
  baseSubtitleStyle,
  {
    textAlign: "left",
    color: "#FFF1F6",
    WebkitTextStroke: "2px #DE79B1",
  },
]);

// MEMO: 薄いピンク文字のスタイル+ボーダーなし
export const PinkNotFillStyleTextLeft = style([
  baseSubtitleStyle,
  {
    textAlign: "left",
    color: "#F27EAE;",
  },
]);
