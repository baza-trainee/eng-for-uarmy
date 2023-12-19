import styles from "./AdminWrapper.module.scss";

const AdminWrapper = ({children}) => {
    return <section className={styles.wrapper}>
        {children}
    </section>
}

export default AdminWrapper;
