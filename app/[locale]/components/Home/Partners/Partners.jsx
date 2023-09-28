"use client";
import React from 'react';
import styles from './partners.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Slider from './Slider';
import data from "./data";

const Partners = () => {
    const locale = useLocale();
    const t = useTranslations("Partners");

    return <section className={styles.partnersSection}>
        <div className={styles.partners}>
            <h2 className={styles.title}>{t("title")}</h2>
            <Slider data={data} />
        <div>
            <div className={styles.helpItem}>
                <Link href={`/${locale}/contact?action=partner`} className={styles.helpBtn}>{t("becomePartner")}</Link>
            </div>   
        </div>
        </div>
    </section>

};

export default Partners;