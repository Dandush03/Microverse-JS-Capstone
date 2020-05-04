import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');

    this.gameBtn = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) - 100, 'playGame').setScale(0.15).setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Boot');
    });

    this.settingsBtn = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) + 50, 'settings').setScale(0.15).setInteractive();
    this.settingsBtn.on('pointerdown', () => {
      this.scene.start('Options');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(0.18);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(0.15);
    });

    this.add.image(GAME_WIDTH - 34, GAME_HEIGHT - 34, 'logo').setScale(0.3);
  }
}