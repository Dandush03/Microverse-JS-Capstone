import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'sky');
    this.add.image(GAME_WIDTH, GAME_HEIGHT, 'logo').setScale(0.3);
  }
}