import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useDataStale } from './hooks';

import BasicContentFrame from '@/components/frame';

import { ROUTE } from '@/constants/routes';
import { config, scenesConfig } from '@/features/game';
import { useGameWebSocket } from '@/features/websocket';

const Game = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const { webSocket } = useGameWebSocket();
  const { setDataStale } = useDataStale();

  useEffect(() => {
    webSocket.onDisconnect(() =>
      navigate(`${ROUTE.error}/400`, { replace: true }),
    );

    const game = new Phaser.Game({
      ...config,
      scene: scenesConfig(setIsActive, webSocket),
    });

    return () => {
      webSocket.cleanUp();
      game.destroy(true);
      setDataStale();
    };
  }, []);

  if (!isActive) {
    return <Navigate to={ROUTE.result} replace />;
  }

  return (
    <BasicContentFrame>
      <div id='game-container' />
    </BasicContentFrame>
  );
};

export default Game;
