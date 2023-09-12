import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./langSwitcher.module.scss";

const LangSwitcher = ({ locale, pathname }) => {
  const [currentLang, setCurrentLang] = useState('УКР')
  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false)

  useEffect(() => {
    if (locale === 'en') {
      setCurrentLang('ENG')
    } else if (locale === 'uk') {
      setCurrentLang('УКР')
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
    if (currentLang === 'УКР') {
    setCurrentLang('ENG');
    } else {
      setCurrentLang('УКР');
    }
    setIsOpenSwitcher(false);
  }
  
  return <div className={styles.langSwitcher} tabIndex={0} onClick={(e) => e.currentTarget.blur()}>
    <div className={styles.langItem} onClick={() => onLangClick()}>
      <span className={styles.switchLang}>{currentLang}</span>
      {isOpenSwitcher ? <Image src='/arrow-up.svg' alt='arrow up icon' width={8} height={4} /> :
        <Image src='/arrow-down.svg' alt='arrow down icon' width={8} height={4}/>
      }
    </div>
    {isOpenSwitcher ? <Link href={locale === 'uk' ? `/en/${pathname}` : `/uk/${pathname}`} className={`${styles.langItem} ${styles.selectedLang}`} onClick={() => onChangeLang()}>
      <span className={styles.switchLang}>{currentLang === 'УКР' ? 'ENG' : 'УКР'}</span>
    </Link> : null}
  </div>
    
}
export default LangSwitcher;