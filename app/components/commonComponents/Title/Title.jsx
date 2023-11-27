import styles from "./Title.module.scss";

const Title = ({ title, description }) => {

    return (
        <div className={styles.title}>
            <h1 className={styles.title__name}>{title}</h1>
            <p className={styles.title__description}>{description}</p>
        </div>
    );
};

export default Title;