"use client";
import React, { useState } from "react";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useActionContext } from '@/app/context/action';
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { DebounceInput } from 'react-debounce-input';
import { sendToGoogleSheet } from "@/app/api/sendToGoogleSheet";
import { sendEmail } from "@/app/api/sendEmail";
import * as yup from 'yup';
import CustomSelect from "./CustomSelect/CustomSelect";
import ContactButton from "./ContactButton/ContactButton";
import Thanks from "../Thanks/Thanks";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [savedValues, setSavedValues] = useLocalStorage('formValues', {
    name:"",
    email: "",
    request: "",
  });
  const [requestType, setRequestType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { setAction } = useActionContext();
  const t = useTranslations("Contact us");

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
    if (textarea.scrollHeight > 43) {
      textarea.style.overflowY = "auto";
    }
  }

  const handleFocus = (e) => {
    const wrapper = document.querySelector(`.${styles.form__wrapper}`);
    wrapper.style.marginBottom = "60px";
  }
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: savedValues.name,
      email: savedValues.email,
      request: savedValues.request,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .trim()
        .matches(/^[-\sA-Za-zа-яА-ЯіІїЇґҐёЁєЄ']+$/, t("alphabet"))
        .min(2, t("min"))
        .max(50, t("max50"))
        .required( t("requiredName") ),
      email: yup
        .string()
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          t("invalid"))
        .test('no-cyrillic', t("invalid"), function (value) {
          if (value) {
            const domain = value.substring(value.lastIndexOf('@') + 1);
            const secondDomain = domain.split('.')[0];
            const latinRegex = /^[a-zA-Z]+$/;
            return latinRegex.test(secondDomain);
          }
          return true;
        })
        .max(50, t("max50"))
        .required( t("requiredEmail") ),
      request: yup
        .string()
        .trim()
        .max(2000, t("max2000"))
        .required(t("requiredRequest")),
      }),
    onSubmit: async ({ name, email, request }, { resetForm }) => {
      try {
        setIsLoading(true);

        // send to Google Sheet
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Request', request);
        formData.append('Type of request', requestType || t("other"));
        await sendToGoogleSheet(formData);

        // send to email
        const emailData = {
          requestType: requestType || t("other"),
          name,
          email,
          request,
        };
        await sendEmail(emailData);
        
        setAction('');
        setRequestType(null);
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

  const disabled = Object.keys(errors).length > 0 && Object.keys(touched).length === 3 || isLoading;

  return (
    <>
      {!isSubmit
        ? (<form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.form__wrapper}>
            <div className={styles.form__blockLeft}>
              <CustomSelect requestType={requestType}
                setRequestType={setRequestType} />

              <label className={`${styles.form__field} ${styles.form__fieldName}`}>
                <DebounceInput type="text"
                  name="name"
                  value={values.name}
                  placeholder={t("name")}
                  debounceTimeout={300}
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
                  debounceTimeout={300}
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
                  debounceTimeout={300}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  onInput={handleInput}
                  onFocus={handleFocus}
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

          <ContactButton disabled={disabled} isLoading={isLoading} />
        </form>)
        : <Thanks setIsSubmit={setIsSubmit} /> }
    </>
  );
};

export default ContactForm;
