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
  const exampleData = [
    {
      roomTitle: '로비이름최대아글',
      userNumber: 4,
      mapId: 0,
      roomCode: '',
    },
    {
      roomTitle: '로비이름최대아홉글',
      userNumber: 1,
      mapId: 0,
      roomCode: '',
    },
    {
      roomTitle: '로비이름최',
      userNumber: 1,
      mapId: 1,
      roomCode: '',
    },
    {
      roomTitle: '로비이름최대아',
      userNumber: 2,
      mapId: 1,
      roomCode: '',
    },
    {
      roomTitle: '로비이름아홉글',
      userNumber: 1,
      mapId: 0,
      roomCode: '',
    },
    {
      roomTitle: '로비이대아홉글',
      userNumber: 1,
      mapId: 1,
      roomCode: '',
    },
  ];
  const [roomList, setRoomList] = useState<RoomListItem[]>(exampleData);

  const [index, setIndex] = useState<number>(1);

  const [maxIndex, setMaxIndex] = useState<number>(1);

  const addIndex = () => {
    setIndex(index + 1);
  };

  const subIndex = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    setMaxIndex(1);
    const list = async () => {
      const data = await getRoomList(0);
      if (data) {
        setRoomList(data);
        console.log(roomList);
      } else {
        console.log('방 정보를 가져오는 데 실패했습니다.');
      }
    };

    list();
  }, [roomList]);

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
            onClick={() => {}}
          />
        </div>
        <div className={styles.partyListWrapper}>
          {roomList.map((item) => (
            <LobbyItem
              // key도 바꿔줘야됨
              key={`${item.roomTitle}-${index}`}
              roomTitle={item.roomTitle}
              userNumber={item.userNumber}
              mapId={item.mapId}
            />
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
