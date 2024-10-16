import { GoogleFont } from "@/styles/font"
import type React from "react"
import {
  buttonStyle,
  buttonStyleInToggle,
  headerButtonStyle,
  headerTextPrimary,
  headerTextSecondary,
  textPrimary,
  textPrimaryInToggle,
  textSecondary,
  textSecondaryInToggle,
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

export const BeLiverInToggle: React.FC = () => {
  return (
    <a
      href="https://s.lmes.jp/landing-qr/2005905676-lQqWWKO5?uLand=42jxWI"
      className={buttonStyleInToggle}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={textPrimaryInToggle + GoogleFont.passWithAnotherClass}>
        BE LIVER!
      </span>
      <span className={textSecondaryInToggle + GoogleFont.notoWithAnotherClass}>
        ライバーになる！
      </span>
    </a>
  )
}
