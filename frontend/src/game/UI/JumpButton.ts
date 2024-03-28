import { GameSocket } from '@/services/websocket/GameSocket';

export default class JumpButton extends Phaser.GameObjects.GameObject {
  constructor(scene: Phaser.Scene, socket: GameSocket) {
    super(scene, 'jumpButton');
    // TODO DEPTH -> constants로 변경
    const button = this.scene.add.image(490, 300, 'jumpButton').setDepth(5);

    button.setInteractive();
    button.on('pointerdown', () => {
      button.setTexture('clickedJumpButton');
      // TODO constant로 2번 값 넘기기
    });
    button.on('pointerup', () => {
      button.setTexture('jumpButton');
      socket.sendInputMesssage(2);
    });
    this.scene.add.existing(this);
  }
}
