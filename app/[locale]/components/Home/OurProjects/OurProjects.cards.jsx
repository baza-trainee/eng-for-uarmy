import Link from 'next/link';
import Image from 'next/image'
import { SvgBorder, SvgBorderMobile } from './SvgBorder';
import styles from "./OurProjects.module.scss"


export const Project1 = ({t, isLargeScreen})=>{
    return (
     <div className={styles.our_projects_card}>
    {isLargeScreen ? ( <SvgBorder />) : (<SvgBorderMobile/>)}
            <div className={styles.imageContainer}>
            <Image className={styles.cardImg} src="/OurProjects/first-project.webp"  alt="Project channel image" priority="true" width={359} height={255} />
            </div>
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
    <div className={styles.imageContainer}>
            <Image className={styles.cardImg} src="/OurProjects/second-project.webp" alt="Speaking image" priority="true" width={359} height={255} />
            </div>
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
    <div className={styles.imageContainer}>
            <Image className={styles.cardImg} src="/OurProjects/third-project.webp" alt="Mobile app image" priority="true" width={359} height={205} />
            </div>
                    <div className={styles.textCont}>
                    <h3 className={styles.cardHead}>{t("mobileApp")}</h3>
                    <p className={styles.cardText}>{t("mobileApp-desc")}</p>
                    <p className={styles.cardText2}>{t("mobileApp-desc2")}</p>
                    <Link href={`/${locale}`} className={styles.cardButton} style={{ visibility: 'hidden' }}>{t("learnMore")}</Link>
                </div>
        </div>
    )
}