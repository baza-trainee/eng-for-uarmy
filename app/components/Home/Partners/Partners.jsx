"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useActionContext } from '@/app/context/action';
import Slider from './Slider';
import data from "./data";
import styles from './partners.module.scss';

const Partners = () => {
    const { setAction } = useActionContext();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("Partners");

    const handleChangeAction = (e, value) => {
        e.currentTarget.blur();
        router.push(`/${locale}/contact`)
        setAction(value);
    };

    return <section className={styles.partnersSection}>
        <div className={styles.partners}>
            <h2 className={styles.title}>{t("title")}</h2>
            <Slider data={data} />
        <div>
            <div className={styles.helpItem}>
                <button type='button'
                    onClick={(e) => handleChangeAction(e, 'partner')}
                    className={styles.helpBtn}>
                    {t("becomePartner")}
                </button>
            </div>   
        </div>
        </div>
    </section>

};

export default Partners;