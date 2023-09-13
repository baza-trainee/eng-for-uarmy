import Marquee from 'react-fast-marquee';
import styles from './RunningLine.module.scss';

const RunningLine = () => {
    return  <div className={styles.bannerContainer}>
          <Marquee autoFill={true} speed={120}>
            <p className={styles.bannerText}>
          Over 1,700 soldiers are already studying. Join them now!
          <span className={styles.bannerDivider}></span>
            </p>
          </Marquee>
      </div>
}
export default RunningLine;