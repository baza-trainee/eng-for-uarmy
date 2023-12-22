"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { AdminTitle } from "../../commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "../../commonComponents/AdminWrapper/AdminWrapper";
import MediaItem from "./MediaItem";
import PageSwitcher from "./PageSwitcher/PageSwitcher";
import { ModalWrapper } from "../../commonComponents/ModaWrapper/ModalWrapper";
import ModalDelete from "./Modals/ModalDelete";
import { getMedia } from "@/app/api/adminAPI/mediasApi";
import styles from './Media.module.scss';

const Media = () => {
    const [medias, setMedias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [all, setAll] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [current, setCurrent] = useState(null);
    const toggleModal = (id) => {
        setShowModal(!showModal);
        setCurrent(id)
    };

    useEffect(() => {
        getMedia("uk", 1, 100).then(data => setAll(data.length))
    }, [])

     useEffect(() => {
        getMedia("uk", currentPage, 5).then(setMedias)
     }, [currentPage]);
    
    return<>
        <AdminWrapper>
            <AdminTitle title={"Mедіа"} />
            <Link className={styles.addBtn} href='/admin/media/newMedia'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6.66797 16H25.3346" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 6.66406V25.3307" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Додати медіа
            </Link>
            <ul>
                {medias.map((media) => <MediaItem key={media._id} media={media} onClose={toggleModal} />)}
            </ul>
            <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} allMedia={all} />
        </AdminWrapper>
        {showModal && (
            <ModalWrapper onClose={toggleModal}>
                <ModalDelete onClose={toggleModal} mediaId={current} currentPage={currentPage} setMedias={setMedias} />
            </ModalWrapper>
        )}
    </>
}

export default Media;