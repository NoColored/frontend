import { ReactNode, useCallback, useRef } from 'react';

import ModalComponent from '@/components/modal';

interface ModalProps {
  children: ReactNode;
}

const useModal = (
  props: {
    onOpen?: () => void;
    onClose?: () => void;
  } = {},
) => {
  const { onOpen, onClose } = props;
  const ref = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    ref.current?.showModal();
    if (onOpen) {
      onOpen();
    }
  };

  const closeModal = () => {
    ref.current?.close();
    if (onClose) {
      onClose();
    }
  };

  const Modal = useCallback(({ children }: ModalProps) => {
    return <ModalComponent ref={ref}>{children}</ModalComponent>;
  }, []);

  return { Modal, openModal, closeModal };
};

export default useModal;
