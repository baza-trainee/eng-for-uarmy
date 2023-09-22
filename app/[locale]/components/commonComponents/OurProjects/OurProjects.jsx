"use client";
import { useLocale, useTranslations } from 'next-intl';
import styles from "./OurProjects.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Project1, Project2, Project3 } from './OurProjects.cards';
import { Navigation, Pagination } from "swiper/modules";



const OurProjects = () => {
   const locale = useLocale();
   const t = useTranslations("OurProjects");
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1279);
    
    useEffect(() => {
        const handleWindowResize = () => {
        setIsLargeScreen(window.innerWidth >= 1279);
        };
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
        window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return (
        <>
          <section className={styles.ourProjects}>
            <div className={styles.ourProjectsContainer}>
              <h2 className={styles.head}>{t("title")}</h2>
              <ul className={styles.wraper}>
                {isLargeScreen ? (
                  <>
                    <Project1 t={t} locale={locale} isLargeScreen={isLargeScreen}/>
                    <Project2 t={t} locale={locale} isLargeScreen={isLargeScreen}/>
                    <Project3 t={t} locale={locale} isLargeScreen={isLargeScreen}/>
                  </>
                ) : (
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
                      }
                    }}
                  >
                    <SwiperSlide><Project1 t={t} locale={locale} isLargeScreen={isLargeScreen}/></SwiperSlide>
                    <SwiperSlide><Project2 t={t} locale={locale} isLargeScreen={isLargeScreen}/></SwiperSlide>
                    <SwiperSlide><Project3 t={t} locale={locale} isLargeScreen={isLargeScreen}/></SwiperSlide>
                    
                  </Swiper>
                )}
              </ul>
            </div>
          </section>
        </>
      );

}

export default OurProjects;