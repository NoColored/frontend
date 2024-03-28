import { useEffect, useState } from 'react';

import * as styles from './index.css';
import SearchLobby from './Modal/SearchLobby/index';

import type { RoomListItem } from '@/types/play';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';

import LobbyItem from '@/pages/play/finder/LobbyItem';
import CreateLobby from '@/pages/play/finder/Modal/CreateLobby';

import { getRoomList } from '@/services/finder';

const Finder = () => {
  const [roomList, setRoomList] = useState<RoomListItem[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [maxIndex, setMaxIndex] = useState<number>(1);

  const itemPerPage = 6;
  const offset = (index - 1) * itemPerPage;

  const addIndex = () => {
    setIndex(index + 1);
  };

  const subIndex = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    if (roomList.length !== 0) {
      setMaxIndex(Math.ceil(roomList.length / itemPerPage));
    } else {
      setMaxIndex(1);
    }

    const list = async () => {
      const data = await getRoomList(offset + 1);
      if (data) {
        setRoomList(data);
      } else {
        console.log('방 정보를 가져오는 데 실패했습니다.');
      }
    };

    console.log(roomList);
    list();
  }, [index]);

  const currentItems = roomList.slice(offset, offset + itemPerPage);

  return (
    <BasicContentFrame>
      <div className={styles.contentWrapper}>
        <div className={styles.topButtonsWrapper}>
          <span className={styles.rightButtonsWrapper}>
            <SearchLobby />
            <CreateLobby />
          </span>
          <ColoredButton
            size='xsmall'
            text='새로고침'
            color='blue'
            onClick={() => {
              setIndex(1);
            }}
          />
        </div>
        <div className={styles.partyListWrapper}>
          {currentItems.map((item) => (
            <LobbyItem key={item.roomCode} roomInfo={item} />
          ))}
        </div>
        <div className={styles.bottomButtonsWrapper}>
          <SettingTextButton
            size='xsmall'
            colorStyle={index === 1 ? 'gray' : 'black'}
            onClick={index === 1 ? () => {} : subIndex}
          >
            {`<`}
          </SettingTextButton>
          <SettingTextButton
            size='xsmall'
            colorStyle='black'
            onClick={() => {}}
          >
            {index}
          </SettingTextButton>
          <SettingTextButton
            size='xsmall'
            colorStyle={index === maxIndex ? 'gray' : 'black'}
            onClick={index === maxIndex ? () => {} : addIndex}
          >
            {`>`}
          </SettingTextButton>
        </div>
      </div>
    </BasicContentFrame>
  );
};
export default Finder;
