import "./globals.scss";
import Image from "next/image";
import fonts from '../assets/fonts/fontsSrc';
import styles from "./Login.module.scss";

const AdminLayout = async ({ children }) => {
  return (
    <div className={`${fonts.arial.className} ${fonts.furore.className} ${styles.login}`}>
      <Image src='/logo.svg' alt='logo' width={120} height={53} className={styles.login__img} priority /> 

      <main>
        {children}
      </main>
    </div>
  )
}
export default AdminLayout