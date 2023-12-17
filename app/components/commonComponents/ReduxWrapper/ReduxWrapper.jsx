"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "@/redux/auth/auth-selectors";
import { refreshAdmin } from "@/redux/auth/auth-operations";

function ReduxWrapper({ children }) {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshAdmin());
  }, [dispatch]);

  return isRefreshing ? <div>Loading...</div> : <div>{children}</div>;
}

export default ReduxWrapper;