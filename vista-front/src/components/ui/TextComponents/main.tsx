import React from "react";
import { BaseTextStyle } from "./TextComponents.css";

type SubtitleProps = {
  children: React.ReactNode;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
};

// MEMO: ピンク文字のサブタイトルコンポーネント
export const PinkNormalText: React.FC<SubtitleProps> = ({
  marginTop,
  marginLeft,
  marginBottom,
  children,
}) => {
  return (
    <p
      className={BaseTextStyle}
      style={{ marginTop, marginBottom, marginLeft }}
    >
      {children}
    </p>
  );
};
