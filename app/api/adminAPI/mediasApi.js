import { host } from "../baseSettings";

const getMedia = async (lang, page, limit) => {
    try {
        const response = await host.get(`/api/admin/medias?lang=${lang}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medias:", error);
    }
}
const getMediaById = async (id) => {
    try {
        const response = await host.get(`/api/admin/medias/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medias:", error);
    }
}
const createMedia = async (data) => {
    try {
        const response = await host.post("/api/admin/medias", data);
        return response.data;
    } catch (error) {
        console.error("Error fetching medias:", error);
    }
}
const updateMedia = async (data) => {
    try {
        const response = await host.put("/api/admin/medias", data);
        return response.data;
    } catch (error) {
        console.error("Error fetching medias:", error);
    }
}

const deleteMediaById = async (id) => {
    try {
        const response = await host.delete(`/api/admin/medias/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medias:", error);
    }
}

export { getMedia, getMediaById, createMedia, updateMedia, deleteMediaById };