import React, { useState } from "react";
import { sendEmail } from "@/app/[locale]/api/sendEmail";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactForm.module.scss";
import btnStyles from '../../commonComponents/MainLink/MainLink.module.scss';
import CustomSelect from "./CustomSelect/CustomSelect";

const ContactForm = () => {
  const [requestType, setRequestType] = useState("Type of request");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const requestTypeHandler = (value) => {
    if (value === "Type of request") {
      return;
    }
    setRequestType(value);
  };

  const handleInput = (e) => {
    const textarea = e.target;
    const initialHeight = textarea.style.height;

    textarea.style.height = `${e.target.scrollHeight}px`;

    if (textarea.style.height !== initialHeight) {
      const wrapper = document.querySelector(`.${styles.form__wrapper}`);
      wrapper.style.marginBottom = "60px";
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setIsError(false);
    const formData = new FormData(e.target);

    let formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    formDataObject["requestType"] = requestType;
    //send data to backend//
    try {
      setIsLoading(true);
      const response = await sendEmail(formDataObject);
      if (response.ok) {
        setRequestType("Type of request");
        e.target.reset();
      } 
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={formHandler} id="form">
      <div className={styles.form__wrapper}>
        <div className={styles.form__blockLeft}>
        <CustomSelect requestTypeHandler={requestTypeHandler} />
          <label className={styles.form__field}>
            <input type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              placeholder=''
              className={`${styles.form__input} ${styles.form__inputName}`} />
            
            <span className={styles.form__label}>Your name</span>
          </label>   
        
          <label className={styles.form__field}>
            <input type="email"
            name="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
            placeholder=''
            className={styles.form__input} /> 
            
            <span className={styles.form__label}>Your email</span>
          </label>
        </div>

        <div className={styles.form__blockRight}>
          <label className={`${styles.form__field} ${styles.form__fieldTextarea}`}>
            <textarea name="request"
              id="request"
              cols="30"
              rows="10"
              required
              placeholder=''
              className={`${styles.form__input} ${styles.form__textarea}`}
              onInput={handleInput} />
            
            <span className={`${styles.form__label} ${styles.form__labelTextarea}`}>
              Tell us more about your request
            </span>
          </label>
        </div>
      </div>
      
      <button type="submit" className={`${btnStyles.mainLink} ${styles.form__btn}`}>Send</button>
    </form>
  );
};

export default ContactForm;
