import axios from 'axios';
import { GOOGLE_SHEET_URL } from '../constants/urls';

axios.defaults.baseURL = GOOGLE_SHEET_URL;

export const sendToGoogleSheet = async (formData ) => {
    try {
        const { data } = await axios.post('', formData);
        console.log('response', data.result);
    
        return data;
    } catch (error) {
        console.log('error', error);
    }
};