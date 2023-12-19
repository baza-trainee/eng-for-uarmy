'use client';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { selectIsLoggedIn } from "@/redux/auth/auth-selectors";
import { host } from "../../../api/baseSettings";
import Card from "./Cards/Card";
import styles from "./review.module.scss";

const Review = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    !isLoggedIn && router.push('/login');
  }, [isLoggedIn, router]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await host.get("/api/admin/reviews");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.reviewArea}>
      <p className={styles.headerText}>ВІДГУКИ ПРО ПРОЕКТ</p>
      <div className={styles.buttonArea}>
        <button className={styles.button}>+ ДОДАТИ ВІДГУК</button>
      </div>
      <div>
        <div>
          {currentCards.map((card) => (
            <Card key={card._id} data={card} />
          ))}
        </div>
        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <p>
            {currentPage} з {totalPages}
          </p>
          <button
            className={styles.paginationButton}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
