'use client';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from "next/navigation";
import { useBodyScrollLock } from '@/app/hooks/useBodyScrollLock';
import styles from './ModalWrapper.module.scss';

export const ModalWrapper = ({ onClose, children }) => {
  const pathname = usePathname();
  const modalRoot = document.querySelector('#modal-root');
  useBodyScrollLock(true);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      };
    };
        
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return createPortal(
    <div onClick={handleBackdropClick} 
      className={`${styles.backdrop} ${pathname === "/admin" && styles.backdropAdmin}`}>
      <div className={styles.scrollbar}>
        {children}
      </div>
    </div>,
    modalRoot,
  )
};