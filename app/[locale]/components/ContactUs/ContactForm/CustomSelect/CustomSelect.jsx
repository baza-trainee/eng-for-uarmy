"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { useTranslations } from "next-intl";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ action, requestType, setRequestType }) => {
  const [selectedOption, setSelectedOption] = useState(requestType);
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
    if (!requestType) {
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
    }
  }, [action, options, requestType, setRequestType, t]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (label) => {
    setRequestType(label)
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (isOpen) {
      if (e.key === "ArrowDown") {
        const currentIndex = options.findIndex((option) => option.label === selectedOption);
        const nextIndex = (currentIndex + 1) % options.length;
        setSelectedOption(options[nextIndex].label);
      } else if (e.key === "ArrowUp") {
        const currentIndex = options.findIndex((option) => option.label === selectedOption);
        const nextIndex = (currentIndex - 1 + options.length) % options.length;
        setSelectedOption(options[nextIndex].label);
      } else if (e.key === "Enter") {
        setRequestType(selectedOption);
        setIsOpen(!isOpen);
      }
    }
  };

  const changeStyle = requestType !== t("type");

  return (
    <div className={styles.select}>
      <div onClick={toggleDropdown}
        className={`${styles.select__trigger} ${isOpen && styles.select__triggerBorder}`}>
        <p className={`${changeStyle && styles.select__selected}`}>
          {requestType}
        </p>
        <button type="button" className={styles.select__btn}>
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
        <ul className={styles.options}
          tabIndex='0'
          onKeyDown={handleKeyDown}>
          {options.map((option) => (
            <li key={option.label}
              tabIndex='0'
              className={styles.options__item}
              onClick={() => handleOptionClick(option.label)}>
              <p className={styles.options__label}>{option.label}</p>
            </li>))}
        </ul>)}
    </div>
  );
};

export default CustomSelect;
