"use client";
import { useTranslations } from "next-intl";
import Title from "../../commonComponents/Title/Title";
import MemberList from "../MemberList/MemberList";
import styles from './Members.module.scss';

const Members = () => {
    const t = useTranslations("OurTeam");

    return (
        <section className={styles.members}>
            <Title title={t("title")} description={t("desc")} />
            
            <MemberList />
        </section>
    )
}  

export default Members;