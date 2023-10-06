"use client";
import { useTranslations } from "next-intl";
import Title from "../commonComponents/Title/Title";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./ContactUs.module.scss";

const ContactUs = ({searchParams}) => {
  const t = useTranslations("Contact us");
  const action = searchParams?.action;
  console.log("searchParams", searchParams);
  console.log("action", action);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Title title={t("title")} description={t("desc")} />

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
