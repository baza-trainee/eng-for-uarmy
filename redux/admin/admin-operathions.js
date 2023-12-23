import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, fetchUpdateContacts } from '@/app/api/adminAPI/contactsApi';
// export const getMedia = createAsyncThunk(
//     "admin/getMedia", async (lang, page, limit) => {
//         const medias = await getMedia(lang, page, limit)
//         return medias
//     }
// )
export const getSocials = createAsyncThunk(
    "admin/getSocials", async () => {
        const socials = await fetchSocials()
        return socials
    }
)
export const getContacts = createAsyncThunk(
    "admin/getMedia", async () => {
        const contacts = await fetchContacts();
        return contacts
    }
)
export const updateContacts = createAsyncThunk(
    "admin/updateMedia", async (data) => {
        const contacts = await fetchUpdateContacts(data)
        return contacts
    }
)