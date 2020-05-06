import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super('EndGame');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 100, 'endGame').setScrollFactor(0);
    this.replay = this.add.image(GAME_WIDTH / 2 - 100, (GAME_HEIGHT / 2) + 100, 'replay').setScrollFactor(0).setInteractive();
    this.replay.on('pointerdown', () => {
      this.scene.start('Game');
    });
    this.add.image(GAME_WIDTH / 2 + 100, (GAME_HEIGHT / 2) + 100, 'submit').setScrollFactor(0).setInteractive();

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(1.1);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(1);
    });
  }
}