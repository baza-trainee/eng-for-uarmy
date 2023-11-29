import "./globals.scss";
import Image from "next/image";
import fonts from '../assets/fonts/fontsSrc';
import styles from "./Login.module.scss";

export const metadata = {
  title: "Eng for UArmy",
  description: "Eng for UArmy",
  icons: {
    icon: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 2,
  }
};

const AdminLayout = async ({ children }) => {
  return (
    <html lang='uk' suppressHydrationWarning={true}>
      <body className={`${fonts.arial.className} ${fonts.furore.className} ${styles.login}`}>
        <Image src='/logo.svg' alt='logo' width={120} height={53} className={styles.login__img} priority /> 

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
export default AdminLayout