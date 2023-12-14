"use client";
import { createContext, useContext, useState, useMemo } from 'react';

const ActionContext = createContext(0);

export const ActionProvider = ({ children }) => {
  const [action, setAction] = useState('');

  const providerValue = useMemo(() => {
    return {
      action,
      setAction,
    };
  }, [action]);

  return (
    <ActionContext.Provider value={providerValue}>
      {children}
    </ActionContext.Provider>
  );
};

export const useActionContext = () => {
  const { action, setAction } = useContext(ActionContext);

  return { action, setAction };
};