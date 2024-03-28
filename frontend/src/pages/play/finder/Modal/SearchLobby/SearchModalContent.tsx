import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from '../index.css';

import type { RequestEnterRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import MessageModalContent from '@/pages/play/finder/Modal/MessageModalContent';

import { postEnterRoom } from '@/services/finder';

interface Props {
  closeModal: () => void;
}

const SearchModalContent = ({ closeModal }: Props) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [roomInfo, setRoomInfo] = useState<RequestEnterRoom>({
    roomCode: '',
    roomPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'roomCode' && value.length > 4) return;
    if (name === 'roomPassword' && value.length > 4) return;
    setRoomInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const handleClickButton = async () => {
    const roomId = await postEnterRoom(roomInfo);
    if (!roomId) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigate(`/play/lobby/${roomId}`);
    }
  };

  if (!isValid) {
    return (
      <>
        <MessageModalContent failed='SEARCH' />
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
    <div className={styles.modalWrapper}>
      <div className={styles.contentBox}>
        <span>방장한테 허락은 맡으셨죠?</span>
        <InputTextBox
          name='roomCode'
          placeholder='대기실 코드 4자리를 입력하세요'
          size='small'
          type='text'
          value={roomInfo.roomCode}
          onChange={handleChange}
        />
        <InputTextBox
          name='roomPassword'
          placeholder='비밀번호 4자리를 입력하세요'
          size='small'
          type='text'
          value={roomInfo.roomPassword}
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
    </div>
  );
};

export default SearchModalContent;
