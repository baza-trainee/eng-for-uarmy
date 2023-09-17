// import Link from "next/link";
import styles from "./svg-components.module.scss";

export const ArrowLeftSvg = () => {
  return (
    <svg
      className={styles.arrow}
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.arrowPath}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3536 0L0.353554 12L0 12.3536L0.353554 12.7071L12.3536 24.7071L13.0607 24L1.91421 12.8536H27.7071V11.8536H1.91421L13.0607 0.707107L12.3536 0Z"
        fill="black"
      />
    </svg>
  );
};

export const BorderBackSvg = () => {
  return (
    <svg
      className={styles.borderBack}
      width="170"
      height="92"
      viewBox="0 0 170 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.borderBackPath}
        id="Rectangle 3"
        d="M0.5 0.5H169.5V91.5H36.2071L0.5 55.7929V0.5Z"
        stroke="#171717"
      />
    </svg>
  );
};

export const BorderGoHomeFocusSvg = () => {
  return (
    <svg
      className={styles.borderGoHome}
      width="360"
      height="92"
      viewBox="0 0 360 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.borderGoHomePath}
        d="M0 0H360V92H36L0 56V0Z"
        fill="#231F20"
      />
    </svg>
  );
};
