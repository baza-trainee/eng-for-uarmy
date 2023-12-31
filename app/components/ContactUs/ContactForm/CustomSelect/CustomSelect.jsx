"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { useTranslations } from "next-intl";
import { useActionContext } from '@/app/context/action';
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({ requestType, setRequestType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const { action } = useActionContext();
  const selectRef = useRef(null);
  const t = useTranslations("Contact us");

  const options = useMemo(() => [
    { label: t("volunteer") },
    { label: t("partner") },
    { label: t("spread") },
    { label: t("questions") },
    { label: t("other") },
  ], [t]);

  useEffect(() => {
    if (!requestType && action) {
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
        setRequestType(null);
      }
    }
  }, [action, options, requestType, setRequestType, t]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (label) => {
    setRequestType(label)
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionKeyDown = (e, selectedOption) => {
    // const currentIndex = options.findIndex((option) => option.label === selectedOption);
      // if (e.key === "ArrowDown") {
      //   const nextIndex = (currentIndex + 1) % options.length;
      //   setActiveOptionIndex(nextIndex);
      // } else if (e.key === "ArrowUp") {
      //   const nextIndex = (currentIndex - 1 + options.length) % options.length;
      //   setActiveOptionIndex(nextIndex);
      // } else
  if (e.key === "Enter") {
        setRequestType(selectedOption);
        setIsOpen(!isOpen);
      }
  };

  return (
    <div tabIndex='0'
      className={styles.select}
      ref={selectRef}
      onKeyDown={handleKeyDown}>
      <div onClick={toggleDropdown}
        className={`${styles.select__trigger} ${isOpen && styles.select__triggerBorder}`}>
        <div>
          <p className={!requestType ? styles.select__label : styles.select__labelUp}>{t("type")}</p>

          {requestType && requestType !== t("type") &&
            <p className={styles.select__selected}>{requestType}</p>}
        </div>
        
        {!isOpen
          ? <svg tabIndex='0' className={styles.select__icon} width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M3.90625 8.59375L12.5 17.1875L21.0938 8.59375" />
            </svg>
          : <svg tabIndex='0' className={styles.select__icon} width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M21.0938 16.4062L12.5 7.8125L3.90625 16.4062" />
          </svg>}
      </div>

      {isOpen && (
        <ul className={styles.options}>
          {options.map((option, idx) => (
            <li key={option.label}
              tabIndex='0'
              className={`${styles.options__item} ${idx === activeOptionIndex && styles.options__itemActive}`}
              onClick={() => handleOptionClick(option.label)}
              onKeyDown={(e) => handleOptionKeyDown(e, option.label)}>
              <p className={styles.options__label}>{option.label}</p>
            </li>))}
        </ul>)}
    </div>
  );
};

export default CustomSelect;
