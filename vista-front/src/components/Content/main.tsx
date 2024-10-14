"use client";

import React from "react";
import { BeLiver } from "../ui/BeLiverRadiusButton/main";
import * as TextComponents from "@/components/ui/TextComponents/main";
import * as SubtitleComponents from "@/components/ui/SubtitleComponents/main";
import { Follow } from "../ui/FollowRadiusButton/main";
import * as styles from "./Content.css";
import { GoogleFont } from "@/styles/font";
import * as Image from "@/constants/image";

export const Components: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.pcOnly}>
        <div className={styles.mainVisualWrapper}>
          <Image.ImageComponents.MainVisual.pc />
          <div
            className={styles.beLiverWrapper}
            style={{ bottom: "54px" }}
          >
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
          <Image.ImageComponents.Introduction.pc />
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
          <Image.ImageComponents.Introduction2.pc />
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
          <Image.ImageComponents.AboutUs.pc />
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
          <Image.ImageComponents.Flow.pc />
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
          <Image.ImageComponents.Requirements.pc />
          <div
            className={styles.beLiverWrapper}
            style={{ bottom: "25px" }}
          >
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
          <Image.ImageComponents.Faq.pc />
          <div
            className={styles.beLiverWrapper}
            style={{ bottom: "92px" }}
          >
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
          <Image.ImageComponents.Message.pc />
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
          <Image.ImageComponents.MainVisual.sp />
          <div
            className={styles.beLiverWrapper}
            style={{ bottom: "19px" }}
          >
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
          <Image.ImageComponents.Introduction.sp />
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
          <Image.ImageComponents.Introduction2.sp />
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
          <Image.ImageComponents.AboutUs.sp />
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
          <Image.ImageComponents.Flow.sp />
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
          <Image.ImageComponents.Requirements.sp />
          <div
            className={styles.beLiverWrapper}
            style={{ bottom: "66px" }}
          >
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
          <Image.ImageComponents.Faq.sp />
          <div
            className={styles.beLiverWrapper}
            style={{ bottom: "33px" }}
          >
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
          <Image.ImageComponents.Message.sp />
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
