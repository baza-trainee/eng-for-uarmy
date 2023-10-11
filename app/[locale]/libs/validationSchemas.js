import * as yup from 'yup';

export const emailSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .matches(/^[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]+$/, 'Please enter on alphabets only')
        .min(2, 'Minimum 2 characters')
        .max(50, 'Maximum 50 characters')
        .required('Please enter your name'),
    email: yup
        .string()
        .matches(/^(?=.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/,
            'Invalid email address')
        .max(50, 'Maximum 50 characters')
        .required('Please enter your email'),
    request: yup
        .string()
        .trim()
        .max(2000, 'Maximum 2000 characters')
        .required('Please enter your request'),
});