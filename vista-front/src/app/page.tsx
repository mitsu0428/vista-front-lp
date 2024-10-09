import * as Header from "@/components/Header/main";
import * as footer from "@/components/Footer/main";
import { BeLiver } from "@/components/ui/BeLiverRadiusButton/main";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header.Components />
      <BeLiver />
      <footer.Components />
    </div>
  );
}
