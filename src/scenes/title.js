import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const titleText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      text: 'This Is My Title',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    titleText.setOrigin(0.5, 0);

    this.add.image(GAME_WIDTH - 34, GAME_HEIGHT - 34, 'logo').setScale(0.3);
  }
}