"use client";
import Image from 'next/image'
import "./Hero.styles.scss"; 
import "./SvgComponent.styles.scss"
import { useLocale, useTranslations } from 'next-intl';
import { Facebook, Youtube, Instagram, Telegram, ButtonBorder, Arrow} from './SvgComponent';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
 
const Hero = () => {
    
const locale = useLocale();
const pathname = usePathname();
const t = useTranslations("Hero");
  return <section className='heroSection'>
      <div className='hero'>
        <div className='container'>
            <div className='card'>
            <Image className='card-border' src="/HeroImage/CardSvg.svg" alt="SVG Image" width={990} height={652} />
                <h1 className='firstHead'>Eng for UArmy</h1>
                <h2 className='secondHead'>{t("title")}</h2>
                
                <ul className='list'>
                      <li className='li-item'>
                          <Arrow />
                          <p className='li-txt'>{t("first-desc")}<strong className='li-bold-txt'>{t("first-desc-bold")}</strong></p>
                      </li>
                      <li className='li-item'>
                          <Arrow />
                          <p className='li-txt'>{t("second-desc")}<span className='li-bold-txt'>{t("second-desc-bold")}</span>{t("second-desc2")}<span className='li-bold-txt'>{t("second-desc-bold2")}</span></p>
                      </li>
                      <li className='li-item'>
                          <Arrow />
                          <p className='li-txt last-li-txt'>{t("third-desc")}<span className='li-bold-txt'>{t("third-desc-bold")}</span>{t("and")}<span className='li-bold-txt'>{t("third-desc-bold2")}</span>{t("third-desc-bold3")}</p>
                      </li>
                </ul>
                <ul className='btnList'>
                    <li><Link href={`https://www.youtube.com/@engforuarmy`} className="under-txt-btn">{t("study-btn")}</Link></li>
                    <li tabIndex="0" className="under" ><ScrollLink to="helpUsGrow" smooth={true} duration={500} className="under-txt-btn2" >{t("support-btn")}</ScrollLink><ButtonBorder /></li>
                </ul>
            </div>

            <div className='contact-us-col'>
                <Youtube/>
                <Instagram/>
                <Facebook/>
                <Telegram/>
            </div>
        </div>
        <Image className='soldierImg' src="/HeroImage/soldier-transp.png" alt="soldierImg" width={796} height={523} priority/>
       </div>
    </section>
  
};
export default Hero;