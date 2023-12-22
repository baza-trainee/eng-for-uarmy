"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "@/app/libs/adminValidationSchema";
import Link from "next/link";
import Thanks from "../Thanks/Thanks";
import SvgBorderBtn from "@/app/components/commonComponents/SvgBorderBtn/SvgBorderBtn";
import styles from "./ForgotPasswordForm.module.scss";

const ForgotPasswordForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: forgotPasswordSchema,
      onSubmit: async ({ email }, { resetForm }) => {
        console.log(email, "Sumbmit");

        resetForm();
        setIsSubmit(true);
        console.log(isSubmit, "isSubmit");
      },
    });

  const disabled = !values.email || (errors.email && touched.email);

  return (
    <>
      {!isSubmit ? (
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className={styles.form__title}>Забули пароль</h2>

          <p className={styles.form__text}>
            Вкажіть вашу електронну адресу, щоб підтвердити вашу особу
          </p>

          <label
            className={`${styles.form__label} ${
              errors.email && touched.email && styles.form__labelError
            }`}
          >
            Електронна пошта
            <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Введіть електронну пошту"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.form__input} ${
                errors.email && touched.email && styles.form__inputError
              }`}
            />
            {errors.email && touched.email && (
              <p className={styles.form__error}>{errors.email}</p>
            )}
          </label>

          <div className={styles.form__btnWrapper}>
            <button
              type="submit"
              disabled={disabled}
              className={`${styles.form__btn} ${styles.form__btnBack}`}
            >
              Підтвердити
            </button>

            <div className={styles.form__borderWrapper} tabIndex={1}>
              <Link href="/login" className={styles.form__btnBack}>
                Cкасувати
              </Link>
              <SvgBorderBtn />
            </div>
          </div>
        </form>
      ) : (
        <Thanks />
      )}
    </>
  );
};

export default ForgotPasswordForm;
