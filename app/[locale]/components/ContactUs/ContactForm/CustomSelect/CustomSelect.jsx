import React, { useState } from "react";
import styles from './CustomSelect.module.scss';

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Type of request");

  const options = [
    { value: "volunteer", label: "I’d like to volunteer" },
    { value: "partner", label: "I’d like to become a partner or sponsor" },
    { value: "spreadWord", label: "I’d like to spread the word" },
    { value: "feedback", label: "I have questions and/or feedback" },
    { value: "other", label: "Other" }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value, label) => {
    setSelectedOption(label);
    setIsOpen(false);
  };

  const changeStyle = selectedOption !== 'Type of request'

  return (
    <div className={styles.custom__select}>
      <div className={`${styles.select__trigger} ${isOpen ? styles.select__triggerBorder : ''}`} onClick={toggleDropdown}>
      <span className={`${changeStyle ? styles.select__selected : ''}`}>{selectedOption}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5 11L16 22L27 11" stroke="black"/>
</svg>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value, option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" name="requestType" value={selectedOption} />
    </div>
  );
};

export default CustomSelect;
