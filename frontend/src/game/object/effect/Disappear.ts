export class Disappear extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'disappear');
    scene.add.existing(this);
    this.play('disappear');
    this.once('animationcomplete', () => this.destroy());
  }
}
