"use client";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth/auth-operations";
import styles from "./ExitModal.module.scss";

const ExitModal = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.modal}>
      <button type='button'
        onClick={onClose}
        aria-label="Close exit modal"
        className={styles.btnCross}>
        <svg width="24" height="24"
          viewBox="0 0 40 40"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2932 20.0003L10 29.2935L10.7071 30.0006L20.0003 20.7074L29.2935 30.0006L30.0007 29.2935L20.7074 20.0003L30.0006 10.7071L29.2934 10L20.0003 19.2932L10.7072 10L10.0001 10.7071L19.2932 20.0003Z"
            fill="#231F20"/>
        </svg>
      </button>
      <div className={styles.textArea}>
        <p className={styles.text}>ВИ ДІЙСНО ХОЧЕТЕ ВИЙТИ З СИСТЕМИ?</p>
      </div>
      <div>
        <button className={styles.btn}
          onClick={() => dispatch(logout())}>
          ПІДТВЕРДИТИ
        </button>
        <button type='button'
          onClick={onClose}
          aria-label="Close exit modal"
          className={styles.btn}>
          СКАСУВАТИ
        </button>
      </div>
    </div>
  );
};
export default ExitModal;
