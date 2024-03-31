import { INGAME_DEPTH } from '@/game/constants';

export class CharacterIcon extends Phaser.GameObjects.Particles
  .ParticleEmitter {
  constructor(scene: Phaser.Scene, texture: string) {
    super(scene, 0, -15, texture, { lifespan: 0 });
    this.setDepth(INGAME_DEPTH.CHARACTER_ICON);
    this.scene.add.existing(this);
  }

  followCharacter(character: Phaser.Types.Math.Vector2Like) {
    this.startFollow(character);
  }
}
