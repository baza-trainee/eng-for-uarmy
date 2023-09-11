"use client";
import Image from 'next/image'
import "./Hero.styles.scss"; 
import { useLocale } from 'next-intl';
import { Facebook, Youtube, Instagram, Telegram} from './SvgComponent';
import Link from 'next/link';
 
const Hero = () => {
const locale = useLocale();

  return <section className='hero'>
        <div className='container'>
            <div className="card">
                <h1 className='firstHead'>Eng for UArmy</h1>
                <h2 className='secondHead'>Break the language barrier to achieve victory</h2>
                <ul>
                    <li className='li-item'><Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35} /><p className='li-txt'> <strong> ENG for UArmy </strong>  is the first <strong> Military English</strong> online course in Ukraine.</p></li>
                    <li className='li-item'><Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35}/><p className='li-txt'>Спеціалізована мовна підготовка за стандартом <strong> НАТО (STANAG 6001).</strong></p></li>
                    <li className='li-item'><Image src="./HeroImage/arrow-small.svg" alt="SVG Image" width={35} height={35}/><p className='li-txt'>Перший в Україні відкритий курс військової англійської.</p></li>
                </ul>
                <Link href={`/${locale}/study`}><button className="under-txt-btn">Start studying</button></Link>
                <Link href={`/${locale}/helpUsGrow`}><button className="under-txt-btn2">Support the project</button></Link>
            </div>

            <div className='contact-us-col'>
                <Youtube/>
                <Instagram/>
                <Facebook/>
                <Telegram/>
                </div>
        </div>
        <Image className='soldierImg' src="/HeroImage/soldier-transp.png" alt="soldierImg" width={961} height={632}/>
    </section>
  
};
export default Hero;