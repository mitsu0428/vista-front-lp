"use client";

import * as SubtitleComponents from "@/components/ui/SubtitleComponents/main";
import * as TextComponents from "@/components/ui/TextComponents/main";
import { Images } from "@/constants/image";
import { GoogleFont } from "@/styles/font";
import type React from "react";
import { BeLiver } from "../ui/BeLiverRadiusButton/main";
import { Follow } from "../ui/FollowRadiusButton/main";
import * as styles from "./Content.css";

import Image from "next/image";
import MainVisualImage from "../../../public/assets/1_MainVisual.png";
import MainVisualImageSP from "../../../public/assets/1_MainVisual_SP.png";

export const Components: React.FC = () => {
  const {
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
      <div className={styles.pcOnly}>
        <div className={styles.mainVisualWrapper}>
          <Image
            src={MainVisualImage}
            alt="MainVisual"
            style={{ width: "100%", height: "100%" }}
          />
          <div className={styles.beLiverWrapper} style={{ bottom: "54px" }}>
            <BeLiver />
          </div>
        </div>
        <div className={styles.introductionWrapper}>
          <div className={styles.subtitleWrapper}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="144px"
              textAlign="center"
              marginTop="40px"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              HIKARU
            </SubtitleComponents.PinkFillSubTitle>
            <SubtitleComponents.PinkNotFillSubTitleWithBorder
              fontSize="144px"
              textAlign="center"
              marginTop="-40px"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              URANISHI
            </SubtitleComponents.PinkNotFillSubTitleWithBorder>
          </div>
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
          {/* <div className={styles.aboutUsSubtitleWrapper}>
          <SubtitleComponents.PinkFillSubTitle fontSize="144px">
            ABOUT US
          </SubtitleComponents.PinkFillSubTitle>
          <TextComponents.PinkNormalText marginTop="-12px">
            Vistaってどんな事務所？
          </TextComponents.PinkNormalText>
        </div> */}
          <img src={AboutUs.pc} alt="AboutUs" className={styles.aboutUs} />
        </div>
        <div className={styles.flowWrapper}>
          <div className={styles.flowSubtitleWrapper}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="144px"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              FLOW
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              所属までの流れ
            </TextComponents.PinkNormalText>
          </div>
          <img src={Flow.pc} alt="Flow" className={styles.flow} />
        </div>
        <div className={styles.requirementsWrapper}>
          <div className={styles.requirementsSubtitleWrapper}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="144px"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              REQUIREMENTS
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              募集要項
            </TextComponents.PinkNormalText>
          </div>
          <img
            src={Requirements.pc}
            alt="Requirements"
            className={styles.requirements}
          />
          <div className={styles.beLiverWrapper} style={{ bottom: "25px" }}>
            <BeLiver />
          </div>
        </div>
        <div className={styles.faqWrapper}>
          <div className={styles.faqSubtitleWrapper}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="144px"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              FAQ
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              よくある質問
            </TextComponents.PinkNormalText>
          </div>
          <img src={Faq.pc} alt="Faq" className={styles.faq} />
          <div className={styles.beLiverWrapper} style={{ bottom: "92px" }}>
            <BeLiver />
          </div>
        </div>
        <div className={styles.messageWrapper}>
          <div className={styles.messageSubtitleWrapper}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="144px"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              MESSAGE
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              ひかるからのメッセージ♡
            </TextComponents.PinkNormalText>
          </div>
          <img src={Message.pc} alt="Message" className={styles.message} />
          <div className={styles.followButtonFieldWrapper}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="30px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              FOLLOW ME!
            </SubtitleComponents.PinkFillSubTitle>
            <div className={styles.followButtonField}>
              <Follow followType="tiktok" />
              <Follow followType="instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spOnly}>
        <div className={styles.mainVisualWrapperSP}>
          <Image
            src={MainVisualImageSP}
            alt="MainVisual"
            style={{ width: "100%", height: "100%" }}
          />
          <div className={styles.beLiverWrapper} style={{ bottom: "19px" }}>
            <BeLiver />
          </div>
        </div>
        <div className={styles.introductionWrapperSP}>
          <div className={styles.subtitleWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="70px"
              textAlign="center"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              HIKARU
            </SubtitleComponents.PinkFillSubTitle>
            <SubtitleComponents.PinkNotFillSubTitleWithBorder
              fontSize="70px"
              textAlign="center"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              URANISHI
            </SubtitleComponents.PinkNotFillSubTitleWithBorder>
          </div>
          <img
            src={Introduction.sp}
            alt="Introduction"
            className={styles.introduction}
          />
        </div>
        <div className={styles.introductionDescriptionWrapperSP}>
          <div className={styles.introductionDescriptionMainSP}>
            総フォロワー数200万人超えの
            <br />
            人気インフルエンサー浦西ひかるが
            <br />
            プロデュース♡
          </div>
          <div className={styles.introductionDescriptionVistaSP}>
            TikTokライブ事務所 “Vista”
          </div>
          <div className={styles.introductionDescriptionDetailSP}>
            Vistaは、あなたの魅力を最大限に引き出し
            <br />
            共に夢を叶えるパートナーとして世界を舞台に、
            <br />
            あなたが輝く未来を共に描いていきます。
          </div>
        </div>
        <div className={styles.introduction2WrapperSP}>
          <img
            src={Introduction2.sp}
            alt="Introduction2"
            className={styles.introduction2}
          />
        </div>
        <div className={styles.aboutUsWrapperSP}>
          <div className={styles.aboutUsSubtitleWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="55px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              ABOUT US
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              fontSize="18px"
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              Vistaってどんな事務所？
            </TextComponents.PinkNormalText>
          </div>
          <img src={AboutUs.sp} alt="AboutUs" className={styles.aboutUs} />
        </div>
        <div className={styles.flowWrapperSP}>
          <div className={styles.flowSubtitleWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="55px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              FLOW
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              fontSize="18px"
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              所属までの流れ
            </TextComponents.PinkNormalText>
          </div>
          <img src={Flow.sp} alt="Flow" className={styles.flowSP} />
        </div>
        <div className={styles.requirementsWrapperSP}>
          <div className={styles.requirementsSubtitleWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="55px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              REQUIREMENTS
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              fontSize="18px"
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              募集要項
            </TextComponents.PinkNormalText>
          </div>
          <img
            src={Requirements.sp}
            alt="Requirements"
            className={styles.requirementsSP}
          />
          <div className={styles.beLiverWrapper} style={{ bottom: "66px" }}>
            <BeLiver />
          </div>
        </div>
        <div className={styles.faqWrapperSP}>
          <div className={styles.faqSubtitleWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="55px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              FAQ
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              fontSize="18px"
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              よくある質問
            </TextComponents.PinkNormalText>
          </div>
          <img src={Faq.sp} alt="Faq" className={styles.faqSP} />
          <div className={styles.beLiverWrapper} style={{ bottom: "33px" }}>
            <BeLiver />
          </div>
        </div>
        <div className={styles.messageWrapperSP}>
          <div className={styles.messageSubtitleWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="55px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              MESSAGE
            </SubtitleComponents.PinkFillSubTitle>
            <TextComponents.PinkNormalText
              fontSize="18px"
              marginTop="-12px"
              fontClassName={GoogleFont.notoWithAnotherClass}
            >
              ひかるからのメッセージ♡
            </TextComponents.PinkNormalText>
          </div>
          <img src={Message.sp} alt="Message" className={styles.message} />
          <div className={styles.followButtonFieldWrapperSP}>
            <SubtitleComponents.PinkFillSubTitle
              fontSize="30px"
              lineHeight="normal"
              fontClassName={GoogleFont.passWithAnotherClass}
            >
              FOLLOW ME!
            </SubtitleComponents.PinkFillSubTitle>
            <div className={styles.followButtonFieldSP}>
              <Follow followType="tiktok" />
              <Follow followType="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
