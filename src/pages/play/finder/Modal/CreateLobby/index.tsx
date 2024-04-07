import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import { MAPS } from '@/pages/play/finder/constants';
import ModalContent from '@/pages/play/finder/Modal/CreateLobby/ModalContent';

import { postCreateRoom } from '@/services/finder';

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
        <ModalContent
          roomTitle=''
          roomPassword=''
          mapId={MAPS[0].mapId}
          closeModal={closeModal}
          api={postCreateRoom}
          buttonText='방 만들기'
        />
      </Modal>
    </>
  );
};

export default CreateLobby;
