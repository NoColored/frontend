export class EffectAnimations extends Phaser.Animations.AnimationManager {
  constructor(game: Phaser.Game) {
    super(game);

    this.game.anims.create({
      key: 'blowupAnim',
      frames: this.game.anims.generateFrameNumbers('blowup', {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: 0,
    });
  }
}
