import styles from "./ErrorModal.module.scss";

const ErrorModal = ({ onClose }) => {
    return (
        <div className={styles.modal}>
            <strong className={styles.modal__message}>Невірно введені дані</strong>
            <button className={styles.modal__btnCross} onClick={onClose}>
                {/* <SvgComponent /> */}
            </button>
            <p className={styles.modal__text}>Для входу в обліковий запис повторіть спробу</p>
            <button className={styles.modal__btn} onClick={onClose}>
                OK
            </button>
        </div>
    );
};

export default ErrorModal;