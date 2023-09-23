import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import CustomSelect from "./CustomSelect/CustomSelect";

const ContactForm = () => {
  const [requestType, setRequestType] = useState("Type of request");

  const requestTypeHandler = (value)=>{
    if(value === "Type of request"){
      return;
    }
    setRequestType(value)
  }
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    formDataObject["requestType"] = requestType;
    console.log(formDataObject)
    //send data to backend//
    setRequestType("Type of request");
    e.target.reset();
  };

  return (
    <div className={styles.form__wrapper}>
      <form className={styles.form} onSubmit={formHandler} id="form">
        <div className={styles.form__mainblock}>
          <div className={styles.form__block}>
            <CustomSelect 
            requestTypeHandler={requestTypeHandler}
            />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              className={`${styles.form__input} ${styles.form__item1}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              required
              className={`${styles.form__input} ${styles.form__item2}`}
            />
          </div>
          <div className={styles.form__block}>
            <textarea
              name="request"
              id="request"
              cols="30"
              rows="10"
              required
              className={styles.form__textarea}
              placeholder="Tell us more about your request"
            ></textarea>
          </div>
        </div>
        <button type="submit" className={styles.form__button}>
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
