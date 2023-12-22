import styles from "./SvgBorderBtn.module.scss";

const SvgBorderBtn = () => {
  return (
    <svg
      className={styles.icon}
      width="270"
      height="90"
      viewBox="0 0 271 90"
      fill="none">
      <path className={styles.icon__path} d="M0 0H270V90H36L0 56V0Z" />
    </svg>
  );
};

export default SvgBorderBtn;