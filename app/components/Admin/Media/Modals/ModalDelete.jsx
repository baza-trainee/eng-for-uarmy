import { deleteMediaById, getMedia } from "@/app/api/adminAPI/mediasApi";
import styles from "./Modals.module.scss"

const ModalDelete = ({ onClose, mediaId, currentPage, setMedias }) => {
    const onDelete = async (id) => {
        await deleteMediaById(id);
        await getMedia("uk", currentPage, 5).then(setMedias);
        onClose();
    }    

    return <div className={styles.modal}>
        <button onClose={() => onClose()} className={styles.exitBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M22.5 7.5L7.5 22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 7.5L22.5 22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        <p className={styles.confirmation}>Ви дійсно хочете видалити медіа?</p>
        <div className={styles.btnBox}>
            <button type="button" className={styles.confirmBtn} onClick={() => onDelete(mediaId)}>Підтвердити</button>
            <button type="button" className={styles.cancelBtn} onClick={()=> onClose()}>Скасувати</button>
        </div>
    </div>
}

export default ModalDelete;