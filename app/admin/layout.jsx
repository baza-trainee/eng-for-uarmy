import Sidebar from "../components/commonComponents/Sidebar/Sidebar";
import styles from "./admin.module.scss";

const AdminLayout = async ({ children }) => {
  return (
    <main className={styles.main}>
      <Sidebar />
        {children}
    </main>
  );
};

export default AdminLayout;
