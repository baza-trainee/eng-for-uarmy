"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginSchema } from "@/app/libs/adminValidationSchema";
import { selectIsLoggedIn } from "@/redux/auth/auth-selectors";
import { login } from "@/redux/auth/auth-operations";
import Link from "next/link";
import styles from "./LoginForm.module.scss";
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("isLoggedIn", isLoggedIn);
        isLoggedIn ? router.replace("/admin") : router.replace("/login");
    }, [isLoggedIn, router]);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
        email: '',
        password: '',
            },
    validationSchema: loginSchema,    
    onSubmit: async ({ email, password }, { resetForm }) => {
        console.log(email, password, "Sumbmit");

        dispatch(login({ email, password }));

        resetForm();
    },
  });

    const disabled = !values.email || !values.password;

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
            <h2 className={styles.form__title}>ВХІД</h2>

            <label className={`${styles.form__label} ${errors.email && touched.email && styles.form__labelError}`}>
                Логін
                <input type="email"
                    name="email"
                    value={values.email}
                    placeholder="Введіть логін"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.form__input} ${errors.email && touched.email && styles.form__inputError}`} />
                {errors.email && touched.email && <p className={styles.form__error}>{errors.email}</p>}
            </label>

            <label className={`${styles.form__label} ${errors.password && touched.password && styles.form__labelError}`} >
                Пароль
                <input type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={values.password}
                    placeholder="Введіть пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.form__input} ${errors.password && touched.password && styles.form__inputError}`} />
                {errors.password && touched.password && <p className={styles.form__error}>{errors.password}</p>} 

                <button type="button"
                    onClick={togglePassword}
                    className={styles.form__bntEye}>
                    {showPassword
                    ? <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M3.02515 15.8915C2.85492 15.6219 2.7698 15.4871 2.72215 15.2793C2.68637 15.1231 2.68637 14.8769 2.72215 14.7207C2.7698 14.5129 2.85492 14.3781 3.02515 14.1085C4.43191 11.8811 8.61925 6.25 15.0005 6.25C21.3818 6.25 25.5691 11.8811 26.9759 14.1085C27.1461 14.3781 27.2312 14.5129 27.2789 14.7207C27.3146 14.8769 27.3146 15.1231 27.2789 15.2793C27.2312 15.4871 27.1461 15.6219 26.9759 15.8915C25.5691 18.1189 21.3818 23.75 15.0005 23.75C8.61925 23.75 4.43191 18.1189 3.02515 15.8915Z"
                            stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M15.0005 18.75C17.0716 18.75 18.7505 17.0711 18.7505 15C18.7505 12.9289 17.0716 11.25 15.0005 11.25C12.9294 11.25 11.2505 12.9289 11.2505 15C11.2505 17.0711 12.9294 18.75 15.0005 18.75Z"
                            stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    : <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M13.4287 6.3654C13.9367 6.29029 14.4608 6.25 15.0005 6.25C21.3818 6.25 25.5691 11.8811 26.9759 14.1085C27.1461 14.3781 27.2313 14.5129 27.2789 14.7208C27.3147 14.877 27.3147 15.1233 27.2789 15.2795C27.2312 15.4874 27.1454 15.6231 26.974 15.8945C26.5992 16.4877 26.0277 17.3214 25.2706 18.2256M8.4054 8.3938C5.70281 10.2271 3.86806 12.7742 3.02638 14.1066C2.85536 14.3773 2.76984 14.5127 2.72217 14.7206C2.68637 14.8767 2.68636 15.1231 2.72214 15.2792C2.76979 15.4871 2.85491 15.6219 3.02517 15.8915C4.43193 18.119 8.61927 23.75 15.0005 23.75C17.5735 23.75 19.7899 22.8345 21.611 21.5958M3.75052 3.75L26.2505 26.25M12.3489 12.3483C11.6703 13.027 11.2505 13.9645 11.2505 15C11.2505 17.0711 12.9295 18.75 15.0005 18.75C16.0361 18.75 16.9736 18.3303 17.6522 17.6517"
                            stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                </button>
            </label>

            <Link href='/login/forgot-password' className={styles.form__link}>Забули пароль?</Link>

            <div>
                <button type="submit"
                    disabled={disabled}
                    className={`${btnStyles.mainLink} ${styles.form__btn}`}>
                    Увійти
                </button>
            </div>
            
        </form>
    )
}

export default LoginForm