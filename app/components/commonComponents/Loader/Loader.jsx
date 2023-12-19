import styles from './Loader.module.scss'

const Loader = () => (
    <div className={styles.loader}>
        <span className={styles.loader__spinner}></span>
    </div>
);

export default Loader;