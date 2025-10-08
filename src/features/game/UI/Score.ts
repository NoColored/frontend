import * as constants from '@/features/game/constants';

export class Score extends Phaser.GameObjects.Container {
  private score: number = 0;
  private scoreText: Phaser.GameObjects.Text;

  constructor(
    scene: Phaser.Scene,
    playerIcon: string,
    playerIndex: number,
    x: number,
    y: number,
    score: number = 0,
  ) {
    super(scene, x, y);
    this.score = score;
    const icon = this.scene.add.image(x, y + 15, playerIcon);
    icon.setDepth(constants.INGAME_DEPTH.SCORE);
    this.scoreText = this.scene.add.text(x + 25, y, `${this.score}`, {
      fontFamily: 'Chonkly',
      fontSize: '32px',
      color: constants.ICON_COLOR[playerIndex],
    });
    this.scoreText.setStroke('#000000', 6);
    icon.setDepth(constants.INGAME_DEPTH.SCORE);
    this.scoreText.setDepth(constants.INGAME_DEPTH.SCORE);
    this.add([icon, this.scoreText]);
  }

  setScore(score: number) {
    if (this.score === score) return;
    this.score = score;
    this.scoreText.setText(`${this.score}`);
  }
}
