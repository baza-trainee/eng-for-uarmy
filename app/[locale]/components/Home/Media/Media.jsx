'use client'
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import MediaList from "./MediaList";
import medias from "@/app/[locale]/libs/fakeMediaList";
import styles from "./Media.module.scss";
import utilsStyles from '../../../styles/_utils.module.scss'

const Media = () => {
    const t = useTranslations("Media");
    const locale = useLocale();
    
    return <section className={styles.section}>
        <div className={styles.mediaSection}>
            <h2 className={`${utilsStyles.h2} ${styles.mediaTitle}`}>{t("title")}</h2>
            <MediaList list={medias} />
            <svg tabIndex={0} onClick={(e) => e.currentTarget.blur()} className={styles.arrowBtn} width="78" height="75" viewBox="0 0 78 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="erow">
                <path id="Vector 24" d="M76.75 8.25L39 46L1.25 8.25" stroke-width="2"/>
                </g>
            </svg>
            <Link Link href={`/${locale}/contact`} className={styles.mediaBtn}>{t("button")}</Link>
        </div>
    </section>
}
export default Media;


