'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ModalWrapper } from '../../commonComponents/ModaWrapper/ModalWrapper';
import Modal from '../DonateModal/DonateModal';
import styles from './HelpUsGrow.module.scss';

const HelpUsGrows = () => {
    const [showModal, setShowModal] = useState(false);
    const locale = useLocale();
    const t = useTranslations("HelpUsGrow");

    const toggleModal = () => setShowModal(state => !state);

    return <>
        <span className={styles.anchor} id='helpUsGrow'></span>
        <section className={styles.section} id='helpUsGrow'>
        <div className={styles.sectionWrap}>
            <div className={styles.descWrap}>
                <div>
                    <h2 className={styles.sectionTitle}>{t("title")}</h2>
                    <Image src='./large-arrow.svg' alt='arrow icon' width={96} height={96} className={styles.arrowIcon} />
                </div>
                <p className={styles.sectionDesc}>{t("desc")}</p>
            </div>
            <ul className={styles.helpList}>
                <li className={styles.helpItem}>
                    <p className={styles.helpDesc}>{t("donate-desc")}</p>
                        
                    <button type='button'
                        onClick={toggleModal}
                        aria-label="Open modal"
                        className={styles.helpBtn}>{t("donate")}
                    </button>
                </li>
                <li className={styles.helpItem}>
                    <p className={styles.helpDesc}>{t("volunteer-desc")}</p>
                    <Link href={`/${locale}/contact?action=volunteer`} className={styles.helpBtn} onClick={(e) => e.currentTarget.blur()}>{t("volunteer")}</Link>
                </li>
                <li className={styles.helpItem}>
                    <p className={styles.helpDesc}>{t("partner-desc")}</p>
                    <Link href={`/${locale}/contact?action=partner`} className={styles.helpBtn} onClick={(e) => e.currentTarget.blur()}>{t("partner")}</Link>
                </li>
                <li className={styles.helpItem}>
                    <p className={styles.helpDesc}>{t("spread-desc")}</p>
                    <Link href={`/${locale}/contact?action=spread`} className={styles.helpBtn} onClick={(e) => e.currentTarget.blur()}>{t("spread")}</Link>
                </li>
            </ul>
        </div>
        </section>

        {showModal && (
            <ModalWrapper onClose={toggleModal}>
                <Modal onClose={toggleModal}/>
            </ModalWrapper>)}
    </>
}
export default HelpUsGrows;