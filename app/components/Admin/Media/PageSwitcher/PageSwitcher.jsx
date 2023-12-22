import styles from "./PageSwitcher.module.scss";

const PageSwitcher = ({ currentPage, setCurrentPage, allMedia }) => {
    const allPages = Math.ceil(allMedia / 5);
    const onChangePage = (type) => {
        type === 'next' ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage - 1);
    }

    return <div className={styles.switcherBox}>
        <button className={styles.arrowBtn} disabled={currentPage === 1} type="button" onClick={()=> onChangePage()}>&lt;</button>
        <div className={styles.pageBox}>
            <span className={styles.pageNumber}>{currentPage}</span>
            з
            <span className={styles.pageNumber}>{allPages}</span>
        </div>
        <button className={styles.arrowBtn} disabled={currentPage === allPages} type="button" onClick={()=> onChangePage("next")}>&gt;</button>   
    </div>
}

export default PageSwitcher;