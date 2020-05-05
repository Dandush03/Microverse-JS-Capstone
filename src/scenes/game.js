import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo', 'https://res.cloudinary.com/dl-cultures/image/upload/v1588612118/logo/HeroLogo.svg');
  }

  create() {
    this.add.image(GAME_WIDTH - 34, GAME_HEIGHT - 34, 'logo').setScale(0.3);
  }
}