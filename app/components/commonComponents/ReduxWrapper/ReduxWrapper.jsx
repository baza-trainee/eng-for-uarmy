"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { selectIsRefreshing } from "@/redux/auth/auth-selectors";
import { refreshAdmin } from "@/redux/auth/auth-operations";
import Loader from "../Loader/Loader";

function ReduxWrapper({ children }) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshAdmin());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && (pathname.includes('/login') || pathname.includes('/admin')) && <Loader />}
      <div>{children}</div>
    </>
  )
};

export default ReduxWrapper;