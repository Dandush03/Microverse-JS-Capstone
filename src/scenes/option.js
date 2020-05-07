import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.soundModel = this.sys.game.globals.soundModel;
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 68, GAME_HEIGHT - 34, 'logo').setScale(0.3);

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

    this.text = this.add.text((GAME_WIDTH / 2) - 100, (GAME_HEIGHT / 6), 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(((GAME_WIDTH / 2) - 50) - 100, (GAME_HEIGHT / 3), 'checkedBox');
    this.musicText = this.add.text((GAME_WIDTH / 2) - 100, (GAME_HEIGHT / 3) - 15, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(((GAME_WIDTH / 2) - 50) - 100, (GAME_HEIGHT / 2), 'checkedBox');
    this.soundText = this.add.text((GAME_WIDTH / 2) - 100, (GAME_HEIGHT / 2) - 15, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.soundModel.musicOn = !this.soundModel.musicOn;
      this.updateAudio();
    });


    this.soundButton.on('pointerdown', () => {
      this.soundModel.soundOn = !this.soundModel.soundOn;
      this.updateAudio();
    });

    this.updateAudio();
  }

  updateAudio() {
    if (this.soundModel.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.soundModel.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.soundModel.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.soundModel.bgMusicPlaying = true;
      }
    }

    if (this.soundModel.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}