import React from "react";
import { BaseTextStyle } from "./TextComponents.css";

type SubtitleProps = {
  children: React.ReactNode;
  fontSize?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
};

// MEMO: ピンク文字のサブタイトルコンポーネント
export const PinkNormalText: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginLeft,
  marginBottom,
  children,
}) => {
  return (
    <p
      className={BaseTextStyle}
      style={{ fontSize, marginTop, marginBottom, marginLeft }}
    >
      {children}
    </p>
  );
};
