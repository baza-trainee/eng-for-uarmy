import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactForm.module.scss";
import CustomSelect from "./CustomSelect/CustomSelect";

const ContactForm = () => {
  const [requestType, setRequestType] = useState("Type of request");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const error = () => toast.error("Something went wrong...");

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
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        body: formDataObject,
      });
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
    <div className={styles.form__wrapper}>
      {isError && (
        <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false}
        >
          {error()}
        </ToastContainer>
      )}
      <form className={styles.form} onSubmit={formHandler} id="form">
        <div className={styles.form__mainblock}>
          <div className={styles.form__block}>
            <CustomSelect requestTypeHandler={requestTypeHandler} />
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
              onKeyUp={handleKeyUp}
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
