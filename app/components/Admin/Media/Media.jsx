"use client"
import { useEffect, useState } from "react";
import { AdminTitle } from "../../commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "../../commonComponents/AdminWrapper/AdminWrapper";
import MediaItem from "./MediaItem";
import styles from './Media.module.scss';
import { getMedia } from "@/app/api/adminAPI/mediasApi";
import PageSwitcher from "./PageSwitcher/PageSwitcher";
const Media = () => {
    const [medias, setMedias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [all, setAll] = useState(null);

    useEffect(() => {
        getMedia("uk", 1, 100).then(data => setAll(data.length))
    }, [])

     useEffect(() => {
        getMedia("uk", currentPage, 5).then(setMedias)
     }, [currentPage]);
    
    return <AdminWrapper>
        <AdminTitle title={"Mедіа"} />
        <button className={styles.addBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6.66797 16H25.3346" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 6.66406V25.3307" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Додати медіа
        </button>
        <ul>
            {medias.map((media) => <MediaItem key={media._id} media={media} />)}
        </ul>
        <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} allMedia={all} />
    </AdminWrapper>
}

export default Media;