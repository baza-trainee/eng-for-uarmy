// import Slider from "./Slider";
import styles from "./review.module.scss";

const Review = () => {
  return (
    <div className={styles.reviewArea}>
      <div className={styles.headerArea}>
        <p className={styles.headerText}>ВІДГУКИ ПРО ПРОЕКТ</p>
      </div>
      <div className={styles.buttonArea}>
        <button className={styles.button}>+ ДОДАТИ ВІДГУК</button>
      </div>
      <div className={styles.slider}></div>
    </div>
  );
};
export default Review;
