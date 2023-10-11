import Link from 'next/link';
import Image from 'next/image'
import { SvgBorder, SvgBorderMobile } from './SvgBorder';
import styles from "./OurProjects.module.scss"


export const Project1 = ({t, isLargeScreen})=>{
    return (
     <div className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <Image className={styles.cardImg} src="/OurProjects/first-project.jpg" alt="Project channel image" width={359} height={236} />
                <div className={styles.textCont}>
                <h3 className={styles.cardHead}>{t("youtube")}</h3>
                <p className={styles.cardText}>{t("youtube-desc")}</p>
                <Link href={`https://www.youtube.com/@engforuarmy`}
                   target="_blank" 
                   rel="noopener noreferrer"
                 className={styles.cardButton}>{t("learnMore")}</Link>
                
            </div>
    </div>
    )
}

export const Project2 = ({t, locale, isLargeScreen})=>{

    return (
    <div className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <Image className={styles.cardImg} src="/OurProjects/second-project.jpeg" alt="Speaking image" width={359} height={236} />
                <div className={styles.textCont}> 
                    <h3 className={styles.cardHead}>{t("practice")}</h3>
                    <p className={styles.cardText}>{t("practice-desc")}</p>
                    <Link href={`/${locale}`} className={styles.cardButton} style={{ visibility: 'hidden' }}>{t("learnMore")} </Link>
                </div>
        </div>
    )
}

export const Project3 = ({t, locale, isLargeScreen})=>{

    return (
    <div className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <Image className={styles.cardImg} src="/OurProjects/third-project.jpg" alt="Mobile app image" width={359} height={236} />
                    <div className={styles.textCont}>
                    <h3 className={styles.cardHead}>{t("mobileApp")}</h3>
                    <p className={styles.cardText}>{t("mobileApp-desc")}</p>
                    <Link href={`/${locale}`} className={styles.cardButton} style={{ visibility: 'hidden' }}>{t("learnMore")}</Link>
                </div>
        </div>
    )
}