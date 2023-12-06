import throttle from "lodash.throttle";
import { useState, useEffect } from "react";

export const useScrollChangeHeader = (ref) => {
    const [y, setY] = useState(0);

    const getPosition = () => {
        const rect = ref.current.getBoundingClientRect();
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
            header.classList.add('header_scrolling__KOF8A');
        } else {
            header.classList.remove('header_scrolling__KOF8A');
        }
    }, [y])
}