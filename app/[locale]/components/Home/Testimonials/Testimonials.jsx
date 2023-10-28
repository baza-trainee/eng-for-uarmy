"use client";
import { useTranslations, useLocale } from "next-intl";
import Slider from "./Slider/Slider";

import styles from "./testimonials.module.scss";

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

  const locale = useLocale();
  const t = useTranslations("Feedback");

  const authors = Array.from({ length: 3 }, (_, idx) => ({
    id: idx + 1,
    photo: `/feedback/author-${String(idx + 1).padStart(2, "0")}.jpg`,
    review: t(`review-${idx + 1}`),
    name: t(`name-${idx + 1}`),
    role: t(`role-${idx + 1}`),
  }));

  return (
    <section
      className={styles.section}
      //   className={`${styles.section} ${locale === "en" ? styles.isNone : ""}`}
    >
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
