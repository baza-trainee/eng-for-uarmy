import axios from 'axios';

axios.defaults.baseURL = 'https://script.google.com/macros/s/AKfycbxV0k1aH-sNiLpcCWWhk5zE_sNqJLOxPlsE9o-2OjPX8r6tSMXAG7GRrpH2bmpoyHjk/exec';

export const sendToGoogleSheet = async (formData ) => {
    try {
        const res = await axios.post('', formData );
        return res;
    } catch (error) {
        console.log('error', error);
    }
};