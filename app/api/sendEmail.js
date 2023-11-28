import { host } from './baseSettings';

export const sendEmail = async (emailData) => {
    try {
        const res = await host.post('/api/contact-us', emailData);
        return res.data;
    } catch (error) {
        console.log('Email not sent', error);
    }
};
