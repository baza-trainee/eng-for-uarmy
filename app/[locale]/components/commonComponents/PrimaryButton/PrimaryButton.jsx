import styles from "./primaryButton.module.css";

const PrimaryButton = ({ name }) => {
  return (
    <>
      <button type="button" className={styles.box}>
        {name}
      </button>
    </>
  );
};
export default PrimaryButton;
