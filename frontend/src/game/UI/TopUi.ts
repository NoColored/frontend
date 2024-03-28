import * as constants from '@/game/constants';
import { Score } from '@/game/UI/Score';
import { Timer } from '@/game/UI/Timer';

export class TopUi extends Phaser.GameObjects.Container {
  private scores: number[];
  private icons: string[];
  private timer: Timer;
  private scoreUiContainers: Score[];

  constructor(scene: Phaser.Scene, playerCnt: number, icons: string[]) {
    super(scene, 0, 5);
    this.scene = scene;

    this.scores = Array(playerCnt).fill(0);
    this.icons = icons;

    this.timer = new Timer(scene);

    this.add(this.timer);

    this.scoreUiContainers = [];
    this.scores.forEach((score, index) => {
      const scoreUiContainer = new Score(
        scene,
        this.icons[index],
        index,
        //   const로 변경
        40 + 50 * index,
        5,
        score,
      );
      this.scoreUiContainers.push(scoreUiContainer);
    });
    this.add(this.scoreUiContainers);
    this.scene.add.existing(this).setDepth(constants.INGAME_DEPTH.SCORE);
  }

  hideUi() {
    this.setVisible(false);
  }

  showUi() {
    this.setVisible(true);
  }

  updateTimer(time: number) {
    this.timer.updateTIme(time);
  }

  updateScore(scores: number[]) {
    scores.forEach((score, index) => {
      if (this.scores[index] === score) return;
      this.scores[index] = score;
      this.scoreUiContainers[index].setScore(score);
    });
  }
}
