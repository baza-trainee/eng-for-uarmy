"use client";
import Image from 'next/image'
import "./Hero.styles.scss"; 
import { useLocale } from 'next-intl';
import { Facebook, Youtube, Instagram, Telegram, ButtonBorder} from './SvgComponent';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import getCurrentPathname from '@/app/[locale]/libs/getCurrentPathname';
import { usePathname } from 'next/navigation';
 
const Hero = () => {
const locale = useLocale();
const pathname = usePathname();
const currentPathname = getCurrentPathname(pathname);
  return <section className='heroSection'>
      <div className='hero'>
        <div className='container'>
            <div className='card'>
            <Image className='card-border' src="/HeroImage/CardSvg.svg" alt="SVG Image" width={990} height={661} />
                <h1 className='firstHead'>Eng for UArmy</h1>
                <h2 className='secondHead'>Подолай мовний бар’єр, щоб здобути перемогу</h2>
                <ul className='list'>
                      <li className='li-item'>
                          <Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35} />
                          <p className='li-txt'> <strong className='li-bold-txt'> ENG for UArmy </strong> Перший у своєму роді проєкт<strong className='li-bold-txt'> військової англійської</strong> в Україні.</p>
                      </li>
                      <li className='li-item'>
                          <Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35} />
                          <p className='li-txt'>Спеціалізована мовна підготовка за стандартом <span className='li-bold-txt'>НАТО (STANAG 6001).</span></p>
                      </li>
                      <li className='li-item'>
                          <Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35} />
                          <p className='li-txt last-li-txt'>Перший в Україні відкритий курс військової англійської.</p>
                      </li>
                </ul>
                <ul className='btnList'>
                    <li><Link href={`/${locale}/study`} className="under-txt-btn">Почати навчання</Link></li>
                    <li><ButtonBorder/>  <ScrollLink to="helpUsGrow" smooth={true} duration={500} className="under-txt-btn2">Підтримати проєкт</ScrollLink></li>
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