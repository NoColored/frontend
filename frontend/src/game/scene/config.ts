import GameScene from '@/game/scene/GameScene';
import LoadPreLoadingScene from '@/game/scene/LoadPreLoadingScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 594,
  height: 342,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 200 },
      debug: true,
    },
  },
  scene: [LoadPreLoadingScene, GameScene],
};
