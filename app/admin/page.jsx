"use client";
import Review from "../components/Admin/Review/Review";
import React, { useEffect } from "react";
import { ModalParams } from "../components/commonComponents/Sidebar/Modal/ModalWrapper";
import { bindPrevent } from "../libs/preventTab";

const AdminPage = ({ searchParams }) => {
  const showModal = searchParams?.modal;

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", bindPrevent);
    } else {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", bindPrevent);
    }
  }, [showModal]);

  return (
    <>
      <Review />
      {showModal && <ModalParams />}
    </>
  );
};

export default AdminPage;
