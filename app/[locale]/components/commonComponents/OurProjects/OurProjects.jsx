"use client";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image'
import "./OurProjects.styles.scss"
import Link from 'next/link';


const OurProjects = () => {
   const locale = useLocale();
   const t = useTranslations("OurProjects");
   return <>
        <section className='ourProjects'>
                <h2 className='head'>{t("title")}</h2>
                <ul className='wraper'>
                    <li className='our-projects-card'>
                    <Image className='card-svg' src="./OurProjects/CardBorder.svg" alt="Speaking" width={359} height={590} />
                    <Image className='card-img' src="/OurProjects/Rectangle.png" alt="Image" width={359} height={236} />
                        <div className='text-cont'>
                        <h3 className='card-head'>{t("youtube")}</h3>
                        <p className='card-text'>{t("youtube-desc")}</p>
                        <Link href={`https://www.youtube.com/@engforuarmy`} className="card-button">{t("learnMore")}</Link>
                        
                    </div>
                    </li>
                    <li className='our-projects-card'>
                    <Image className='card-svg' src="./OurProjects/CardBorder.svg" alt="Speaking" width={359} height={590} />
                    <Image className='card-img' src="/OurProjects/Speaking.png" alt="Speaking" width={359} height={236} />
                    <div className='text-cont'> 
                        <h3 className='card-head'>{t("practice")}</h3>
                        <p className='card-text'>{t("practice-desc")}</p>
                        <Link href={`/${locale}`} className="card-button">{t("learnMore")}</Link>
                    </div>
                    </li>
                    <li className='our-projects-card'>
                    <Image className='card-svg' src="./OurProjects/CardBorder.svg" alt="Speaking" width={359} height={590} />
                    <Image className='card-img' src="/OurProjects/mobile.png" alt="mobile" width={359} height={236} />
                        <div className='text-cont'>
                        <h3 className='card-head'>{t("mobileApp")}</h3>
                        <p className='card-text'>{t("mobileApp-desc")}</p>
                        <Link href={`/${locale}`} className="card-button">{t("learnMore")}</Link>
                        </div>
                    </li>

                </ul>
        </section>
        </>

}

export default OurProjects;