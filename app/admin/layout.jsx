"use client"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { selectIsLoggedIn } from "@/redux/auth/auth-selectors";
import Sidebar from "../components/commonComponents/Sidebar/Sidebar";
import styles from "./admin.module.scss";

const AdminLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    !isLoggedIn && router.push('/login');
  }, [isLoggedIn, router]); 

  return (
    <main className={styles.main}>
      <Sidebar />
      {children}
    </main>
  );
};

export default AdminLayout;
