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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3536 0L0.353554 12L0 12.3536L0.353554 12.7071L12.3536 24.7071L13.0607 24L1.91421 12.8536H27.7071V11.8536H1.91421L13.0607 0.707107L12.3536 0Z"
        fill="#231F20"
      />
    </svg>
  );
};

export const ArrowLeftSvgMobile = () => {
  return (
    <svg
      className={styles.arrowMobile}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        className={styles.arrowPathMobile}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.87674 0.90625L1.20641 10.668L0.911499 11.0001L1.20641 11.3321L9.87674 21.0939L10.6244 20.4298L2.69308 11.5001H21.0885V10.5001H2.69308L10.6244 1.57032L9.87674 0.90625Z"
        fill="#231F20"
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
        d="M0.5 0.5H169.5V91.5H36.2071L0.5 55.7929V0.5Z"
        stroke="#231F20"
      />
    </svg>
  );
};

export const BorderBackSvgMobile = () => {
  return (
    <svg
      className={styles.borderBackMobile}
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="50"
      viewBox="0 0 150 50"
      fill="none"
    >
      <path
        className={styles.borderBackPathMobile}
        d="M150 0H0V30L20 50H150V0Z"
        stroke="#231F20"
      />
    </svg>
  );
};

export const BorderErrorSvg = () => {
  return (
    <svg
      className={styles.borderError}
      width="740"
      height="403"
      viewBox="0 0 740 403"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 295.559V0.5H739.5V402.5H107.707L0.5 295.559Z"
        stroke="#231F20"
      />
    </svg>
  );
};

export const BorderErrorSvgMobile = () => {
  return (
    <svg
      className={styles.borderErrorMobile}
      width="288"
      height="153"
      viewBox="0 0 288 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 112.077V0.5H287.5V152.5H42.041L0.5 112.077Z"
        stroke="#231F20"
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

export const BorderGoHomeFocusSvgMobile = () => {
  return (
    <svg
      className={styles.borderGoHomeMobile}
      xmlns="http://www.w3.org/2000/svg"
      width="288"
      height="50"
      viewBox="0 0 288 50"
      fill="none"
    >
      <path
        className={styles.borderGoHomePathMobile}
        d="M288 0H0V30L20 50H288V0Z"
        fill="#231F20"
      />
    </svg>
  );
};
