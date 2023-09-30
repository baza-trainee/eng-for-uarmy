import { host } from './baseSettings';

export const sendEmail = async (emailData) => {
    try {
        const res = await host.post('/api/contact-us', emailData);
        console.log("response", res)
        
        return res;
    } catch (error) {
        console.log('Email not sent', error);
    }
};
