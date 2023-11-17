"use client";
import { useLocale, useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from 'react';
import { Project1, Project2, Project3 } from './OurProjects.cards';
import './slider.css'
import styles from "./OurProjects.module.scss"



const OurProjects = () => {
   const locale = useLocale();
   const t = useTranslations("OurProjects");
   const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' && window.innerWidth >= 1280);
   const isEnglish = locale === 'en'; 
  const sectionStyles = isEnglish ? styles.withMargin : '';
    
    useEffect(() => {
        const handleWindowResize = () => {
        setIsLargeScreen( window !== 'undefined' && window.innerWidth >= 1280);
        };
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
        window.removeEventListener("resize", handleWindowResize);
        };
    }, [isLargeScreen]);


    return (
      <>
          <span className={styles.anchor} id='ourProjects'></span>
          <section className={`${styles.ourProjects} ${sectionStyles}`}> 
            <div className={styles.ourProjectsContainer}>
              <h2 className={styles.head}>{t("title")}</h2>
             
                {isLargeScreen ? (
                  <div className={styles.wraper}>
                    <Project1 t={t} locale={locale} isLargeScreen={isLargeScreen}/>
                    <Project2 t={t} locale={locale} isLargeScreen={isLargeScreen}/>
                    <Project3 t={t} locale={locale} isLargeScreen={isLargeScreen}/>
                  </div>
                ) : (
                  <Swiper
                  className="mySwiper"
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    speed={400}
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
             
            </div>
          </section>
        </>
      );

}

export default OurProjects;