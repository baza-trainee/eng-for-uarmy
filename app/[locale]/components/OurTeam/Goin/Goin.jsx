"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Goin.module.scss';

const Goin = () => {
    const locale = useLocale();
    const t = useTranslations("OurTeam");

    return (
        <div className={styles.goin}>
            <strong>Want to join our project?</strong>

            <p>Check out our job vacancies or reach out to become a volunteer</p>

            <Image src='./large-arrow.svg' alt='arrow icon' width={96} height={96} />

            <div className="goin__wrapper">
                <Link href={`/${locale}/contact`} className={styles.goin__btn}>Job vacancies</Link>
                <Link href={`/${locale}/contact`} className={styles.goin__btn}>Volunteer</Link>
            </div>
        </div>
    )
}  

export default Goin;