import '../stylesheet/main.scss';
import config from '../config/config';
import BootScene from '../scenes/boot';
import PreloadScene from '../scenes/preload';
import TitleScene from '../scenes/title';
import OptionsScene from '../scenes/option';
import CreditsScene from '../scenes/credits';
import GameScene from '../scenes/game';

// eslint-disable-next-line no-undef
class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preload', PreloadScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
