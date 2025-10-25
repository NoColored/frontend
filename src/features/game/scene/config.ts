import * as constants from '@/features/game/constants';
import GameScene from '@/features/game/scene/GameScene';
import LoadPreLoadingScene from '@/features/game/scene/LoadPreLoadingScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 594,
  height: 342,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: constants.GRAVITY },
      debug: false,
    },
  },
  // scene: [LoadPreLoadingScene, GameScene],
};

export const scenesConfig = (
  setIsActive: (isActive: boolean) => void,
  webSocket: GameSocket,
) => {
  return [LoadPreLoadingScene, new GameScene(setIsActive, webSocket)];
};
