import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

export const sendToGoogleSheet = async (formData ) => {
    try {
        const { data } = await axios.post('', formData);
    
        return data;
    } catch (error) {
        console.log('Request not sent', error);
    }
};