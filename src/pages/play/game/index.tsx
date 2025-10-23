import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import BasicContentFrame from '@/components/frame';

import { ROUTE } from '@/constants/routes';
import { config, scenesConfig } from '@/features/game';
import { useWebSocketStore } from '@/features/websocket';

const Game = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const { webSocket } = useWebSocketStore.getState();

  const inGameDisconnect = () => {
    navigate(`${ROUTE.error}/400`, { replace: true });
  };

  useEffect(() => {
    const game = new Phaser.Game({
      ...config,
      scene: scenesConfig(setIsActive, inGameDisconnect),
    });

    return () => {
      webSocket.inGameUnconnected(() => {});
      game.destroy(true);
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
