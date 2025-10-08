import * as constants from '@/features/game/constants';

export class StopLoading extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'stopLoading');
    scene.add.existing(this);
    this.play('stopLoadingAnim').setScale(0.3);
    this.setDepth(constants.INGAME_DEPTH.EFFECT);

    this.scene.time.addEvent({
      delay: 2500,
      callback: () => this.destroy(),
      loop: false,
    });
  }
}
