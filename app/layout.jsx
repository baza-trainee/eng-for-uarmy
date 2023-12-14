import "./globals.scss";
import Providers from "@/redux/Provider";
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

const RootLayout = async ({ children }) => {
  return (
    <html lang='uk' suppressHydrationWarning={true}>
      <body className={`${fonts.arial.className} ${fonts.furore.className}`}>
        <Providers>
          {children}
        </Providers>

        <div id="modal-root"></div>
      </body>
    </html>
  )
};

export default RootLayout