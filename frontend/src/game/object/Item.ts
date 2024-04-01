import * as constants from '@/game/constants';

export class Item extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0, 'item');
    // this.setOrigin(0, 0);
    this.scene.add.existing(this).setDepth(constants.INGAME_DEPTH.CHARACTER);
    this.visible = false;
  }

  itemPop(item: number, x: number, y: number) {
    if (this.visible) return;

    const itemType = constants.ITEM_TYPE[item];
    this.setTexture(itemType);
    this.setX(x);
    this.setY(y);
    this.visible = true;
  }

  itemShift() {
    if (!this.visible) return;

    this.visible = false;
  }
}
