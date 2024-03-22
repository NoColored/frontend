import { useState } from 'react';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/play/finder/constants';
import MapItem from '@/pages/play/finder/Modal/CreateLobby/MapItem';
import * as styles from '@/pages/play/finder/Modal/index.css';

interface Props {
  map: string; // TODO: mapType으로 변경
  closeModal: () => void;
}

const ModalContent = ({ map, closeModal }: Props) => {
  const [isSelected, setIsSelected] = useState(map);

  return (
    <>
      <div className={styles.createLobbyTextGrid}>
        <div className={styles.createLobbyText}>방 제목</div>
        <div className={styles.createLobbyText}>비밀번호</div>
        <InputTextBox
          placeholder='몇글자가능할까요?'
          size='widthFull'
          type='text'
          onChange={() => {}}
        />

        <InputTextBox
          placeholder='숫자4자리'
          size='widthFull'
          type='text'
          onChange={() => {}}
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
          // 여기에 방생성하는 함수
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default ModalContent;
