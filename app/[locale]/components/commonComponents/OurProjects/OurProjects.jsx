"use client";
import { useLocale, useTranslations } from 'next-intl';
import "./OurProjects.styles.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Project1, Project2, Project3 } from './OurProjects.cards';



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
          <section className='ourProjects'>
            <div className='ourProjectsContainer'>
              <h2 className='head'>{t("title")}</h2>
              <ul className='wraper'>
                {isLargeScreen ? (
                  <>
                    <Project1 t={t} locale={locale} />
                    <Project2 t={t} locale={locale} />
                    <Project3 t={t} locale={locale} />
                  </>
                ) : (
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide><Project1 t={t} locale={locale}/></SwiperSlide>
                    <SwiperSlide><Project2 t={t} locale={locale}/></SwiperSlide>
                    <SwiperSlide><Project3 t={t} locale={locale}/></SwiperSlide>
                  </Swiper>
                )}
              </ul>
            </div>
          </section>
        </>
      );

}

export default OurProjects;