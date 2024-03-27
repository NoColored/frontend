import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { CodeRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as styles from '@/pages/play/finder/Modal/index.css';

import { postEnterRoom } from '@/services/finder';

interface Props {
  closeModal: () => void;
  isMessage: () => void;
  key: string;
}

const PasswordModal = ({ key, closeModal, isMessage }: Props) => {
  const [roomInfo, setRoomInfo] = useState<CodeRoom>({
    roomCode: key,
    roomPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'roomPassword' && value.length > 4) return;
    setRoomInfo((info) => ({ ...info, [name]: value }));
  };

  const handleClickButton = async () => {
    isMessage();

    const roomUuid = await postEnterRoom(roomInfo);
    if (roomUuid) {
      navigate(`/play/lobby/${roomUuid}`, { state: roomUuid });
      closeModal();
    } else {
      console.log('방 정보가 없습니다.');
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
      </div>
    </div>
  );
};
export default PasswordModal;
