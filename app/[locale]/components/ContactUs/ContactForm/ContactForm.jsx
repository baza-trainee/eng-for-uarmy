import React, { useState } from "react";
import { useFormik } from 'formik';
import { sendEmail } from "@/app/[locale]/api/sendEmail";
import { emailSchema } from "@/app/[locale]/libs/validationSchemas";
import CustomSelect from "./CustomSelect/CustomSelect";
import styles from "./ContactForm.module.scss";
import btnStyles from '../../commonComponents/MainLink/MainLink.module.scss';

const ContactForm = () => {
  const [requestType, setRequestType] = useState("Type of request");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = `${e.target.scrollHeight}px`;

    const fieldTextarea = document.querySelector(`.${styles.form__fieldTextarea}`);
    fieldTextarea.style.position = "absolute";
    if (window.innerWidth < 1280) {
      fieldTextarea.style.top = "27px";
      fieldTextarea.style.left = "0";
      fieldTextarea.style.width = "100%";

      const wrapper = document.querySelector(`.${styles.form__wrapper}`);
      wrapper.style.marginBottom = "200px";
    } else {
      fieldTextarea.style.left = "-455px";
      fieldTextarea.style.top = "61px";
    }
  };

const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
  initialValues: {
    name: '',
    email: '',
    request: '',
  },
  validationSchema: emailSchema,
  onSubmit: async ({ name, email, request }, { resetForm }) => {
    try {
      setIsLoading(true);

      const emailData = {
        requestType: requestType,
        name,
        email,
        request
      };

      const data = await sendEmail(emailData);
      console.log(data.message);

      setRequestType("Type of request");
      resetForm();
    } catch (err) {
        console.log(err);
    } finally {
      setIsLoading(false);
    }
  }  
});

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__wrapper}>
        <div className={styles.form__blockLeft}>
          <CustomSelect requestType={requestType} setRequestType={setRequestType}/>  

          <label className={styles.form__field}>
            <input type="text"
              name="name"
              value={values.name}
              placeholder=''
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.form__input} ${styles.form__inputName}`} />
            <span className={styles.form__label}>Your name</span>
            {errors.name && touched.name && <p>{errors.name}</p>}
          </label>

          <label className={styles.form__field}>
            <input type="email"
              name="email"
              value={values.email}
              placeholder=''
              onChange={handleChange}
              onBlur={handleBlur}
              className={styles.form__input} /> 
            <span className={styles.form__label}>Your email</span>
            {errors.email && touched.email && <p>{errors.email}</p>}
          </label>
            {/* <FieldForm>Images
                <InputForm
                    type="file"
                    name="images"
                    multiple 
                    onChange={e => setFieldValue('images', e.currentTarget.files)}
                    />
            </FieldForm> */}
          
        </div> 
        
        <div className={styles.form__blockRight}>
          <label className={`${styles.form__field} ${styles.form__fieldTextarea}`}>
            <textarea
              name="request"
              value={values.request}
              cols="30"
              rows="10"
              placeholder=''
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.form__input} ${styles.form__textarea}`}
              onInput={handleInput} />
            <span className={`${styles.form__label} ${styles.form__labelTextarea}`}>
              Tell us more about your request</span>
            {errors.request && touched.request && <p>{errors.request}</p>}
          </label>
        </div>
      </div>  

      <div className={styles.form__btnWrapper}>
        <button type="submit"
          disabled={isLoading}
          className={`${btnStyles.mainLink} ${styles.form__btn}`}>
          {isLoading && <span className={styles.form__spinner}></span>}
          Send
        </button>
      </div>
    </form> 
  );
};

export default ContactForm;
