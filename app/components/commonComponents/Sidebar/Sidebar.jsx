"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ModalWrapper } from "../ModaWrapper/ModalWrapper";
import ExitModal from "../../Admin/ExitModal/ExitModal";
import styles from "./sidebar.module.scss";

const Sidebar = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  const toggleModal = () => setShowModal((state) => !state);

  return (
    <>
      <div className={styles.sidebarArea}>
        <div className={styles.imageArea}>
          <Image src="sidebarlogo.svg" width={120} height={53} alt="logo" />
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
            href="/admin/our-projects"
            className={`${styles.navLink} ${
              pathname === "/admin/our-projects" || pathname === "/"
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

        <button
          type="button"
          onClick={toggleModal}
          aria-label="Open exit modal"
          className={styles.button}
        >
          ВИЙТИ
        </button>
      </div>

      {showModal && (
        <ModalWrapper onClose={toggleModal}>
          <ExitModal onClose={toggleModal} />
        </ModalWrapper>
      )}
    </>
  );
};
export default Sidebar;
