"use client";
import Image from "next/image";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
    return (
        <div className={styles.login}>
            <Image src='/logo.svg' alt='logo' width={120} height={53} className={styles.login__img} priority /> 

            <LoginForm />
        </div>
    )
}

export default Login