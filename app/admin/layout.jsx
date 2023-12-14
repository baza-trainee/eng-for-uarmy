import Sidebar from "../components/commonComponents/Sidebar/Sidebar";
import "./globals.scss";
import styles from "./admin.module.scss";
import fonts from "../../assets/fonts/fontsSrc";

const AdminLayout = async ({ children }) => {
  return (
    <html lang="uk">
      <body className={fonts.furore.className}>
        <main className={styles.main}>
          <Sidebar />
          {children}
        </main>

        <div id="modal-root"></div> 
      </body>
    </html>
  );
};

export default AdminLayout;
