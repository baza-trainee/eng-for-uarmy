import { useSwiper } from "swiper/react";
// import Image from "next/image";

// import arrowLeft from "../../../../../../../public/testimonials/erow-left.svg";
// import arrowRight from "../../../../../../../public/testimonials/erow-right.svg";

// import styles from "./sliderNavButtons.module.scss";

import "../slider.css";

// const SliderNavButtons = () => {
//   const swiper = useSwiper();
//   return (
//     <div className={styles.btnWrapper}>
//       <button
//         type="button"
//         className={styles.btnLeft}
//         onClick={() => {
//           swiper.slidePrev();
//         }}
//       >
//         {/* <Image src={arrowLeft} alt="arrow left" width={68} height={68} /> */}
//       </button>

//       <button
//         type="button"
//         className={styles.btnRight}
//         onClick={() => {
//           swiper.slideNext();
//         }}
//       >
//         {/* <Image src={arrowRight} alt="arrow right" width={68} height={68} /> */}
//       </button>
//     </div>
//   );
// };

const SliderNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="btnWrapper">
      <button
        type="button"
        className="btnLeft"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        {/* <Image src={arrowLeft} alt="arrow left" width={68} height={68} /> */}
      </button>

      <button
        type="button"
        className="btnRight"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        {/* <Image src={arrowRight} alt="arrow right" width={68} height={68} /> */}
      </button>
    </div>
  );
};

export default SliderNavButtons;
