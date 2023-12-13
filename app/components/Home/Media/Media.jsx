'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { useActionContext } from '@/app/context/action';
import mediaEng from "@/app/libs/fakeMediaListEng";
import medias from "@/app/libs/fakeMediaList";
import MediaList from "./MediaList";
import styles from "./Media.module.scss";

const Media = () => {
    const [mediaList, setMediaList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [screenWidth, setScreenWidth] = useState(1280);
    const { setAction } = useActionContext();
    const router = useRouter();
    const t = useTranslations("Media");
    const locale = useLocale();

    useEffect(() => {
         if (locale === "en") {
             setMediaList(mediaEng)
        } else {
             setMediaList(medias)
        } 
        const innerWidth = window.innerWidth
        setScreenWidth(innerWidth)
    
    }, [])

    useEffect(() => {
        const newMedia = screenWidth < 1280 ? mediaList.slice(0, 3) : mediaList.slice(0, 4)
        setCurrentList(newMedia) 
    }, [screenWidth, mediaList])
    

    const unWrapList = () => {
        if (mediaList.length > currentList.length) {
            const newList = screenWidth < 1280 ?
                mediaList.slice(currentList.length, currentList.length + 3) :
                mediaList.slice(currentList.length, currentList.length + 4)
            const newMedia = currentList.concat(newList)
            setCurrentList(newMedia)
        }
    }

    const wrapList = () => {
        if (mediaList.length === currentList.length) {
            const newMedia = screenWidth < 1280 ? mediaList.slice(0, 3) : mediaList.slice(0, 4)
            setCurrentList(newMedia) 
        }
    }

    const handleChangeAction = (e, value) => {
        e.currentTarget.blur();
        router.push(`/${locale}/contact`)
        setAction(value);
    };
   
    return <section className={styles.section}>
        <span className={styles.anchor} id='media'></span>
        <div className={styles.mediaSection}>
            <h2 className={styles.mediaTitle}>{t("title")}</h2>
            <MediaList list={currentList} />
            {mediaList.length === currentList.length ?
                <Link href={`/${locale}#media`} style={{margin: '0 auto', outline: "none"}}>
                    <svg tabIndex={0} onClick={(e) => {
                        e.currentTarget.blur()
                        wrapList()
                        }} className={styles.arrowBtn} xmlns="http://www.w3.org/2000/svg" width="78" height="41" viewBox="0 0 78 41" fill="none">
                        <path d="M77 40L39 2L1 40" stroke="#231F20" strokeWidth="2" />
                    </svg>
                </Link>  
                 :
                <svg tabIndex={0} onClick={(e) => {
                    e.currentTarget.blur()
                    unWrapList()
                    }} className={styles.arrowBtn} xmlns="http://www.w3.org/2000/svg" width="78" height="41" viewBox="0 0 78 41" fill="none">
                    <path d="M1 1L39 39L77 1" stroke="#231F20" strokeWidth="2" />
                </svg>
            }
            <button type='button'
                onClick={(e) => handleChangeAction(e, 'spread')}   
                className={styles.mediaBtn}>
                {t("button")}
            </button>
        </div>
    </section>
}
export default Media;


