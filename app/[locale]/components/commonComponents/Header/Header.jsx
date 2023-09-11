"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import styles from "./header.module.scss";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import getCurrentPathname from "../../../libs/getCurrentPathname";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const currentPathname = getCurrentPathname(pathname);

  return <header className={styles.headerBox}>
      <div className={styles.header}>
        <Image src='/logo.svg' alt='logo' width={170} height={76} className={styles.logo} priority/>
        <div className={styles.headerWrapper}>
          <nav className={styles.nav}>
            <Link href={`/${locale}`} className={`${styles.navLink} ${pathname === `/${locale}` ? styles.activeLink : ''}`}>{t("home")}</Link>
            <Link href={`/${locale}/study`} className={`${styles.navLink} ${currentPathname === 'study' ? styles.activeLink : ''}`}>{t("study")}</Link>
            <Link href={`/${locale}/team`} className={`${styles.navLink} ${currentPathname === 'team' ? styles.activeLink : ''}`} locale={locale}>
              {t("team")}
            </Link>
            <Link href={`/${locale}/contact`} className={`${styles.navLink} ${currentPathname === 'contact' ? styles.activeLink : ''}`} locale={locale}>
              {t("contact")}
            </Link>
          </nav>
          <Link href={`/${locale}#helpUsGrow`} className={styles.headerButton}>{t("button")}</Link>
        <LangSwitcher locale={locale} pathname={currentPathname} />
        </div>
      </div>
    </header>
  
};
export default Header;
