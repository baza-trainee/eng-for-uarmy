import styles from "./SvgComponents.module.scss";

const SvgPencil = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
      <path d="M0 0h40v40H0z" />
      <path
        className={styles.path}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 33.336h15M27.5 5.832a3.535 3.535 0 1 1 5 5L11.667 31.666 5 33.332l1.667-6.666L27.5 5.832ZM25 8.336l5 5"
      />
    </svg>
  );
};

const SvgLoad = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <rect width="40" height="40" />
        <path
          className={styles.path}
          id="Vector"
          d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={styles.path}
          id="Vector_2"
          d="M11.6641 16.6641L19.9974 24.9974L28.3307 16.6641"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={styles.path}
          id="Vector_3"
          d="M20 25V5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

const SvgBorderBtn = () => {
  <svg xmlns="http://www.w3.org/2000/svg" width="270" height="92" fill="none">
    <path stroke="#231F20" d="M.5 45.813V.5h269v91H40.228L.5 45.813Z" />
  </svg>;
};

export { SvgPencil, SvgLoad, SvgBorderBtn };
