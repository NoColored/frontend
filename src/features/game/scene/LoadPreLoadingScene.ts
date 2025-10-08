import Phaser from 'phaser';

export default class LoadPreLoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadPreLoadingScene');
  }

  preload() {
    this.load.spritesheet(
      'loading',
      '/images/ui/loading/loading-sheet-h100w100.png',
      {
        frameWidth: 100,
        frameHeight: 100,
      },
    );
  }

  create() {
    this.scene.start('GameScene');
    this.scene.remove('LoadPreLoadingScene');
  }
}
