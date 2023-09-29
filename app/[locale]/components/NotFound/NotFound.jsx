"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  ArrowLeftSvg,
  ArrowLeftSvgMobile,
  BorderBackSvg,
  BorderBackSvgMobile,
  BorderErrorSvg,
  BorderErrorSvgMobile,
  BorderGoHomeFocusSvg,
  BorderGoHomeFocusSvgMobile,
} from "./SvgComponents/SvgComponents";

import errorImg from "../../../../public/404/404.png";

import styles from "./not-found.module.scss";

const NotFound = () => {
  const locale = useLocale();
  const t = useTranslations("404");
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.NotFoundWrapper}>
          <div className={styles.btnBackWrapper} tabIndex="1">
            <BorderBackSvgMobile />
            <BorderBackSvg />
            <Link
              className={styles.btnBack}
              href=""
              onClick={() => router.back()}
            >
              <ArrowLeftSvgMobile />
              <ArrowLeftSvg />
              {t("btnBack")}
            </Link>
          </div>

          <div className={styles.errorWrapper}>
            <BorderErrorSvg />
            <BorderErrorSvgMobile />
            <div className={styles.imgWrapper}>
              <Image
                className={styles.img}
                src={errorImg}
                alt="Error 404"
                width={595}
                height={245}
              />
              <h4 className={styles.title}> {t("page")}</h4>
            </div>
          </div>
        </div>

        <div className={styles.descrWrapper}>
          <div className={styles.fourOhFour}>
            <span> {t("four")}</span>
          </div>
          <p className={styles.descr}>{t("text")}</p>
        </div>

        <div tabIndex="2" className={styles.btnGoHomeWrapper}>
          <BorderGoHomeFocusSvgMobile />
          <BorderGoHomeFocusSvg />
          <Link href={`/${locale}`} className={styles.goHome}>
            {t("btnHome")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
