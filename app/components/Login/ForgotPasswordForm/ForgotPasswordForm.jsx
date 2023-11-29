import Link from 'next/link';
import styles from './ForgotPasswordForm.module.scss';
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const ForgotPasswordForm = () => {
  return (
    <form className={styles.form} autoComplete="off">
      <h2 className={styles.form__title}>Забули пароль</h2>

      <p className={styles.form__text}>Вкажіть вашу електронну адресу, щоб підтвердити вашу особу</p>

      <label className={styles.form__label}>
        Електронна пошта
        <input type="email"
          className={styles.form__input}
          placeholder="Введіть електронну пошту"/>
      </label>

      <div className={styles.form__btnWrapper}>
        <button type="submit"
          className={`${btnStyles.mainLink} ${styles.form__btn}`}>
          Підтвердити
        </button>

        <Link href='/login'
          className={styles.form__btnOutline}>
          Cкасувати
          <svg tabIndex='0' width="270" height="80" viewBox="0 0 270 80" fill="none" className={styles.form__btnIcon}>
            <path d="M0.5 39.7929V0.5H269.5V79.5H40.2071L0.5 39.7929Z"/>
          </svg>
        </Link>
      </div>
    </form>
  )
}

export default ForgotPasswordForm