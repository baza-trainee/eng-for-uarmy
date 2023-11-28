"use client";
import React from 'react';
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import styles from "./ContactButton.module.scss";
import btnStyles from "../../../commonComponents/MainLink/MainLink.module.scss";

const ContactButton = ({ disabled, isLoading }) => {
    const t = useTranslations("Contact us");
    const locale = useLocale();
    
    return (
        <div className={styles.button}>
            <button type="submit"
                disabled={disabled}
                className={`${btnStyles.mainLink} ${styles.button__btn}`}>
                {isLoading && <span className={styles.button__spinner}></span>}
                {t("send")}
            </button>

            <p className={styles.button__agreement}>{t("agreement")}
                {' '}
                <Link href={`/${locale}/privacy-policy`}
                    className={`${styles.button__policy}`}
                    aria-label="Open Privacy Policy of Eng for UArmy">
                    {t("policy")}
                </Link>
            </p>
        </div>
    )
}

export default ContactButton