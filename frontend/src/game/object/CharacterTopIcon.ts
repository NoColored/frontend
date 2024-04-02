import * as constants from '@/game/constants';
import { Character } from '@/game/object/Character';

export class CharacterTopIcon extends Phaser.GameObjects.Particles
  .ParticleEmitter {
  characters: Character[];
  followingCharacterIdx: number;

  constructor(scene: Phaser.Scene, texture: string, characters: Character[]) {
    super(scene, 0, -15, texture, { lifespan: 0 });
    this.setDepth(constants.INGAME_DEPTH.CHARACTER_TOP_ICON);
    this.scene.add.existing(this);
    this.characters = characters;
    this.followingCharacterIdx = -1;
  }

  followCharacter(characterIdx: number) {
    this.startFollow(this.characters[characterIdx]);
    this.followingCharacterIdx = characterIdx;
  }

  stopFollowing(characterIdx: number) {
    if (this.followingCharacterIdx === characterIdx) {
      this.stopFollow();
    }
  }
}
