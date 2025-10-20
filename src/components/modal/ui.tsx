import { forwardRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './index.css';

interface Props {
  children: ReactNode;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ children }, ref) => {
  return createPortal(
    <dialog ref={ref} className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </dialog>,
    document.getElementById('modal') as HTMLDivElement,
  );
});

export default Modal;
