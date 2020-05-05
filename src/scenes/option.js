import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 34, GAME_HEIGHT - 34, 'logo').setScale(0.3);

    this.gameBtn = this.add.image(50, 30, 'back').setScale(0.15).setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(0.18);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(0.15);
    });

    this.musicOn = true;
    this.soundOn = true;


    this.text = this.add.text((GAME_WIDTH / 2) - 100, (GAME_HEIGHT / 6), 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(((GAME_WIDTH / 2) - 50) - 100, (GAME_HEIGHT / 3), 'checkedBox').setScale(0.15);
    this.musicText = this.add.text((GAME_WIDTH / 2) - 100, (GAME_HEIGHT / 3) - 15, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(((GAME_WIDTH / 2) - 50) - 100, (GAME_HEIGHT / 2), 'checkedBox').setScale(0.15);
    this.soundText = this.add.text((GAME_WIDTH / 2) - 100, (GAME_HEIGHT / 2) - 15, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.musicOn = !this.musicOn;
      this.updateAudio();
    });


    this.soundButton.on('pointerdown', () => {
      this.soundOn = !this.soundOn;
      this.updateAudio();
    });

    this.updateAudio();
  }

  updateAudio() {
    if (this.musicOn === false) {
      this.musicButton.setTexture('box');
    } else {
      this.musicButton.setTexture('checkedBox');
    }

    if (this.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}