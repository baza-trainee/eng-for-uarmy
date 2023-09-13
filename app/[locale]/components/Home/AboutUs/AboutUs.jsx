"use client";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './aboutUs.module.scss';

const AboutUs = () => {
    const t = useTranslations("AboutUs");


    return <section className={styles.aboutUsSection}>
        <div className={styles.aboutUs}>
            <Image className="image" src='/about-us.svg' alt='aboutUsImg' width={635} height={1000} />
            <div className={styles.rightside}>
                <h2 className={styles.title}>{t("title")}</h2>
                <p className={styles.text}>{t("first-part")}</p>
                <p className={styles.text}>{t("second-part")}</p>
                <p className={styles.text}>{t("third-part")}</p>
            </div>
        </div>
    </section>

};
export default AboutUs;