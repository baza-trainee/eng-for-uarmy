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

  return (
    <div className={styles.custom__select}>
      <div className={styles.select__trigger} onClick={toggleDropdown}>
        {selectedOption}
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
      {/* <input type="hidden" name="requestType" value={selectedOption} /> */}
    </div>
  );
};

export default CustomSelect;
