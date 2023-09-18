"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  ArrowLeftSvg,
  BorderBackSvg,
  BorderGoHomeFocusSvg,
} from "./SvgComponents/SvgComponents";

import errorImg from "../../../../public/404/404.png";

import styles from "./not-found-page.module.scss";

const NotFoundPage = ({ error }) => {
  const locale = useLocale();
  const t = useTranslations("404");
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.NotFoundWrapper}>
          <div className={styles.btnBackWrapper}>
            <BorderBackSvg />
            <Link
              className={styles.btnBack}
              href=""
              onClick={() => router.back()}
            >
              <ArrowLeftSvg />
              Back
            </Link>
          </div>

          <div className={styles.errorWrapper}>
            <div className={styles.imgWrapper}>
              <Image src={errorImg} alt="Error 404" width={595} height={245} />
              <h4 className={styles.title}>Page not found</h4>
            </div>
          </div>
        </div>

        <div className={styles.descrWrapper}>
          <div className={styles.fourOrFour}>
            <span>four or four</span>
          </div>
          <p className={styles.descr}>
            We couldn&apos;t find the page you&apos;re looking for but
            that&apos;s 4.5.0 (all good).
          </p>
        </div>

        <div className={styles.btnGoHomeWrapper}>
          <BorderGoHomeFocusSvg />
          <Link href={`/${locale}`} className={styles.goHome}>
            <p>Go on homepage</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
