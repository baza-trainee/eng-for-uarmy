"use client";
import Image from 'next/image'
import "./Hero.styles.scss"; 
import { useLocale } from 'next-intl';
import { Facebook, Youtube, Instagram, Telegram} from './SvgComponent';
import Link from 'next/link';
 
const Hero = () => {
const locale = useLocale();

  return <section className='heroSection'>
      <div className='hero'>
        <div className='container'>
            <div className='card'>
                <h1 className='firstHead'>Eng for UArmy</h1>
                <h2 className='secondHead'>Break the language barrier to achieve victory</h2>
                <ul className='list'>
                      <li className='li-item'>
                          <Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35} />
                          <p className='li-txt'> <strong className='li-bold-txt'> ENG for UArmy </strong> is the first <strong className='li-bold-txt'> Military English</strong> online course in Ukraine.</p>
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
                    <li><Link href={`/${locale}/study`} className="under-txt-btn">Start studying</Link></li>
                    <li><Link href={`/${locale}#helpUsGrow`} className="under-txt-btn2">Support the project</Link></li>
                </ul>
            </div>

            <div className='contact-us-col'>
                <Youtube/>
                <Instagram/>
                <Facebook/>
                <Telegram/>
            </div>
        </div>
        <Image className='soldierImg' src="/HeroImage/soldier-transp.png" alt="soldierImg" width={961} height={632} priority/>
       </div>
    </section>
  
};
export default Hero;