"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from 'next/image';
import MainLink from "../../commonComponents/MainLink/MainLink";
import styles from './Goin.module.scss';
import styled from '../../commonComponents/MainLink/MainLink.module.scss'
import utilsStyles from '../../../styles/_utils.module.scss';

const Goin = () => {
    const locale = useLocale();
    const t = useTranslations("OurTeam");

    return (
        <section className={styles.goin}>
            <strong className={styles.goin__title}>{t("join")}</strong>

            <p className={utilsStyles.body2_bold}>{t("joinOffer")}</p>

            <Image src='/large-arrow.svg' alt='arrow icon' width={96} height={96}
                className={styles.goin__icon}/>

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