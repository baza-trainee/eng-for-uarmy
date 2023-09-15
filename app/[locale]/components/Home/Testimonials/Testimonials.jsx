"use client";
import { useLocale, useTranslations } from "next-intl";
// import { useState, useEffect, useCallback } from "react";

import { data } from "./data";

import styles from "./testimonials.module.scss";
import Slider from "./Slider/Slider";

const Testimonials = () => {
  //   const [rewies, setRewies] = useState([]);

  //   const goNext = () => {
  //     if (rewies.length > 0) {
  //       Swiper.slideNext();
  //     }
  //   };

  //   const goPrev = () => {
  //     if (rewies.length > 0) {
  //       Swiper.slidePrev();
  //     }
  //   };

  //   setRewies(items);

  //   const getRewiesFromBackend = async () => {
  //     const data = await fetch("url_backend");
  //     const rewies = data.json();
  //     setRewies(rewies);
  //   };

  //   useEffect(() => {
  //     getRewiesFromBackend();
  //   }, []);

  //   useEffect(() => {
  //     let timeout;
  //     if (rewies.length > 0) {
  //       console.log(rewies);
  //       timeout = setTimeout(() => {
  //         Swiper.update();
  //       }, 1000);
  //     }

  //     if (rewies.length > 0) {
  //       clearTimeout(timeout);
  //       Swiper.destroy();
  //       console.log("Destroy");
  //     }
  //   }, [rewies]);

  //   console.log(items);

  const locale = useLocale();
  const t = useTranslations("Feedback");
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subcription}>{t("desc")}</p>
        </div>
        <Slider data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
