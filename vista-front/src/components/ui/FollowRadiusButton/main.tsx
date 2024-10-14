import { InstagramImage, TiktokImage } from "@/constants/image";
import type React from "react";
import { buttonStyle, iconStyle, textPrimary } from "./Follow.css";

type FollowProps = {
  followType: "tiktok" | "instagram";
};
export const Follow: React.FC<FollowProps> = ({ followType }) => {
  const buttonInfo =
    followType === "tiktok"
      ? {
          image: {
            src: TiktokImage,
            alt: "Tiktok",
          },
          text: "Official TikTok",
        }
      : {
          image: {
            src: InstagramImage,
            alt: "Instagram",
          },
          text: "Official Instagram",
        };
  return (
    <button className={buttonStyle}>
      <img
        src={buttonInfo.image.src}
        alt={buttonInfo.image.alt}
        className={iconStyle}
      />
      <span className={textPrimary}>{buttonInfo.text}</span>
    </button>
  );
};
