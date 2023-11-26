import styles from "./conditions.module.scss";
import { useTranslations } from "next-intl";

const Conditions = () => {
  const t = useTranslations("termsOfUse");

  return (
    <section className={styles.conditionsSection}>
      <div className={styles.conditions}>
        <div className={styles.headerArea}>
          <h1 className={styles.header}>{t("header")}</h1>
        </div>
        <div className={styles.dateArea}>
          <p className={styles.date}>{t("startDate")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{t("header-text1")}</p>
          <p className={styles.text}>{t("header-text2")}</p>
          <p className={styles.text}>{t("header-text3")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("service")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>
            <b>Eng for UARMY</b>
            {t("service-text1")}
          </p>
          <p className={styles.text}>{t("service-text2")}</p>
          <p className={styles.text}>{t("service-text3")}</p>
          <p className={styles.text}>{t("service-text4")}</p>
          <p className={styles.text}>{t("service-text5")}</p>
          <p className={styles.text}>{t("service-text6")}</p>
          <p className={styles.text}>{t("service-text7")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("donations")}</p>
        </div>
        <div clasName={styles.textArea}>
          <p className={styles.donationFirstParagraph}>
            {t("donations-text1")}
          </p>
          <p className={styles.donationSecondParagraph}>
            {t("donations-text2")}
          </p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("intellectualProperty")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{t("intellectualProperty-text1")}</p>
          <p className={styles.text}>{t("intellectualProperty-text2")}</p>
          <p className={styles.text}>{t("intellectualProperty-text3")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("links")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{t("links-text1")}</p>
          <p className={styles.text}>{t("links-text2")}</p>
          <p className={styles.text}>{t("links-text3")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("indemnification")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{t("indemnification-text1")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("limitationOfLiability")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{t("limitationOfLiability-text1")}</p>
          <ul>
            <li className={styles.listText}>
              {t("limitationOfLiability-text2")}
            </li>
            <li className={styles.listText}>
              {t("limitationOfLiability-text3")}
            </li>
            <li className={styles.listText}>
              {t("limitationOfLiability-text4")}
            </li>
          </ul>
          <p className={styles.text}>{t("limitationOfLiability-text6")}</p>
          <p className={styles.text}>{t("limitationOfLiability-text7")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("governingLaw")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{t("governingLaw-text1")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("changes")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.changesFirstParagraph}>{t("changes-text1")}</p>
          <p className={styles.changesSecondParagraph}>{t("changes-text2")}</p>
        </div>
        <div className={styles.titleArea}>
          <p className={styles.title}>{t("contactUs")}</p>
        </div>
        <div className={styles.textArea}>
          <p className={styles.contactUsFirstParagraph}>
            {t("contactUs-text1")}
          </p>
          <p className={styles.contactUsSecondParagraph}>
            {t("contactUs-text2")}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Conditions;
