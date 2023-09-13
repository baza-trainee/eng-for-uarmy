"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// import utils from "../../styles/_utils.module.scss";
import styles from "./slider.module.scss";

import borderRightTop from "../../../../../public/testimonials/border-right-top.svg";
import borderRightBottom from "../../../../../public/testimonials/border-right-bottom.svg";
import borderLeftTop from "../../../../../public/testimonials/border-left-top.svg";
import borderLeftBottom from "../../../../../public/testimonials/border-left-bottom.svg";

import authorFhoto from "../../../images/testimonials/mask-group.jpg";

// import SliderNavButtons from "./SliderNavButtons/SliderNavButtons";
// import SliderPagination from "./SliderPagination/SliderPagination";

// const Slider = ({ data }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       loop={true}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       {data.map(({ id, src, alt }) => (
//         <SwiperSlide className={styles.review} key={id}>
//           <Image
//             src={borderLeftTop}
//             alt="border left top"
//             className={styles.leftTop}
//             priority
//           />
//           <Image
//             src={borderLeftBottom}
//             alt="border left bottom"
//             className={styles.leftBottom}
//             priority
//           />
//           <Image
//             src={borderRightTop}
//             alt="border right top"
//             className={styles.rightTop}
//             priority
//           />
//           <Image
//             src={borderRightBottom}
//             alt="border right bottom"
//             className={styles.rightBottom}
//             priority
//           />

//           <Image src={src} alt={alt} width={274} height={277} priority />
//           <div className={styles.reviewWrapper}>
//             <h4 className={styles.reviewText}>
//               &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Nunc vulputate libero et velit interdum, acaliquet odio
//               mattis.&rdquo;
//             </h4>

//             <p className={styles.authorName}>Name Example</p>
//             <p className={styles.authorProfession}>Profetion example</p>
//           </div>
//         </SwiperSlide>
//       ))}
//       <SliderNavButtons />
//       <SliderPagination />
//     </Swiper>
//   );
// };

const Slider = () => {
  return (
    <div className={styles.review}>
      <Image
        src={borderLeftTop}
        alt="border left top"
        className={styles.leftTop}
        priority
      />
      <Image
        src={borderLeftBottom}
        alt="border left bottom"
        className={styles.leftBottom}
        priority
      />
      <Image
        src={borderRightTop}
        alt="border right top"
        className={styles.rightTop}
        priority
      />
      <Image
        src={borderRightBottom}
        alt="border right bottom"
        className={styles.rightBottom}
        priority
      />
      <Image
        src={authorFhoto}
        alt="Fhoto of the author"
        width={274}
        height={277}
        priority
      />
      <div className={styles.reviewWrapper}>
        <h4 className={styles.reviewText}>
          &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, acaliquet odio mattis.&rdquo;
        </h4>

        <p className={styles.authorName}>Name Example</p>
        <p className={styles.authorProfession}>Profetion example</p>
      </div>
    </div>
  );
};

export default Slider;
