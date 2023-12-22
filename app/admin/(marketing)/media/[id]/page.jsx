"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MediaEditForm from "@/app/components/Admin/Media/MediaEditForm/MediaEditForm";
import { getMediaById } from "@/app/api/adminAPI/mediasApi";

const MediaPage = () => {
    const { id } = useParams();
    const [currentMedia, setCurrentMedia] = useState({});

    useEffect(() => {
        getMediaById(id).then(setCurrentMedia)
    }, [id])

    return <MediaEditForm media={currentMedia} />
}

export default MediaPage;