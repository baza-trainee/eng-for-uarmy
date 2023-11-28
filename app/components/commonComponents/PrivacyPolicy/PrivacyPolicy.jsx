"use client";

import { useTranslations } from "next-intl";

import styles from "./privacy-policy.module.scss";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.textHead}>{t("date")}</p>

        <div className={styles.textWrapper}>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("text-1")}
          </p>
          <p className={styles.text}>{t("text-2")}</p>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("data")}</h3>
          <div className={styles.textBox}>
            <p className={styles.text}>{t("data-text-1")}</p>
            <p className={`${styles.text} ${styles.textMarginBottom}`}>
              {t("data-text-2")} <b>{t("data-text-2-bold")}</b>
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={`${styles.text} ${styles.textMarginBottom}`}>
              <b>{t("data-name-bold")}</b>
            </p>
            <p className={styles.text}>{t("data-name-text-1")}</p>
            <p className={`${styles.text} ${styles.textMarginBottom}`}>
              {t("data-name-text-2")}
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={`${styles.text} ${styles.textMarginBottom}`}>
              <b>{t("data-contact-bold")}</b>
            </p>
            <p className={styles.text}>{t("data-contact-text")}</p>

            <ul className={styles.list}>
              <li>
                <p className={styles.text}>{t("data-contact-list-1")}</p>
              </li>
              <li>
                <p className={styles.text}>{t("data-contact-list-2")}</p>
              </li>
            </ul>
            <p className={styles.text}>{t("data-contact-list-3")}</p>
          </div>

          <div className={styles.textBox}>
            <p className={`${styles.text} ${styles.textMarginBottom}`}>
              <b>{t("data-service")}</b>
            </p>
            <p className={`${styles.text} ${styles.textMarginBottom}`}>
              {t("data-service-text-1")}
            </p>
            <p className={styles.text}>{t("data-service-text-2")}</p>
          </div>

          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("data-cookie-bold")}</b>
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("data-cookie-text-1")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("data-cookie-text-2")}
          </p>
          <p className={styles.text}>{t("data-cookie-text-3")}</p>
          <ul className={styles.list}>
            <li>
              <p className={styles.text}>{t("data-cookie-list-1-text-1")}</p>
              <p className={styles.text}>{t("data-cookie-list-1-text-2")}</p>
            </li>
            <li>
              <p className={styles.text}>{t("data-cookie-list-2-text-1")}</p>
              <p className={styles.text}>{t("data-cookie-list-2-text-2")}</p>
            </li>
          </ul>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("save")}</h3>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("save-text-1")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("save-text-2")}
          </p>
          <p className={styles.text}>{t("save-text-3")}</p>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("disclosure")}</h3>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b> {t("disclosure-law-bold")}</b> {t("disclosure-law-text")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("disclosure-contractors-bold")}</b>
            {t("disclosure-contractors-text")}
          </p>
          <p className={styles.text}>
            <b> {t("disclosure-cases-bold")}</b>
            {t("disclosure-cases-text")}
          </p>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("security")}</h3>
          <p className={styles.text}>{t("security-text")}</p>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("rights")}</h3>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("rigths-access-bold")}</b>
            {t("rigths-access-text")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("rights-limit-bold")}</b>
            {t("rights-limit-text")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("rights-correction-bold")}</b>
            {t("rights-correction-text")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("rights-complaint-bold")}</b>
            {t("rights-complaint-text")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            <b>{t("rights-prohibition-bold")}</b>
            {t("rights-prohibition-text")}
          </p>
          <p className={styles.text}>
            <b>{t("rights-withdraw-bold")}</b>
            {t("rights-withdraw-text")}
          </p>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("protection-minors")}</h3>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("protection-minors-text-1")}
          </p>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("protection-minors-text-2")}
          </p>
          <p className={styles.text}>{t("protection-minors-text-3")}</p>
        </div>

        <div className={styles.textWrapper}>
          <h3 className={styles.subTitle}>{t("changes")}</h3>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("changes-text-1")}
          </p>
          <p className={styles.text}>{t("changes-text-2")}</p>
        </div>

        <div
          className={`${styles.textWrapper} ${styles.textWrapperMarginBottom}`}
        >
          <h3 className={styles.subTitle}>{t("contact-us")}</h3>
          <p className={`${styles.text} ${styles.textMarginBottom}`}>
            {t("contact-us-text-1")}
          </p>
          <p className={styles.text}>{t("contact-us-text-2")}</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
