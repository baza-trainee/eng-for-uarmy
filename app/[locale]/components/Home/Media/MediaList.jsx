"use client";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import Link from 'next/link';
import styles from './MediaList.module.scss'

const MediaList = ({ list }) => {
    const t = useTranslations("Media");

    return <ul className={styles.mediaList}>
        {list.map(({ id, image, desc }) => {
            return <li className={styles.mediaCard} key={id}>
                <div className={styles.mediaLogoWrap}><Image src={image} width={100} height={100} loading = 'lazy' style={{width: "100%", height: "auto", display: "block"}} alt='media logo' /></div>
                <div className={styles.mediaContent}>
                    <p className={styles.mediaDesc}>{desc}</p>
                    <Link className={styles.btnReadMore} href={'/'} onClick={(e) => e.currentTarget.blur()} aria-label="Read more about media">{t("readMore")}</Link>
                </div>
            </li>
        }
        )}
    </ul>
}
export default MediaList;