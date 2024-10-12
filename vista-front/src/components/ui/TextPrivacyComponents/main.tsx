import React from "react";
import { NormalTextStyle } from "./TextPrivacyComponents.css";

type NormalTextProps = {
  children: React.ReactNode;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
};

// MEMO: 黒文字のテキストコンポーネント
export const NormalText: React.FC<NormalTextProps> = ({
  marginTop,
  marginLeft,
  marginBottom,
  children,
}) => {
  return (
    <p
      className={NormalTextStyle}
      style={{ marginTop, marginBottom, marginLeft }}
    >
      {children}
    </p>
  );
};
