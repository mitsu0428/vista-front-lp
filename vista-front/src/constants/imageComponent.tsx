"use client";

import Image from "next/image";

import MainVisualImage from "../../public/assets/1_MainVisual.png";
import MainVisualImageSP from "../../public/assets/1_MainVisual_SP.png";
import IntroductionPC from "../../public/assets/2_HikaruUranishi.png";
import IntroductionSP from "../../public/assets/2_HikaruUranishi_SP.png";
import Introduction2PC from "../../public/assets/3_HikaruUranishiPhotos.png";
import Introduction2SP from "../../public/assets/3_HikaruUranishiPhotos_SP.png";
import AboutUsPC from "../../public/assets/4_AboutArea.png";
import AboutUsSP from "../../public/assets/4_AboutArea_SP.png";
import FlowPC from "../../public/assets/5_Flow.png";
import FlowSP from "../../public/assets/5_Flow_SP.png";
import RequirementsPC from "../../public/assets/6_Requirements.png";
import RequirementsSP from "../../public/assets/6_Requirements_SP.png";
import FaqPC from "../../public/assets/7_Faq.png";
import FaqSP from "../../public/assets/7_Faq_SP.png";
import MessagePC from "../../public/assets/8_Message.png";
import MessageSP from "../../public/assets/8_Message_SP.png";

import Instagram from "../../public/assets/instagram.png";
import Logo from "../../public/assets/logo.png";
import Tiktok from "../../public/assets/tiktok.png";

export const ImageComponents = {
  MainVisual: {
    pc: () => (
      <Image
        src={MainVisualImage}
        alt="Main Visual"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={MainVisualImageSP}
        alt="Main Visual SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Introduction: {
    pc: () => (
      <Image
        src={IntroductionPC}
        alt="Introduction"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={IntroductionSP}
        alt="Introduction SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Introduction2: {
    pc: () => (
      <Image
        src={Introduction2PC}
        alt="Introduction 2"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={Introduction2SP}
        alt="Introduction 2 SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  AboutUs: {
    pc: () => (
      <Image
        src={AboutUsPC}
        alt="About Us"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={AboutUsSP}
        alt="About Us SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Flow: {
    pc: () => (
      <Image
        src={FlowPC}
        alt="Flow"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={FlowSP}
        alt="Flow SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Requirements: {
    pc: () => (
      <Image
        src={RequirementsPC}
        alt="Requirements"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={RequirementsSP}
        alt="Requirements SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Faq: {
    pc: () => (
      <Image src={FaqPC} alt="FAQ" style={{ width: "100%", height: "100%" }} />
    ),
    sp: () => (
      <Image
        src={FaqSP}
        alt="FAQ SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Message: {
    pc: () => (
      <Image
        src={MessagePC}
        alt="Message"
        style={{ width: "100%", height: "100%" }}
      />
    ),
    sp: () => (
      <Image
        src={MessageSP}
        alt="Message SP"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
};

// その他のロゴやアイコン画像
export const LogoImage = () => (
  <Image src={Logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
);

export const TiktokImage = () => (
  <Image src={Tiktok} alt="Tiktok" style={{ width: "100%", height: "100%" }} />
);

export const InstagramImage = () => (
  <Image
    src={Instagram}
    alt="Instagram"
    style={{ width: "100%", height: "100%" }}
  />
);
