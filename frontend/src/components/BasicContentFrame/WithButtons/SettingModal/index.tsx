import SettingIconButton from '@/components/button/SettingIconButton';
import Settings from '@/components/BasicContentFrame/WithButtons/SettingModal/Settings';
import useModal from '@/hooks/useModal';

const SettingButton = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <SettingIconButton
        src='/images/ui/icon/button/icon-button-setting-h50w50.png'
        alt='setting'
        onClick={openModal}
      />
      <Modal>
        <Settings onClose={closeModal} onBack={() => {}} />
      </Modal>
    </>
  );
};

export default SettingButton;
