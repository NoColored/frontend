import { useEffect } from 'react';

import BasicContentFrame from '@/components/BasicContentFrame';

import { config } from '@/game/config';

const Game = () => {
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
