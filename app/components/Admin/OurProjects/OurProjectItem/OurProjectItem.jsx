"use client";

import Image from "next/image";
import Link from "next/link";
import { createRef, useState } from "react";

import { ModalWrapper } from "@/app/components/commonComponents/ModaWrapper/ModalWrapper";
import ModalPublish from "../../ModalPublish/ModalPublish";
import { SvgBorderBtn, SvgLoad } from "../SvgComponents/SvgComponents";
import dataProjects from "../data";

import styles from "./OurProjectItem.module.scss";

const OurProjectItem = () => {
  const [titleUa, setTitleUa] = useState(dataProjects[0].title_ua);
  const [titleEn, setTitleEn] = useState(dataProjects[0].title_en);
  const [textUa, setTextUa] = useState(dataProjects[0].text_ua);
  const [textEn, setTextEn] = useState(dataProjects[0].text_en);

  const [showModal, setSwowModal] = useState(false);

  const toggleModal = () => {
    setSwowModal(!showModal);
  };

  const handleChangeTitle = () => {
    setTitleUa(e.target.value);
    setTitleEn(e.target.value);
  };

  const handleChangeText = () => {
    setTextUa(e.target.value);
    setTextEn(e.target.value);
  };

  // const fileInput = createRef();

  const handleSubmit = () => {
    e.preventDefault();
    //   const selectedFile = fileInput.current.files[0].name;
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Наші проєкти</h2>

          {/* <div className={styles.box}> */}
          <p className={styles.textPhoto}>Фото</p>
          {/* <label htmlFor="photo">Фото</label>
        <input id="photo" type="file" ref={fileInput}/> */}
          <div className={styles.thumb}>
            <Image
              className={styles.img}
              src={dataProjects[0].src}
              width={410}
              height={398}
              alt="photo about project"
            />
            <Link
              className={styles.load}
              href="#"
              // onClick={(e) => e.currentTarget.blur()}
            >
              <SvgLoad />
            </Link>
          </div>
          {/* <p className={styles.text}>Заголовок</p> */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label className={styles.label} htmlFor="title">
                Заголовок
              </label>
              <div className={styles.boxInput}>
                <div className={styles.wrapperInput}>
                  <textarea
                    className={styles.inputTitle}
                    id="title"
                    type="text"
                    name="titleUa"
                    value={titleUa}
                    rows="5"
                    onChange={handleChangeTitle}
                  ></textarea>
                  <span className={styles.lang}>UKR</span>
                  <span className={styles.length}>
                    <span className={styles.lengthDinamic}>33</span>
                    /50
                  </span>
                </div>

                <div className={styles.wrapperInput}>
                  <textarea
                    className={styles.inputTitle}
                    id="title"
                    type="text"
                    name="titleEn"
                    value={titleEn}
                    rows="5"
                    onChange={handleChangeTitle}
                  ></textarea>
                  <span className={styles.lang}>ENG</span>
                  <span className={styles.length}>
                    <span className={styles.lengthDinamic}>27</span>
                    /50
                  </span>
                </div>
              </div>

              <label className={styles.label} htmlFor="text">
                Teкст
              </label>

              <div className={styles.boxInput}>
                <div className={styles.wrapperInput}>
                  <textarea
                    className={styles.inputText}
                    id="text"
                    type="text"
                    name="textUa"
                    value={textUa}
                    rows="10"
                    onChange={handleChangeText}
                  ></textarea>
                  <span className={styles.lang}>UKR</span>
                  <span className={styles.length}>
                    <span className={styles.lengthDinamic}>173</span>
                    /255
                  </span>
                </div>

                <div className={styles.wrapperInput}>
                  <textarea
                    className={styles.inputText}
                    id="text"
                    type="text"
                    name="textEn"
                    value={textEn}
                    rows="10"
                    onChange={handleChangeText}
                  ></textarea>
                  <span className={styles.lang}>ENG</span>
                  <span className={styles.length}>
                    <span className={styles.lengthDinamic}>131</span>
                    /255
                  </span>
                </div>
              </div>

              <label className={styles.label} htmlFor="source">
                Посилання на ресурс
              </label>
              <div className={styles.boxInputLink}>
                <textarea
                  className={`${styles.inputText} ${styles.inputLinkText}`}
                  name="linkSource"
                  id="source"
                  rows="1"
                  value="https://t.me/ENGforUARMY"
                ></textarea>
              </div>
            </div>
            <div className={styles.boxBtn}>
              <button
                className={styles.button}
                type="button"
                onClick={toggleModal}
              >
                Опублікувати
              </button>

              <div className={styles.btnWrapper} tabIndex={1}>
                <button className={`${styles.button} ${styles.btnDelete}`}>
                  Скасувати
                </button>
                <SvgBorderBtn />
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </section>

      {showModal && (
        <ModalWrapper onClose={toggleModal}>
          <ModalPublish onClose={toggleModal} />
        </ModalWrapper>
      )}
    </>
  );
};

export default OurProjectItem;
