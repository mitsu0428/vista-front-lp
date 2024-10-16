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
    <a
      href="https://s.lmes.jp/landing-qr/2005905676-lQqWWKO5?uLand=42jxWI"
      className={isHeader ? headerButtonStyle : buttonStyle}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  )
}
