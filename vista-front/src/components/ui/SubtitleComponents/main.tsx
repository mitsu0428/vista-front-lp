import React from "react";
import {
  PinkFillStyleTextCenter,
  PinkFillStyleTextLeft,
  PinkNotFillStyleTextLeft,
  PinkNotFillStyleWithBorderTextLeft,
} from "./SubtitleComponents.css";

type SubtitleProps = {
  fontSize: string;
  children: React.ReactNode;
  textAlign?: "center" | "left";
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
};

// 濃いピンク文字のサブタイトルコンポーネント
export const PinkFillSubTitle: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginLeft,
  marginBottom,
  textAlign,
  children,
}) => {
  return (
    <h2
      className={
        textAlign === "center" ? PinkFillStyleTextCenter : PinkFillStyleTextLeft
      }
      style={{ fontSize, marginTop, marginBottom, marginLeft }}
    >
      {children}
    </h2>
  );
};

// 薄いピンク文字＋ボーダー付きのサブタイトルコンポーネント
export const PinkNotFillSubTitleWithBorder: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  children,
}) => {
  return (
    <h2
      className={PinkNotFillStyleWithBorderTextLeft}
      style={{ fontSize, marginTop, marginBottom, marginLeft }}
    >
      {children}
    </h2>
  );
};

// 薄いピンク文字＋ボーダーなしのサブタイトルコンポーネント
export const PinkNotFillSubTitle: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  children,
}) => {
  return (
    <h2
      className={PinkNotFillStyleTextLeft}
      style={{ fontSize, marginTop, marginBottom, marginLeft }}
    >
      {children}
    </h2>
  );
};
