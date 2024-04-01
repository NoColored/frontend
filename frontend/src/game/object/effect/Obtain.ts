import Phaser from 'phaser';

export class Obtain extends Phaser.Sound.BaseSound {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.sound, 'obtainSound');
    this.scene = scene;
    const effect = this.scene.sound.add('obtainSound', {
      loop: false,
      volume: 0.4,
    });
    const EffectSound = localStorage.getItem('effectSound');
    if (EffectSound === 'true') {
      effect.play();
    }
  }
}
