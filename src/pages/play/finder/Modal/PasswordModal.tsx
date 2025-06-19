import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { RequestEnterRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as styles from '@/pages/play/finder/Modal/index.css';
import MessageModalContent from '@/pages/play/finder/Modal/MessageModalContent';

import { postEnterRoom } from '@/services/finder';

import { ROUTE } from '@/router/constants';

interface Props {
  closeModal: () => void;
  roomCode: string;
}

const PasswordModal = ({ roomCode, closeModal }: Props) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [roomInfo, setRoomInfo] = useState<RequestEnterRoom>({
    roomCode,
    roomPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'roomPassword' && value.length > 4) return;
    setRoomInfo((info) => ({ ...info, [name]: value }));
  };

  const handleClickButton = async () => {
    const roomId = await postEnterRoom(roomInfo);
    if (!roomId || roomInfo.roomPassword.length !== 4) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigate(`${ROUTE.lobby}/${roomId}`);
    }
  };

  if (!isValid) {
    return (
      <>
        <MessageModalContent failed='PASSWORD' />
        <div className={styles.modalTwoButtonWrapper}>
          <ColoredButton
            size='small'
            text='확인'
            color='green'
            onClick={() => {
              setIsValid(true);
            }}
          />
        </div>
      </>
    );
  }
  return (
    <div className={styles.contentBox}>
      <span className={styles.text}>이 방의 Colored들은 </span>
      <span className={styles.text}>아무하고나 쉽게 싸우지 않습니다 </span>
      <InputTextBox
        name='roomPassword'
        placeholder='비밀번호 4자리를 입력하세요'
        size='small'
        type='text'
        value={roomInfo?.roomPassword}
        onChange={handleChange}
      />
      <div className={styles.modalTwoButtonWrapper}>
        <ColoredButton
          size='small'
          text='취소'
          color='navy'
          onClick={closeModal}
        />
        <ColoredButton
          size='small'
          text='확인'
          color='green'
          onClick={handleClickButton}
        />
      </div>
    </div>
  );
};
export default PasswordModal;
