import React, { useState } from "react";
import styles from './ContactForm.module.scss'
import CustomSelect from "./CustomSelect/CustomSelect";
import Image from "next/image";

const ContactForm = () => {

    const formHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className={styles.form__wrapper}>
       <Image className={styles.cardSVG} src='../outlineBorders.svg' alt='card border' width={1120} height={663}/>
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
    </div>
  );
};

export default ContactForm;
