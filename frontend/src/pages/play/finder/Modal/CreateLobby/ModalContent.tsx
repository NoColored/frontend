import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { CreateRoom } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/play/finder/constants';
import MapItem from '@/pages/play/finder/Modal/CreateLobby/MapItem';
import * as styles from '@/pages/play/finder/Modal/index.css';

import { postCreateRoom } from '@/services/finder';

interface Props {
  defaultMapId: number;
  closeModal: () => void;
}

const ModalContent = ({ defaultMapId, closeModal }: Props) => {
  const navigate = useNavigate();
  const [createRoomInfo, setCreateRoomInfo] = useState<CreateRoom>({
    roomTitle: '',
    roomPassword: '',
    mapId: defaultMapId,
  });
  const [isDone, setIsDone] = useState<boolean>(true);

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
    if (createRoomInfo.roomTitle && createRoomInfo.roomPassword.length === 4) {
      const lobbyInfo = await postCreateRoom(createRoomInfo);
      if (lobbyInfo) {
        navigate(`/play/lobby/${lobbyInfo.roomUuid}`, { state: lobbyInfo });
        console.log(lobbyInfo);
        closeModal();
      } else {
        console.log('생성된 방 정보를 가져오는 데 실패했습니다.');
      }
    } else {
      setIsDone(false);
    }
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
          size='xsmall'
          text='취소'
          color='red'
          onClick={closeModal}
        />
        <ColoredButton
          size='medium'
          text='고고 !'
          color='green'
          onClick={handleClickCreateButton}
        />
      </div>
      {!isDone && (
        <div className={styles.alertMessage}>{constants.ALERT_MESSAGE}</div>
      )}
    </>
  );
};

export default ModalContent;
