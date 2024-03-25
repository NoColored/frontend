import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { RoomRequest } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/play/finder/constants';
import MapItem from '@/pages/play/finder/Modal/CreateLobby/MapItem';
import * as styles from '@/pages/play/finder/Modal/index.css';

import { postCreateRoom } from '@/services/finder';

interface Props {
  map: string; // TODO: mapType으로 변경
  closeModal: () => void;
}

const ModalContent = ({ map, closeModal }: Props) => {
  const [isSelected, setIsSelected] = useState(map);
  const [createRoomInfo, setCreateRoomInfo] = useState<RoomRequest>({
    roomTitle: '',
    roomPassword: '',
    mapId: 0,
  });
  const navigate = useNavigate();

  // map 을 어떻게 설정해서 api 요청에 담아서 보낼지 생각해봐야겠다.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCreateRoomInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const handleClickCreateButton = async () => {
    const selectedMap = constants.MAPS.find(
      (item) => item.mapType === isSelected,
    );

    if (selectedMap)
      setCreateRoomInfo((info) => ({
        ...info,
        mapId: selectedMap.mapId,
      }));
    else console.log('맵 정보를 불러오는 데 실패했습니다.');

    const data = await postCreateRoom(createRoomInfo);
    const uuid = data?.roomUuid;
    navigate(`/play/lobby/${uuid}`, { state: data });
    console.log(data);
    closeModal();
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
          value={createRoomInfo?.roomTitle}
          onChange={handleChange}
        />

        <InputTextBox
          name='roomPassword'
          placeholder='숫자4자리'
          size='widthFull'
          type='text'
          value={createRoomInfo?.roomPassword}
          onChange={handleChange}
        />
      </div>

      <fieldset className={styles.createLobbyMapPartWrapper}>
        <legend className={styles.createLobbyText}>맵</legend>
        {constants.MAPS.map((item) => (
          <MapItem
            key={item.imgSrc}
            mapName={item.mapName}
            imgSrc={item.imgSrc}
            isSelected={isSelected === item.mapType}
            onClick={() => {
              setIsSelected(item.mapType);
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
    </>
  );
};

export default ModalContent;
