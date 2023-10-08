import React, { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ requestType, setRequestType, action }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Contact us");

  const options = useMemo(() => [
    { label: t("volunteer") },
    { label: t("partner") },
    { label: t("spread") },
    { label: t("questions") },
    { label: t("other") },
  ], [t]);

  useEffect(() => {
    switch (action) {
      case "volunteer":
      setRequestType(options[0].label);
      break;

    case "partner":
      setRequestType(options[1].label);
      break;

    case "spread":
      setRequestType(options[2].label);
      break;

    default:
      setRequestType(t("type"));
  }
    console.log("action", action);
  }, [action, options, setRequestType, t]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (label) => {
    setRequestType(label)
    setIsOpen(false);
  };

  const changeStyle = requestType !== t("type");

  return (
    <div className={styles.select}>
      <div className={`${styles.select__trigger} ${isOpen ? styles.select__triggerBorder : ""}`}>
        <span className={`${changeStyle ? styles.select__selected : ""}`}>
          {requestType}
        </span>
        <button type="button" className={styles.select__btn} onClick={toggleDropdown}>
          {!isOpen
            ? <svg className={styles.select__icon} width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M3.90625 8.59375L12.5 17.1875L21.0938 8.59375" />
            </svg>
            : <svg className={styles.select__icon} width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M21.0938 16.4062L12.5 7.8125L3.90625 16.4062" />
            </svg>}
        </button>
      </div>

      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.label}
              onClick={() => handleOptionClick(option.label)}>
              {option.label}
            </li>))}
        </ul>)}
    </div>
  );
};

export default CustomSelect;
