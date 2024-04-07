import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

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
  const roomListData = useLoaderData() as RoomListItem[];
  const [roomList, setRoomList] = useState<RoomListItem[]>(roomListData);
  const [index, setIndex] = useState<number>(1);
  const [maxIndex, setMaxIndex] = useState<number>(
    roomList.length ? Math.ceil(roomList.length / 6) : 1,
  );

  const itemPerPage = 6;
  const offset = (index - 1) * itemPerPage;

  const addIndex = () => {
    setIndex(index + 1);
  };

  const subIndex = () => {
    setIndex(index - 1);
  };

  const refreshRoomList = async () => {
    setIndex(1);

    const list = await getRoomList(1);
    if (list.length > 0) {
      setRoomList(list);
      setMaxIndex(Math.ceil(roomList.length / itemPerPage));
    } else {
      setMaxIndex(1);
    }
  };

  const currentItems = roomList.slice(offset, offset + itemPerPage);

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
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
            onClick={refreshRoomList}
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
