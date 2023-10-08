import styles from './OrderForStudy.module.scss'
const OrderForStudy = () => {
    return <ul className={styles.studyList}>
        <li className={styles.studyItem}><div className={styles.studyItemNum}>1</div><p className={styles.studyDesc}>Watch on YouTube</p></li>
        <li className={styles.studyItem}><div className={styles.studyItemNum}>2</div><p className={styles.studyDesc}>Follow us on Telegram and Instagram</p></li>
        <li className={styles.studyItem}><div className={styles.studyItemNum}>3</div><p className={styles.studyDesc}>Speaking practice</p></li>
    </ul>
}
export default OrderForStudy