import { postCreateRoom } from '../../api';
import ModalContent from './ModalContent';

import ColoredButton from '@/components/button/ColoredButton';
import Modal, { useModal } from '@/components/modal';

const CreateLobby = () => {
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <ColoredButton
        size='xsmall'
        text='방만들기'
        color='red'
        onClick={openModal}
      />
      <Modal ref={modalRef}>
        <ModalContent
          roomTitle=''
          roomPassword=''
          mapId={0}
          closeModal={closeModal}
          api={postCreateRoom}
          buttonText='방 만들기'
        />
      </Modal>
    </>
  );
};

export default CreateLobby;
