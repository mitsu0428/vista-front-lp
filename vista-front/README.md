## ルーティングのイメージ

```typescript
import * as Header from "@/components/Header/main";
import * as MainVisual from "@/app/components/1_MainVisual/main";
import * as Introduction from "@/components/2_Introduction/main";
import * as Introduction2 from "@/components/3_Introduction/main";
import * as AboutUs from "@/components/4_AboutUs/main";
import * as Flow from "@/components/5_Flow/main";
import * as Requirements from "@/components/6_Requirements/main";
import * as Faq from "@/components/7_Faq/main";
import * as Message from "@/components/8_Message/main";
import * as Footer from "@/components/Footer/main";

export default function Home() {
  return (
    <>
      <Header.Components />
      {/* 1 */}
      <MainVisual.Components />

      {/* 2 */}
      <Introduction.Components />

      {/* 3 */}
      <Introduction2.Components />

      {/* 4 */}
      <AboutUs.Components />

      {/* 5 */}
      <Flow.Components />

      {/* 6 */}
      <Requirements.Components />

      {/* 7 */}
      <Faq.Components />

      {/* 8 */}
      <Message.Components />

      {/* 9 */}
      <Footer.Components />
    </>
  );
}
```
