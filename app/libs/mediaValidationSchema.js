import * as yup from 'yup';

const mediaSchema = yup.object().shape({
    logoImg: yup.mixed()
    .required('Прикрипіть лого медіа')
    .test('fileSize', 'Максимальний розмір файлів — 20МБ', value => {
      return value.size <= 20000000;
    })
    .test(
      'type',
      'Допустимий формат файлів — .jpeg, .jpg, .bmp, .png, .svg, and .webp',
      value => {
        return (
          value &&
          (value.type === 'image/jpeg' ||
            value.type === 'image/jpg' ||
            value.type === 'image/webp' ||
            value.type === 'image/svg' ||
            value.type === 'image/bmp' ||
            value.type === 'image/png')
        );
      }
    ),
    mediaURL: yup.string().url('Посилання має бути валідною URL-адресою').required('Введіть посиланння на медіа'),
    ukDesc: yup.string(),
    enDesc: yup.string(),
});

export default mediaSchema;