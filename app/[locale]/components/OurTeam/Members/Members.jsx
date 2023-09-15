"use client";
import { useTranslations } from "next-intl";
import styles from './Members.module.scss';
import utilsStyles from '../../../styles/_utils.module.scss';
import MemberList from "../MemberList/MemberList";

const Members = () => {
    const t = useTranslations("OurTeam");

    return (
        <section className={styles.members}>
            <div className={styles.members__wrapper}>
                <h1 className={utilsStyles.h1}>{t("title")}</h1>
                <p className={styles.members__description}>{t("desc")}</p>
            </div>

            <MemberList />
            
                {/* <li className={styles.members__item}>
                    <Image src="/team/member-02.jpg" alt="member 2" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Єва Гольц</h3>
                        <p className={styles.members__position}>Дизайнерка</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-03.jpg" alt="member 3" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Олексій Шаповал</h3>
                        <p className={styles.members__position}>Менеджер YouTube-каналу</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-04.jpg" alt="member 4" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Юлія Бойченко</h3>
                        <p className={styles.members__position}>Менеджерка з комунікацій</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-05.jpg" alt="member 5" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Марʼяна Василик</h3>
                        <p className={styles.members__position}>Координаторка волонтерів</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-06.jpg" alt="member 6" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Наталія Бажина</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>    
                </li>
                <li className={styles.members__item}>
                    <Image src="/team/member-07.jpg" alt="member 7" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Ірина Андерсон</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-08.jpg" alt="member 8" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Вікторія Гитик</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-09.jpg" alt="member 9" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Марко Николюк</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>    
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-10.jpg" alt="member 10" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Карина Скиба</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-11.jpg" alt="member 11" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Катерина Насенюк</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-12.jpg" alt="member 12" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Наталія Драмарецька</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-13.jpg" alt="member 13" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Антоніна Терещенко</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-14.jpg" alt="member 14" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Марта Була</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-15.jpg" alt="member 15" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Юлія Самоненко</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-16.jpg" alt="member 16" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Олександр Логвінов</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li>

                <li className={styles.members__item}>
                    <Image src="/team/member-17.jpg" alt="member 17" width={265} height={266} />
                    <div className={styles.members__info}>
                        <h3 className={styles.members__name}>Альона Нікітчина</h3>
                        <p className={styles.members__position}>Волонтер</p>
                    </div>
                </li> */}
        </section>
    )
}  

export default Members;