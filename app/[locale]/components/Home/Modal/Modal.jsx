"use client";
import { useLocale} from "next-intl";
import { useRouter } from "next/navigation";
import styles from './Modal.module.scss';
import Link from "next/link";
import { useCallback } from "react";

const Modal = () => {
    const router = useRouter()
    const onCloseClick = useCallback(() => {
    document.body.classList.remove('modal-open');
    router.back()
  });
    return <div className={styles.backdrop} onClick={() => onCloseClick()}>
        <div className={styles.modal} onClick={(e) => {e.stopPropagation()}}>
            <button onClick={() => onCloseClick()}>
                <svg className={styles.iconCross} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2932 20.0003L10 29.2935L10.7071 30.0006L20.0003 20.7074L29.2935 30.0006L30.0007 29.2935L20.7074 20.0003L30.0006 10.7071L29.2934 10L20.0003 19.2932L10.7072 10L10.0001 10.7071L19.2932 20.0003Z" fill="black"/>
                </svg>
            </button>
            <h3 className={styles.modalTitle}>Donate</h3>
            <p className={styles.modalDesc}>To support us with a donation, please use one of the options below. Thank you for helping Ukrainian soldiers break the language barrier!</p>
            <ul className={styles.btnList}>
                <li><Link href={'/'} className={styles.btn}>PayPal</Link></li>
                <li><Link href={'/'} className={styles.btn}>BuyMeACoffee</Link></li>
            </ul>
            <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>Банківські реквізити</h4>
                <p className={styles.infoItem}>Отримувач: БО «Благодійний фонд «ОСВІТУМ»</p>
                <p className={styles.infoItem}>КОД ЄДРПОУ 44966920</p>
                <p className={styles.infoItem}>БАНК  УКРСИББАНК: п/р UA373510050000026007879183309</p>
                <p className={styles.infoItem}>Призначення: благодійний внесок</p>
            </div>
          </div>
      </div>
}
export default Modal;