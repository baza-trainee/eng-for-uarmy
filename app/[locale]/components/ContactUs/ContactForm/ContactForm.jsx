import React, { useState } from "react";
import { useFormik } from "formik";
import { sendEmail } from "@/app/[locale]/api/sendEmail";
import { emailSchema } from "@/app/[locale]/libs/validationSchemas";
import CustomSelect from "./CustomSelect/CustomSelect";
import Thanks from "../Thanks/Thanks";
import styles from "./ContactForm.module.scss";
import btnStyles from "../../commonComponents/MainLink/MainLink.module.scss";

const ContactForm = ({searchParams}) => {
  const [requestType, setRequestType] = useState("Type of request");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("searchParams", searchParams);

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = `${e.target.scrollHeight}px`;

    if (textarea.scrollHeight > 43) {
      textarea.style.overflowY = "visible";
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      request: "",
    },
    validationSchema: emailSchema,
    onSubmit: async ({ name, email, request }, { resetForm }) => {
      try {
        setIsLoading(true);

        const emailData = {
          requestType: requestType,
          name,
          email,
          request,
        };

        const data = await sendEmail(emailData);
        console.log(data.message);

        setRequestType("Type of request");
        resetForm();
        setIsSubmit(true);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      {!isSubmit
        ? (<form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__wrapper}>
            <div className={styles.form__blockLeft}>
              <CustomSelect
                requestType={requestType}
                setRequestType={setRequestType}
                searchParams={searchParams} />

              <label
                className={`${styles.form__field} ${styles.form__fieldName}`}>
                <input type="text"
                  name="name"
                  value={values.name}
                  placeholder=''
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.form__input} ${errors.name && touched.name && styles.form__inputError}`} />
                
                <span className={`${styles.form__label} ${errors.name && touched.name && styles.form__labelError}`}>
                  Your name
                </span>

                {errors.name && touched.name && <p className={styles.form__error}>{errors.name}</p>}
              </label>

              <label className={styles.form__field}>
                <input type="email"
                  name="email"
                  value={values.email}
                  placeholder=''
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.form__input} ${errors.email && touched.email && styles.form__inputError}`} />
                
                <span className={`${styles.form__label} ${errors.email && touched.email && styles.form__labelError}`}>
                  Your email
                </span>

                {errors.email && touched.email && <p className={styles.form__error}>{errors.email}</p>}
              </label>
            </div>

            <label className={styles.form__field}>
              <textarea name="request"
                value={values.request}
                placeholder=''
                onChange={handleChange}
                onBlur={handleBlur}
                onInput={handleInput}
                className={`
                  ${styles.form__input} 
                  ${styles.form__textarea} 
                  ${errors.request && touched.request && styles.form__inputError}`} />
              
              <span className={`${styles.form__label} ${errors.request && touched.request && styles.form__labelError}`}>
                Tell us more about your request
              </span>

              {errors.request && touched.request && <p className={styles.form__error}>{errors.request}</p>}
            </label>
          </div>

          <div className={styles.form__btnWrapper}>
            <button
              type="submit"
              disabled={isLoading}
              className={`${btnStyles.mainLink} ${styles.form__btn}`}
            >
              {isLoading && <span className={styles.form__spinner}></span>}
              Send
            </button>
          </div>
        </form>)
      : <Thanks /> }
    </>
  );
};

export default ContactForm;
