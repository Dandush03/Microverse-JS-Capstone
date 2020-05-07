import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';
import ApiGet from '../module/api';


// eslint-disable-next-line no-undef
export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('Scores');
  }

  create() {
    ApiGet('GET', 'Daniel', 114)
      .then(data => console.log(data));
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 34, GAME_HEIGHT - 34, 'logo').setScale(0.3);

    this.gameBtn = this.add.image(110, 50, 'back').setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(1.1);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(1);
    });
  }
}