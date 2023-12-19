import styles from "./ContactInput.module.scss";

const ContactInput = ({ name, type, icon, label, value, placeholder, handleChange, onBlur }) => {
    return <label className={styles.inputField}>
        <span className={styles.label}>{label}</span>
        <input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            className={styles.input}
            onChange={handleChange}
            onBlur={onBlur}
        />
        <span className={styles.icon}>{icon}</span>
    </label>
}
export default ContactInput;