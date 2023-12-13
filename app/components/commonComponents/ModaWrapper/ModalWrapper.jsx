'use client';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '@/app/hooks/useBodyScrollLock';
import styles from './ModalWrapper.module.scss';

export const ModalWrapper = ({onClose, children}) => {
  const modalRoot = document.querySelector('#modal-root');

  useBodyScrollLock(true);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');

        onClose();
      };
    };
        
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    console.log('Кликнули в бекдроп');

    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return createPortal(
    <div onClick={handleBackdropClick} 
      className={styles.backdrop}>
      <div className={styles.scrollbar}>
        {children}
      </div>
    </div>,
    modalRoot,
  )
};