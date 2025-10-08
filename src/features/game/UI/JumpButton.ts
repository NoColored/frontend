import { GameSocket } from '@/services/websocket/GameSocket';

import * as constants from '@/features/game/constants';

export default class JumpButton extends Phaser.GameObjects.GameObject {
  // eslint-disable-next-line no-use-before-define
  private button;
  private socket: GameSocket;
  private keys: Phaser.Input.Keyboard.Key[] = [];
  private sendMessages: number = -1;

  constructor(scene: Phaser.Scene, socket: GameSocket) {
    super(scene, 'jumpButton');
    this.button = this.scene.add
      .image(
        constants.BUTTON_POSITION.JUMP.x,
        constants.BUTTON_POSITION.JUMP.y,
        'jumpButton',
      )
      .setDepth(constants.INGAME_DEPTH.BUTTON);
    this.sendMessages = constants.SEND_WOBSOCKT_MESSAGE_TYPE.JUMP;
    this.socket = socket;

    this.setJumpButton();
    this.setupSpacebarInput();

    this.scene.add.existing(this);

    this.setButtonAndKeyInputEnabled(false);
  }

  setJumpButton() {
    this.button.on('pointerdown', () => {
      this.button.setTexture('clickedJumpButton');
      this.socket.sendInputMesssage(this.sendMessages);
    });

    this.button.on('pointerup', () => {
      this.button.setTexture('jumpButton');
    });
  }

  setupSpacebarInput() {
    //  @ts-expect-error - spacebar가 Phaser에서 지원하지 않는 속성이라고 나옴
    const spacebar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    );
    spacebar.on('down', () => {
      this.button.setTexture('clickedJumpButton');
      this.socket.sendInputMesssage(constants.SEND_WOBSOCKT_MESSAGE_TYPE.JUMP);
    });
    spacebar.on('up', () => {
      this.button.setTexture('jumpButton');
    });
    this.keys.push(spacebar);
  }

  setButtonAndKeyInputEnabled(enabled: boolean) {
    this.button.setInteractive({ useHandCursor: enabled });
    if (!enabled) {
      this.button.disableInteractive();
    }

    this.keys.forEach((key) => {
      key.enabled = enabled;
    });
  }

  changeButtonItem() {
    this.button.setPosition(
      constants.BUTTON_POSITION.CHANGE_DIR.x,
      constants.BUTTON_POSITION.CHANGE_DIR.y,
    );
  }
}
