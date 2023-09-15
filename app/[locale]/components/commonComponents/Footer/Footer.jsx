"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.companyBlock}>
        <Image src='/logo-footer.svg' alt='logo-footer' width={200} height={200} className={styles.footerLogo} priority/>
        
          <div className={styles.menu}>
            <h4 className={styles.title}>{t("menu")}</h4>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                  <li><Link href={`/${locale}`}>{t("homepage")}</Link></li>
                  <li><Link href={`/${locale}/study`}>{t("study")}</Link></li>
                  <li><Link href={`/${locale}/team`}>{t("ourTeam")}</Link></li>
                  <li><Link href={`/${locale}/contact`}>{t("contactUs")}</Link></li>
                </ul>
            </nav>
          </div>
          <div className={styles.contactsFollowsBlock}>
            <div className={styles.contactsBlock}>
              <h4 className={styles.title}>{t("contacts")}</h4>
              <div className={styles.contacts}>
                <p><img src="./footerIcons/telIcon.svg" alt="telIcon" /><a className={styles.contactLink} href="tel:+380939000000">+ 380 93 900 00 00</a></p>
                <p><img src="./footerIcons/mailIcon.svg" alt="mailIcon" /><a className={styles.contactLink} href="mailto:welcome@efa.com">welcome@efa.com</a></p>
              </div>
            </div>
            <div className={styles.followsBlock}>
            <h4 className={styles.title}>{t("follow")}</h4>
            <div className={styles.followsIcons}>
              <img src="./footerIcons/facebook.svg" alt="facebookIcon" />
              <img src="./footerIcons/instIcon.svg" alt="instIcon" />
              <img src="./footerIcons/telegramIcon.svg" alt="telegramIcon" />
              <img src="./footerIcons/youtube.svg" alt="youtubeIcon" />
            </div>
            </div>
          </div>
      </div>
      <p className={styles.developerBlock}><a href="https://baza-trainee.tech/ua" target="_blank">{t("policy-first")}</a> &copy; {t("policy-second")}</p>
    </div>
  </footer>
}
export default Footer;
