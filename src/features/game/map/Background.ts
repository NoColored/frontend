import Phaser from 'phaser';

import * as constants from '@/features/game/constants';

export class Background extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, mapId: string) {
    super(scene, 0, 0, mapId);
    this.setOrigin(0, 0);
    scene.add.existing(this).setDepth(constants.INGAME_DEPTH.BACKGROUND);
  }
}
