"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Image
          src="/logo-footer.svg"
          alt="logo-footer"
          width={200}
          height={200}
          className={styles.footer__logo}
        />

        <div className={styles.menu}>
          <h3 className={styles.footer__title}>{t("menu")}</h3>

          <nav>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  href={`/${locale}`}
                  onClick={(e) => e.currentTarget.blur()}
                >
                  {t("homepage")}
                </Link>
              </li>

              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  href={`/${locale}#ourProjects`}
                  onClick={(e) => e.currentTarget.blur()}
                >
                  {t("study")}
                </Link>
              </li>

              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  href={`/${locale}/team`}
                  onClick={(e) => e.currentTarget.blur()}
                >
                  {t("ourTeam")}
                </Link>
              </li>

              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  href={`/${locale}/contact`}
                  onClick={(e) => e.currentTarget.blur()}
                >
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.footer__follows}>
          <div className={styles.contacts}>
            <h3 className={styles.footer__title}>{t("contacts")}</h3>

            <ul>
              <li className={styles.contacts__item}>
                <a
                  className={styles.contacts__link}
                  onClick={(e) => e.currentTarget.blur()}
                  href="tel:+380738937097"
                >
                  <svg
                    className={styles.contacts__icon}
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                  >
                    <path d="M3.44412 0.846147C3.31524 0.632082 3.09897 0.491585 2.85062 0.461163C2.81744 0.457291 2.7837 0.455078 2.75051 0.455078C2.53811 0.455078 2.33512 0.538602 2.18191 0.691268L0.315133 2.55811C0.102182 2.76886 -0.0117599 3.05981 0.000961826 3.35739C0.0606985 4.69267 0.562929 8.16306 3.92644 11.5295C7.2905 14.8936 10.7619 15.3953 12.0982 15.4551C12.3974 15.465 12.6845 15.3527 12.8969 15.1409L14.7637 13.2741C14.9401 13.0976 15.0242 12.8537 14.9938 12.6053C14.9633 12.3564 14.8229 12.1401 14.6082 12.0112L11.7475 10.296C11.43 10.1062 11.0257 10.1555 10.7641 10.4165L9.89292 11.2855C9.64402 11.5339 9.26845 11.5953 8.9576 11.4382C8.44596 11.1821 7.55213 10.5941 6.2075 9.24887C4.86176 7.90308 4.2738 7.00977 4.0177 6.49701C3.86006 6.18614 3.92091 5.81001 4.1687 5.5622L5.03986 4.69101C5.30094 4.42993 5.35072 4.02503 5.16044 3.70753L3.44412 0.846147Z" />
                  </svg>
                  +380 73 893 70 97
                </a>
              </li>

              <li className={styles.contacts__item}>
                <a
                  className={styles.contacts__link}
                  onClick={(e) => e.currentTarget.blur()}
                  href="mailto:engforuarmy@gmail.com"
                >
                  <svg
                    className={styles.contacts__icon}
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                  >
                    <path d="M0 10.4178L6.09543 5.76762L0.051121 1.25977C0.0190451 1.32722 0 1.40157 0 1.48085V10.4178Z" />
                    <path d="M0.535825 0.955078C0.535825 0.955078 0.531315 0.955571 0.528809 0.955571L7.02218 5.79825C7.30334 6.00801 7.69677 6.00801 7.97844 5.79825L14.4713 0.955571C14.4713 0.955571 14.4668 0.955078 14.4643 0.955078H0.535825Z" />
                    <path d="M15.0007 10.4178V1.48085C15.0007 1.40157 14.9817 1.32722 14.9496 1.25977L8.90527 5.76762L15.0007 10.4178Z" />
                    <path d="M14.4642 10.9532C14.5624 10.9532 14.6536 10.9251 14.7333 10.8793L8.4625 6.0957L8.30212 6.21535C8.06606 6.39163 7.78289 6.47977 7.49972 6.47977C7.21655 6.47977 6.93388 6.39212 6.69782 6.21585L6.53744 6.0962L0.266602 10.8793C0.345789 10.9251 0.437005 10.9532 0.535738 10.9532H14.4642Z" />
                  </svg>
                  engforuarmy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <h3 className={`${styles.footer__title} ${styles.social__title}`}>
              {t("follow")}
            </h3>
            <ul className={styles.social__list}>
              <li className={styles.social__item}>
                <Link
                  className={styles.social__link}
                  href="https://www.facebook.com/ENGforUARMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open facebook page of Eng for uarmy"
                  onClick={(e) => e.currentTarget.blur()}
                >
                  <svg
                    className={`${styles.social__icon} ${styles.social__iconFacebook}`}
                    width="7"
                    height="16"
                    viewBox="0 0 7 16"
                  >
                    <path d="M1.58851 15.4551H4.6403V7.89315H6.7693L6.99341 5.36381H4.6403C4.6403 5.36381 4.6403 4.41857 4.6403 3.92314C4.6403 3.3234 4.75895 3.08872 5.34557 3.08872C5.81356 3.08872 7 3.08872 7 3.08872V0.455078C7 0.455078 5.25989 0.455078 4.88418 0.455078C2.61017 0.455078 1.58851 1.44595 1.58851 3.33643C1.58851 4.98572 1.58851 5.35729 1.58851 5.35729H0V7.91922H1.58851V15.4551Z" />
                  </svg>
                </Link>
              </li>

              <li className={styles.social__item}>
                <Link
                  className={styles.social__link}
                  href="https://www.instagram.com/engforuarmy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open instagram page of Eng for uarmy"
                  onClick={(e) => e.currentTarget.blur()}
                >
                  <svg
                    className={styles.social__icon}
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                  >
                    <path d="M10.7304 15.4551H4.26861C1.91479 15.4551 0 13.5403 0 11.1855V4.72369C0 2.36987 1.91479 0.455078 4.26956 0.455078H10.7314C13.0852 0.455078 15.0009 2.36987 15.0009 4.72464V11.1865C15 13.5403 13.0843 15.4551 10.7304 15.4551ZM4.26956 1.74079C2.62464 1.74079 1.28571 3.07877 1.28571 4.72464V11.1865C1.28571 12.8314 2.62369 14.1703 4.26956 14.1703H10.7314C12.3763 14.1703 13.7152 12.8323 13.7152 11.1865V4.72464C13.7152 3.07972 12.3773 1.74079 10.7314 1.74079H4.26956Z" />
                    <path d="M7.49919 11.7972C5.38104 11.7972 3.6582 10.0744 3.6582 7.95622C3.6582 5.83807 5.38104 4.11523 7.49919 4.11523C9.61734 4.11523 11.3402 5.83807 11.3402 7.95622C11.3402 10.0744 9.61734 11.7972 7.49919 11.7972ZM7.49919 5.4019C6.08994 5.4019 4.94392 6.54792 4.94392 7.95717C4.94392 9.36642 6.08994 10.5124 7.49919 10.5124C8.90844 10.5124 10.0545 9.36642 10.0545 7.95717C10.0545 6.54792 8.90844 5.4019 7.49919 5.4019Z" />
                    <path d="M12.4279 3.89537C12.4279 4.40566 12.0146 4.81808 11.5052 4.81808C10.9949 4.81808 10.5825 4.40471 10.5825 3.89537C10.5825 3.38603 10.9959 2.97266 11.5052 2.97266C12.0146 2.97171 12.4279 3.38507 12.4279 3.89537Z" />
                  </svg>
                </Link>
              </li>

              <li className={styles.social__item}>
                <Link
                  className={styles.social__link}
                  href="https://t.me/ENGforUARMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open telegram channel of Eng for uarmy"
                  onClick={(e) => e.currentTarget.blur()}
                >
                  <svg
                    className={styles.social__icon}
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                  >
                    <path d="M0.375043 8.29884C1.88265 7.48586 3.57376 6.79879 5.14512 6.11172C7.85881 4.99197 10.5725 3.8832 13.3293 2.85809C13.8677 2.67893 14.8257 2.50907 14.923 3.29078C14.8696 4.38941 14.6646 5.48804 14.5138 6.57568C14.1477 8.98422 13.717 11.3826 13.2965 13.7802C13.1561 14.583 12.1335 14.9954 11.4771 14.4774C9.90485 13.4421 8.33263 12.4069 6.78195 11.3505C6.27625 10.8434 6.74921 10.115 7.20236 9.75495C8.49459 8.50843 9.86178 7.44107 11.0903 6.13116C11.4245 5.34944 10.4441 6.0044 10.1211 6.20469C8.35503 7.39881 6.63205 8.66646 4.75831 9.72283C3.81067 10.24 2.69073 9.79636 1.74309 9.51156C0.891937 9.17352 -0.357225 8.82534 0.375043 8.29715V8.29884Z" />
                  </svg>
                </Link>
              </li>

              <li className={styles.social__item}>
                <Link
                  className={styles.social__link}
                  href="https://www.youtube.com/@engforuarmy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open youtube channel of Eng for uarmy"
                  onClick={(e) => e.currentTarget.blur()}
                >
                  <svg
                    className={styles.social__icon}
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                  >
                    <path d="M14.3224 4.94445C14.1576 4.34813 13.6825 3.88118 13.0734 3.72169C12.2553 3.41245 4.33072 3.26093 2.03191 3.73055C1.42282 3.89181 0.945865 4.35699 0.782958 4.95331C0.413701 6.53936 0.385645 9.96842 0.792008 11.5899C0.956726 12.1862 1.43187 12.6532 2.04096 12.8127C3.66099 13.1777 11.3629 13.2291 13.0825 12.8127C13.6916 12.6514 14.1685 12.1862 14.3314 11.5899C14.7251 9.86209 14.7532 6.64569 14.3224 4.94445Z" />
                    <path
                      d="M10.2505 8.33203L6.50049 6.45703V10.207L10.2505 8.33203Z"
                      fill="#231F20"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.policy}>
          <p className={styles.policy__baza}>
            {t("policy-first")} &copy; {t("policy-second")}
          </p>
          <div className={styles.policy__list}>
            <span className={styles.policy__divider}></span>
            <Link
              href="https://drive.google.com/file/d/1j7N7I1E70-1ml-oxZj_cUnuVw9YuXtsW/view"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open conditions of use of Eng for uarmy"
              className={styles.policy__link}
            >
              {t("statute")}
            </Link>
            <span className={styles.policy__divider}></span>
            <Link
              href={t(`/${locale}/conditions`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open terms of use of Eng for uarmy"
              className={styles.policy__link}
            >
              {t("policy-right")}
            </Link>
            <span className={styles.policy__divider}></span>
            <Link
              className={styles.policy__link}
              href={`/${locale}/privacy-policy`}
              onClick={(e) => e.currentTarget.blur()}
            >
              {t("privacy-policy")}
            </Link>
          </div>
          <p className={styles.policy__developed}>{t("developed")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
