"use client";
import { useTranslations} from 'next-intl';
import Image from 'next/image';
import styles from './donateSection.module.scss';

const DonateSection = () => {
    const t = useTranslations("Contact us");
    
//     const openPayPalApp = () => {
//         const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//         const payPalAppUrl = 'paypal://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE';
//         const payPalWebUrl = 'https://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE';
        
//         if (/android/i.test(userAgent)) {
//             window.location.href = payPalAppUrl;
//             setTimeout(() => {
//                 window.location.href = payPalWebUrl;
//             }, 1000);
//         } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//             window.location.href = payPalAppUrl;
//             setTimeout(() => {
//                 window.location.href = payPalWebUrl;
//             }, 1000);
//         } else {
//             window.open(payPalWebUrl, '_blank');
//         }
//     };

// const openBuyMeACoffeeApp = () => {
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     const buymeacoffeeAppUrl = 'buymeacoffee://www.buymeacoffee.com/engforuarmy';
//     const buymeacoffeeWebUrl = 'https://www.buymeacoffee.com/engforuarmy';

//     if (/android/i.test(userAgent)) {
//         window.location.href = buymeacoffeeAppUrl;
//         setTimeout(() => {
//             window.location.href = buymeacoffeeWebUrl;
//         }, 1000);
//     } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         window.location.href = buymeacoffeeAppUrl;
//         setTimeout(() => {
//             window.location.href = buymeacoffeeWebUrl;
//         }, 1000);
//     } else {
//         window.open(buymeacoffeeWebUrl, '_blank');
//     }
//  };

const openAppOrWeb = (appUrl, webUrl) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    const openApp = () => {
        window.location.href = appUrl;
        setTimeout(() => {
            window.location.href = webUrl;
        }, 1000);
    };

    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        openApp();
    } else {
        window.open(webUrl, '_blank');
    }
};

const payPalAppUrl = 'paypal://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE';
const payPalWebUrl = 'https://www.paypal.com/donate/?hosted_button_id=5C35VYTTJGBQE';

const buymeacoffeeAppUrl = 'buymeacoffee://www.buymeacoffee.com/engforuarmy';
const buymeacoffeeWebUrl = 'https://www.buymeacoffee.com/engforuarmy';


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
                <button className={styles.linkButtons} onClick={openAppOrWeb(payPalAppUrl, payPalWebUrl)}>
                    <Image src='../paypallBtn.svg' alt='paypall button' width={30} height={36} className={styles.paypallBtnIcon}></Image>
                    <p>PAYPAL</p>
                </button>
            </div>
            <div className={styles.buymeacoffeeBtn}>
                <button className={styles.linkButtons} onClick={openAppOrWeb(buymeacoffeeAppUrl, buymeacoffeeWebUrl)}>
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
