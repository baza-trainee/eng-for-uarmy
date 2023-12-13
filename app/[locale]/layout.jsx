import "./globals.scss";
import { NextIntlClientProvider } from "next-intl";
import fonts from '../assets/fonts/fontsSrc';
import Header from "../components/commonComponents/Header/Header";
import Footer from "../components/commonComponents/Footer/Footer";
import HeaderTrigger from "../components/commonComponents/HeaderTrigger/HeaderTrigger";

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

export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "en" }];
}

const RootLayout = async ({ children, params: { locale }}) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return console.log(error);
  }
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${fonts.arial.className} ${fonts.furore.className}`}>
          <Header />

          <main>
            <HeaderTrigger/>
            {children}
          </main>

          <Footer />

          <div id="modal-root"></div>  
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
export default RootLayout