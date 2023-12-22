import { host } from "../baseSettings";

const fetchContacts = async () => {
    try {
        const response = await host.get("/api/admin/contacts");
        return response.data;
    } catch (error) {
        console.error("Error fetching contacts:", error);
    }
}
const fetchSocials = async () => {
    try {
        const response = await host.get("/api/admin/contacts/socials");
        return response.data;
    } catch (error) {
        console.error("Error fetching socials:", error);
    }
}

const fetchUpdateContacts = async (data) => {
    try {
        const response = await host.put("/api/admin/contacts", data);
        return response.data;
    } catch (error) {
        console.error("Error updating contacts:", error);
    }
}

export { fetchContacts, fetchSocials, fetchUpdateContacts };
