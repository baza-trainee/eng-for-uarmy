import styles from "./LoginForm.module.scss";

const LoginForm = () => {
    return (
        <form className={styles.form}>
            <h2 className={styles.form__title}>ВХІД</h2>

            <label className={styles.form__label}>
                Логін
                <input type="email"
                    className={styles.form__input}/>
            </label>

            <label className={styles.form__label}>
                Пароль
                <input type="password"
                    className={styles.form__input}/>
            </label>

            <a href="">Забули пароль?</a>

            <button type="submit">Увійти</button>
            
        </form>
    )
}

export default LoginForm