import { GAME_HEIGHT, GAME_WIDTH } from './const-variable';

export default {
  parent: 'phaser-container',
  // eslint-disable-next-line no-undef
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: GAME_HEIGHT * 2 },
      debug: false,
      x: 0,
      y: 0,
      width: GAME_WIDTH * 100,
      height: GAME_HEIGHT,
      thickness: 32,
    },
  },
};