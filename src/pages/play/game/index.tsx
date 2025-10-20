import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BasicContentFrame from '@/components/frame';

import { useGameControl } from '@/states/game';

import { ROUTE } from '@/constants/routes';
import { config, scenesConfig } from '@/features/game';
import { useWebSocketStore } from '@/features/websocket';

const Game = () => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useGameControl();

  const { webSocket } = useWebSocketStore.getState();
  const inGameDisconnect = () => {
    navigate(`${ROUTE.error}/400`, { replace: true });
  };
  useEffect(() => {
    if (!isActive) {
      webSocket.inGameUnconnected(() => {});
      navigate(ROUTE.result, { replace: true });
      return () => {};
    }

    const game = new Phaser.Game({
      ...config,
      scene: scenesConfig(setIsActive, inGameDisconnect),
    });

    return () => {
      setIsActive(true);
      game.destroy(true);
    };
  }, [isActive]);

  return (
    <BasicContentFrame>
      <div id='game-container' />
    </BasicContentFrame>
  );
};

export default Game;
