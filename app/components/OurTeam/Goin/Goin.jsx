"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { useActionContext } from '@/app/context/action';
import Image from 'next/image';
import MainLink from "../../commonComponents/MainLink/MainLink";
import styles from './Goin.module.scss';
import btnStyles from '../../commonComponents/MainLink/MainLink.module.scss'

const Goin = () => {
    const { setAction } = useActionContext();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("OurTeam");

    const handleChangeAction = (e, value) => {
        e.currentTarget.blur();
        router.push(`/${locale}/contact`)
        setAction(value);
    };

    return (
        <section className={styles.goin}>
            <strong className={styles.goin__title}>{t("join")}</strong>

            <p className={styles.goin__desc}>{t("joinOffer")}</p>

            <Image src='/large-arrow.svg'
                alt='arrow icon'
                width={96}
                height={96}
                className={styles.goin__img} />

            <div className={styles.goin__wrapper}>
                <MainLink
                    url='https://www.work.ua/jobs/by-company/2559879/' 
                    aria-label="Work.ua link">
                    {t("vacancies")}
                </MainLink>

                <button type='button'
                    onClick={(e) => handleChangeAction(e, 'volunteer')}
                    className={btnStyles.mainLink}>
                    {t("volunteer")}
                </button>
            </div>
        </section>
    )
}  

export default Goin;