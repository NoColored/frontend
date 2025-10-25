import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createRoom, updateRoom } from './api';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';
import Map from '@/components/map';

import { ROUTE } from '@/constants/routes';
import { MAP_ID_LIST } from '@/models/map';

const API_MAP = {
  create: createRoom,
  update: updateRoom,
} as const;

interface Props {
  roomTitle: string;
  roomPassword: string;
  mapId: MapId;
  closeModal: () => void;
  type: keyof typeof API_MAP;
  buttonText: string;
}

const RoomSettingForm = ({
  roomTitle,
  roomPassword,
  mapId,
  closeModal,
  type,
  buttonText,
}: Props) => {
  const api = API_MAP[type];
  const navigate = useNavigate();
  const [roomSetting, setRoomSetting] = useState<RoomSetting>({
    roomTitle,
    roomPassword,
    mapId,
  });
  const [isValidInfo, setIsValidInfo] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'roomTitle' && value.length > 9) return;
    if (name === 'roomPassword' && value.length > 4) return;
    setRoomSetting((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const handleClickCreateButton = async () => {
    if (!roomSetting.roomTitle || roomSetting.roomPassword.length !== 4) {
      setIsValidInfo(false);
      return;
    }

    await api(roomSetting).then((roomId) => {
      closeModal();
      if (roomId) {
        navigate(`${ROUTE.lobby}/${roomId}`, { replace: true });
      }
    });
  };

  return (
    <>
      <div className={styles.createLobbyTextGrid}>
        <div className={styles.createLobbyText}>방 제목</div>
        <div className={styles.createLobbyText}>비밀번호</div>
        <Input
          name='roomTitle'
          placeholder='몇 글자 가능할까요?'
          size='widthFull'
          type='text'
          value={roomSetting.roomTitle}
          onChange={handleChange}
        />

        <Input
          name='roomPassword'
          placeholder='숫자 4자리'
          size='widthFull'
          type='text'
          value={roomSetting.roomPassword}
          onChange={handleChange}
        />
      </div>

      <fieldset className={styles.createLobbySelectMap}>
        <legend className={styles.createLobbyText}>맵</legend>
        <div className={styles.createLobbyMapList}>
          {MAP_ID_LIST.map((id) => (
            <button
              key={id}
              type='button'
              className={styles.mapItemWrapper}
              onClick={() => setRoomSetting((prev) => ({ ...prev, mapId: id }))}
            >
              <Map mapId={id} selected={id === roomSetting.mapId} />
            </button>
          ))}
        </div>
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
        <div className={styles.alertMessage}>정보를 모두 입력해주세요.</div>
      )}
    </>
  );
};

export default RoomSettingForm;
