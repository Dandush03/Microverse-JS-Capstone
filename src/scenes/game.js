import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

let player;
let platforms;
let face;

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
    for (let width = 0; width < mainWidth; width += 2048) {
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
    this.Starfield();
    this.Aliens();

    this.physics.add.collider(player, platforms);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.right.isDown) {
      player.setVelocityX(400);
      player.anims.play('right', true);
    } else if (cursors.left.isDown) {
      player.setVelocityX(-400);
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

  Starfield() {
    //  Note the scrollFactor values which give them their 'parallax' effect

    const group = this.add.group({ key: 'star', frameQuantity: 2000 });

    group.createMultiple({ key: 'bigStar', frameQuantity: 200 });

    // eslint-disable-next-line no-undef
    const rect = new Phaser.Geom.Rectangle(0, 0, GAME_WIDTH * 100, 400);
    // eslint-disable-next-line no-undef
    Phaser.Actions.RandomRectangle(group.getChildren(), rect);

    group.children.iterate((child) => {
      let sf = Math.max(0.3, Math.random());

      if (child.texture.key === 'bigStar') {
        sf = 0.2;
      }

      child.setScrollFactor(sf);
    }, this);
  }

  Aliens() {
    const config = {
      key: 'metaleyes',
      frames: this.anims.generateFrameNumbers('face', { start: 0, end: 4 }),
      frameRate: 20,
      repeat: -1,
    };

    this.anims.create(config);

    for (let i = 0; i < 32; i += 1) {
      // eslint-disable-next-line no-undef
      const x = Phaser.Math.Between(100, 30000);
      // eslint-disable-next-line no-undef
      const y = Phaser.Math.Between(100, 300);

      face = this.physics.add.sprite(x, y, 'face').play('metaleyes');
      this.physics.add.collider(face, platforms);
      face.setBounce(1);
      face.setCollideWorldBounds(true);
      // eslint-disable-next-line no-undef
      face.setVelocity(Phaser.Math.Between(20, 60), Phaser.Math.Between(20, 60));

      if (Math.random() > 0.5) {
        // face.vel.x *= -1;
      } else {
        // face.vel.y *= -1;
      }
    }
  }
}
