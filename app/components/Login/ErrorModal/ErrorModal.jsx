import styles from "./ErrorModal.module.scss";
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const ErrorModal = ({ onClose }) => {
    return (
        <div className={styles.modal}>
            <button className={styles.modal__btnCross} onClick={onClose}>
                <svg className={styles.modal__icon} width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M22.5 7.5L7.5 22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 7.5L22.5 22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <strong className={styles.modal__message}>Невірно введені дані</strong>
            <p className={styles.modal__text}>Для входу в обліковий запис повторіть спробу</p>
            <button onClick={onClose}
                className={`${btnStyles.mainLink} ${styles.modal__btn}`}>
                OK
            </button>
        </div>
    );
};

export default ErrorModal;