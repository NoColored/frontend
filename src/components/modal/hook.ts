import { useCallback, useRef } from 'react';

export const useModal = (
  props: {
    onOpen?: () => void;
    onClose?: () => void;
  } = {},
) => {
  const { onOpen, onClose } = props;
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback(() => {
    modalRef.current?.showModal();
    if (onOpen) {
      onOpen();
    }
  }, [onOpen]);

  const closeModal = useCallback(() => {
    modalRef.current?.close();
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return { modalRef, openModal, closeModal };
};
