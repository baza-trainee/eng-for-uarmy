'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useActionContext } from '@/app/context/action';
import { ModalWrapper } from '../../commonComponents/ModaWrapper/ModalWrapper';
import Modal from '../DonateModal/DonateModal';
import styles from './HelpUsGrow.module.scss';

const HelpUsGrows = () => {
    const [showModal, setShowModal] = useState(false);
    const { setAction } = useActionContext();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("HelpUsGrow");

    const toggleModal = () => {
        setShowModal(state => !state);
        router.push(`/${locale}#helpUsGrow`, { scroll: true });
    }
    const handleChangeAction = (e, value) => {
        e.currentTarget.blur();
        router.push(`/${locale}/contact`)
        setAction(value);
    };

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
                        
                    <button type='button'
                        onClick={(e) => handleChangeAction(e, 'volunteer')}
                        className={styles.helpBtn}>
                        {t("volunteer")}
                    </button>
                </li>
                <li className={styles.helpItem}>
                    <p className={styles.helpDesc}>{t("partner-desc")}</p>
                        
                    <button type='button'
                        onClick={(e) => handleChangeAction(e, 'partner')}
                        className={styles.helpBtn}>
                        {t("partner")}
                    </button>
                </li>
                <li className={styles.helpItem}>
                    <p className={styles.helpDesc}>{t("spread-desc")}</p>
                        
                    <button type='button'
                        onClick={(e) => handleChangeAction(e, 'spread')}   
                        className={styles.helpBtn}>
                        {t("spread")}
                    </button>
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