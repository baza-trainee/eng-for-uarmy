"use client";
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import styles from './donateSection.module.scss';
import Link from 'next/link';

const DonateSection = () => {
    const t = useTranslations("Contact us");
    const b = useTranslations("bankDetails");
    const locale = useLocale();

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
            <div className={styles.paypallBtn}>
                <Link className={styles.linkButtons} href="https://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE" target="_blank" onClick={(e) => e.currentTarget.blur()}>
                    <Image src='../paypallBtn.svg' alt='paypall button' width={30} height={36} className={styles.paypallBtnIcon}></Image>
                    <p>PAYPAL</p>
                </Link>
            </div>
            <div className={styles.buymeacoffeeBtn}>
                <Link className={styles.linkButtons} href="https://www.buymeacoffee.com/engforuarmy" target="_blank" onClick={(e) => e.currentTarget.blur()}>
                    <Image src='../buymeacoffeBtn.svg' alt='buymeacoffee button' width={27} height={39} className={styles.buymeacoffeeBtnIcon}></Image>
                    <p>BUYMEACOFFEE</p>
                </Link>
            </div>
        </div>
        </div>
        <div className={styles.bankDetails}>
        {locale === "uk" ? (
            <>
            <Image className={styles.cardSVG} src='../outlineBorders.svg' alt='card border' width={739} height={361}/>
            <h1 className={styles.bankDetailstitle}>{b("title")}</h1>
            <p className={`${styles.bankDetailsText} ${styles.textDesktop}`}>{b("p-1-title")}{b("p-1-desc")}</p>
            <p className={`${styles.bankDetailsText} ${styles.firstParagraphTextMobile}`}>{b("p-1-title")}{b("p-1-desc")}</p>
            <p className={styles.bankDetailsText}>{b("p-2-title")} {b("p-2-desc")}</p>
            <p className={styles.bankDetailsText}>{b("p-3-title")} <br /> {b("p-3-desc")}</p>
            <p className={`${styles.bankDetailsText} ${styles.textDesktop}`}>{b("p-4-title")}{b("p-4-desc")}</p>
            <p className={`${styles.bankDetailsText} ${styles.textMobile}`}>{b("p-4-title")}<br/> {b("p-4-desc")}</p>
            </>
             ) : (
            <>
            <Image className={styles.cardSVGEn} src='/outline.svg' alt='card border' width={740} height={682}/>
            <h1 className={styles.bankDetailstitle}>{b("title")}</h1>
            <p className={styles.bankDetailsText}>{b("p-1")}</p>
            <p className={styles.bankDetailsText}>{b("p-02")}</p>
            <p className={styles.bankDetailsText}><span>{b("p-2-1")}</span><span style={{display: "block"}}>{b("p-2-2")}</span></p>
            <p className={styles.bankDetailsText}>{b("p-3-1")}<span style={{width: "230px", display: "block"}}>{b("p-3-2")}</span></p>
            <p className={styles.bankDetailsText}>{b("p-4")}</p>
            <p className={styles.bankDetailsText}>{b("p-5")}</p>
            <p className={styles.bankDetailsText}>{b("p-6-1")}</p>
            <p className={styles.bankDetailsText}>{b("p-6-2")}</p>
            <p className={styles.bankDetailsText}>{b("p-7")}</p>
            </>
            )}
    </div>
    </section>
};

export default DonateSection;
