import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import SearchModalContent from '@/pages/play/finder/Modal/SearchLobby/SearchModalContent';

const SearchLobby = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <ColoredButton
        size='xsmall'
        text='코드입력'
        color='green'
        onClick={openModal}
      />
      <Modal>
        <SearchModalContent closeModal={closeModal} />)
      </Modal>
    </>
  );
};
export default SearchLobby;
