"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./header.module.scss";
import getCurrentPathname from "../../../libs/getCurrentPathname";

const HeaderMobile = ({openMobileMenu, mobileMenu}) => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const currentPathname = getCurrentPathname(pathname);
    
  return <div className={`${styles.mobileHeader} ${mobileMenu && styles.open}`}>
        <nav className={styles.navMobile}>
          <Link href={`/${locale}`} className={`${styles.navLink} ${pathname === `/${locale}` || pathname === '/' ? styles.activeLink : ''}`}>{t("home")}</Link>
          <Link href={`/${locale}/study`} className={`${styles.navLink} ${currentPathname === 'study' ? styles.activeLink : ''}`}>{t("study")}</Link>
          <Link href={`/${locale}/team`} className={`${styles.navLink} ${currentPathname === 'team' ? styles.activeLink : ''}`} locale={locale}>
            {t("team")}
          </Link>
          <Link href={`/${locale}/contact`} className={`${styles.navLink} ${currentPathname === 'contact' ? styles.activeLink : ''}`} locale={locale}>
            {t("contact")}
          </Link>
        </nav>
        <Link href={`/${locale}#helpUsGrow`} className={styles.headerButton} onClick={(e) => e.currentTarget.blur()}>{t("button")}</Link>
      </div>
  
};
export default HeaderMobile;
