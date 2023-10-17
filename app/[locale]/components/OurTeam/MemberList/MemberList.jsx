"use client";
import { useTranslations } from "next-intl";
import styles from './MemberList.module.scss';
import Image from 'next/image';

const MemberList = () => {
    const t = useTranslations("OurTeam");

    const members = Array.from({ length: 24 }, (_, idx) => ({
        id: idx + 1,
        photo: `/team/member-${String(idx + 1).padStart(2, '0')}.webp`,
        name: t(`name-${idx + 1}`),
        role: t(`role-${idx + 1}`),
    }));

    return (
        <ul className={styles.members__list}>
            {members?.map(({ id, photo, name, role }) =>
                <li key={id} className={styles.members__item}>
                    <Image
                        src={photo}
                        alt={name}
                        width={130}
                        height={150}
                        className={styles.members__img}
                        loading='lazy'
                    />
                    
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>{name}</h3>
                        <p className={styles.members__role}>{role}</p>
                    </div>
                </li>)}
        </ul>    
    )
}  

export default MemberList;