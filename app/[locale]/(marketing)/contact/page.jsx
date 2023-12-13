"use client";
import { useTranslations } from "next-intl";
import Title from "../../../components/commonComponents/Title/Title";
import ContactForm from "../../../components/ContactUs/ContactForm/ContactForm";
import DonateSection from '../../../components/ContactUs/DonateSection/DonateSection';
import styles from "./ContactUs.module.scss";

const ContactsPage = () => {
  const t = useTranslations("Contact us");

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <Title title={t("title")} description={t("desc")} />

          <ContactForm/>
        </div>
      </section>

      <DonateSection />
    </>
  );
};
export default ContactsPage;
