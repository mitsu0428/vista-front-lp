import type React from "react";
import { BaseTextStyle } from "./TextComponents.css";

type SubtitleProps = {
  children: React.ReactNode;
  fontSize?: string;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  fontClassName?: string;
};

// MEMO: ピンク文字のサブタイトルコンポーネント
export const PinkNormalText: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginLeft,
  marginBottom,
  children,
  fontClassName,
}) => {
  return (
    <p
      className={BaseTextStyle + fontClassName}
      style={{ fontSize, marginTop, marginBottom, marginLeft }}
    >
      {children}
    </p>
  );
};
