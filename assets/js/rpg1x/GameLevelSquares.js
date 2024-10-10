// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import PlayerFish from './PlayerFish.js';
import PlayerTurtle from './PlayerTurtle.js';

class GameLevelSquares {
  constructor(path) {
    this.objects = [
      { class: Background, data: {} },
      { class: PlayerTurtle },
      { class: PlayerFish },
    ];
  }

  // Add any methods to manipulate the game level data here
}

export default GameLevelSquares;