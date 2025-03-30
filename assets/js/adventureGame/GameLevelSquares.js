// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';

// Minimal Definition
class GameLevelSquares {
  constructor(gameEnv) {
    console.log('GameLevelSquares initialized');
    
    // Values dependent on gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    
    // Background data
    const background_data = {
        name: 'squares-background',
        greeting: "Welcome to Squares Level!",
        // No src means it will use a default color fill
    };
    
    // Player One data
    const player_one_data = {
        id: 'PlayerOne',
        greeting: "I am Player One!",
        SCALE_FACTOR: 10,
        STEP_FACTOR: 100,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: width / 4, y: height / 2 },
        velocity: { x: 0, y: 0 }, // Initialize velocity
        pixels: { height: 50, width: 50 },
        // Default hitbox and keypress mappings
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };
    
    // Player Two data
    const player_two_data = {
        id: 'PlayerTwo',
        greeting: "I am Player Two!",
        SCALE_FACTOR: 10,
        STEP_FACTOR: 100,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 3 * width / 4, y: height / 2 },
        velocity: { x: 0, y: 0 }, // Initialize velocity
        pixels: { height: 50, width: 50 },
        // Default hitbox and keypress mappings
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        keypress: { up: 73, left: 74, down: 75, right: 76 } // I, J, K, L
    };

    this.classes = [      
      { class: Background, data: background_data },
      { class: PlayerOne, data: player_one_data },
      { class: PlayerTwo, data: player_two_data }
    ];
  }

  destroy() {
    // Remove all objects created by this level
    this.classes.forEach(obj => {
        if (obj.instance && obj.instance.destroy) {
            obj.instance.destroy(); // Call destroy method if it exists
        }
    });
  }
}

export default GameLevelSquares;