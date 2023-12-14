import Image from "next/image";
import styles from "./Login.module.scss";

const LoginLayout = async ({ children }) => {
  return (
    <div className={styles.login}>
      <Image src='/logo.svg' alt='logo' width={120} height={53} className={styles.login__img} priority /> 

      <main>
        {children}
      </main>
    </div>
  )
}
export default LoginLayout