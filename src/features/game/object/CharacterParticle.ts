import * as constants from '@/features/game/constants';

export class CharacterParticle extends Phaser.GameObjects.Particles
  .ParticleEmitter {
  isTextureSetted: boolean;
  textures: string[];

  constructor(scene: Phaser.Scene, textures: string[]) {
    super(scene, 0, 0, textures[0], {
      scale: { start: 1, end: 0.4 },
      lifespan: 500,
      speed: 20,
      frequency: 100,
      quantity: 1,
    });
    this.isTextureSetted = false;
    this.textures = textures;
    this.scene.add.existing(this);
    this.setDepth(constants.INGAME_DEPTH.CHARACTER_PARTICLE);
  }

  setColor(colorIdx: number) {
    if (!this.isTextureSetted) {
      this.setTexture(this.textures[colorIdx]);
    }
  }

  followCharacter(character: Phaser.GameObjects.Sprite) {
    this.startFollow(character);
  }
}
