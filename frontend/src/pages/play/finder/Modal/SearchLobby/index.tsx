import { useState } from 'react';

import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/play/finder/Modal/index.css';
import MessageModalContent from '@/pages/play/finder/Modal/MessageModalContent';
import SearchModalContent from '@/pages/play/finder/Modal/SearchLobby/SearchModalContent';

const SearchLobby = () => {
  const { Modal, openModal, closeModal } = useModal();

  // isMessage를 recoil로 관리할 것
  const [isMessage, setIsMessage] = useState(false);
  const testFunc = () => {
    setIsMessage(true);
  };
  const testFunc2 = () => {
    setIsMessage(false);
  };
  return (
    <>
      <ColoredButton
        size='xsmall'
        text='코드입력'
        color='green'
        onClick={openModal}
      />
      <Modal>
        {isMessage ? (
          <div
            className={`${styles.modalWrapper} ${styles.messageModalWrapper}`}
          >
            <MessageModalContent failed='SEARCH' />
            <ColoredButton
              size='small'
              text='재시도'
              color='green'
              onClick={testFunc2}
            />
          </div>
        ) : (
          <SearchModalContent buttonLeft={closeModal} buttonRight={testFunc} />
        )}
      </Modal>
    </>
  );
};
export default SearchLobby;
