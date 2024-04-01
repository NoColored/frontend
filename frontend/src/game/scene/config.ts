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
      debug: false,
    },
  },
  // scene: [LoadPreLoadingScene, GameScene],
};

export const scenesConfig = (
  setIsActive: (isActive: boolean) => void,
  onDisconnect: () => void,
) => {
  return [LoadPreLoadingScene, new GameScene(setIsActive, onDisconnect)];
};
