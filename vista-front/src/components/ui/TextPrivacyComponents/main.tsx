import type React from "react";
import { NormalTextStyle } from "./TextPrivacyComponents.css";

type NormalTextProps = {
  children: React.ReactNode;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  fontClassName?: string;
};

// MEMO: 黒文字のテキストコンポーネント
export const NormalText: React.FC<NormalTextProps> = ({
  marginTop,
  marginLeft,
  marginBottom,
  children,
  fontClassName,
}) => {
  return (
    <p
      className={NormalTextStyle + fontClassName}
      style={{ marginTop, marginBottom, marginLeft }}
    >
      {children}
    </p>
  );
};
