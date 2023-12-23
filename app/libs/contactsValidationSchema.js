import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const contactsSchema = yup.object().shape({
    email: yup
        .string()
        .required('Введіть електронну пошту'),
    number: yup.string().required('Введіть номер телефону'),
    // number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Введіть номер телефону'),
    instagramURL: yup.string().url().required('Введіть посиланння на Instagram'),
    telegramURL: yup.string().url().required('Введіть посиланння на Telegram'),
    facebookURL: yup.string().url().required('Введіть посиланння на Facebook'),
    youtubeURL: yup.string().url().required('Введіть посиланння на Youtube')
});

export default contactsSchema;