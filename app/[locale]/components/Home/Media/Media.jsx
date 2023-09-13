'use client'
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import MediaList from "./MediaList";
import medias from "@/app/[locale]/libs/fakeMediaList";
import styles from "./Media.module.scss";
import utilsStyles from '../../../styles/_utils.module.scss'

const Media = () => {
    const locale = useLocale();

    return <section className={styles.section}>
        <div className={styles.mediaSection}>
            <h2 className={`${utilsStyles.h2} ${styles.mediaTitle}`} >Медіа про ENG for UArmy</h2>
            <MediaList list={medias} />
            <button type="button" id='wrap' className={styles.arrowBtn}><Image src='/arrowWrap.svg' width={110} height={110} alt='media logo'/></button>
            <Link Link href={`/${locale}/contact`} className={styles.mediaBtn}>Share our project with your audience</Link>
        </div>
    </section>
}
export default Media;


