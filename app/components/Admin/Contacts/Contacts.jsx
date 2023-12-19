import { AdminTitle } from "../../commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "../../commonComponents/AdminWrapper/AdminWrapper";
import ContactsForm from "./ContactsForm";
const Contacts = () => {
    return <AdminWrapper>
        <AdminTitle title="Контакти" />
        <ContactsForm/>
    </AdminWrapper>
}

export default Contacts;