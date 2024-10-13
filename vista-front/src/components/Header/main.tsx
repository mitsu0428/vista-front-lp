"use client";

import React, { useState } from "react";
import { BeLiver } from "../ui/BeLiverRadiusButton/main";
import * as styles from "./Header.css";
import { LogoImage } from "../../constants/image";
import Link from "next/link";
import { GoogleFont } from "@/styles/font";

export const Components: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoHeader}>
          <img src={LogoImage} alt="Vistaのロゴ" className={styles.logoImage} />
        </div>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <Link href="/" className={GoogleFont.passClass}>
              ABOUT
            </Link>
            <Link href="/" className={GoogleFont.passClass}>
              RECRUIT
            </Link>
            <Link href="/" className={GoogleFont.passClass}>
              COMPANY
            </Link>
            <Link href="/privacy" className={GoogleFont.passClass}>
              PRIVACY POLICY
            </Link>
          </nav>
          <BeLiver isHeader />
        </div>
      </header>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        <div className={isMenuOpen ? styles.bar1Open : styles.bar1}></div>
        <div className={isMenuOpen ? styles.bar2Open : styles.bar2}></div>
        <div className={isMenuOpen ? styles.bar3Open : styles.bar3}></div>
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.logoAndCloseButton}>
            <div className={styles.logoHamburger}>
              <img
                src={LogoImage}
                alt="Vistaのロゴ"
                className={styles.logoImage}
              />
            </div>
            <button className={styles.closeButton} onClick={toggleMenu}>
              ×
            </button>
          </div>
          <Link href="/" className={GoogleFont.passClass}>
            ABOUT
          </Link>
          <Link href="/" className={GoogleFont.passClass}>
            RECRUIT
          </Link>
          <Link href="/" className={GoogleFont.passClass}>
            COMPANY
          </Link>
          <Link href="/privacy" className={GoogleFont.passClass}>
            PRIVACY POLICY
          </Link>
        </div>
      )}
    </div>
  );
};
