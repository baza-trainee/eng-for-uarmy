import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const contactsSchema = yup.object().shape({
    email: yup
        .string()
        // .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        //   'Невірний формат електронної пошти')
        // .test('no-cyrillic', 'Невірний формат електронної пошти', function (value) {
        //   if (value) {
        //     const domain = value.substring(value.lastIndexOf('@') + 1);
        //     const secondDomain = domain.split('.')[0];
        //     const latinRegex = /^[a-zA-Z]+$/;
        //     return latinRegex.test(secondDomain);
        //   }
        //   return true;
        // })
        // .max(50, 'Максимум 50 символів')
        .required('Введіть електронну пошту'),
    number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Введіть номер телефону'),
    instagramURL: yup.string().url().required('Введіть посиланння на Instagram'),
    telegramURL: yup.string().url().required('Введіть посиланння на Telegram'),
    facebookURL: yup.string().url().required('Введіть посиланння на Facebook'),
    youtubeURL: yup.string().url().required('Введіть посиланння на Youtube')
});

export default contactsSchema;