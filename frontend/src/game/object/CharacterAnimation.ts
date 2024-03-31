

export class CharacterAnimation extends Phaser.Animations.AnimationManager {

  constructor(game: Phaser.Game, playerCount: number) {
    super(game);

    let texture = 'npc';

    this.game.anims.create({
      key: `walk-left-${texture}`,
      frames: this.game.anims.generateFrameNumbers(texture, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.game.anims.create({

      key: `walk-right-${texture}`,
      frames: this.game.anims.generateFrameNumbers(texture, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    for (let i = 0; i < playerCount; i++) {
    texture = `player${i}`;
      this.game.anims.create({
        key: `walk-left-${texture}`,
        frames: this.game.anims.generateFrameNumbers(texture, {
          start: 0,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1,
      });
      this.game.anims.create({

        key: `walk-right-${texture}`,
        frames: this.game.anims.generateFrameNumbers(texture, {
          start: 5,
          end: 8,
        }),
        frameRate: 10,
        repeat: -1,
      });

    }

  }
}