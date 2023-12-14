import { useEffect } from 'react';

export const useBodyScrollLock= (shouldLock) => {
  useEffect(() => {
    if (shouldLock) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [shouldLock]);
};