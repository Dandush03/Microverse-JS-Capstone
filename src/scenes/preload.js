import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';
// eslint-disable-next-line no-undef
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('playGame', './assets/ui/play-game.png');
    this.load.image('settings', './assets/ui/settings.png');
    this.load.image('credits', './assets/ui/credits.png');
    this.load.image('scores', './assets/ui/score.png');
    this.load.image('back', './assets/ui/back.png');
    this.load.image('checkedBox', './assets/ui/checked.png');
    this.load.image('box', './assets/ui/unchecked.png');
    this.load.image('emptyTag', './assets/ui/empty-tag.png');
    this.load.image('sky', './assets/sky.png');
    //
    // GAME
    //
    this.load.image('replay', './assets/game/replay.png');
    this.load.image('submit', './assets/game/submit.png');
    this.load.image('endGame', './assets/game/endgame.png');
    this.load.image('stars', './assets/game/star.png');
    this.load.image('ground', './assets/game/ground.png');
    this.load.image('menu', './assets/game/menu.png');
    this.load.image('star', './assets/game/star2.png');
    this.load.image('bigStar', './assets/game/star3.png');
    this.load.spritesheet('face', 'assets/game/metalface78x92.png',
      { frameWidth: 78, frameHeight: 92 });
    this.load.spritesheet('heroRun', './assets/game/hero2.png',
      { frameWidth: 24, frameHeight: 25 });
    this.load.spritesheet('heroStand', './assets/game/hero1.png',
      { frameWidth: 22, frameHeight: 25 });

    this.load.audio('bgMusic', './assets/ui/bgMusic.mp3');

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
      // eslint-disable-next-line radix
      percentText.setText(`${parseInt(value * 100)}%`);
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