import Sample from '@/game/scene/Sample.ts';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 200 },
      debug: true,
    },
  },
  scene: [Sample],
};
