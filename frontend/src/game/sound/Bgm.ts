import Phaser from 'phaser';

export class BgmManager {
  private scene: Phaser.Scene;
  private backgroundMusic: Phaser.Sound.BaseSound;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  public addBackgroundMusic(key: string, loop: boolean = true): void {
    if (this.backgroundMusic) {
      this.backgroundMusic.stop();
    }
    this.backgroundMusic = this.scene.sound.add(key, { loop }).setVolume(0.3);
    this.backgroundMusic.play();
  }

  public stopBackgroundMusic(): void {
    if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
      this.backgroundMusic.stop();
    }
  }

  // 추가 기능 구현...
}
