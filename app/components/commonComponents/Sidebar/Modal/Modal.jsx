"use client";
import { useRouter } from "next/navigation";
import styles from "./Modal.module.scss";

const Modal = () => {
  const router = useRouter();

  return (
    <div className={styles.modal}>
      <button
        className={styles.btnCross}
        onClick={() => router.push("/admin")}
        aria-label="Close modal"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2932 20.0003L10 29.2935L10.7071 30.0006L20.0003 20.7074L29.2935 30.0006L30.0007 29.2935L20.7074 20.0003L30.0006 10.7071L29.2934 10L20.0003 19.2932L10.7072 10L10.0001 10.7071L19.2932 20.0003Z"
            fill="#231F20"
          />
        </svg>
      </button>
      <div className={styles.textArea}>
        <p className={styles.text}>ВИ ДІЙСНО ХОЧЕТЕ ВИЙТИ З СИСТЕМИ?</p>
      </div>
      <div>
        <button className={styles.btn} onClick={() => router.push("/")}>
          ПІДТВЕРДИТИ
        </button>
        <button className={styles.btn} onClick={() => router.push("admin")}>
          СКАСУВАТИ
        </button>
      </div>
    </div>
  );
};
export default Modal;
