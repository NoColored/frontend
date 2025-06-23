import ModalContent from '@/components/frame/WithButtons/InfoButton/ModalContent';
import SettingIconButton from '@/components/button/SettingIconButton';

import useModal from '@/hooks/useModal';

const InfoButton = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <SettingIconButton
        src='/images/ui/icon/button/icon-button-information-h50w50.png'
        alt='info'
        onClick={openModal}
      />
      <Modal>
        <ModalContent onClose={closeModal} onBack={() => {}} />
      </Modal>
    </>
  );
};

export default InfoButton;
