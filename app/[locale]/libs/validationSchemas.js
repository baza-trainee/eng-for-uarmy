import * as yup from 'yup';

export const emailSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .matches(/^[-\sA-Za-zа-яА-ЯіІїЇґҐёЁєЄ]+$/, 'Please enter on alphabets only')
        .min(2, 'Minimum 2 characters')
        .max(50, 'Maximum 50 characters')
        .required('Please enter your name'),
    email: yup
        .string()
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
            'Invalid email address')
        .test('no-cyrillic', 'Invalid email address', function (value) {
            if (value) {
                const domain = value.split('@')[1].split('.')[0];
                const cyrillicRegex = /[а-яА-ЯіІїЇґҐёЁєЄ]/;
                return !cyrillicRegex.test(domain);
            }
            return true;
        })
        .max(50, 'Maximum 50 characters')
        .required('Please enter your email'),
    request: yup
        .string()
        .trim()
        .max(2000, 'Maximum 2000 characters')
        .required('Please enter your request'),
});