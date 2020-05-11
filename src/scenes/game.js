import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

let player;
let platforms;
let face;
let stars;
let score;
let scoreText;

function collectStar(player, star) {
  star.disableBody(true, true);

  score += 10;
  scoreText.setText(`Score: ${score}`);
}

function destroyGame() {
  this.scene.pause();
  this.sys.game.globals.userModel.score = score;
  this.scene.launch('EndGame');
}

// eslint-disable-next-line no-undef
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    score = 0;
    this.cameras.main.setBounds(0, 0, GAME_WIDTH * 100, GAME_HEIGHT).setName('main');
    platforms = this.physics.add.staticGroup();

    // eslint-disable-next-line no-underscore-dangle
    const mainWidth = this.cameras.main._bounds.width;
    for (let width = 0; width < mainWidth; width += 2048) {
      platforms.create(width, GAME_HEIGHT, 'ground').refreshBody();
    }

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('heroRun', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('heroRun', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'standing',
      frames: this.anims.generateFrameNumbers('heroStand', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: -1,
    });


    player = this.physics.add.sprite(GAME_WIDTH / 8, GAME_HEIGHT / 2, 'hero').setScale(2);

    player.setBounce(0.3);
    player.setCollideWorldBounds(true);

    player.body.setSize(25, 20);
    this.Starfield();
    this.Aliens();
    this.Stars();
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    this.physics.add.collider(player, platforms);
    this.add.image(GAME_WIDTH - 68, GAME_HEIGHT - 34, 'logo').setScale(0.3).setScrollFactor(0);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.right.isDown) {
      player.setVelocityX(400);
      player.anims.play('right', true);
    } else if (cursors.left.isDown) {
      player.setVelocityX(-400);
      player.anims.play('left', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('standing', true);
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(GAME_HEIGHT * -1);
      player.anims.play('right', true);
    }

    this.cameras.main.scrollX = player.x - GAME_WIDTH / 2;
    scoreText.setScrollFactor(0, 0);
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

  Stars() {
    // eslint-disable-next-line no-undef
    const rect = new Phaser.Geom.Rectangle(0, 300, GAME_WIDTH * 100, 150);
    stars = this.physics.add.group({
      key: 'stars',
      repeat: 400,
      setXY: { x: 12, y: 50, stepX: 70 },
      allowGravity: false,
    });
    // eslint-disable-next-line no-undef
    Phaser.Actions.RandomRectangle(stars.getChildren(), rect);

    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
  }

  Aliens() {
    // eslint-disable-next-line no-undef
    const rect = new Phaser.Geom.Rectangle(800, 300, GAME_WIDTH * 100, 150);

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

      this.physics.add.overlap(player, face, destroyGame, null, this);
      // eslint-disable-next-line no-undef
      Phaser.Actions.RandomRectangle(face, rect);
    }
  }
}
