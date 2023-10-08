"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import getCurrentPathname from "../../../libs/getCurrentPathname";
import styles from "./header.module.scss";
import { ArowUp } from "../ArowUp/ArowUp";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentPathname, setCurrentPathname] = useState('');

  useEffect(() => {
    const path = getCurrentPathname(pathname);
    setCurrentPathname(path)
  }, [pathname])
  
  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return <header className={styles.headerBox}>
      <div id="header" className={`${styles.header}`}>
      <Image src='/logo.svg' alt='logo' width={170} height={76} className={styles.logo} priority />
        <nav className={styles.nav}>
          <Link href={`/${locale}`} className={`${styles.navLink} ${pathname === `/${locale}` || pathname === '/' ? styles.activeLink : ''}`}>{t("home")}</Link>
          <Link href={`/${locale}/study`} className={`${styles.navLink} ${currentPathname === 'study' ? styles.activeLink : ''}`}>{t("study")}</Link>
          <Link href={`/${locale}/team`} className={`${styles.navLink} ${currentPathname === 'team' ? styles.activeLink : ''}`} locale={locale}>
            {t("team")}
          </Link>
          <Link href={`/${locale}/contact`} className={`${styles.navLink} ${currentPathname === 'contact' ? styles.activeLink : ''}`} locale={locale}>
            {t("contact")}
          </Link>
        </nav>
        <div className={styles.headerWrapper}>
          <Link href={`/${locale}#helpUsGrow`} className={styles.headerButton} onClick={(e) => e.currentTarget.blur()}>{t("button")}</Link>
        <LangSwitcher locale={locale} pathname={currentPathname} />
        <button onClick={() => openMobileMenu()} className={styles.menuBtn}>
            <svg className={styles.menuBurgerIcon} xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
              <rect width="22" height="1.42857" fill="#231F20"/>
              <rect y="8.57129" width="22" height="1.42857" fill="#231F20"/>
            </svg>
        </button>
        </div>
    </div>
    <HeaderMobile setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
    <ArowUp/>
    </header>
  
};
export default Header;
