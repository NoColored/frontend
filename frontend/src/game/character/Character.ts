import { characterInfo } from '@/types/ingame';

export class Character extends Phaser.Physics.Arcade.Sprite {
  private textureFile: string;
  private velX: number;

  constructor(
    scene: Phaser.Scene,
    texture: string,
    physicsMap: Phaser.Physics.Arcade.StaticGroup,
    characterInfoData: characterInfo,
  ) {
    super(scene, characterInfoData.x, characterInfoData.y, texture);

    this.textureFile = texture;
    scene.add.existing(this);
    this.animations();

    // 사이즈 결정 필요
    this.scale = 7 / 32;

    // 충돌 관련 로직
    scene.physics.add.existing(this);
    scene.physics.add.collider(this, physicsMap);

    // 기본 dir 설정
    this.changeDir(characterInfoData.velX);
    this.velX = characterInfoData.velX;
  }

  animations() {
    this.anims.create({
      key: 'walk-left',
      frames: this.anims.generateFrameNumbers(this.textureFile, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNumbers(this.textureFile, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  changeDir(velX: number) {
    if (velX > 0) this.anims.play('walk-right', true);
    else this.anims.play('walk-left', true);
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
  }
}
