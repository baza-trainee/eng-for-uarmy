"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import getCurrentPathname from "../../../libs/getCurrentPathname";
import SocialMediaMobile from "../SocialMediaMobile/SocialMediaMobile";
import styles from "./header.module.scss";

const HeaderMobile = ({setMobileMenu, mobileMenu}) => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const currentPathname = getCurrentPathname(pathname);
    
  return <div className={`${styles.mobileHeader} ${mobileMenu && styles.open}`}>
      <div className={styles.mobileHeaderBox}>
      <svg className={styles.crossIcon} onClick={() => {setMobileMenu(!mobileMenu)} } xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="Close mobile menu">
        <rect width="26.155" height="1.74367" transform="matrix(0.704002 -0.710198 0.704002 0.710198 0.359375 18.5752)" fill="#231F20"/>
        <rect width="26.155" height="1.74367" transform="matrix(0.704002 0.710198 -0.704002 0.710198 1.22754 0.187012)" fill="#231F20"/>
      </svg>
      <nav className={styles.navMobile} onClick={() =>{setMobileMenu(!mobileMenu)}}>
        <div>
          <Link href={`/${locale}`} className={`${styles.navLink} ${pathname === `/${locale}` || pathname === '/' ? styles.activeLink : ''}`}>{t("home")}</Link>
        </div>
        <div>
          <Link href={`/${locale}#ourProjects`} className={`${styles.navLink}`}>{t("study")}</Link></div>
        <div><Link href={`/${locale}/team`} className={`${styles.navLink} ${currentPathname === 'team' ? styles.activeLink : ''}`} locale={locale}>
            {t("team")}
          </Link></div>
          <div><Link href={`/${locale}/contact`} className={`${styles.navLink} ${currentPathname === 'contact' ? styles.activeLink : ''}`} locale={locale}>
            {t("contact")}
          </Link></div>
      </nav>
      <div style={{ height: '50px' }}>
        <Link href={`/${locale}#helpUsGrow`} className={styles.headerButton} onClick={(e) => {
          e.currentTarget.blur()
          setMobileMenu(!mobileMenu)
          }}>{t("button")}
        </Link>
      </div>
      <SocialMediaMobile />
      </div>
  </div>
}
export default HeaderMobile;
