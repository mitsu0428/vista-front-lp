import React from "react";
import {
  headerButtonStyle,
  buttonStyle,
  headerTextPrimary,
  textPrimary,
  headerTextSecondary,
  textSecondary,
} from "./BeLiver.css";
type BeLiverProps = {
  isHeader?: boolean;
};
export const BeLiver: React.FC<BeLiverProps> = ({ isHeader }) => {
  return (
    <button className={isHeader ? headerButtonStyle : buttonStyle}>
      <span className={isHeader ? headerTextPrimary : textPrimary}>
        BE LIVER!
      </span>
      <span className={isHeader ? headerTextSecondary : textSecondary}>
        ライバーになる！
      </span>
    </button>
  );
};
