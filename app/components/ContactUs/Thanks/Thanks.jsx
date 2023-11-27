"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeftSvg,
  ArrowLeftSvgMobile,
  BorderBackSvg,
  BorderBackSvgMobile,
} from "./SvgComponents/SvgComponents";

import lettterImg from "../../../../public/thanks/letter-desktop.svg";
import recieveIconImg from "../../../../public/thanks/recieve_ic_desktop.svg";

import styles from "./thanks.module.scss";

const Thanks = ({ setIsSubmit }) => {
  const t = useTranslations("Contact us");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsSubmit(false);
    }
  };

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

      <div
        className={styles.btnBackWrapper}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <BorderBackSvgMobile />
        <BorderBackSvg />
        <Link
          className={styles.btnBack}
          tabIndex="1"
          href=""
          onClick={() => setIsSubmit(false)}
          aria-label="Back button"
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
