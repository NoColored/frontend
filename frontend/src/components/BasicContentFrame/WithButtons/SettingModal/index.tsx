import SettingIconButton from '@/components/button/SettingIconButton';
import Settings from '@/components/BasicContentFrame/WithButtons/SettingModal/Settings';
import useModal from '@/hooks/useModal';

interface userCheckProps {
  isGuest: boolean;
}

const SettingButton = ({ isGuest }: userCheckProps) => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <SettingIconButton
        src='/images/ui/icon/button/icon-button-setting-h50w50.png'
        alt='setting'
        onClick={openModal}
      />
      <Modal>
        <Settings onClose={closeModal} onBack={() => {}} isGuest={isGuest} />
      </Modal>
    </>
  );
};

export default SettingButton;
