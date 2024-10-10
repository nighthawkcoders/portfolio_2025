// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import PlayerFish from './PlayerFish.js';
import PlayerTurtle from './PlayerTurtle.js';
import NPC from './NPC.js';
//import Goomba from './EnemyGoomba.js';
//import Coin from './Coin.js';


class GameLevelWater {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_water = path + "/images/rpg/water.png";
    const image_data_water = {
        name: 'water',
        src: image_src_water,
        pixels: {height: 580, width: 1038}
    };

    // Turtle sprite data
    const TURTLE_SCALE_FACTOR = 10;
    const sprite_src_turtle = path + "/images/rpg/turtle.png";
    const sprite_data_turtle = {
        name: 'turtle',
        src: sprite_src_turtle,
        SCALE_FACTOR: TURTLE_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/TURTLE_SCALE_FACTOR) }, 
        pixels: {height: 280, width: 256},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
    };

    // Fish sprite data
    const sprite_src_fish = path + "/images/rpg/fishies.png";
    const sprite_data_fish = {
        name: 'fish',
        src: sprite_src_fish,
        SCALE_FACTOR: 16,
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 384},
        INIT_POSITION: { x: 0, y: 0 },
        orientation: {rows: 8, columns: 12 },
        down: {row: 0, start: 0, columns: 3 },  // 1st row
        left: {row: 1, start: 0, columns: 3 },  // 2nd row
        right: {row: 2, start: 0, columns: 3 }, // 3rd row
        up: {row: 3, start: 0, columns: 3 },    // 4th row
    };

    // NPC sprite data
    const sprite_src_npc = path + "/images/rpg/fishies.png";
    const sprite_data_npc = {
        name: 'npc',
        src: sprite_src_npc,
        SCALE_FACTOR: 16,  // Adjust this based on your scaling needs
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 384},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 8, columns: 12 },
        down: {row: 0, start: 9, columns: 3 },  // This is the idle animation
        left: {row: 1, start: 9, columns: 3 },  
        right: {row: 2, start: 9, columns: 3 }, 
        up: {row: 3, start: 9, columns: 3 },    
    };

    this.objects = [
      { class: Background, data: image_data_water },
      { class: PlayerTurtle, data: sprite_data_turtle },
      { class: PlayerFish, data: sprite_data_fish },
      { class: NPC, data: sprite_data_npc }
    ];
  }

  // Add any methods to manipulate the game level data here
}

export default GameLevelWater;