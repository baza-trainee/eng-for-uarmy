import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";

const Card = ({ data, onEdit, onDelete }) => {
  const {
    imageUrl,
    textUk,
    textEn,
    nameUk,
    nameEn,
    designationUk,
    designationEn,
  } = data;

  return (
    <div className={styles.cardArea}>
      <img src={imageUrl} alt="Card Image" className={styles.image} />
      <div className={styles.textAndName}>
        <p className={styles.text}>{textUk}</p>
        <p className={styles.nameUk}>{nameUk}</p>
        <p className={styles.designation}>{designationUk}</p>
      </div>
      <div className={styles.buttonArea}>
        <Link href="/admin/changeReview">
          <Image src="./Frame.svg" width={40} height={40}></Image>
        </Link>
        <Link href="/admin/deleteReview">
          <Image src="./trash-01.svg" width={40} height={40}></Image>
        </Link>
      </div>
    </div>
  );
};

export default Card;
