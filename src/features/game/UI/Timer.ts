import * as constants from '@/features/game/constants';

export class Timer extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene) {
    super(scene, 480, 5, `0`, {
      fontFamily: 'Chonkly',
      fontSize: '40px',
      color: '#ffffff',
    });
    this.setOrigin(0.5, 0);
    this.setStroke('#000000', 6);
    this.scene.add.existing(this).setDepth(constants.INGAME_DEPTH.TIMER);
  }

  updateTIme(time: number) {
    this.setText(`${time}`);
  }
}
