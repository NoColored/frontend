import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { Lobby } from '@/types/play';
import type { ActionDataTypeMap } from '@/types/websocket';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import { useWebSocket } from '@/hooks/useWebSocket';

import MapInfo from '@/pages/play/lobby/MapInfo';
import Players from '@/pages/play/lobby/Players';
import SettingButton from '@/pages/play/lobby/SettingButton';

import { getOut } from '@/services/lobby';

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
  const lobbyData = useLoaderData() as Lobby;
  const [lobbyInfo, setLobbyInfo] = useState(getLobbyInfo(lobbyData));

  useWebSocket((message) => {
    if (message.action === 'roomInfo') {
      setLobbyInfo(getLobbyInfo(message.data as ActionDataTypeMap['roomInfo']));
    }
  });

  return (
    <BasicContentFrame backButtonLabel='나가기' onBeforeButtonClick={getOut}>
      <div className={styles.lobby}>
        <div className={styles.settings}>
          <SettingButton lobby={lobbyInfo} />
          <MapInfo mapId={lobbyInfo.mapId} />
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
