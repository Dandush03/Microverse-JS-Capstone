// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'https://res.cloudinary.com/dl-cultures/image/upload/v1588612118/logo/HeroLogo.svg');
  }

  create() {
    this.scene.start('Preload');
  }
}