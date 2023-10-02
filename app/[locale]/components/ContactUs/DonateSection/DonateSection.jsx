"use client";
import { useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import styles from './donateSection.module.scss';

const DonateSection = () => {
    const t = useTranslations("Contact us");

    return <section className={styles.pageContainer}>
    <div className={styles.sectionWrap}>
        <div className={styles.descWrap}>
            <div>
                <h2 className={styles.title}>{t("donate")}</h2>
                <Image src='../donate-us-arrow.svg' alt='arrow icon' width={96} height={96} className={styles.arrowIcon} />
            </div>
            <p className={styles.supportText}>{t("support")}</p>
        </div>
        <div className={styles.linkArea}>
            <div clasname={styles.paypallBtn}>
                <Link href='https://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE' className={styles.linkButtons} target="_blank" rel="noopener noreferrer" onClick={(e) => e.currentTarget.blur()}>
                    <Image src='../paypallBtn.svg' alt='paypall button' width={30} height={36} className={styles.paypallBtnIcon}></Image>
                    <p>PAYPAL</p>
                </Link>
            </div>
            <div className={styles.buymeacoffeeBtn}>
                <Link href='https://www.buymeacoffee.com/engforuarmy' className={styles.linkButtons} target="_blank" rel="noopener noreferrer" onClick={(e) => e.currentTarget.blur()}>
                    <Image src='../buymeacoffeBtn.svg' alt='buymeacoffee button' width={27} height={39} className={styles.buymeacoffeeBtnIcon}></Image>
                    <p>BUYMEACOFFEE</p>
                </Link>
            </div>
        </div>
        <div className={styles.bankDetails}>
            <Image className={styles.cardSVG} src='../outlineBorders.svg' alt='card border' width={739} height={373}/>
            <h1 className={styles.bankDetailtitle}>{t("bankDetails")}</h1>
            <p className={`${styles.bankDetailsText} ${styles.textDesktop}`}>Отримувач: БО «Благодійний фонд «ОСВІТУМ»</p>
            <p className={`${styles.bankDetailsText} ${styles.textMobile}`}>Отримувач:<br/> БО «Благодійний фонд «ОСВІТУМ»</p>
            <p className={styles.bankDetailsText}>КОД ЄДРПОУ 44966920</p>
            <p className={styles.bankDetailsText}>БАНК  УКРСИББАНК: п/р <br /> UA373510050000026007879183309</p>
            <p className={styles.bankDetailsText}>Призначення: благодійний внесок</p>
        </div>
    </div>
    </section>
};

export default DonateSection;
