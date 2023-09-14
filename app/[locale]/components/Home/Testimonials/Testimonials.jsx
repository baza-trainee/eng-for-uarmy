"use client";

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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Learners’ feedback</h2>
          <p className={styles.subcription}>
            We love hearing what you find useful about our materials and
            improving based on your suggestions.
          </p>
        </div>
        <Slider data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
