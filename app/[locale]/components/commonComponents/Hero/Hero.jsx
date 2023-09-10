"use client";
import Image from 'next/image'
import styles from "./Hero.styles.scss"; 
import { useLocale } from 'next-intl';
 
const Hero = () => {
const locale = useLocale();

  return <section className='hero'>
        <div className='container'>
            <div className="card">
                <h1 className='firstHead'>Eng for UArmy</h1>
                <h2 className='secondHead'>Break the language barrier to achieve victory</h2>
                <ul>
  <li className='li-item'><Image src="./arrow-small.svg" alt="SVG Image" width={35} height={35}/><p className='li-txt'> <strong> ENG for UArmy </strong>  is the first <strong> Military English</strong> online course in Ukraine.</p></li>
  <li className='li-item'><Image src="./arrow-small.svg" alt="SVG Image" width={35} height={35}/><p className='li-txt'>Спеціалізована мовна підготовка за стандартом <strong> НАТО (STANAG 6001).</strong></p></li>
  <li className='li-item'><Image src="./arrow-small.svg" alt="SVG Image" width={35} height={35}/><p className='li-txt'>Перший в Україні відкритий курс військової англійської.</p></li>
</ul>
                <button className="under-txt-btn">Start studying</button>
                <button className="under-txt-btn2">Support the project</button>
            </div>

            <div className='contact-us-col'>
                <button className='contact-us'>contact us</button>
                <button className='insagram social-btn'><Image src="./instagram.svg" alt="SVG Image" width={35} height={35}/></button>
                <button className='facebook social-btn'><Image src="./facebook.svg" alt="SVG Image" width={13} height={25}/></button>
                <button className='telegram social-btn'><Image src="./telegram.svg" alt="SVG Image" width={35} height={35}/></button>
                </div>
        </div>
        <Image className='soldierImg' src="/soldier-transp.png" alt="soldierImg" width={961} height={632}/>
    </section>
  
};
export default Hero;