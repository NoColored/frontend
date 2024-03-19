import { useEffect } from 'react';

import { config } from '@/game/config';

const Game = () => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id='game-container' />;
};

export default Game;
