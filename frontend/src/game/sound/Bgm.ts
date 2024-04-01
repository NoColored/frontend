import Phaser from 'phaser';

export class BgmManager extends Phaser.Sound.BaseSound {
  private backgroundMusic: Phaser.Sound.BaseSound;

  constructor(scene: Phaser.Scene, key: string, loop: boolean = true) {
    super(scene.sound, key);

    this.backgroundMusic = scene.sound.add(key, { loop, volume: 0.4 });
    this.backgroundMusic.stop();
  }

  playBackgroundMusic(): void {
    const backgroundSound = localStorage.getItem('backgroundSound');
    if (backgroundSound === 'true') {
      this.backgroundMusic.play();
    }
  }

  stopBackgroundMusic(): void {
    if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
      this.backgroundMusic.stop();
    }
  }

  // 추가 기능 구현...
}
