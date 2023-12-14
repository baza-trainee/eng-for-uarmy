import Link from "next/link";
import Image from "next/image";
import { SvgBorder, SvgBorderMobile } from "./SvgBorder";

import firstProject from "../../../../assets/images/our-projects/first-project.webp";
import secondProject from "../../../../assets/images/our-projects/second-project.webp";
import thirdProject from "../../../../assets/images/our-projects/third-project.webp";

import styles from "./OurProjects.module.scss";

export const Project1 = ({ t, isLargeScreen }) => {
  return (
    <div className={styles.our_projects_card}>
      {isLargeScreen ? <SvgBorder /> : <SvgBorderMobile />}
      <div className={styles.imageContainer}>
        <Image
          className={styles.cardImg}
          src={firstProject}
          alt="Project channel image"
          priority="true"
          width={359}
          height={255}
        />
      </div>
      <div className={styles.textCont}>
        <h3 className={styles.cardHead}>{t("youtube")}</h3>
        <p className={styles.cardText}>{t("youtube-desc")}</p>
        <Link
          href={`https://www.youtube.com/@engforuarmy`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.currentTarget.blur()}
          className={styles.cardButton}
        >
          {t("learnMore")}
        </Link>
      </div>
    </div>
  );
};

export const Project2 = ({ t, locale, isLargeScreen }) => {
  return (
    <div className={styles.our_projects_card}>
      {isLargeScreen ? <SvgBorder /> : <SvgBorderMobile />}
      <div className={styles.imageContainer}>
        <Image
          className={styles.cardImg}
          src={secondProject}
          alt="Speaking image"
          priority="true"
          width={359}
          height={255}
        />
      </div>
      <div className={styles.textCont}>
        <h3 className={styles.cardHead}>{t("practice")}</h3>
        <p className={styles.cardText}>{t("practice-desc")}</p>
        <Link
          href={`/${locale}`}
          className={styles.cardButton}
          tabIndex={-1}
          style={{
            backgroundColor: "#8B8B8B",
            pointerEvents: "none",
            opacity: 0.5,
          }}
        >
          {t("mobileApp-desc2")}{" "}
        </Link>
      </div>
    </div>
  );
};

export const Project3 = ({ t, locale, isLargeScreen }) => {
  return (
    <div className={styles.our_projects_card}>
      {isLargeScreen ? <SvgBorder /> : <SvgBorderMobile />}
      <div className={styles.imageContainer}>
        <Image
          className={styles.cardImg}
          src={thirdProject}
          alt="Mobile app image"
          priority="true"
          width={359}
          height={205}
        />
      </div>
      <div className={styles.textCont}>
        <h3 className={styles.cardHead}>{t("mobileApp")}</h3>
        <p className={styles.cardText}>{t("mobileApp-desc")}</p>
        <Link
          href={`/${locale}`}
          className={styles.cardButton}
          tabIndex={-1}
          style={{
            backgroundColor: "#8B8B8B",
            pointerEvents: "none",
            opacity: 0.5,
          }}
        >
          {t("mobileApp-desc2")}
        </Link>
      </div>
    </div>
  );
};
