import styles from "./PublishModal.module.scss"

const PublishModal = ({ onClose }) => {   

    return <div className={styles.modal}>
        <button onClick={() => onClose()} className={styles.exitBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M22.5 7.5L7.5 22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 7.5L22.5 22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        <p className={styles.confirmation}>зміни опубліковано</p>
        <button type="button" className={styles.btn} onClick={() => onClose()}>ok</button>
    </div>
}

export default PublishModal;