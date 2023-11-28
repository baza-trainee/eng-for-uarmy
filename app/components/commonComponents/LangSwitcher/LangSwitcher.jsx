import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./LangSwitcher.module.scss";

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
  
  return <div className={styles.langSwitcher}>
    <div className={styles.langItem} tabIndex={0} onClick={(e) => {
      e.currentTarget.blur()
      onLangClick()
      }}
      aria-label="Open language switcher">
      <span className={styles.switchLang}>{currentLang}</span>
      {isOpenSwitcher ? <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="Vector 2" d="M9 5L5 1L1 5" stroke="#231F20"/>
                        </svg> :
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="Vector 2" d="M1 1L5 5L9 1" stroke="#231F20"/>
                        </svg>
      }
    </div>
    {isOpenSwitcher ? <Link href={locale === 'uk' ? `/en/${pathname}` : `/uk/${pathname}`} className={`${styles.langItem} ${styles.selectedLang}`} onClick={() => onChangeLang()} aria-label="Change language">
      <span className={styles.switchLang}>{currentLang === 'УКР' ? 'ENG' : 'УКР'}</span>
    </Link> : null}
  </div>
    
}
export default LangSwitcher;