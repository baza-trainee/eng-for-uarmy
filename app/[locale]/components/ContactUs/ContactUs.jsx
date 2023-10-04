"use client";
import { useTranslations } from "next-intl";
import Title from "../commonComponents/Title/Title";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./ContactUs.module.scss";
// import Thanks from "./Thanks/Thanks";

const ContactUs = () => {
  const t = useTranslations("Contact us");

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Title title={t("title")} description={t("desc")} />

        <ContactForm />
        {/* <Thanks /> */}
      </div>
    </section>
  );
};

export default ContactUs;
