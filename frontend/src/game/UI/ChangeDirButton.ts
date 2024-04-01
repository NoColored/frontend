import { GameSocket } from '@/services/websocket/GameSocket';

import * as constants from '@/game/constants';

export default class ChangeDirButton extends Phaser.GameObjects.GameObject {
  // eslint-disable-next-line no-use-before-define
  private static instance: ChangeDirButton;
  private button;
  private socket: GameSocket;
  private keys: Phaser.Input.Keyboard.Key[] = [];

  // 생성자를 private으로 변경
  private constructor(scene: Phaser.Scene, socket: GameSocket) {
    super(scene, 'dirButton');
    this.button = this.scene.add
      .image(
        constants.BUTTON_POSITION.CHANGE_DIR.x,
        constants.BUTTON_POSITION.CHANGE_DIR.y,
        'dirButton',
      )
      .setDepth(constants.INGAME_DEPTH.BUTTON);
    this.socket = socket;

    this.setChangeDirButton();
    this.setupDirKeyInput();

    this.scene.add.existing(this);

    this.setButtonAndKeyInputEnabled(false);
  }

  // getInstance 메서드 구현
  public static getInstance(
    scene: Phaser.Scene,
    socket: GameSocket,
  ): ChangeDirButton {
    if (!ChangeDirButton.instance) {
      ChangeDirButton.instance = new ChangeDirButton(scene, socket);
    }
    return ChangeDirButton.instance;
  }

  setChangeDirButton() {
    this.button.on('pointerdown', () => {
      this.button.setTexture('clickedDirButton');
      this.socket.sendInputMesssage(
        constants.SEND_WOBSOCKT_MESSAGE_TYPE.DIRECTION_CHANGE,
      );
    });

    this.button.on('pointerup', () => {
      this.button.setTexture('dirButton');
    });
  }

  setupDirKeyInput() {
    // 방향키 코드 배열
    const keysCode = [
      Phaser.Input.Keyboard.KeyCodes.LEFT,
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
      Phaser.Input.Keyboard.KeyCodes.UP,
      Phaser.Input.Keyboard.KeyCodes.DOWN,
    ];

    keysCode.forEach((keyCode) => {
      //  @ts-expect-error - spacebar가 Phaser에서 지원하지 않는 속성이라고 나옴
      const key = this.scene.input.keyboard.addKey(keyCode);
      key.on('down', () => {
        this.button.setTexture('clickedDirButton');
        this.socket.sendInputMesssage(
          constants.SEND_WOBSOCKT_MESSAGE_TYPE.DIRECTION_CHANGE,
        );
      });
      key.on('up', () => {
        this.button.setTexture('dirButton');
      });
      this.keys.push(key);
    });
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
      constants.BUTTON_POSITION.JUMP.x,
      constants.BUTTON_POSITION.JUMP.y,
    );
    this.scene.time.delayedCall(5000, () => {
      this.button.setPosition(
        constants.BUTTON_POSITION.CHANGE_DIR.x,
        constants.BUTTON_POSITION.CHANGE_DIR.y,
      );
    });
  }
}
