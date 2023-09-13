import { useSwiper } from "swiper/react";
import Image from "next/image";

import arrowLeft from "../../../../../public/testimonials/erow-left.svg";
import arrowRight from "../../../../../public/testimonials/erow-right.svg";

import styles from "./SwiperNavButtons";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.btnWrapper}>
      <button
        className={styles.btnLeft}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        {/* <Image src={arrowLeft} alt="arrow left" width={68} height={68} /> */}
      </button>
      );
      <button
        className={styles.btnRight}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        {/* <Image src={arrowRight} alt="arrow right" width={68} height={68} /> */}
      </button>
    </div>
  );
};

export default SwiperNavButtons;
