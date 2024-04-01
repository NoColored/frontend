import * as constants from '@/game/constants';

export class Shuffle extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene) {
    const { width, height } = scene.scale;

    super(scene, width / 2, height / 2, 'shuffle');
    scene.add.existing(this);
    this.play('shuffleAnim').setSize(350, 350);
    const back = this.scene.add
      .image(width / 2, height / 2, 'gradient')
      .setDepth(constants.INGAME_DEPTH.EFFECT - 1);

    const maskGraphics = this.scene.make.graphics({ x: 0, y: 0 });
    maskGraphics.fillRoundedRect(width / 2, height / 2, 350, 350, 50);
    maskGraphics.closePath();
    const mask = maskGraphics.createGeometryMask();
    back.setMask(mask);

    this.setDepth(constants.INGAME_DEPTH.EFFECT);

    this.scene.time.addEvent({
      delay: 1500,
      callback: () => this.destroy(),
      loop: false,
    });
  }
}
