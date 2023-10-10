import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import {  Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from './partners.module.scss';


const getSlidesPerView = () => {
  // const innerWidth = (typeof window !== 'undefined' ? window.innerWidth : '')
  return window.innerWidth > 1279 ? 3 : 1;
}

const Slider = ({ data }) => {
  const [isReady, setIsReady] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
  
      if (slidesPerView !== newSlidesPerView) {
        setSlidesPerView(newSlidesPerView);
      }
    }
  
    window.addEventListener('resize', handleResize);

    setIsReady(true);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slidesPerView]);


    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={72}
            slidesPerView={slidesPerView}
            navigation
            pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          speed={700}
          loop={true}
          className={`my-swiper container-slider`}
         >
         {data.map(({ id, src, alt }) => (
            <SwiperSlide className={styles.imageSlider} key={id}>
              <Image className={styles.icons} src={src} alt={alt} loading='lazy' />
            </SwiperSlide>
          ))}
        </Swiper>
    );
  };
  
  export default Slider;
