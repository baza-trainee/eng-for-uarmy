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
          <Image src='/logo-footer.svg' alt='logo-footer' width={200} height={200} className={styles.footerLogo} priority />   
          <Link className={styles.policyBlock} href="https://baza-trainee.tech/ua" target="_blank">{t("policy-first")} &copy; {t("policy-second")}<span className={styles.policyDivider}></span> <span className={styles.policyBold}>Privacy</span></Link> 
        </div>
        <div className={styles.menu}>
          <h4 className={styles.title}>{t("menu")}</h4>
          <nav className={styles.nav}>
              <ul className={styles.list}>
                <li><Link href={`/${locale}`}>{t("homepage")}</Link></li>
                <li><Link href={`/${locale}/study`}>{t("study")}</Link></li>
                <li><Link href={`/${locale}/https://github.com/baza-trainee/eng-for-uarmy/pull/40/conflict?name=app%252F%255Blocale%255D%252Fcomponents%252FcommonComponents%252FFooter%252FFooter.jsx&ancestor_oid=653342168b0ce27e853abe8ea0539fa56fb27350&base_oid=60753f15e555839265f227945932d61fdd3b2d3d&head_oid=4a7e03b09f83807053cdebc585aedf51e90b3530team`}>{t("ourTeam")}</Link></li>
                <li><Link href={`/${locale}/contact`}>{t("contactUs")}</Link></li>
              </ul>
          </nav>
        </div>
        <div className={styles.contactsFollowsBlock}>

          <div className={styles.contactsBlock}>
            <h4 className={styles.title}>{t("contacts")}</h4>
            <ul className={styles.contacts}>
              <li><img src="/footerIcons/telIcon.svg" alt="telIcon" /><a className={styles.contactLink} href="tel:+380939000000">+ 380 93 900 00 00</a></li>
              <li><img src="/footerIcons/mailIcon.svg" alt="mailIcon" /><a className={styles.contactLink} href="mailto:welcome@efa.com">welcome@efa.com</a></li>
            </ul>
          </div>

          <div className={styles.followsBlock}>
            <h4 className={`${styles.title} ${styles.followTitle}`}>{t("follow")}</h4>
            <ul className={styles.followsIcons}>
              <li>
                <Link href="https://www.facebook.com/ENGforUARMY" target="_blank" rel="noopener noreferrer">
                  <svg className={styles.followIcon} width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.11802 20H6.18707V9.91743H9.02574L9.32454 6.54498H6.18707C6.18707 6.54498 6.18707 5.28466 6.18707 4.62408C6.18707 3.82442 6.34526 3.51152 7.12743 3.51152C7.75141 3.51152 9.33333 3.51152 9.33333 3.51152V0C9.33333 0 7.01318 0 6.51224 0C3.48023 0 2.11802 1.32116 2.11802 3.84181C2.11802 6.04085 2.11802 6.53629 2.11802 6.53629H0V9.95219H2.11802V20Z" fill="#F9F9F9"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/engforuarmy/" target="_blank" rel="noopener noreferrer">
                  <svg className={styles.followIcon} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6407 20H6.02497C2.88655 20 0.333496 17.4469 0.333496 14.3073V5.69148C0.333496 2.55306 2.88655 0 6.02624 0H14.642C17.7804 0 20.3348 2.55306 20.3348 5.69275V14.3085C20.3335 17.4469 17.7792 20 14.6407 20ZM6.02624 1.71429C3.83302 1.71429 2.04778 3.49826 2.04778 5.69275V14.3085C2.04778 16.5017 3.83175 18.287 6.02624 18.287H14.642C16.8352 18.287 18.6205 16.503 18.6205 14.3085V5.69275C18.6205 3.49952 16.8365 1.71429 14.642 1.71429H6.02624Z" fill="#F9F9F9"/>
                    <path d="M10.3327 15.1215C7.50854 15.1215 5.21143 12.8244 5.21143 10.0002C5.21143 7.17602 7.50854 4.87891 10.3327 4.87891C13.1569 4.87891 15.4541 7.17602 15.4541 10.0002C15.4541 12.8244 13.1569 15.1215 10.3327 15.1215ZM10.3327 6.59446C8.45374 6.59446 6.92571 8.12249 6.92571 10.0015C6.92571 11.8805 8.45374 13.4085 10.3327 13.4085C12.2117 13.4085 13.7398 11.8805 13.7398 10.0015C13.7398 8.12249 12.2117 6.59446 10.3327 6.59446Z" fill="#F9F9F9"/>
                    <path d="M16.9044 4.58575C16.9044 5.26615 16.3533 5.81604 15.6741 5.81604C14.9937 5.81604 14.4438 5.26488 14.4438 4.58575C14.4438 3.90663 14.995 3.35547 15.6741 3.35547C16.3533 3.3542 16.9044 3.90536 16.9044 4.58575Z" fill="#F9F9F9"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://t.me/ENGforUARMY" target="_blank" rel="noopener noreferrer">
                  <svg className={styles.followIcon} width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.833553 7.45575C2.8437 6.37177 5.09851 5.45568 7.19365 4.53959C10.8119 3.04658 14.4302 1.56822 18.1059 0.201413C18.8238 -0.0374683 20.1011 -0.263955 20.2309 0.778335C20.1597 2.24317 19.8863 3.70801 19.6853 5.1582C19.1971 8.36958 18.6228 11.5674 18.0622 14.7642C17.875 15.8346 16.5115 16.3845 15.6363 15.6938C13.54 14.3134 11.4437 12.9331 9.3761 11.5246C8.70184 10.8485 9.33245 9.87724 9.93664 9.39722C11.6596 7.73519 13.4825 6.31205 15.1205 4.56551C15.5662 3.52322 14.259 4.39649 13.8283 4.66354C11.4735 6.25571 9.17623 7.9459 6.67791 9.3544C5.41439 10.044 3.92114 9.45244 2.65762 9.0727C1.52275 8.62198 -0.142804 8.15774 0.833553 7.45349V7.45575Z" fill="#F9F9F9"/>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@engforuarmy/" target="_blank" rel="noopener noreferrer">
                  <svg className={styles.followIcon} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5784 6.03284C19.3571 5.23153 18.7186 4.60406 17.9001 4.38975C16.8007 3.97421 6.15212 3.77061 3.0631 4.40165C2.24463 4.61835 1.60372 5.24344 1.38482 6.04474C0.888629 8.176 0.850928 12.7838 1.39698 14.9627C1.61832 15.764 2.2568 16.3915 3.07526 16.6058C5.25217 17.0963 15.6016 17.1654 17.9123 16.6058C18.7307 16.3891 19.3717 15.764 19.5906 14.9627C20.1196 12.6409 20.1573 8.31888 19.5784 6.03284Z" fill="#F9F9F9"/>
                  <path className={styles.youtubePath} d="M14 10.5L9 8V13L14 10.5Z" fill="#171717"/>
                  </svg>
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;
