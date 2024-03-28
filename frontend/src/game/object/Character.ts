import { characterInfo } from '@/types/ingame';

export class Character extends Phaser.Physics.Arcade.Sprite {
  private currentSkin: string;
  private direction: 'left' | 'right' | 0;

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
    this.scale = 6 / 32;
    this.isUser = false;

    // 충돌 관련 로직
    scene.physics.add.existing(this);
    scene.physics.add.collider(this, physicsMap);

    // 기본 값 설정
    this.currentSkin = '';
    this.direction = 0;
    this.dirChanged = false;
    this.skinChanged = false;

    this.setSkinState(texture);
    this.changePosition(characterInfoData);
    this.stopAnims();
    scene.add.existing(this).setDepth(2);
  }

  // 애니메이션 생성
  createAnimations(texture: string) {
    const leftKey = `walk-left-${texture}`;
    const rightKey = `walk-right-${texture}`;
    if (this.anims.animationManager.exists(leftKey)) return;
    this.anims.create({
      key: leftKey,
      frames: this.anims.generateFrameNumbers(texture, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: rightKey,
      frames: this.anims.generateFrameNumbers(texture, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  changeDir(velocityX: number) {
    if (velocityX < 0 && this.direction !== 'left') {
      this.direction = 'left';
      this.dirChanged = true;
    } else if (velocityX > 0 && this.direction !== 'right') {
      this.direction = 'right';
      this.dirChanged = true;
    } else if (velocityX === 0 && this.direction !== 0) {
      this.direction = 0;
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
    if (this.direction === 0) {
      this.anims.stop();
      return;
    }
    this.play(animKey, true);
  }

  // 아이템 등으로 인한 멈춤일때
  stopAnims() {
    this.anims.stop();
  }

  setSkinState(skin: string) {
    if (this.isUser) return;

    console.log('setSkinState', skin);
    if (this.currentSkin === skin) return;
    this.currentSkin = skin;
    this.skinChanged = true;
    this.createAnimations(skin);
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
