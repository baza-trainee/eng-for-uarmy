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
            <h2 className={styles.mediaTitle}>{t("title")}</h2>
            <MediaList list={medias} />
            <svg tabIndex={0} onClick={(e) => e.currentTarget.blur()} className={styles.arrowBtn} xmlns="http://www.w3.org/2000/svg" width="78" height="41" viewBox="0 0 78 41" fill="none">
                <path d="M76.75 1.25L39 39L1.25 1.25" stroke="#231F20" stroke-width="2"/>
            </svg>
            <Link Link href={`/${locale}/contact`} className={styles.mediaBtn}>{t("button")}</Link>
        </div>
    </section>
}
export default Media;


