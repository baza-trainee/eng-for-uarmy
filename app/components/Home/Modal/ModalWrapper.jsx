// 'use client';
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import { useBodyScrollLock } from '@/app/hooks/useBodyScrollLock';
import styles from './Modal.module.scss';


export const ModalParams = () => {
  const router = useRouter();

  useBodyScrollLock(true);

  return (
    <section
        onClick={() => router.back()} 
        className={styles.backdrop}
        aria-label="Close modal"
>
        <div className={styles.scrollbar}>
            <Modal/>
        </div>
    </section>
  );
};