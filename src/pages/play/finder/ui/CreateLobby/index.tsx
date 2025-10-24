import ColoredButton from '@/components/button/ColoredButton';
import Modal, { useModal } from '@/components/modal';
import RoomSetting from '@/components/room-setting';

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
        <RoomSetting
          roomTitle=''
          roomPassword=''
          mapId={0}
          closeModal={closeModal}
          type='create'
          buttonText='방 만들기'
        />
      </Modal>
    </>
  );
};

export default CreateLobby;
