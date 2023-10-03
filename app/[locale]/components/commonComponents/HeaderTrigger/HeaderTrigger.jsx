"use client";
import throttle from "lodash.throttle";
import { useRef, useState, useEffect } from "react";
import styles from './HeaderTrigger.module.scss';

const HeaderTrigger = () => {
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
    if (y < 40) {
        const header = document.getElementById("header");
        header.classList.add('header_scrolling__RVm05');
    } else {
        header.classList.remove('header_scrolling__RVm05')
    }
    }, [y])
    
    return <span className={styles.headerTrigger} ref={boxRef}></span>
} 
export default HeaderTrigger