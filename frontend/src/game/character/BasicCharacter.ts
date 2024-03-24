
export class BasicCharacter extends Phaser.GameObjects.Sprite{
  private textureFile: string;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    this.textureFile = texture;
    this.setOrigin(0, 0);
    scene.add.existing(this);
    this.scale= 0.2;
    this.animations();
  }

  animations(){
    this.anims.create({
      key: 'walk-left',
      frames: this.anims.generateFrameNumbers( this.textureFile, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1 // 무한 반복
    });
    this.anims.create({
      key: 'walk-right',
      frames: this.anims.generateFrameNumbers(this.textureFile, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }
  walk(dir: 'left'|'right') {
    if(dir === 'right') this.anims.play('walk-right', true);
    else
    this.anims.play('walk-left', true);
  }
}