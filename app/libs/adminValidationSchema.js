import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Невірний формат електронної пошти')
    .test('no-cyrillic', 'Невірний формат електронної пошти', function (value) {
      if (value) {
        const domain = value.substring(value.lastIndexOf('@') + 1);
        const secondDomain = domain.split('.')[0];
        const latinRegex = /^[a-zA-Z]+$/;
        return latinRegex.test(secondDomain);
      }
      return true;
    })
    .max(50, 'Максимум 50 символів')
    .required('Введіть електронну пошту'),
  password: yup
    .string()
    .min(6, 'Мінімум 6 символів')
    .required('Введіть пароль'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Невірний формат електронної пошти')
    .test('no-cyrillic', 'Невірний формат електронної пошти', function (value) {
      if (value) {
        const domain = value.substring(value.lastIndexOf('@') + 1);
        const secondDomain = domain.split('.')[0];
        const latinRegex = /^[a-zA-Z]+$/;
        return latinRegex.test(secondDomain);
      }
      return true;
    })
    .max(50, 'Максимум 50 символів')
    .required('Введіть електронну пошту'),
});  
