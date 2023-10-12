"use client";
import React, { useState } from "react";
import useLocalStorage from "@/app/[locale]/hooks/useLocalStorage";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { sendEmail } from "@/app/[locale]/api/sendEmail";
import { emailSchema } from "@/app/[locale]/libs/validationSchemas";
import CustomSelect from "./CustomSelect/CustomSelect";
import { DebounceInput } from 'react-debounce-input';
import Thanks from "../Thanks/Thanks";
import styles from "./ContactForm.module.scss";
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const ContactForm = ({ action }) => {
  const [savedValues, setSavedValues] = useLocalStorage('formValues', {
    name:"",
    email: "",
    request: "",
  });
  const [requestType, setRequestType] = useState( null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const t = useTranslations("Contact us");

  console.log("isSubmit", isSubmit);

  const handleInputChange = (e) => {
    handleChange(e);

    setSavedValues({
      name: e.target.name === 'name' ? e.target.value : values.name,
      email: e.target.name === 'email' ? e.target.value : values.email,
      request: e.target.name === 'request' ? e.target.value : values.request,
    });
  };

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = `${e.target.scrollHeight}px`;

    if (textarea.scrollHeight > 43) {
      textarea.style.overflowY = "visible";
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: savedValues.name,
      email: savedValues.email,
      request: savedValues.request,
    },
    validationSchema: emailSchema,
    onSubmit: async ({ name, email, request }, { resetForm }) => {
      try {
        setIsLoading(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxV0k1aH-sNiLpcCWWhk5zE_sNqJLOxPlsE9o-2OjPX8r6tSMXAG7GRrpH2bmpoyHjk/exec';

        // send to Google Sheet
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Request', request);
        formData.append('Type of request', requestType === t("type") ? t("other") : requestType);

        fetch(scriptURL, { method: 'POST', body: formData })
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))

        // send to email
        const emailData = {
          requestType: requestType === t("type") ? t("other") : requestType,
          name,
          email,
          request,
        };

        await sendEmail(emailData);
        
        setRequestType(t("type"));
        setSavedValues({ name: '', email: '', request: '' });
        resetForm();
        setIsSubmit(true);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const disabled = errors.name || errors.email || errors.request || isLoading;

  return (
    <>
      {!isSubmit
        ? (<form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__wrapper}>
            <div className={styles.form__blockLeft}>
              <CustomSelect action={action}
                requestType={requestType}
                setRequestType={setRequestType} />

              <label className={`${styles.form__field} ${styles.form__fieldName}`}>
                <DebounceInput type="text"
                  name="name"
                  value={values.name}
                  placeholder={t("name")}
                  debounceTimeout={500}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`${styles.form__input} ${errors.name && touched.name && styles.form__inputError}`} />
                
                <span className={`${styles.form__label} ${errors.name && touched.name && styles.form__labelError}`}>
                  {t("name")}
                </span>

                {errors.name && touched.name && <p className={styles.form__error}>{errors.name}</p>}
              </label>

              <label className={styles.form__field}>
                <DebounceInput type="email"
                  name="email"
                  value={values.email}
                  placeholder={t("email")}
                  debounceTimeout={500}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`${styles.form__input} ${errors.email && touched.email && styles.form__inputError}`} />
                
                <span className={`${styles.form__label} ${errors.email && touched.email && styles.form__labelError}`}>
                  {t("email")}
                </span>

                {errors.email && touched.email && <p className={styles.form__error}>{errors.email}</p>}
              </label>
            </div>

            <div>
              <label className={styles.form__field}>
                <DebounceInput element="textarea"
                  name="request"
                  value={values.request}
                  placeholder={t("tellUs")}
                  debounceTimeout={500}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  onInput={handleInput}
                  className={`
                    ${styles.form__input} 
                    ${styles.form__textarea} 
                    ${errors.request && touched.request && styles.form__inputError}`} />
                
                <span className={`${styles.form__label} ${errors.request && touched.request && styles.form__labelError}`}>
                  {t("tellUs")}
                </span>

                {errors.request && touched.request && <p className={styles.form__error}>{errors.request}</p>}
              </label>
            </div>
          </div>

          <div className={styles.form__btnWrapper}>
            <button type="submit"
              disabled={disabled}
              className={`${btnStyles.mainLink} ${styles.form__btn}`}>
              {isLoading && <span className={styles.form__spinner}></span>}
              {t("send")}
            </button>
          </div>
        </form>)
      : <Thanks /> }
    </>
  );
};

export default ContactForm;
