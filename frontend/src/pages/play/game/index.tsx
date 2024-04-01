import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BasicContentFrame from '@/components/BasicContentFrame';

import { useGameControl } from '@/states/game';

import { config, scenesConfig } from '@/game/scene/config';
import { ROUTE } from '@/router/constants';

const Game = () => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useGameControl();
  const inGameDisconnect = () => {
    navigate(`${ROUTE.error}/400`, { replace: true });
  };
  useEffect(() => {
    if (!isActive) {
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
