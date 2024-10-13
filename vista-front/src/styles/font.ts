import { Noto_Sans_JP, Passion_One } from "next/font/google";

const NotoSansJp = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PassionOne = Passion_One({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

export const GoogleFont = {
  notoClass: NotoSansJp.className,
  passClass: PassionOne.className,
  notoWithAnotherClass: " " + NotoSansJp.className,
  passWithAnotherClass: " " + PassionOne.className,
};
