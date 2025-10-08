import * as constants from '@/features/game/constants';

export class Shuffle extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene) {
    const { width, height } = scene.scale;

    super(scene, width / 2, height / 2, 'shuffle');
    scene.add.existing(this);
    this.play('shuffleAnim').setSize(350, 350);

    this.setDepth(constants.INGAME_DEPTH.EFFECT);

    this.scene.time.addEvent({
      delay: 1500,
      callback: () => {
        this.destroy();
      },
      loop: false,
    });
  }
}
