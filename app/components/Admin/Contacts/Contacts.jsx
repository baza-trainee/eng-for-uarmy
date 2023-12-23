"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AdminTitle } from "../../commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "../../commonComponents/AdminWrapper/AdminWrapper";
import ContactsForm from "./ContactsForm";
import { getContacts } from "@/redux/admin/admin-operathions";
import { ModalWrapper } from "../../commonComponents/ModaWrapper/ModalWrapper";
import PublishModal from "../PublishModal/PublishModal";

const Contacts = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const toggleModal = () => {
        setShowModal(!showModal);
    };
  
    useEffect(() => {
      dispatch(getContacts())
    }, [dispatch])
    
  return <>
    <AdminWrapper>
        <AdminTitle title="Контакти" />
        <ContactsForm onClose={toggleModal}/>
    </AdminWrapper>
    {showModal && (
        <ModalWrapper onClose={toggleModal}>
            <PublishModal onClose={toggleModal}/>
        </ModalWrapper>
    )}
  </>
}

export default Contacts;