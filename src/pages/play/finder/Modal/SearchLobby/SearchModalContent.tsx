import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postEnterRoom } from '../../api';
import * as styles from '../index.css';
import MessageModalContent from '../MessageModalContent';

import type { RequestEnterRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';

import { ROUTE } from '@/constants/routes';

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
      navigate(`${ROUTE.lobby}/${roomId}`);
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
    <div className={styles.contentBox}>
      <span>방장한테 허락은 맡으셨죠?</span>
      <Input
        name='roomCode'
        placeholder='대기실 코드 4자리를 입력하세요'
        size='small'
        type='text'
        value={roomInfo.roomCode}
        onChange={handleChange}
      />
      <Input
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
  );
};

export default SearchModalContent;
