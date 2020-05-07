import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';
import ApiGet from '../module/api';

// eslint-disable-next-line no-undef
export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super('EndGame');
  }

  create() {
    this.userModel = this.sys.game.globals.userModel;

    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 100, 'endGame').setScrollFactor(0);

    this.replay = this.add.image(GAME_WIDTH / 2 - 125, (GAME_HEIGHT / 2) + 100, 'replay').setScrollFactor(0).setInteractive();
    this.replay.on('pointerdown', () => {
      this.scene.start('Game');
    });

    this.menu = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 1.5) + 100, 'menu').setScrollFactor(0).setInteractive();
    this.menu.on('pointerdown', () => {
      this.scene.sendToBack('Game');
      this.scene.start('Title');
    });

    this.submit = this.add.image(GAME_WIDTH / 2 + 125, (GAME_HEIGHT / 2) + 100, 'submit').setScrollFactor(0).setInteractive();
    this.submit.on('pointerdown', () => {
      ApiGet('POST', this.userModel.user, this.userModel.score)
        .then(() => {
          this.scene.sendToBack('Game');
          this.scene.start('Scores');
        });
    });
    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(1.1);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(1);
    });
  }
}