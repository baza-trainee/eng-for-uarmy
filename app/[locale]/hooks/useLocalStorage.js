"use client";
import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const isBrowser = typeof window !== "undefined";

  const [state, setState] = useState(() => {
    if (isBrowser) {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state, isBrowser]);

  return [state, setState];
}