import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

// eslint-disable-next-line no-undef
export default class UserScene extends Phaser.Scene {
  constructor() {
    super('User');
  }

  create() {
    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');
    this.add.image(GAME_WIDTH - 68, GAME_HEIGHT - 34, 'logo').setScale(0.3);

    this.gameBtn = this.add.image(110, 50, 'back').setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.gameBtn = this.add.image((GAME_WIDTH / 2), (GAME_HEIGHT / 1.5), 'submit').setInteractive();
    this.gameBtn.on('pointerdown', () => {
      this.start();
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setScale(1.1);
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setScale(1);
    });

    this.lbl = this.make.text({
      text: 'What\'s your name?',
      style: {
        font: '36px monospace',
        fill: '#422115',
      },
    });
    this.lbl.x = (GAME_WIDTH / 2) - (this.lbl.width / 2);
    this.lbl.y = (GAME_HEIGHT / 4);

    this.nameInput = this.make.text({
      text: 'Yes, Click Here',
      style: {
        font: '40px monospace',
        fill: '#051a58',
      },
      selected: false,
    });
    this.nameInput.setFontStyle('bold');
    this.nameInput.x = (GAME_WIDTH / 2) - (this.nameInput.width / 2);
    this.nameInput.y = (GAME_HEIGHT / 2.5);

    this.nameInput.setInteractive();
    this.input.on('pointerdown', (event, gameObjects) => {
      if (gameObjects.length !== 0) {
        gameObjects[0].selected = true;
        this.nameInput.text = '';
      } else {
        this.nameInput.selected = false;
        if (this.nameInput.text === '') {
          this.nameInput.text = 'Yes, Click Here';
          this.nameInput.x = (GAME_WIDTH / 2) - (this.nameInput.width / 2);
          this.nameInput.y = (GAME_HEIGHT / 2.5);
        }
      }
    });

    this.input.keyboard.on('keydown', (event) => {
      if (this.nameInput.selected === true) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
          this.nameInput.text += event.key;
        } else if (event.keyCode === 32) {
          this.nameInput.text += ' ';
        } else if (event.keyCode === 8) {
          this.nameInput.text = this.nameInput.text.slice(0, -1);
        } else if (event.keyCode === 13) {
          this.start();
        }
        this.nameInput.x = (GAME_WIDTH / 2) - (this.nameInput.width / 2);
        this.nameInput.y = (GAME_HEIGHT / 2.5);
      }
    });
  }

  start() {
    const { text } = this.nameInput;
    if (text === '' || text === 'Yes, Click Here' || text.length > 9) {
      // eslint-disable-next-line no-alert
      alert('Invalid Name: Name should have at More than 1 character and less than 9');
    } else {
      this.sys.game.globals.userModel.user = this.nameInput.text;
      this.scene.start('Game');
    }
  }
}