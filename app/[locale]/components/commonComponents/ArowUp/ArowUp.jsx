import { Link as ScrollLink } from 'react-scroll';
import styles from "./ArowUp.module.scss";

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

export const ArowUp = () => {
    return <ScrollLink  to="top" onClick={scrollToTop} className={styles.ArowUpbtn} aria-label="Go up to the top of the page">
                <svg className={styles.svgArrowUp} viewBox="0 0 88 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className={styles.Circle} cx="45.5" cy="41.5" r="37.5" fill="#F9F9F9"/>
                        <circle className={styles.ArowBorder} cx="45.5" cy="41.5" r="37" stroke="#231F20"/>
                        <path className={styles.Arow} fillRule="evenodd" clipRule="evenodd" d="M32.9715 40.4994L44.6388 28.4022L45.0003 28.0273L45.3601 28.4038L56.9721 40.554L56.2492 41.2449L45.4961 29.9934L45.4368 56.0288L44.4368 56.0265L44.4961 29.9907L33.6913 41.1936L32.9715 40.4994Z" fill="#231F20"/>
                    </svg>
      </ScrollLink>
  }