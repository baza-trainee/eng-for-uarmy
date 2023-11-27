import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import borderRightTop from "../../../../../public/testimonials/border-right-top.svg";
import borderRightBottom from "../../../../../public/testimonials/border-right-bottom.svg";
import borderLeftTop from "../../../../../public/testimonials/border-left-top.svg";
import borderLeftBottom from "../../../../../public/testimonials/border-left-bottom.svg";

import styles from "./slider.module.scss";
import "./slider.css";

const Slider = ({ authors }) => {
  return (
    <Swiper
      className="my-swiper"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      speed={700}
      loop={true}
      breakpoints={{
        320: {
          spaceBetween: 32,
        },
        768: {
          spaceBetween: 32,
        },
        1280: {
          spaceBetween: 176,
        },
      }}
    >
      {authors.map(({ id, photo, review, name, role }) => (
        <SwiperSlide className={styles.review} key={id}>
          <Image
            className={styles.leftTop}
            src={borderLeftTop}
            alt="border left top"
            priority
          />
          <Image
            className={styles.leftBottom}
            src={borderLeftBottom}
            alt="border left bottom"
            priority
          />
          <Image
            className={styles.rightTop}
            src={borderRightTop}
            alt="border right top"
            priority
          />
          <Image
            className={styles.rightBottom}
            src={borderRightBottom}
            alt="border right bottom"
            priority
          />

          <Image
            className={styles.reviewImg}
            src={photo}
            alt={name}
            width={169}
            height={170}
            loading="lazy"
          />
          <div className={styles.reviewWrapper}>
            <h3 className={styles.reviewText}>&ldquo;{review}&rdquo;</h3>
            <p className={styles.authorName}>{name}</p>
            <p className={styles.authorProfession}>{role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
