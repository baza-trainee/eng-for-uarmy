import Link from 'next/link';
import Image from 'next/image'
import { SvgBorder, SvgBorderMobile } from './SvgBorder';
import styles from "./OurProjects.module.scss"




export const Project1 = ({t, isLargeScreen})=>{
    return (
    <>
     <li className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <Image className={styles.cardImg} src="/OurProjects/Rectangle.png" alt="Image" width={359} height={236} />
                <div className={styles.textCont}>
                <h3 className={styles.cardHead}>{t("youtube")}</h3>
                <p className={styles.cardText}>{t("youtube-desc")}</p>
                <Link href={`https://www.youtube.com/@engforuarmy`} className={styles.cardButton}>{t("learnMore")}</Link>
                
            </div>
    </li>
    
    </>
    )
}

export const Project2 = ({t, locale, isLargeScreen})=>{

    return (
    <>
    <li className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <Image className={styles.cardImg} src="/OurProjects/Speaking.png" alt="Speaking" width={359} height={236} />
                <div className={styles.textCont}> 
                    <h3 className={styles.cardHead}>{t("practice")}</h3>
                    <p className={styles.cardText}>{t("practice-desc")}</p>
                    <Link href={`/${locale}`} className={styles.cardButton}>{t("learnMore")}</Link>
                </div>
        </li>
        
    </>
    )
}

export const Project3 = ({t, locale, isLargeScreen})=>{

    return (
    <>
    <li className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <Image className={styles.cardImg} src="/OurProjects/mobile.png" alt="mobile" width={359} height={236} />
                    <div className={styles.textCont}>
                    <h3 className={styles.cardHead}>{t("mobileApp")}</h3>
                    <p className={styles.cardText}>{t("mobileApp-desc")}</p>
                    <Link href={`/${locale}`}  className={styles.cardButton}>{t("learnMore")} </Link>
                </div>
        </li>
        
    </>
    )
}