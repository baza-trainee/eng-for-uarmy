"use client";
import { useEffect, useState } from 'react';
import { useTranslations } from "next-intl";
import styles from './MemberList.module.scss';
import Image from 'next/image';

const MemberList = () => {
    const t = useTranslations("OurTeam");
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' && window.innerWidth >= 1280);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1280);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const members = Array.from({ length: 17 }, (_, idx) => ({
        id: idx + 1,
        photoMob: `/team/member-${String(idx + 1).padStart(2, '0')}_mob.jpg`,
        photoDes: `/team/member-${String(idx + 1).padStart(2, '0')}_des.jpg`,
        photoMobRet: `/team/member-${String(idx + 1).padStart(2, '0')}_mob@2x.jpg`,
        photoDesRet: `/team/member-${String(idx + 1).padStart(2, '0')}_des@2x.jpg`,
        name: t(`name-${idx + 1}`),
        role: t(`role-${idx + 1}`),
    }));

    return (
        <ul className={styles.members__list}>
            {members?.map(({ id, photoDes, photoDesRet, photoMob, photoMobRet, name, role }) =>
                <li key={id} className={styles.members__item}>
                    <Image
                        src={isDesktop ? photoDes : photoMob}
                        // srcSet={`${isDesktop ? photoDes : photoMob} 1x, ${isDesktop ? photoDesRet : photoMobRet} 2x`}
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