import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { RequestEnterRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/play/finder/constants';
import * as styles from '@/pages/play/finder/Modal/index.css';

import { postEnterRoom } from '@/services/finder';

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
      console.log('비밀번호가 틀렸다.');
    } else {
      setIsValid(true);
      navigate(`/play/lobby/${roomId}`);
    }
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.contentBox}>
        <span>이 방의 Colored들은 </span>
        <span>아무하고나 쉽게 싸우지 않습니다 </span>
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
        {!isValid && (
          <div className={styles.alertMessage}>
            {constants.INVALID_INPUTVALUE}
          </div>
        )}
      </div>
    </div>
  );
};
export default PasswordModal;
