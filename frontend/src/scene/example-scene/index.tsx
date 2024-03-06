import { useEffect } from 'react';

import { config } from '@/scene/game-config';

const ExampleScene = () => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id='game-container' />;
};

export default ExampleScene;
