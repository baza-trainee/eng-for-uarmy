import styles from "./svgComponents.module.scss";

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
        d="M9.87686 0.90625L1.20653 10.668L0.911621 11.0001L1.20653 11.3321L9.87686 21.0939L10.6245 20.4298L2.69321 11.5001H21.0886V10.5001H2.69321L10.6245 1.57032L9.87686 0.90625Z"
        fill="#231F20"
      />
    </svg>
  );
};

export const BorderBackSvg = () => {
  return (
    <svg
      className={styles.borderBack}
      //   width="236"
      //   height="92"
      viewBox="0 -0.5 237 93.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.borderBackPath}
        id="Rectangle 3"
        d="M0.5 0.5H235.5V91.5H36.2071L0.5 55.7929V0.5Z"
        stroke="#231F20"
        vectorEffect="non-scaling-stroke"
        overflow="visible"
      />
    </svg>
  );
};

export const BorderBackSvgMobile = () => {
  return (
    <svg
      className={styles.borderBackMobile}
      xmlns="http://www.w3.org/2000/svg"
      //   width="200"
      //   height="50"
      viewBox="0 -0.5 200.5 50.5"
      fill="none"
    >
      <path
        className={styles.borderBackPathMobile}
        d="M0.5 29.7929V0.5H199.5V49.5H20.2071L0.5 29.7929Z"
        stroke="#231F20"
        vectorEffect="non-scaling-stroke"
        overflow="visible"
      />
    </svg>
  );
};
