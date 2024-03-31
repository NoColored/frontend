import * as constants from '@/game/constants';

export default class GameOver {
  private scene: Phaser.Scene;
  private gameOverBack: Phaser.GameObjects.Graphics;
  private gameOverText: Phaser.GameObjects.Text ;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    const { width, height } = this.scene.scale;

    this.gameOverBack = this.scene.add.graphics();
    this.gameOverBack.fillStyle(0x000000, 1); // 검은색으로 채웁니다.
    this.gameOverBack.fillRect(0, 0, width, height); // 화면 전체를 칠합니다.
    this.gameOverBack.setDepth(constants.INGAME_DEPTH.LOADING_BACKGROUND); // 다른 객체들보다 앞에 위치하도록 깊이 설정

    this.gameOverText = this.scene.add.text(
      width / 2,
      height / 2,
      'Game\nOver',
      {
        fontFamily: 'Chonkly',
        fontSize: '100px',
        color: '#ffffff',
      },
    );
    this.gameOverText.setOrigin(0.5, 0.5);
    this.gameOverText.setStroke('#000000', 6);
    this.gameOverText.setDepth(constants.INGAME_DEPTH.LOADING_SPRITE);
  }
}
