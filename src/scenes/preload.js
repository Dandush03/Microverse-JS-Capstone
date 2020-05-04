import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';
// eslint-disable-next-line no-undef
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }


  preload() {
    this.load.image('playGame', '../src/assets/ui/play-game.png');
    this.load.image('settings', '../src/assets/ui/settings.png');
    this.load.image('credits', '../src/assets/ui/credits.png');
    this.load.image('sky', '../src/assets/sky.png');

    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'logo');
    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const loadingText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      const tempVal = parseInt(value, 10);
      percentText.setText(`${(tempVal * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });
    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}