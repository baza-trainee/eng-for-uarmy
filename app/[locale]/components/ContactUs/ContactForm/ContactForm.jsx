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

  const handleKeyUp = (e) => {
    e.target.style.height = "43px";
    e.target.style.height = `${e.target.scrollHeight}px`;
    e.target.style.height = `${Math.min(e.target.scrollHeight, 246)}px`;
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
            
        <input type="text"
          name="name"
          placeholder="Your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={`${styles.form__input} ${styles.form__inputName}`} />

        <input type="email"
          name="email"
          placeholder="Your email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          required
          className={styles.form__input} />
        </div>

        <div className={styles.form__blockRight}>
          <textarea name="request"
            id="request"
            cols="30"
            rows="10"
            required
            className={`${styles.form__input} ${styles.form__textarea}`}
            placeholder="Tell us more about your request"
            onKeyUp={handleKeyUp} />
        </div>
      </div>
      
      <button type="submit" className={`${btnStyles.mainLink} ${styles.form__btn}`}>Send</button>
    </form>
  );
};

export default ContactForm;
