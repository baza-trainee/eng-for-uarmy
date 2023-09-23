"use client";
import { useTranslations } from "next-intl";
import Marquee from 'react-fast-marquee';
import styles from './RunningLine.module.scss';

const RunningLine = () => {
    const t = useTranslations("RunningLine");

    return  <section className={styles.bannerContainer}>
          <Marquee autoFill={true} speed={100}>
            <p className={styles.bannerText}>
              {t("string")}
              <span className={styles.bannerDivider}></span>
            </p>
          </Marquee>
      </section>
}
export default RunningLine;