import { GameSocket } from '@/services/websocket/GameSocket';

export default class ChangeDirButton extends Phaser.GameObjects.GameObject {
  constructor(scene: Phaser.Scene, socket: GameSocket) {
    super(scene, 'dirButton');
    // TODO DEPTH -> constants로 변경
    const button = this.scene.add.image(105, 300, 'dirButton').setDepth(5);

    button.setInteractive();

    button.on('pointerdown', () => {
      button.setTexture('clickedDirButton');
      // TODO constant로 1번 값 넘기기
    });
    button.on('pointerup', () => {
      button.setTexture('dirButton');
      socket.sendInputMesssage(1);
    });

    this.scene.add.existing(this);
  }
}
