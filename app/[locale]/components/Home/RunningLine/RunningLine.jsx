"use client";
import { useTranslations } from "next-intl";
import Marquee from 'react-fast-marquee';
import styles from './RunningLine.module.scss';

const RunningLine = () => {
    const t = useTranslations("RunningLine");

    return  <div className={styles.bannerContainer}>
          <Marquee autoFill={true} speed={120}>
            <p className={styles.bannerText}>
              {t("string")}
              <span className={styles.bannerDivider}></span>
            </p>
          </Marquee>
      </div>
}
export default RunningLine;