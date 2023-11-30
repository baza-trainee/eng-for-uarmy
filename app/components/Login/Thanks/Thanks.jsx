import Link from 'next/link';
import styles from './Thanks.module.scss';
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const Thanks = () => {
    return (
        <section className={styles.thanks}>
            <h2 className={styles.thanks__title}>Дякуємо!</h2>

            <p className={styles.thanks__text}>На вашу пошту було відправлено лист з інструкцією для відновлення паролю.</p>

            <Link href='/login'
                className={`${btnStyles.mainLink} ${styles.thanks__btn}`}>
                Повернутися до входу
            </Link>
        </section>
    )
}

export default Thanks