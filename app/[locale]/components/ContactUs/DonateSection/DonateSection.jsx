"use client";
import { useTranslations} from 'next-intl';
import Image from 'next/image';
import styles from './donateSection.module.scss';

const DonateSection = () => {
    const t = useTranslations("Contact us");
    
    const openPayPalApp = () => {
        const paypalAppUrl = 'paypal://donate/?hosted_button_id=5C35VYTTJGBQE';
        const paypalWebUrl = 'https://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE';
    
        // Перевірка, чи можливо відкрити додаток PayPal
        const openApp = () => {
            window.open(paypalAppUrl, '_system', 'location=yes');
        };
    
        // Якщо додаток недоступний, відкрити веб-сайт PayPal
        const openWeb = () => {
            window.open(paypalWebUrl, '_blank');
        };
    
        // Спробувати відкрити додаток, якщо неможливо - відкрити веб-сайт
        if (window.open(paypalAppUrl, '_system', 'location=yes')) {
            openApp();
        } else {
            openWeb();
        }
    };
    
    // Аналогічно для BuyMeACoffee
    const openBuyMeACoffeeApp = () => {
        const buymeacoffeeAppUrl = 'buymeacoffee://www.buymeacoffee.com/engforuarmy';
        const buymeacoffeeWebUrl = 'https://www.buymeacoffee.com/engforuarmy';
    
        const openApp = () => {
            window.open(buymeacoffeeAppUrl, '_system', 'location=yes');
        };
    
        const openWeb = () => {
            window.open(buymeacoffeeWebUrl, '_blank');
        };
    
        if (window.open(buymeacoffeeAppUrl, '_system', 'location=yes')) {
            openApp();
        } else {
            openWeb();
        }
    };
    

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
                <button className={styles.linkButtons} onClick={openPayPalApp}>
                    <Image src='../paypallBtn.svg' alt='paypall button' width={30} height={36} className={styles.paypallBtnIcon}></Image>
                    <p>PAYPAL</p>
                </button>
            </div>
            <div className={styles.buymeacoffeeBtn}>
                <button className={styles.linkButtons} onClick={openBuyMeACoffeeApp}>
                    <Image src='../buymeacoffeBtn.svg' alt='buymeacoffee button' width={27} height={39} className={styles.buymeacoffeeBtnIcon}></Image>
                    <p>BUYMEACOFFEE</p>
                </button>
            </div>
        </div>
        <div className={styles.bankDetails}>
            <Image className={styles.cardSVG} src='../outlineBorders.svg' alt='card border' width={739} height={373}/>
            <h1 className={styles.bankDetailstitle}>{t("bankDetails")}</h1>
            <p className={`${styles.bankDetailsText} ${styles.textDesktop}`}>Отримувач: БО «Благодійний фонд «ОСВІТУМ»</p>
            <p className={`${styles.bankDetailsText} ${styles.firstParagraphTextMobile}`}>Отримувач:<br/> БО «Благодійний фонд «ОСВІТУМ»</p>
            <p className={styles.bankDetailsText}>КОД ЄДРПОУ 44966920</p>
            <p className={styles.bankDetailsText}>БАНК  УКРСИББАНК: п/р <br /> UA373510050000026007879183309</p>
            <p className={`${styles.bankDetailsText} ${styles.textDesktop}`}>Призначення: благодійний внесок</p>
            <p className={`${styles.bankDetailsText} ${styles.textMobile}`}>Призначення:<br/> благодійний внесок</p>
        </div>
    </div>
    </section>
};

export default DonateSection;
