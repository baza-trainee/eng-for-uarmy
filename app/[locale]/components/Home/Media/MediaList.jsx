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
                <Image src={image} width={110} height={110} alt='media logo' />
                <div className={styles.mediaContent}>
                    <p className={styles.mediaDesc}>{desc}</p>
                    <Link className={styles.btnReadMore} href={'/'} onClick={(e) => e.currentTarget.blur()}>{t("readMore")}</Link>
                </div>
            </li>
        }
        )}
    </ul>
}
export default MediaList;