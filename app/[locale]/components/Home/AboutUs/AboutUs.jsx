"use client";
import Image from 'next/image';
import styles from './aboutUs.module.scss';
import { useLocale } from 'next-intl';

const AboutUs = () => {
const locale = useLocale();

  return <section className={styles.aboutUsSection}>
      <div className={styles.aboutUs}>
        <Image src='/about-us.svg' alt='aboutUsImg' width={720} height={1000} />
        <div className={styles.rightside}>
            <div className={styles.text}>
            <p className={styles.header}>Про нас</p>
            <p className={styles.text}>Навесні 2022 року засновниця проєкту, викладачка
            Олена Чекрижова, на прохання друга розпочала 
            курс англійської у його батальйоні. Олена прожила
            кілька місяців на військовій базі, щоденно
            викладаючи англійську, після чого навчала офіцерів
            та особовий склад у штабах і місцях дислокації,
            працювала з військовими онлайн.</p>
            <p className={styles.text}>Перші місяці Олена неофіційно називала свою
            ініціативу “Спеціальна освітня спецоперація”,
            пізніше проєкт отримав назву ENG for UARMY, а
            згодом запустився Youtube-канал “Армійська
            англійська”. За перший рік діяльності до створення
            проєкту і найрізноманітніших завдань долучилися
            більше сотні волонтерів (українців і іноземців).</p>
            <p className={styles.text}>Ми віримо, що мова – це зброя. Чим більше у нас
            зброї, тим ближча наша перемога. І місія нашого
            проєкту – озброїти українські збройні сили
            англійською.</p>
            </div>
        </div>
        </div>
    </section>

};
export default AboutUs;