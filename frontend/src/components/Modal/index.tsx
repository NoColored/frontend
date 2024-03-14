import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './index.css.ts';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={ref} className={styles.modal} onClose={onClose}>
      <div className={styles.content}>{children}</div>
    </dialog>,
    document.getElementById('modal') as HTMLDivElement,
  );
};

export default Modal;
