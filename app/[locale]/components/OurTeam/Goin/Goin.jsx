"use client";
import { useLocale, useTranslations } from "next-intl";
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import MainLink from "../../commonComponents/MainLink/MainLink";
import styles from './Goin.module.scss';
import styled from '../../commonComponents/MainLink/MainLink.module.scss';

const Goin = () => {
    const locale = useLocale();
    const t = useTranslations("OurTeam");
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <section className={styles.goin}>
            <strong className={styles.goin__title}>{t("join")}</strong>

            <p className={styles.goin__desc}>{t("joinOffer")}</p>

            {isDesktop && <Image src='/large-arrow.svg' alt='arrow icon' width={96} height={96} />}

            <div className={styles.goin__wrapper}>
                <a href='https://www.work.ua/'
                    className={styled.mainLink}
                    target="_blank" 
                    rel="noopener noreferre" 
                    aria-label="button Work.ua">
                    {t("vacancies")}
                </a>
                <MainLink path='contact'>{t("volunteer")}</MainLink>
            </div>
        </section>
    )
}  

export default Goin;