import { GoogleFont } from "@/styles/font"
import type React from "react"
import {
  buttonStyle,
  headerButtonStyle,
  headerTextPrimary,
  headerTextSecondary,
  textPrimary,
  textSecondary,
} from "./BeLiver.css"

type BeLiverProps = {
  isHeader?: boolean
}

export const BeLiver: React.FC<BeLiverProps> = ({ isHeader }) => {
  return (
    <button
      className={isHeader ? headerButtonStyle : buttonStyle}
      type="button"
    >
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
  )
}
