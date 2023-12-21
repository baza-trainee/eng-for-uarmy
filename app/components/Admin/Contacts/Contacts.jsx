"use client";
import { useState, useEffect } from "react";
import { AdminTitle } from "../../commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "../../commonComponents/AdminWrapper/AdminWrapper";
import ContactsForm from "./ContactsForm";
import { getContacts } from "@/app/api/adminAPI/contactsApi";

const Contacts = () => {
  const [formData, setFormData] = useState({number: "8989"});
  useEffect(() => {
        getContacts().then(setFormData)
  }, [])
    
    return <AdminWrapper>
        <AdminTitle title="Контакти" />
        <ContactsForm data={formData} />
    </AdminWrapper>
}

export default Contacts;