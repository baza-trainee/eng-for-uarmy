import { host } from './baseSettings';

export const sendEmail = async (emailData) => {
    try {
        const { data } = await host.post('/api/send-data', emailData);
        return data;
    } catch (error) {
        console.log('Email not sent', error)
    }
};
