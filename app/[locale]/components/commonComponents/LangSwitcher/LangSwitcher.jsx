import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./langSwitcher.module.scss";

const LangSwitcher = ({locale}) => {
  const [currentLang, setCurrentLang] = useState('UKR')
  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false)

  useEffect(() => {
    if (locale === 'en') {
      setCurrentLang('ENG')
    } else if (locale === 'uk') {
      setCurrentLang('UKR')
    }
  }, [locale])

  useEffect(() => {
    const closeSwitcher = () => {
      setIsOpenSwitcher(false)
    }
    if (isOpenSwitcher) {
      document.addEventListener('click', closeSwitcher);
    }

    return () => {
      document.removeEventListener('click', closeSwitcher);

    };
  }, [isOpenSwitcher])

  const onLangClick = () => {
    setIsOpenSwitcher(!isOpenSwitcher)
  }
  const onChangeLang = () => {
    if (currentLang === 'UKR') {
    setCurrentLang('ENG');
    } else {
      setCurrentLang('UKR');
    }
    setIsOpenSwitcher(false);
  }
  
  return <div className={styles.langSwitcher}>
    <div className={styles.langItem} onClick={() => onLangClick()}>
      <span className={styles.switchLang}>{currentLang}</span>
      {isOpenSwitcher ? <Image src='./arrow-up.svg' alt='arrow up icon' width={8} height={4} /> :
        <Image src='./arrow-down.svg' alt='arrow down icon' width={8} height={4}/>
      }
    </div>
    {isOpenSwitcher ? <Link href={locale === 'uk' ? '/en' : '/uk'} className={`${styles.langItem} ${styles.selectedLang}`} onClick={() => onChangeLang()}>
      <span className={styles.switchLang}>{currentLang === 'UKR' ? 'ENG' : 'UKR'}</span>
    </Link> : null}
  </div>
    
}
export default LangSwitcher;