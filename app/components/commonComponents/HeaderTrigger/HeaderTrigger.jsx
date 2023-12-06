"use client";
import { useRef } from "react";
import { useScrollChangeHeader } from "@/app/hooks/useScrollChangeHeader";
import styles from './HeaderTrigger.module.scss';

const HeaderTrigger = () => {
    const ref = useRef();

    useScrollChangeHeader(ref);

    return <span className={styles.headerTrigger} ref={ref}></span>
} 
export default HeaderTrigger