export default class CountDown {
  private scene: Phaser.Scene;
  private countDownText: Phaser.GameObjects.Text | null;
  private countDownSound: Phaser.Sound.BaseSound | null | undefined;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.countDownText = null;
  }

  createCountDown() {
    const { width, height } = this.scene.scale;
    this.countDownText = this.scene.add.text(width / 2, height / 2, '3', {
      fontFamily: 'Chonkly',
      fontSize: '200px',
      color: '#ffffff',
    });
    this.countDownText.setOrigin(0.5, 0.5);
    this.countDownText.setStroke('#000000', 6);
    this.countDownText.setDepth(300);
    this.countDownText.alpha = 0.7;
    this.countDownText.visible = false;

    this.countDownSound = this.scene.sound.add('countdownSound');
  }

  showCountDown() {
    if (this.countDownText === null) return;
    this.countDownText.visible = true;
  }

  changeCountDownText(number: number) {
    if (this.countDownText === null) return;
    if (number > 3) {
      this.countDownText.setText('0');
      return;
    }

    const EffectSoundOnOff = localStorage.getItem('effectSound');
    if (EffectSoundOnOff === 'true' || EffectSoundOnOff === null) {
      this.countDownSound?.play();
    }

    this.countDownText.setText(`${number}`);
  }

  destroyCountDown() {
    if (this.countDownText === null) return;
    this.countDownText.destroy();
  }
}
