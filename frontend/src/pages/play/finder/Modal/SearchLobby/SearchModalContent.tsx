import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from '../index.css';

import type { RequestEnterRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/play/finder/constants';

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
      console.log('Error 처리 해라');
    }
    setIsValid(true);
    navigate(`/play/lobby/${roomId}`);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.contentBox}>
        <span>방장한테 허락은 맡으셨죠?</span>
        <InputTextBox
          placeholder='대기실 코드 4자리를 입력하세요'
          size='small'
          type='text'
          onChange={handleChange}
        />
        <InputTextBox
          placeholder='비밀번호 4자리를 입력하세요'
          size='small'
          type='text'
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
        {!isValid && (
          <div className={styles.alertMessage}>
            {constants.INVALID_INPUTVALUE}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModalContent;
