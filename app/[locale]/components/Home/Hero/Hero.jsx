"use client";
import Image from 'next/image'
import styles from "./Hero.module.scss"; 
import { useLocale, useTranslations } from 'next-intl';
import { Facebook, Youtube, Instagram, Telegram, ButtonBorder, Arrow, HeroCardBorder, HeroCardBorderMobil, ButtonBorderMobile} from './SvgComponent';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import "./SvgComponent.styles.scss"
import { useEffect, useState } from 'react';
 
const Hero = () => {
const locale = useLocale();
const pathname = usePathname();
const t = useTranslations("Hero");
const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

useEffect(() => {
  const handleWindowResize = () => {
    setIsLargeScreen(window.innerWidth >= 1280);
  };

  window.addEventListener("resize", handleWindowResize);

  return () => {
    window.removeEventListener("resize", handleWindowResize);
  };
}, []);


  return <section className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.card}>
            {isLargeScreen ? (
        <HeroCardBorder />
      ) : (
        <HeroCardBorderMobil />
      )}
                <h1 className={styles.firstHead}>Eng for UArmy</h1>
                <h2 className={styles.secondHead}>{t("title")}</h2>
                
                <ul className={styles.list}>
                      <li className={styles.liItem}>
                          <Arrow />
                          <p className={styles.liText}>{t("first-desc")}<strong className={styles.li_bold_txt}>{t("first-desc-bold")}</strong></p>
                      </li>
                      <li className={styles.liItem}>
                          <Arrow />
                          <p className={styles.liText}>{t("second-desc")}<span className={styles.li_bold_txt}>{t("second-desc-bold")}</span>{t("second-desc2")}<span className={styles.li_bold_txt}>{t("second-desc-bold2")}</span></p>
                      </li>
                      <li className={styles.liItem}>
                          <Arrow />
                          <p className={styles.liText}>{t("third-desc")}<span className={styles.li_bold_txt}>{t("third-desc-bold")}</span>{t("and")}<span className={styles.li_bold_txt}>{t("third-desc-bold2")}</span>{t("third-desc-bold3")}</p>
                      </li>
                </ul>
                <ul className={styles.btnList}>
                <li>
                  <Link
                    href={`https://www.youtube.com/@engforuarmy`}
                    className={styles.under_txt_btn}
                    target="_blank" 
                    rel="noopener noreferrer">
                    {t("study-btn")}
                  </Link>
                      </li>
                <li tabIndex="0" className={styles.under}>
                  <ScrollLink 
                  to="helpUsGrow" 
                  smooth={true} 
                  duration={500} 
                  className={styles.under_txt_btn2} >
                  {t("support-btn")}
                  </ScrollLink>{isLargeScreen ? (
                        <ButtonBorder />
                      ) : (
                        <ButtonBorderMobile />
                      )}</li>
                  </ul>
            </div>

            <div className={styles.your_container}>
            {isLargeScreen && (
                <div className={styles.contact_us_col}>
                <Youtube />
                <Instagram />
                <Facebook />
                <Telegram />
                </div>
            )}

</div>
        </div>
        <Image className={styles.soldierImg} src="/HeroImage/soldier-transp.png" alt="soldierImg" width={796} height={523} priority/>
       </div>
    </section>
  
};
export default Hero;