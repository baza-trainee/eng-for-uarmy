"use client"
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from "next/navigation";
import Sidebar from "../components/commonComponents/Sidebar/Sidebar";
import styles from "./admin.module.scss";

const AdminLayout = ({ children }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    !isLoggedIn && !isRefreshing && router.push('/login');
  }, [isLoggedIn, isRefreshing, router]); 

  return (
    <main className={styles.main}>
      <Sidebar />
      {children}
    </main>
  );
};

export default AdminLayout;
