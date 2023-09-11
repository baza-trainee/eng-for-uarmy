'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from './helpUsGrow.module.scss';
import utilsStyles from '../../../styles/_utils.module.scss'

const HelpUsGrows = () => {
    const locale = useLocale();

    return <section className={styles.section} id='helpUsGrow'>
        <div className={styles.sectionWrap}>
            <div className={styles.descWrap}>
                <div>
                    <h2 className={utilsStyles.h2}>Help us grow</h2>
                    <Image src='./large-arrow.svg' alt='arrow icon' width={96} height={96} className={styles.arrowIcon} />
                </div>
                <p className={styles.sectionDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <ul className={styles.helpList}>
                <li className={styles.helpItem}>
                    <Link href={`/${locale}/contact`} className={styles.helpBtn}>donate</Link>
                    <p className={styles.helpDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </li>
                <li className={styles.helpItem}>
                    <Link href={`/${locale}/contact`} className={styles.helpBtn}>volunteer</Link>
                    <p className={styles.helpDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </li>
                <li className={styles.helpItem}>
                    <Link href={`/${locale}/contact`} className={styles.helpBtn}>partner with us</Link>
                    <p className={styles.helpDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </li>
                <li className={styles.helpItem}>
                    <Link href={`/${locale}/contact`} className={styles.helpBtn}>spread the word</Link>
                    <p className={styles.helpDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </li>
            </ul>
        </div>
    </section>
}
export default HelpUsGrows;