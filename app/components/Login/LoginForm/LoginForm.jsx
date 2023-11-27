import styles from "./LoginForm.module.scss";
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const LoginForm = () => {
    return (
        <form className={styles.form} autoComplete="off">
            <h2 className={styles.form__title}>ВХІД</h2>

            <label className={styles.form__label}>
                Логін
                <input type="email"
                    className={styles.form__input}
                    placeholder="Введіть логін"/>
            </label>

            <label className={styles.form__label}>
                Пароль
                <input type="password"
                    className={styles.form__input}
                    placeholder="Введіть пароль"/>
            </label>

            <a href="" className={styles.form__link}>Забули пароль?</a>

            <div>
                <button type="submit" className={btnStyles.mainLink}>Увійти</button>
            </div>
            
        </form>
    )
}

export default LoginForm