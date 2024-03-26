import { useEffect } from 'react';

import BasicContentFrame from '@/components/BasicContentFrame';

import { useWebSocket } from '@/hooks/useWebSocket';

import { config } from '@/game/scene/config';

const Game = () => {
  useWebSocket();

  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <BasicContentFrame>
      <div id='game-container' />
    </BasicContentFrame>
  );
};

export default Game;
