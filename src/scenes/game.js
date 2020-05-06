import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

let player;
let platforms;

// eslint-disable-next-line no-undef
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.cameras.main.setBounds(0, 0, GAME_WIDTH * 100, GAME_HEIGHT).setName('main');

    platforms = this.physics.add.staticGroup();

    // eslint-disable-next-line no-underscore-dangle
    const mainWidth = this.cameras.main._bounds.width;
    console.log(mainWidth);
    for (let width = 0; width < mainWidth; width += 2048) {
      console.log(width);
      platforms.create(width, GAME_HEIGHT, 'ground').refreshBody();
    }

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 10 }),
      frameRate: 10,
      repeat: -1,
    });


    player = this.physics.add.sprite(GAME_WIDTH / 8, GAME_HEIGHT / 2, 'hero');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.right.isDown) {
      player.setVelocityX(800);
      player.anims.play('right', true);
    } else if (cursors.left.isDown) {
      player.setVelocityX(-800);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('right', false);
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(GAME_HEIGHT * -1);
      player.anims.play('right', true);
    }

    this.cameras.main.scrollX = player.x - GAME_WIDTH / 2;
  }
}