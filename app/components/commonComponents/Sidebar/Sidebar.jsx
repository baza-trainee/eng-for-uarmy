"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./sidebar.module.scss";

const Sidebar = ({}) => {
  const pathname = usePathname();

  return (
    <div className={styles.sidebarArea}>
      <div className={styles.imageArea}>
        <Image src="sidebarlogo.svg" width={120} height={53} />
      </div>
      <div className={styles.navArea}>
        <Link
          href="/admin"
          className={`${styles.navLink} ${
            pathname === "/admin" || pathname === "/" ? styles.activeLink : ""
          }`}
        >
          ВІДГУКИ ПРО ПРОЕКТ
        </Link>
        <Link
          href="/admin/ourProjects"
          className={`${styles.navLink} ${
            pathname === "/admin/ourProjects" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          НАШІ ПРОЕКТИ
        </Link>
        <Link
          href="/admin/aboutUs"
          className={`${styles.navLink} ${
            pathname === "/admin/aboutUs" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          ПРО НАС
        </Link>
        <Link
          href="/admin/partners"
          className={`${styles.navLink} ${
            pathname === "/admin/partners" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          ПАРТНЕРИ
        </Link>
        <Link
          href="/admin/media"
          className={`${styles.navLink} ${
            pathname === "/admin/media" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          МЕДІА
        </Link>
        <Link
          href="/admin/ourTeam"
          className={`${styles.navLink} ${
            pathname === "/admin/ourTeam" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          НАША КОМАНДА
        </Link>
        <Link
          href="/admin/contacts"
          className={`${styles.navLink} ${
            pathname === "/admin/contacts" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          КОНТАКТИ
        </Link>
        <Link
          href="/admin/documents"
          className={`${styles.navLink} ${
            pathname === "/admin/documents" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          ДОКУМЕНТИ
        </Link>
        <Link
          href="/admin/settings"
          className={`${styles.navLink} ${
            pathname === "/admin/settings" || pathname === "/"
              ? styles.activeLink
              : ""
          }`}
        >
          НАЛАШТУВАННЯ
        </Link>
      </div>
      <Link
        className={styles.button}
        href="/admin?modal=true"
        onClick={(e) => {
          e.currentTarget.blur();
        }}
      >
        ВИЙТИ
      </Link>
    </div>
  );
};
export default Sidebar;
