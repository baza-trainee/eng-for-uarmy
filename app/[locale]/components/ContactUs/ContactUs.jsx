import styles from './ContactUs.module.scss'
import ContactForm from "./ContactForm/ContactForm"

const ContactUs = () =>{
    return (
        <section className={styles.main}>
            <div className={styles.title__block}>
            <h1>Contacts page</h1>
            <p>We value every connection that we’ve made along our journey. 
                Let us know what’s on your mind by filling out the form below.</p>
            </div>
        <ContactForm />
        </section>
    )
}

export default ContactUs;