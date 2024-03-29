export default class GameOver {
  private scene: Phaser.Scene;
  private gameOverText: Phaser.GameObjects.Text | null;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    const { width, height } = this.scene.scale;
    this.gameOverText = this.scene.add.text(
      width / 2,
      height / 2,
      'Game Over',
      {
        fontFamily: 'Chonkly',
        fontSize: '200px',
        color: '#ffffff',
      },
    );
    this.gameOverText.setOrigin(0.5, 0.5);
    this.gameOverText.setStroke('#000000', 6);
    this.gameOverText.setDepth(300);
  }
}
