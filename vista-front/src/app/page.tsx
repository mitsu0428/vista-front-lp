import * as Content from "@/components/Content/main"
import * as Footer from "@/components/Footer/main"
import * as Header from "@/components/Header/main"
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header.Components />
      <Content.Components />
      <Footer.Components />
    </div>
  )
}
