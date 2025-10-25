import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import Chip from '@/components/chip';

import Players from '@/pages/play/lobby/Players';
import SettingButton from '@/pages/play/lobby/SettingButton';

import { getOut } from '@/services/lobby';

import { useWebSocket } from '@/features/websocket';
import Map from '@/models/map';
import { useUserCode } from '@/models/user';
import { ROUTE } from '@/shared/constants';

const getLobbyInfo = (lobby: Lobby) => {
  lobby.players.forEach((player, index) => {
    player.isMaster = index === lobby.masterIndex;
    player.key = `${player.userCode}${index}`;
  });
  return lobby;
};

const Lobby = () => {
  const myUserCode = useUserCode();
  const navigate = useNavigate();
  const lobbyData = useLoaderData() as Lobby;
  const [lobbyInfo, setLobbyInfo] = useState(getLobbyInfo(lobbyData));

  const isMaster =
    lobbyInfo.players[lobbyInfo.masterIndex].userCode === myUserCode;

  useWebSocket((message: WebsocketMessageFriendlyMatch) => {
    if (message.action === 'roomInfo') {
      setLobbyInfo(getLobbyInfo(message.data));
      return;
    }
    if (message.action === 'gameStart') {
      navigate(ROUTE.game, { replace: true });
    }
  });

  useEffect(() => {
    return () => {
      getOut();
    };
  }, []);

  return (
    <>
      <SettingNavigationButton
        usage='frame'
        label='< 나가기'
        onClick={() => navigate(ROUTE.finder, { replace: true })}
        position='leftTop'
      />
      <div className={styles.lobby}>
        <div className={styles.settings}>
          {isMaster && <SettingButton lobby={lobbyInfo} />}
          <div className={styles.mapInfo}>
            <Map mapId={lobbyInfo.mapId} />
          </div>
          <div className={styles.code}>{lobbyInfo.roomCode}</div>
          <Chip color='red' text='코드번호' />
          <div className={styles.code}>{lobbyInfo.roomPassword}</div>
          <Chip color='red' text='비밀번호' />
        </div>
        <div className={styles.lobbyInfo}>
          <div className={styles.lobbyTitle}>{lobbyInfo.roomTitle}</div>
          <Players players={lobbyInfo.players} myCode={myUserCode} />
        </div>
      </div>
    </>
  );
};

export default Lobby;
