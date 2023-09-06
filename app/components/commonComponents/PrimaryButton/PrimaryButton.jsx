import styles from './primaryButton.module.css';

const PrimaryButton = ({ name, borderColor, sizeCorner, borderWidth}) => {
     const customStyles = {
    '--border-color': `${borderColor}`,
    '--size-corner': `${sizeCorner}`,
    '--border-width': '2px',
  };
    return <>
        <button type="button" className={styles.box} style={customStyles}>{name}</button>
    </>
}
export default PrimaryButton