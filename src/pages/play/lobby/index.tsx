import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { Lobby } from '@/types/play';
import type { ActionDataTypeMap } from '@/types/websocket';

import BasicContentFrame from '@/components/frame/with-buttons';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import { useWebSocket } from '@/hooks/useWebSocket';

import { MAPS } from '@/pages/play/finder/constants';
import MapInfo from '@/pages/play/lobby/MapInfo';
import Players from '@/pages/play/lobby/Players';
import SettingButton from '@/pages/play/lobby/SettingButton';

import { getOut } from '@/services/lobby';

import { useUserStateStore } from '@/states/user';

import { ROUTE } from '@/router/constants';

const getLobbyInfo = (lobby: Lobby) => {
  lobby.players.forEach((player, index) => {
    player.color = player.userCode
      ? constants.PLAYER_COLORS[index]
      : constants.EMPTY_PLAYER_COLOR;
    player.isMaster = index === lobby.masterIndex;
    player.key = `${player.userCode}${index}`;
  });
  return lobby;
};

const Lobby = () => {
  const myUserCode = useUserStateStore((state) => state.userCode);
  const navigate = useNavigate();
  const lobbyData = useLoaderData() as Lobby;
  const [lobbyInfo, setLobbyInfo] = useState(getLobbyInfo(lobbyData));

  const mapInfo = MAPS.find((map) => map.mapId === lobbyInfo.mapId);

  const isMaster =
    lobbyInfo.players[lobbyInfo.masterIndex].userCode === myUserCode;

  useWebSocket((message) => {
    if (message.action === 'roomInfo') {
      setLobbyInfo(getLobbyInfo(message.data as ActionDataTypeMap['roomInfo']));
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
    <BasicContentFrame
      leftButton={{
        label: '나가기',
        navigateTo: ROUTE.finder,
      }}
    >
      <div className={styles.lobby}>
        <div className={styles.settings}>
          {isMaster && <SettingButton lobby={lobbyInfo} />}
          {mapInfo && <MapInfo map={mapInfo} />}
          <div className={styles.code}>{lobbyInfo.roomCode}</div>
          <ColoredTextBox size='small' color='red' text='코드번호' />
          <div className={styles.code}>{lobbyInfo.roomPassword}</div>
          <ColoredTextBox size='small' color='red' text='비밀번호' />
        </div>
        <div className={styles.lobbyInfo}>
          <div className={styles.lobbyTitle}>{lobbyInfo.roomTitle}</div>
          <Players players={lobbyInfo.players} />
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Lobby;
