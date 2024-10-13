import React from "react";
import { GoogleFont } from "@/styles/font";
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
      <span
        className={
          isHeader
            ? headerTextPrimary + GoogleFont.passWithAnotherClass
            : textPrimary + GoogleFont.passWithAnotherClass
        }
      >
        BE LIVER!
      </span>
      <span
        className={
          isHeader
            ? headerTextSecondary + GoogleFont.notoWithAnotherClass
            : textSecondary + GoogleFont.notoWithAnotherClass
        }
      >
        ライバーになる！
      </span>
    </button>
  );
};
