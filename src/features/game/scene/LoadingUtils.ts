import * as constants from '@/features/game/constants';

export default class LoadingUtils {
  private scene: Phaser.Scene;
  private loadingBack: Phaser.GameObjects.Graphics | undefined;
  private loadingSprite: Phaser.GameObjects.Sprite | undefined;
  private loadingLogo: Phaser.GameObjects.Text | undefined;

  private loadingText: Phaser.GameObjects.Text | undefined;
  private loadingNum: Phaser.GameObjects.Text | undefined;

  private loadingEvent: Phaser.Time.TimerEvent | undefined;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  createLoadingScreen() {
    const { width, height } = this.scene.scale;
    this.loadingBack = this.scene.add.graphics();
    this.loadingBack.fillStyle(0x000000, 1); // 검은색으로 채웁니다.
    this.loadingBack.fillRect(0, 0, width, height); // 화면 전체를 칠합니다.
    this.loadingBack.setDepth(constants.INGAME_DEPTH.LOADING_BACKGROUND); // 다른 객체들보다 앞에 위치하도록 깊이 설정

    this.scene.anims.create({
      key: 'loadingAnim',
      frames: this.scene.anims.generateFrameNumbers('loading', {
        start: 0,
        end: 23,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.loadingSprite = this.scene.add
      .sprite(
        this.scene.cameras.main.width / 3 + 20,
        this.scene.cameras.main.height / 4,
        'loading',
      )
      .play('loadingAnim');
    this.loadingSprite
      .setDepth(constants.INGAME_DEPTH.LOADING_SPRITE)
      .setScale(2 / 3);
    this.loadingLogo = this.scene.add.text(
      this.scene.cameras.main.width / 2 + 20,
      this.scene.cameras.main.height / 4,
      'Loading...',
      {
        fontFamily: 'Chonkly',
        fontSize: '24px',
        color: '#ffffff',
      },
    );
    this.loadingLogo
      .setDepth(constants.INGAME_DEPTH.LOADING_SPRITE)
      .setOrigin(0.5);

    this.loadingText = this.scene.add.text(
      this.scene.cameras.main.width / 2,
      (this.scene.cameras.main.height / 3) * 2 - 30,
      '',
      {
        fontFamily: 'DOSPilgiMedium',
        fontSize: '16px',
        color: '#ffffff',
        align: 'center',
        lineSpacing: 18,
      },
    );

    this.loadingText
      .setDepth(constants.INGAME_DEPTH.LOADING_SPRITE)
      .setOrigin(0.5, 0);

    this.loadingNum = this.scene.add.text(
      this.scene.cameras.main.width / 2,
      (this.scene.cameras.main.height / 4) * 2 - 20,
      '',
      {
        fontFamily: 'Chonkly',
        fontSize: '24px',
        color: '#000000',
      },
    );

    this.loadingNum
      .setDepth(constants.INGAME_DEPTH.LOADING_SPRITE)
      .setOrigin(0.4)
      .setStroke('#ffffff', 6);

    this.setLoadingTextEvent();

    this.loadingEvent = this.scene.time.addEvent({
      delay: 3000, // ms 단위로 지연 시간 설정
      callback: this.setLoadingTextEvent, // 실행될 콜백 함수
      callbackScope: this, // 콜백 함수의 this 컨텍스트
      loop: true, // 반복 실행 여부
    });
  }

  private loadingListNum: number = 0;

  setLoadingTextEvent() {
    let randomIndex;
    do {
      randomIndex = Math.floor(
        Math.random() * constants.LOADING_MESSAGE.length,
      );
    } while (randomIndex === this.loadingListNum); // 이전 인덱스와 다를 때까지 반복

    this.loadingListNum = randomIndex;

    this.loadingNum?.setText(
      `#${constants.LOADING_MESSAGE[this.loadingListNum].messageId}`,
    );
    this.loadingText?.setText(
      `${constants.LOADING_MESSAGE[this.loadingListNum].message}`,
    );
  }

  destroyLoadingScreen() {
    this.loadingEvent?.remove();
    this.loadingLogo?.destroy();
    this.loadingBack?.destroy();
    this.loadingSprite?.destroy();
    this.loadingNum?.destroy();
    this.loadingText?.destroy();
  }
}
