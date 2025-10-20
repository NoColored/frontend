import { characterInfo } from '@/types/ingame';

import * as constants from '@/features/game/constants';

export class Character extends Phaser.Physics.Arcade.Sprite {
  private currentSkin: string;
  private direction: 'left' | 'right' | 'stop';

  private dirChanged: boolean;
  private skinChanged: boolean;

  isUser: boolean;

  constructor(
    scene: Phaser.Scene,
    texture: string,
    physicsMap: Phaser.Physics.Arcade.StaticGroup,
    characterInfoData: characterInfo,
  ) {
    super(scene, characterInfoData.x, characterInfoData.y, texture);

    // 사이즈 결정 필요
    this.scale = 9 / 80;
    this.isUser = false;

    // 충돌 관련 로직
    scene.physics.add.existing(this);
    scene.physics.add.collider(this, physicsMap);

    // 기본 값 설정
    this.currentSkin = '';
    this.direction = 'stop';
    this.dirChanged = false;
    this.skinChanged = false;

    this.setSkinState(texture);
    this.changePosition(characterInfoData);
    this.stopAnims();
    scene.add.existing(this).setDepth(constants.INGAME_DEPTH.CHARACTER);
  }

  changeDir(velocityX: number) {
    if (velocityX < 0 && this.direction !== 'left') {
      this.direction = 'left';
      this.dirChanged = true;
    } else if (velocityX > 0 && this.direction !== 'right') {
      this.direction = 'right';
      this.dirChanged = true;
    } else if (velocityX === 0 && this.direction !== 'stop') {
      this.direction = 'stop';
      this.dirChanged = true;
    }
  }

  playAnims() {
    if (!this.skinChanged && !this.dirChanged) {
      return;
    }
    this.skinChanged = false;
    this.dirChanged = false;
    const animKey = `walk-${this.direction}-${this.currentSkin}`;
    this.play(animKey, true);
    if (this.direction === 'stop') {
      this.anims.stop();
    }
  }

  // 아이템 등으로 인한 멈춤일때
  stopAnims() {
    this.anims.stop();
  }

  setSkinState(skin: string) {
    if (this.currentSkin === skin) return;
    this.currentSkin = skin;
    this.skinChanged = true;
    // this.createAnimations(skin);
  }

  changePosition(characterData: characterInfo) {
    // 정보값 변경
    this.setX(characterData.x);
    this.setY(characterData.y);
    this.setVelocityX(characterData.velX);
    this.setVelocityY(characterData.velY);

    // 방향 변경
    this.changeDir(characterData.velX);
  }

  setAsUser() {
    if (this.isUser) return;
    this.isUser = true;
  }

  setAsNoUser() {
    this.isUser = false;
  }
}
