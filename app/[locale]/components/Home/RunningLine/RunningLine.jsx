"use client";
import throttle from "lodash.throttle";
import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Marquee from 'react-fast-marquee';
import styles from './RunningLine.module.scss';

const RunningLine = () => {
  const t = useTranslations("RunningLine");

  const boxRef = useRef();
  const [y, setY] = useState(0);

 const getPosition = () => {
  const rect = boxRef.current.getBoundingClientRect();
  const upperPosition = rect.top;
  setY(upperPosition);
};

  useEffect(() => {
    getPosition();
    const handleScroll = throttle(() => {
      getPosition()
    }, 500)

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);
  useEffect(() => {
    if (y < 845) {
      const header = document.getElementById("header");
      header.classList.add('header_scrolling__RVm05');
    } else {
      header.classList.remove('header_scrolling__RVm05')
   }
  }, [y])
  
    return  <section className={styles.bannerContainer} ref={boxRef}>
          <Marquee autoFill={true} speed={110}>
            <p className={styles.bannerText}>
              {t("string")}
              <span className={styles.bannerDivider}></span>
            </p>
          </Marquee>
      </section>
}
export default RunningLine;