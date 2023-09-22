"use client";
import { useTranslations } from "next-intl";
import Title from '../commonComponents/Title/Title';
import ContactForm from "./ContactForm/ContactForm";
import styles from './ContactUs.module.scss';

const ContactUs = () => {
    const t = useTranslations("Contact us");

    return (
        <section className={styles.main}>
            <Title title={t("title")} description={t("desc")} />
        
            <ContactForm />
        </section>
    )
};

export default ContactUs;