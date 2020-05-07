import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';
import ApiGet from '../module/api';


// eslint-disable-next-line no-undef
export default class ScoresScene extends Phaser.Scene {
  constructor() {
    super('Scores');
  }

  create() {
    this.sys.canvas.style.cursor = 'progress';
    let height = 50;
    let bgTime = 1;
    ApiGet('GET', 'Daniel', 114)
      .then(data => {
        data.sort((a, b) => b.score - a.score);
        Object.keys(data).forEach((score, index) => {
          if (height > GAME_HEIGHT * bgTime) {
            this.bg = this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2) + height - 50, 'sky');
            bgTime += 1;
            if (bgTime % 2 === 0) {
              this.bg.rotation = 3.14159;
            }
          }

          this.img = this.add.image(GAME_WIDTH / 2, height, 'emptyTag');

          this.lbl = this.make.text({
            text: `${index + 1} - `,
            style: {
              fill: '#422115',
            },
          });
          this.lbl.x = this.img.x - (this.img.width / 2) + 15;
          this.lbl.y = height;

          this.display = this.make.text({
            text: `${data[score].user} : ${data[score].score}`,
            style: {
              fill: '#422115',
            },
          });
          this.display.x = this.lbl.x + this.lbl.width;
          this.display.y = height;
          height += 100;

          if (index === data.length - 1) {
            this.logo = this.add.image(GAME_WIDTH - 68, GAME_HEIGHT - 34, 'logo').setScale(0.3).setScrollFactor(0);
            this.sys.canvas.style.cursor = 'default';
          }
        });
      });

    this.add.image(GAME_WIDTH / 2, (GAME_HEIGHT / 2), 'sky');

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

    this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {
      this.cameras.main.scrollY += deltaY * 10.5;
      if (this.cameras.main.scrollY <= 0) {
        this.cameras.main.scrollY = 0;
      } else if (this.cameras.main.scrollY >= height - GAME_HEIGHT) {
        this.cameras.main.scrollY = height - GAME_HEIGHT;
      }
    });
  }
}