import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('Scores');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 34, GAME_HEIGHT - 34, 'logo').setScale(0.3);

    this.gameBtn = this.add.image(50, 30, 'back').setScale(0.15).setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(0.18);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(0.15);
    });

    const authorText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 - 50,
      text: 'Author:',
      style: {
        font: '36px monospace',
        fill: '#422115',
      },
    });

    authorText.setOrigin(0.5, 0);
    const heroText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 + 50,
      text: 'Daniel Laloush',
      style: {
        font: '36px monospace',
        fill: '#422115',
      },
    });
    heroText.setOrigin(0.5, 0);
  }
}