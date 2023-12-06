"use client";
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';
import { Facebook, Youtube, Instagram, Telegram, ButtonBorder, Arrow, HeroCardBorder, HeroCardBorderMobil, ButtonBorderMobile} from './SvgComponent';
import "./SvgComponent.styles.scss"
import styles from "./Hero.module.scss"; 
 
const Hero = () => {
const t = useTranslations("Hero");
const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 1280);
const handleEnterKeyPress = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    scrollToSection('helpUsGrow');
  }
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};
useEffect(() => {
  const handleWindowResize = () => {
    setIsLargeScreen( window !== 'undefined' && window.innerWidth >= 1280);
  };

  window.addEventListener("resize", handleWindowResize);
  return () => {
    window.removeEventListener("resize", handleWindowResize);
  };
}, [isLargeScreen]);


  return <section className={styles.heroSection} id='Hero'>
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
                
                <ul tabIndex="-1" className={styles.list}>
                      <li className={styles.liItem}>
                          <Arrow />
                          <p className={`${styles.liText} ${styles.transfer}`}>{t("first-desc")} <strong className={styles.li_bold_txt}>{t("first-desc-bold")}</strong>{t("first-desc2")}<strong className={styles.li_bold_txt}>{t("first-desc-bold2")}</strong></p>
                      </li>
                      <li className={styles.liItem}>
                          <Arrow />
                          <p className={styles.liText}>{t("second-desc")}<span className={styles.li_bold_txt}>{t("second-desc-bold")}</span>{t("second-desc2")}<span className={styles.li_bold_txt}>{t("second-desc-bold2")}</span></p>
                      </li>
                      <li className={styles.liItem}>
                          <Arrow />
                          <p className={styles.liText}>{t("third-desc")}<span className={styles.li_bold_txt} style={{ whiteSpace: 'nowrap' }}>{t("third-desc-bold")}</span> {t("and")}<span className={`${styles.li_bold_txt} ${styles.transfer}`} style={{ wordBreak: 'break-word' }}>{t("third-desc-bold2")}</span>{t("third-desc-bold3")}</p>
                      </li>
                </ul>
                <ul className={styles.btnList}>
                  <li>
                    <Link 
                      onClick={(e) => e.currentTarget.blur()}
                      className={styles.under_txt_btn}
                      href={`https://www.youtube.com/@engforuarmy`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Start studying on Youtube channel of ENG for UArmy">
                      {t("study-btn")}
                    </Link>
                  </li>

                  <li tabIndex="0" 
                    onKeyUp={handleEnterKeyPress}
                    className={styles.under}>
                      <ScrollLink 
                      
                      to="helpUsGrow" 
                      smooth={true} 
                      duration={500} 
                      className={styles.under_txt_btn2}
                      aria-label="Move to Help us grow section">
                      {t("support-btn")}
                      </ScrollLink>
                      {isLargeScreen ? (
                            <ButtonBorder />
                          ) : (
                            <ButtonBorderMobile />)}
                  </li>
                </ul>
            </div>

            <div className={styles.your_container}>
            {isLargeScreen && (
                <div className={styles.contact_us_col}>
                <Youtube tabIndex="0"/>
                <Instagram tabIndex="0"/>
                <Facebook tabIndex="0"/>
                <Telegram tabIndex="0"/>
                </div>
            )}

</div>
        </div>
        <Image className={styles.soldierImg} src="/HeroImage/soldier-transp.png" alt="soldierImg" width={796} height={523} priority/>
       </div>
    </section>
  
};
export default Hero;