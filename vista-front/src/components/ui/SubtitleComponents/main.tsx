import type React from "react"
import {
  PinkFillStyleTextCenter,
  PinkFillStyleTextLeft,
  PinkNotFillStyleTextLeft,
  PinkNotFillStyleWithBorderTextLeft,
} from "./SubtitleComponents.css"

type SubtitleProps = {
  fontSize: string
  children: React.ReactNode
  textAlign?: "center" | "left"
  marginTop?: string
  marginLeft?: string
  marginBottom?: string
  lineHeight?: string
  fontClassName?: string
  customID?: string
}

// 濃いピンク文字のサブタイトルコンポーネント
export const PinkFillSubTitle: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginLeft,
  marginBottom,
  textAlign,
  children,
  lineHeight,
  fontClassName,
  customID,
}) => {
  return (
    <h2
      className={
        textAlign === "center"
          ? PinkFillStyleTextCenter + fontClassName
          : PinkFillStyleTextLeft + fontClassName
      }
      style={{ fontSize, marginTop, marginBottom, marginLeft, lineHeight }}
      id={customID}
    >
      {children}
    </h2>
  )
}

// 薄いピンク文字＋ボーダー付きのサブタイトルコンポーネント
export const PinkNotFillSubTitleWithBorder: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  textAlign,
  children,
  lineHeight,
  fontClassName,
  customID,
}) => {
  return (
    <h2
      className={PinkNotFillStyleWithBorderTextLeft + fontClassName}
      style={{
        fontSize,
        marginTop,
        marginBottom,
        marginLeft,
        textAlign,
        lineHeight,
      }}
      id={customID}
    >
      {children}
    </h2>
  )
}

// 薄いピンク文字＋ボーダーなしのサブタイトルコンポーネント
export const PinkNotFillSubTitle: React.FC<SubtitleProps> = ({
  fontSize,
  marginTop,
  marginBottom,
  marginLeft,
  children,
  fontClassName,
  customID,
}) => {
  return (
    <h2
      className={PinkNotFillStyleTextLeft + fontClassName}
      style={{ fontSize, marginTop, marginBottom, marginLeft }}
      id={customID}
    >
      {children}
    </h2>
  )
}
