import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { CreateRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/play/finder/constants';
import MapItem from '@/pages/play/finder/Modal/CreateLobby/MapItem';
import * as styles from '@/pages/play/finder/Modal/index.css';

import { ROUTE } from '@/router/constants';

interface Props {
  roomTitle: string;
  roomPassword: string;
  mapId: number;
  closeModal: () => void;
  api: (roomRequest: CreateRoom) => Promise<string>;
  buttonText: string;
}

const ModalContent = ({
  roomTitle,
  roomPassword,
  mapId,
  closeModal,
  api,
  buttonText,
}: Props) => {
  const navigate = useNavigate();
  const [createRoomInfo, setCreateRoomInfo] = useState<CreateRoom>({
    roomTitle,
    roomPassword,
    mapId,
  });
  const [isValidInfo, setIsValidInfo] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'roomTitle' && value.length > 9) return;
    if (name === 'roomPassword' && value.length > 4) return;
    setCreateRoomInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const handleClickCreateButton = async () => {
    if (!createRoomInfo.roomTitle || createRoomInfo.roomPassword.length !== 4) {
      setIsValidInfo(false);
      return;
    }

    await api(createRoomInfo).then((roomId) => {
      closeModal();
      if (roomId) {
        navigate(`${ROUTE.lobby}/${roomId}`);
      }
    });
  };

  return (
    <>
      <div className={styles.createLobbyTextGrid}>
        <div className={styles.createLobbyText}>방 제목</div>
        <div className={styles.createLobbyText}>비밀번호</div>
        <InputTextBox
          name='roomTitle'
          placeholder='몇글자가능할까요?'
          size='widthFull'
          type='text'
          value={createRoomInfo.roomTitle}
          onChange={handleChange}
        />

        <InputTextBox
          name='roomPassword'
          placeholder='숫자4자리'
          size='widthFull'
          type='text'
          value={createRoomInfo.roomPassword}
          onChange={handleChange}
        />
      </div>

      <fieldset className={styles.createLobbyMapPartWrapper}>
        <legend className={styles.createLobbyText}>맵</legend>
        {constants.MAPS.map((item) => (
          <MapItem
            key={item.mapId}
            mapName={item.mapName}
            imgSrc={item.imgSrc}
            isSelected={item.mapId === createRoomInfo.mapId}
            onClick={() => {
              setCreateRoomInfo((prev) => ({
                ...prev,
                mapId: item.mapId,
              }));
            }}
          />
        ))}
      </fieldset>

      <div className={styles.modalTwoButtonWrapper}>
        <ColoredButton
          size='medium'
          text='취소'
          color='red'
          onClick={closeModal}
        />
        <ColoredButton
          size='medium'
          text={buttonText}
          color='green'
          onClick={handleClickCreateButton}
        />
      </div>
      {!isValidInfo && (
        <div className={styles.alertMessage}>{constants.ALERT_MESSAGE}</div>
      )}
    </>
  );
};

export default ModalContent;
