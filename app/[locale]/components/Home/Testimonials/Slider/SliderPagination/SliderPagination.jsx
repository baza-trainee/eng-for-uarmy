import styles from "./sliderPagination.module.scss";

const SliderPagination = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.elPagination}></div>
      <div className={`${styles.elPagination}  ${styles.isActive}`}></div>
      <div className={styles.elPagination}></div>
      <div className={styles.elPagination}></div>
      <div className={styles.elPagination}></div>
    </div>
  );
};

export default SliderPagination;
