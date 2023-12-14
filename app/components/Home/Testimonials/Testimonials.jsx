"use client";
import { useTranslations } from "next-intl";
import Slider from "./Slider/Slider";

import authorsSrc from "./authors-src";

import styles from "./testimonials.module.scss";

const Testimonials = () => {
  const t = useTranslations("Feedback");

  const authors = Array.from({ length: 11 }, (_, idx) => ({
    id: idx + 1,
    photo: authorsSrc[idx],
    review: t(`review-${idx + 1}`),
    name: t(`name-${idx + 1}`),
    role: t(`role-${idx + 1}`),
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subscription}>{t("desc")}</p>
        </div>
        <Slider authors={authors} />
      </div>
    </section>
  );
};

export default Testimonials;
