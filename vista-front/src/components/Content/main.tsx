"use client";

import React from "react";
// import { BeLiver } from "../ui/BeLiverRadiusButton/main";
import * as styles from "./Content.css";
import { Images } from "@/constants/image";

export const Components: React.FC = () => {
  const {
    MainVisual,
    Introduction,
    Introduction2,
    AboutUs,
    Flow,
    Requirements,
    Faq,
    Message,
  } = Images;

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainVisualWrapper}>
        <img
          src={MainVisual.pc}
          alt="MainVisual"
          className={styles.mainVisual}
        />
      </div>
      <div className={styles.introductionWrapper}>
        <img
          src={Introduction.pc}
          alt="Introduction"
          className={styles.introduction}
        />
      </div>
      <div className={styles.introductionDescriptionWrapper}>
        <div className={styles.introductionDescriptionMain}>
          総フォロワー数200万人超えの人気インフルエンサー浦西ひかるがプロデュース♡
          <br />
          TikTokライブ事務所 “Vista”
        </div>
        <div className={styles.introductionDescriptionDetail}>
          Vistaは、あなたの魅力を最大限に引き出し
          <br />
          共に夢を叶えるパートナーとして
          <br />
          世界を舞台に、あなたが輝く未来を共に描いていきます。
        </div>
      </div>
      <div className={styles.introduction2Wrapper}>
        <img
          src={Introduction2.pc}
          alt="Introduction2"
          className={styles.introduction2}
        />
      </div>
      <div className={styles.aboutUsWrapper}>
        <img src={AboutUs.pc} alt="AboutUs" className={styles.aboutUs} />
      </div>
      <div className={styles.flowWrapper}>
        <img src={Flow.pc} alt="Flow" className={styles.flow} />
      </div>
      <div className={styles.requirementsWrapper}>
        <img
          src={Requirements.pc}
          alt="Requirements"
          className={styles.requirements}
        />
      </div>
      <div className={styles.faqWrapper}>
        <img src={Faq.pc} alt="Faq" className={styles.faq} />
      </div>
      <div className={styles.messageWrapper}>
        <img src={Message.pc} alt="Message" className={styles.message} />
      </div>
    </div>
  );
};
