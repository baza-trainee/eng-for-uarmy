"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/study">Study</Link>
        <Link href="/team">Our team</Link>
        <Link href="/contact">Contacts</Link>
      </nav>
    </>
  );
};
export default Header;
