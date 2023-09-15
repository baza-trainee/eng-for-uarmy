import { Swiper, SwiperSlide} from "swiper/react";
import {  Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './partners.module.scss';

import Image from "next/image";

const Slider = ({ data }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={72}
            slidesPerView={3}
            slidesPerGroup={3}
            navigation
            pagination={{
            clickable: true,
          }}
          speed={700}
          loop={true}
          className="my-swiper container-slider"
         >
         {data.map(({ id, src, alt }) => (
            <SwiperSlide className={styles.imageSlider} key={id}>
              <Image class={styles.icons} src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
    );
  };
  
  export default Slider;
