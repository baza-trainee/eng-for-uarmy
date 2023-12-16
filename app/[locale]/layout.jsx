import { NextIntlClientProvider } from "next-intl";
import { ActionProvider } from "../context/action";
import Header from "../components/commonComponents/Header/Header";
import Footer from "../components/commonComponents/Footer/Footer";
import HeaderTrigger from "../components/commonComponents/HeaderTrigger/HeaderTrigger";
import styles from "./locale.module.scss";

export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "en" }];
}

const Layout = async ({ children, params: { locale } }) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return console.log(error);
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ActionProvider>
        <Header />

        <main className={styles.main}>
          <HeaderTrigger />
          {children}
        </main>

        <Footer />
      </ActionProvider>
    </NextIntlClientProvider>
  )
};

export default Layout