import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Projectile from './Projectile.js';

class GameLevelStarWars {
  constructor(gameEnv) {
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_atat = path + "/images/gamify/atat_background.png";
    const image__data_atat = {
        id: 'AT-AT-Background',
        src: image_src_atat,
        pixels: {height: 570, width: 1025}
    };

    // Player 1 - Red Square
    const sprite_data_red_square = {
        id: 'Red-Square',
        color: 'red',
        INIT_POSITION: { x: 100, y: 100 },
        SIZE: { width: 50, height: 50 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }, // W, A, S, D
    };

    // Player 2 - Green Square
    const sprite_data_green_square = {
        id: 'Green-Square',
        color: 'green',
        INIT_POSITION: { x: 300, y: 100 },
        SIZE: { width: 50, height: 50 },
        keypress: { up: 38, left: 37, down: 40, right: 39 }, // Arrow keys
    };

    // Snowspeeder Data
    const sprite_src_snowspeeder = path + "/images/gamify/snowspeeder_sprite2.png";
    const SNOWSPEEDER_SCALE_FACTOR = 6; 
    const sprite_data_snowspeeder = {
        id: 'Snowspeeder',
        greeting: "Hi I am snowspeeder, the desert wanderer. I am trying to take down the empire's AT-ATs!",
        src: sprite_src_snowspeeder,
        SCALE_FACTOR: SNOWSPEEDER_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: 0 }, 
        pixels: {height: 293, width: 358},
        orientation: {rows: 1, columns: 1 },
        right: {row: 0, start: 0, columns: 1, rotate: 0 }, // Default facing right
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 },
        idle: {row: 0, start: 0, columns: 1, loop: true},
        reaction: function() {
          alert("We just got hit by a projectile!");
        }
    };

    // Turret Data
    const sprite_src_turret = path + "/images/gamify/aa_spritesheet1.png";
    const TURRET_SCALE_FACTOR = 3;
    const sprite_data_turret = {
      id: 'Turret-Anti-Air',
      greeting: "I am the Anti-Air Turret. I am here to take down the snowspeeder!",
      src: sprite_src_turret,
      SCALE_FACTOR: TURRET_SCALE_FACTOR,
      ANIMATION_RATE: 100,
      pixels: {width: 1056, height: 236},
      INIT_POSITION: { x: width - (height/TURRET_SCALE_FACTOR), y: height - .82*(height/TURRET_SCALE_FACTOR) },
      orientation: {rows: 1, columns: 3 },
      down: {row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    };

    // Laser Data
    const sprite_src_laser = path + "/images/gamify/laser_bolt.png";
    const sprite_data_laser1 = {
        id: 'AT-AT-Laser-1',
        src: sprite_src_laser,
        pixels: {height: 500, width: 500},
        SCALE_FACTOR: 30,
        INIT_POSITION_RATIO: { x: 1 / 1.78, y: 1 / 3.3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        TRANSLATE_SCALE_FACTOR: 10,
        TRANSLATE_POSITION_RATIO: { x: 1 / 2.78, y: 1 / 2.9 },
        TRANSLATE_SIMULATION: {miliseconds: 500 },
        down: {row: 0, start: 0, columns: 3, spin: 4},
     };

    // Subtle idle motion for Snowspeeder
    setInterval(() => {
      sprite_data_snowspeeder.INIT_POSITION.x += Math.sin(Date.now() / 500) * 0.5;
      sprite_data_snowspeeder.INIT_POSITION.y += Math.cos(Date.now() / 500) * 0.5;
    }, 16);

    // List of objects
    this.classes = [
      { class: Background, data: image__data_atat },
      { class: Player, data: sprite_data_red_square },
      { class: Player, data: sprite_data_green_square },
      { class: Player, data: sprite_data_snowspeeder },
      { class: Npc, data: sprite_data_turret },
      { class: Projectile, data: sprite_data_laser1 }
    ];
  }
}

export default GameLevelStarWars;
