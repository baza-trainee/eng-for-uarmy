import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// import SliderNavButtons from "./SliderNavButtons/SliderNavButtons";
// import SliderPagination from "./SliderPagination/SliderPagination";

import styles from "./slider.module.scss";
import "./slider.css";

import borderRightTop from "../../../../../../public/testimonials/border-right-top.svg";
import borderRightBottom from "../../../../../../public/testimonials/border-right-bottom.svg";
import borderLeftTop from "../../../../../../public/testimonials/border-left-top.svg";
import borderLeftBottom from "../../../../../../public/testimonials/border-left-bottom.svg";

import borderRightTopMobile from "../../../../../../public/testimonials/border-right-top-mobile.svg";
import borderRightBottomMobile from "../../../../../../public/testimonials/border-right-bottom-mobile.svg";
import borderLeftTopMobile from "../../../../../../public/testimonials/border-left-top-mobile.svg";
import borderLeftBottomMobile from "../../../../../../public/testimonials/border-left-bottom-mobile.svg";

const Slider = ({ data }) => {
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
      {data.map(({ id, src, alt }) => (
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
            src={src}
            alt={alt}
            width={274}
            height={277}
            priority
          />
          <div className={styles.reviewWrapper}>
            <h4 className={styles.reviewText}>
              &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, acaliquet odio
              mattis.&rdquo;
            </h4>

            <p className={styles.authorName}>Name Example</p>
            <p className={styles.authorProfession}>Profession example</p>
          </div>
        </SwiperSlide>
      ))}
      {/* <SliderNavButtons /> */}
      {/* <SliderPagination /> */}
    </Swiper>
  );
};

export default Slider;
