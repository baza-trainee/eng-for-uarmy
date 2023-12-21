import { host } from "../baseSettings";

const getContacts = async () => {
    try {
        const response = await host.get("/api/admin/contacts");
        return response.data;
    } catch (error) {
        console.error("Error fetching contacts:", error);
    }
}
const getSocials = async () => {
    try {
        const response = await host.get("/api/admin/contacts/socials");
        return response.data;
    } catch (error) {
        console.error("Error fetching socials:", error);
    }
}

const updateContacts = async (data) => {
    try {
        const response = await host.put("/api/admin/contacts", data);
        return response.data;
    } catch (error) {
        console.error("Error updating contacts:", error);
    }
}

export { getContacts };
