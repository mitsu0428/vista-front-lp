"use client"

import { GoogleFont } from "@/styles/font"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { LogoImage } from "../../constants/image"
import { BeLiver, BeLiverInToggle } from "../ui/BeLiverRadiusButton/main"
import * as styles from "./Header.css"

export const Components: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoHeader}>
          <img src={LogoImage} alt="Vistaのロゴ" className={styles.logoImage} />
        </div>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <Link href="/#about" className={GoogleFont.passClass}>
              ABOUT
            </Link>
            <Link href="/#recruit" className={GoogleFont.passClass}>
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
      <button
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        type="button"
      >
        <div className={isMenuOpen ? styles.bar1Open : styles.bar1} />
        <div className={isMenuOpen ? styles.bar2Open : styles.bar2} />
        <div className={isMenuOpen ? styles.bar3Open : styles.bar3} />
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
            <button
              className={styles.closeButton}
              onClick={toggleMenu}
              type="button"
            >
              ×
            </button>
          </div>
          <div className={styles.spNav}>
            <Link href="/#about" className={GoogleFont.passClass}>
              ABOUT
            </Link>
            <Link href="/#recruit" className={GoogleFont.passClass}>
              RECRUIT
            </Link>
            <Link href="/" className={GoogleFont.passClass}>
              COMPANY
            </Link>
            <Link href="/privacy" className={GoogleFont.passClass}>
              PRIVACY POLICY
            </Link>
            <div className={styles.beLiverInToggleWrapper}>
              <BeLiverInToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
