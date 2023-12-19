import SvgComponent from "./SvgComponent/SvgComponent";

import styles from "./ModalPublish.module.scss";

const ModalPublish = ({ onClose }) => {
  return (
    <div className={styles.modalBox}>
      <button className={styles.btnClose} onClick={onClose}>
        <SvgComponent />
      </button>
      <p className={styles.text}>Зміни опубліковано</p>
      <button className={styles.btnPublish} onClick={onClose}>
        ok
      </button>
    </div>
  );
};

export default ModalPublish;
