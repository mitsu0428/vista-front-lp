import React from "react";
import { buttonStyle, iconStyle, textPrimary } from "./Follow.css";
import { TiktokImage, InstagramImage } from "@/constants/image";
import * as styles from "./Follow.css";

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
