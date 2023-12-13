'use client';
import React, { useState, useEffect } from "react";
import Card from "./Cards/Card";
import styles from "./review.module.scss";

const Review = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cards");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className={styles.reviewArea}>
      <p className={styles.headerText}>ВІДГУКИ ПРО ПРОЕКТ</p>
      <div className={styles.buttonArea}>
        <button className={styles.button}>+ ДОДАТИ ВІДГУК</button>
      </div>
      <div>
        <div>
          {cards.map((card) => (
            <Card key={card._id} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
