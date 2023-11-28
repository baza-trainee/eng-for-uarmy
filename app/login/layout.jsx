import "./globals.scss";
import fonts from '../assets/fonts/fontsSrc';

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
      <body className={`${fonts.arial.className} ${fonts.furore.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
export default AdminLayout