import { host } from './baseSettings';

export const sendEmail = async (emailData) => {
    try {
        const { data } = await host.post('/api/contact-us', emailData);
        console.log('Email sent', emailData);
        return data;
    } catch (error) {
        console.log('Email not sent', error);
    }
};
