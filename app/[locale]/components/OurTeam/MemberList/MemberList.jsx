"use client";
import { useTranslations } from "next-intl";
import { useMediaQuery } from 'react-responsive';
import styles from './MemberList.module.scss';
import Image from 'next/image';

const MemberList = () => {
    const t = useTranslations("OurTeam");
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })

    const members = Array.from({ length: 17 }, (_, idx) => ({
        id: idx + 1,
        photo: require(`../../../assets/images/team/member-${String(idx + 1).padStart(2, '0')}_mob.jpg`),
        photoRet: require(`../../../assets/images/team/member-${String(idx + 1).padStart(2, '0')}_mob@2x.jpg`),
        photoDes: require(`../../../assets/images/team/member-${String(idx + 1).padStart(2, '0')}_des.jpg`),
        photoDesRet: require(`../../../assets/images/team/member-${String(idx + 1).padStart(2, '0')}_des@2x.jpg`),
        name: t(`name-${idx + 1}`),
        role: t(`role-${idx + 1}`),
    }));

    return (
        <ul className={styles.members__list}>
            {members?.map(({ id, photo, photoRet, photoDes, photoDesRet, name, role }) =>
                <li key={id} className={styles.members__item}>
                    <Image src={isDesktop ? photoDes : photo}
                        srcSet={isDesktop
                            ? `${photoDes} 1x, ${photoDesRet} 2x`
                            : `${photo} 1x, ${photoRet} 2x`}
                        alt={name}
                        width={isDesktop ? 265 : 130}
                        height={isDesktop ? 266: 150}
                        className={styles.members__img}
                        loading = 'lazy'/>
                    
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>{name}</h3>
                        <p className={styles.members__role}>{role}</p>
                    </div>
                </li>)}
        </ul>    
    )
}  

export default MemberList;