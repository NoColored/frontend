import * as constants from '@/game/constants';

export class Timer extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene) {
    super(scene, 500, 5, `0`, {
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
