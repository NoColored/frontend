import * as constants from '@/game/constants';

export default class LoadingUtils {
  private scene: Phaser.Scene;
  private loadingBack: Phaser.GameObjects.Graphics | undefined;
  private loadingSprite: Phaser.GameObjects.Sprite | undefined;

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
        this.scene.cameras.main.width / 2,
        this.scene.cameras.main.height / 2,
        'loading',
      )
      .play('loadingAnim');
    this.loadingSprite.setDepth(constants.INGAME_DEPTH.LOADING_SPRITE);
  }

  destroyLoadingScreen() {
    this.loadingBack?.destroy();
    this.loadingSprite?.destroy();
  }
}
