import { useEffect } from 'react';

export const useBodyScrollLockSimple = (shouldLock) => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldLock]);
};