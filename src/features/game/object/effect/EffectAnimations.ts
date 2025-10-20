export class EffectAnimations extends Phaser.Animations.AnimationManager {
  constructor(game: Phaser.Game) {
    super(game);

    this.game.anims.create({
      key: 'blowupAnim',
      frames: this.game.anims.generateFrameNumbers('blowup', {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.game.anims.create({
      key: 'stopLoadingAnim',
      frames: this.game.anims.generateFrameNumbers('stopLoading', {
        start: 0,
        end: 11,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.game.anims.create({
      key: 'shuffleAnim',
      frames: this.game.anims.generateFrameNumbers('shuffle', {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.game.anims.create({
      key: 'disappearAnim',
      frames: this.game.anims.generateFrameNumbers('disappear', {
        start: 0,
        end: 3,
      }),
      frameRate: 20,
      repeat: 0,
    });
  }
}
