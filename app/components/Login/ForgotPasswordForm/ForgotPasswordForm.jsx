'use client';
import { useState } from 'react';
import { useFormik } from "formik";
import { forgotPasswordSchema } from '@/app/libs/adminValidationSchema';
import Link from 'next/link';
import Thanks from '../Thanks/Thanks';
import styles from './ForgotPasswordForm.module.scss';
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const ForgotPasswordForm = () => {
  const [isSubmit, setIsSubmit] = useState(false); 

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '' }, 
    validationSchema: forgotPasswordSchema,
    onSubmit: async ({ email }, { resetForm }) => {
      console.log(email, "Sumbmit");

      resetForm();
      setIsSubmit(true);
      console.log(isSubmit, "isSubmit");
    },
  });

  const disabled = errors.email && touched.email;

  return (
    <>
      {!isSubmit
        ? <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <h2 className={styles.form__title}>Забули пароль</h2>

          <p className={styles.form__text}>Вкажіть вашу електронну адресу, щоб підтвердити вашу особу</p>

          <label className={styles.form__label}>
            Електронна пошта
            <input type="email"
              name="email"
              value={values.email}
              placeholder="Введіть електронну пошту"
              onChange={handleChange}
              onBlur={handleBlur}
              className={styles.form__input} />
            {errors.email && touched.email && <p className={styles.form__error}>{errors.email}</p>}
          </label>

          <div className={styles.form__btnWrapper}>
            <button type="submit"
              disabled={disabled}
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
      : <Thanks /> }
    </>
  )
}

export default ForgotPasswordForm