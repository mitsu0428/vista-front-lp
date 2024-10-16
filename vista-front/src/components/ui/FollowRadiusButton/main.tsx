import { InstagramImage, TiktokImage } from "@/constants/image"
import type React from "react"
import { buttonStyle, iconStyle, textPrimary } from "./Follow.css"

type FollowProps = {
  followType: "tiktok" | "instagram"
  fontClassName?: string
}
export const Follow: React.FC<FollowProps> = ({
  followType,
  fontClassName,
}) => {
  const buttonInfo =
    followType === "tiktok"
      ? {
          image: {
            src: TiktokImage,
            alt: "Tiktok",
          },
          text: "Official TikTok",
          link: "https://www.tiktok.com/@hikaru20910?_t=8qb1ukZA9Hc&_r=1",
        }
      : {
          image: {
            src: InstagramImage,
            alt: "Instagram",
          },
          text: "Official Instagram",
          link: "https://www.instagram.com/uranishihikaru?igsh=eWU5bThxOGE3NWhu",
        }
  return (
    <a
      href={buttonInfo.link}
      className={buttonStyle}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={buttonInfo.image.src}
        alt={buttonInfo.image.alt}
        className={iconStyle}
      />
      <span className={textPrimary + fontClassName}>{buttonInfo.text}</span>
    </a>
  )
}
