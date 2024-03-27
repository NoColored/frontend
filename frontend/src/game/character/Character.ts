import { characterInfo } from '@/types/ingame';

export class Character extends Phaser.Physics.Arcade.Sprite {
  private currentSkin: string;

  private velX: number;

  constructor(
    scene: Phaser.Scene,
    texture: string,
    physicsMap: Phaser.Physics.Arcade.StaticGroup,
    characterInfoData: characterInfo,
  ) {
    super(scene, characterInfoData.x, characterInfoData.y, texture);

    // 사이즈 결정 필요
    this.scale = 6 / 32;

    // 충돌 관련 로직
    scene.physics.add.existing(this);
    scene.physics.add.collider(this, physicsMap);

    this.currentSkin = texture;
    this.velX = 0;

    this.showSkin(texture);
    this.changePosition(
      characterInfoData.x,
      characterInfoData.y,
      characterInfoData.velX,
    );
    scene.add.existing(this);
  }

  // 애니메이션 설정
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

  changeDir(velX: number) {
    if (this.velX === velX) return;
    this.velX = velX;
  }

  changeAnims() {
    const direction = this.velX > 0 ? 'right' : 'left';
    const animKey = `walk-${direction}-${this.currentSkin}`;
    this.play(animKey, true);
  }

  showSkin(skin: string) {
    this.currentSkin = skin;
    this.createAnimations(skin);
  }

  // 아이템 등으로 인한 멈춤일때
  stopAnims() {
    this.anims.stop();
  }

  replayAnims() {
    this.changeDir(this.velX);
  }

  changePosition(x: number, y: number, velX: number) {
    this.setX(x);
    this.setY(y);
    this.velX = velX;
    this.changeDir(velX);
    this.changeAnims();
  }
}
