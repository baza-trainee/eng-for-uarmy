"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import lettterImg from "../../../../../public/thanks/letter-desktop.svg";

import recieveIconImg from "../../../../../public/thanks/recieve_ic_desktop.svg";

import styles from "./thanks.module.scss";
import {
  ArrowLeftSvg,
  ArrowLeftSvgMobile,
  BorderBackSvg,
  BorderBackSvgMobile,
} from "./SvgComponents/SvgComponents";

const Thanks = () => {
  const locale = useLocale();
  const t = useTranslations("Contact us");

  return (
    <div className={styles.thanksWrapper}>
      <div className={styles.letterWrapper}>
        <Image
          className={styles.lettterImg}
          src={lettterImg}
          alt="letter"
          width={212}
          height={127}
        />
        <Image
          className={styles.recieveIconImg}
          src={recieveIconImg}
          alt="recieve icon"
          width={42}
          height={42}
        />
      </div>
      <h2 className={styles.title}>{t("thanks")}</h2>
      <p className={styles.text}>{t("getBack")}</p>

      <div className={styles.btnBackWrapper} tabIndex="1">
        <BorderBackSvgMobile />
        <BorderBackSvg />
        <Link
          className={styles.btnBack}
          href=""
          //   href={`/${locale}/contact`}
          onClick={() => router.back()}
        >
          <ArrowLeftSvgMobile />
          <ArrowLeftSvg />
          {t("back")}
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
