import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import fonts from './fonts/fontsSrc';
import Header from "./components/commonComponents/Header/Header";
import Footer from "./components/commonComponents/Footer/Footer";

export const metadata = {
  title: "Eng for UArmy",
  description: "Eng for UArmy",
};

export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "en" }];
}

const RootLayout = async({ children, params: { locale } }) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return error;
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${fonts.arial.className} ${fonts.furore.className}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
export default RootLayout