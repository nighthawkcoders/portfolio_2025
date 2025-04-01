// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEnvBackground.js';
import BackgroundParallax from './BackgroundParallax.js';
import Player from './Player.js';

// Minimal Definition
class GameLevelTesting {
  constructor(gameEnv) {
    let path = gameEnv.path;
    this.classes = [      
      { class: GameEnvBackground, data: {src:  path + "/images/gamify/endbackground.png"} }, // zIndex default is 0
      { class: BackgroundParallax, data: {src:  path + "/images/platformer/backgrounds/snowfall.png", zIndex: 2 } },
      { class: Player, data: {id: "player", zIndex: 3} }, 
    ];
  }
}

export default GameLevelTesting;