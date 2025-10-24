import SearchModalContent from './SearchModalContent';

import ColoredButton from '@/components/button/ColoredButton';
import Modal, { useModal } from '@/components/modal';


const SearchLobby = () => {
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <ColoredButton
        size='xsmall'
        text='코드입력'
        color='green'
        onClick={openModal}
      />
      <Modal ref={modalRef}>
        <SearchModalContent closeModal={closeModal} />
      </Modal>
    </>
  );
};
export default SearchLobby;
