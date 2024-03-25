import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import ModalContent from '@/pages/play/finder/Modal/CreateLobby/ModalContent';

const CreateLobby = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <ColoredButton
        size='xsmall'
        text='방만들기'
        color='red'
        onClick={openModal}
      />
      <Modal>
        <ModalContent mapType='basic' closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CreateLobby;
