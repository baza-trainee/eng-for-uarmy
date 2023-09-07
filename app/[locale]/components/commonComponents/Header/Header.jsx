"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  return (
    <>
      <nav className={styles.nav}>
        <Link href={`/${locale}`}>{t("home")}</Link>
        <Link href={`/${locale}/study`}>{t("study")}</Link>
        <Link href={`/${locale}/team`} locale={locale}>
          {t("team")}
        </Link>
        <Link href={`/${locale}/contact`} locale={locale}>
          {t("contact")}
        </Link>
      </nav>
    </>
  );
};
export default Header;
