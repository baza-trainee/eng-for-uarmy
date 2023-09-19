"use client";
import { useTranslations } from "next-intl";
import styles from './Members.module.scss';
import MemberList from "../MemberList/MemberList";

const Members = () => {
    const t = useTranslations("OurTeam");

    return (
        <section className={styles.members}>
            <div className={styles.members__wrapper}>
                <h1 className={styles.members__title}>{t("title")}</h1>
                <p className={styles.members__description}>{t("desc")}</p>
            </div>

            <MemberList />
        </section>
    )
}  

export default Members;