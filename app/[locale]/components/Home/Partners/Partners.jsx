"use client";
import React, {useState} from 'react';
import styles from './partners.module.scss';
import Image from 'next/image'
import { useLocale } from 'next-intl';
import Link from 'next/link';

const Partners = () => {
    const locale = useLocale();

    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        const container = document.getElementById('imagesContainer');
        if (container) {
            const newPosition = scrollPosition - 320;
            if (newPosition >= 0) { 
                container.scrollTo({ left: newPosition, behavior: 'smooth' });
                setScrollPosition(newPosition);
            } else {
                container.scrollTo({ left: 0, behavior: 'smooth' });
                setScrollPosition(0);
            }
        }
    };

    const scrollRight = () => {
        const container = document.getElementById('imagesContainer');
        if (container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            const newPosition = scrollPosition + 320;
            if (newPosition <= maxScroll) { 
                container.scrollTo({ left: newPosition, behavior: 'smooth' });
                setScrollPosition(newPosition);
            } else {
                container.scrollTo({ left: maxScroll, behavior: 'smooth' });
                setScrollPosition(maxScroll);
            }
        }
    };

    return <section className={styles.partnersSection}>
        <div className={styles.partners}>
            <h2 className={styles.title}>ПАРТНЕРИ</h2>
        <div id="imagesContainer" className={styles.scrollContainer}>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
            <div className={styles.icons}><Image src="./partners/partnersImage.svg" alt="SVG Image" width={179} height={179} /></div>
        </div>
        <div id="scrollButtonContainer" className={styles.scrollButtonContainer}>
            <button id="scrollButtonLeft" className={styles.scrollButton} onClick={scrollLeft}></button>
            <button id="scrollButtonRight" className={styles.scrollButton} onClick={scrollRight}></button>
        </div>
        <div>
            <div className={styles.helpItem}>
                <Link href={`/${locale}/contact`} className={styles.helpBtn}>Become a partner or sponsor</Link>
            </div>   
        </div>
        </div>
    </section>

};

export default Partners;