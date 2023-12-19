import styles from "./SvgComponent.module.scss";

const SvgComponent = () => {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <g
        // stroke="#151514"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="m22.5 7.5-15 15M7.5 7.5l15 15" />
      </g>
    </svg>
  );
};

export default SvgComponent;
