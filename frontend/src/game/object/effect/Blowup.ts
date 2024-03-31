export class Blowup extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'blowup');
    scene.add.existing(this);
    this.play('blowupAnim');
    this.once('animationcomplete', () => this.destroy());
  }
}
