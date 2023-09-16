import React, { useState } from "react";
import styles from './ContactForm.module.scss'
import CustomSelect from "./CustomSelect/CustomSelect";

const ContactForm = () => {

    const formHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <form className={styles.form} onSubmit={formHandler}>
     <div className={styles.form__mainblock}>
      <div className={styles.form__block}>
      <CustomSelect />
        <input 
        type="text" 
        placeholder="Your name"
        className={styles.form__input}
         />
        <input 
        type="email" 
        placeholder="Your email"
        className={styles.form__input}
         />
      </div>
      <div className={styles.form__block}>
        <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="10"
        className={styles.form__textarea}
        placeholder="Tell us more about your request"
        ></textarea>
      </div>
      </div>
      <button 
      type="submit"
      className={styles.form__button}
      >send</button>
    </form>
  );
};

export default ContactForm;
