"use client"

import Image from "next/image"

import MainVisualImage from "../../public/assets/webp/1_MainVisual.webp"
import MainVisualImageSP from "../../public/assets/webp/1_MainVisual_SP.webp"
import IntroductionPC from "../../public/assets/webp/2_HikaruUranishi.webp"
import IntroductionSP from "../../public/assets/webp/2_HikaruUranishi_SP.webp"
import Introduction2PC from "../../public/assets/webp/3_HikaruUranishiPhotos.webp"
import Introduction2SP from "../../public/assets/webp/3_HikaruUranishiPhotos_SP.webp"
import AboutUsPC from "../../public/assets/webp/4_AboutArea.webp"
import AboutUsSP from "../../public/assets/webp/4_AboutArea_SP.webp"
import FlowPC from "../../public/assets/webp/5_Flow.webp"
import FlowSP from "../../public/assets/webp/5_Flow_SP.webp"
import RequirementsPC from "../../public/assets/webp/6_Requirements.webp"
import RequirementsSP from "../../public/assets/webp/6_Requirements_SP.webp"
import FaqPC from "../../public/assets/webp/7_Faq.webp"
import FaqSP from "../../public/assets/webp/7_Faq_SP.webp"
import MessagePC from "../../public/assets/webp/8_Message.webp"
import MessageSP from "../../public/assets/webp/8_Message_SP.webp"
import MessageSP1 from "../../public/assets/webp/8_Message_SP1.webp"
import MessageSP2 from "../../public/assets/webp/8_Message_SP2.webp"

import Instagram from "../../public/assets/webp/instagram.webp"
import Logo from "../../public/assets/webp/logo.webp"
import Tiktok from "../../public/assets/webp/tiktok.webp"

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
  Message1: {
    sp: () => (
      <Image
        src={MessageSP1}
        alt="Message SP1"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
  Message2: {
    sp: () => (
      <Image
        src={MessageSP2}
        alt="Message SP2"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
}

// その他のロゴやアイコン画像
export const LogoImage = () => (
  <Image src={Logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
)

export const TiktokImage = () => (
  <Image src={Tiktok} alt="Tiktok" style={{ width: "100%", height: "100%" }} />
)

export const InstagramImage = () => (
  <Image
    src={Instagram}
    alt="Instagram"
    style={{ width: "100%", height: "100%" }}
  />
)
