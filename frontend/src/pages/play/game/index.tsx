import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BasicContentFrame from '@/components/BasicContentFrame';

import { useGameControl } from '@/states/game';

import { config, scenesConfig } from '@/game/scene/config';

const Game = () => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useGameControl();
  useEffect(() => {
    if (!isActive) {
      navigate('/result', { replace: true });
      return () => {};
    }

    const game = new Phaser.Game({
      ...config,
      scene: scenesConfig(setIsActive),
    });

    return () => {
      setIsActive(true);
      game.destroy(true);
    };
  }, [isActive, setIsActive, navigate]);

  return (
    <BasicContentFrame>
      <div id='game-container' />
    </BasicContentFrame>
  );
};

export default Game;
