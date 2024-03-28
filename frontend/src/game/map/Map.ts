import Phaser from 'phaser';

import * as constants from '@/game/constants';

export class Map extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, mapId: string) {
    super(scene, 0, 0, mapId);
    this.setOrigin(0, 0);
    scene.add.existing(this).setDepth(constants.INGAME_DEPTH.MAP);
  }
}
