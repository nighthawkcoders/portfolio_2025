// To build GameLevels, each contains GameObjects from below imports
import GamEnvBackground from './GameEnvBackground.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';
import GameLevelEnd from './GameLevelEnd.js';
import GameLevelMeteorBlaster from './GameLevelMeteorBlaster.js';
import GameLevelMinesweeper from './GameLevelMinesweeper.js';
import Enemy from './enemy.js'; 

class GameLevelDesert {
  constructor(gameEnv) {
    // Store reference to game environment
    this.gameEnv = gameEnv;
    this.continue = true;

    // Initialize the classes array
    this.classes = [];

    // Values dependent on this.gameEnv
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_desert = path + "/images/gamify/desert.png"; // be sure to include the path
    const image_data_desert = {
      name: 'desert',
      greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
      src: image_src_desert,
      pixels: { height: 580, width: 1038 },
    };

    // Add the background to the classes array
    this.classes.push({ class: GamEnvBackground, data: image_data_desert });

    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
      pixels: { height: 384, width: 512 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI / 16 },
      downLeft: { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI / 16 },
      upRight: { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }, // W, A, S, D
    };

    // Add the player to the classes array
    this.classes.push({ class: Player, data: sprite_data_chillguy });

    // NPC data for Tux
    const sprite_src_tux = path + "/images/gamify/tux.png"; // be sure to include the path
    const sprite_greet_tux = "Hi I am Tux, the Linux mascot.  I am very happy to spend some linux shell time with you!";
    const sprite_data_tux = {
      id: 'Tux',
      greeting: sprite_greet_tux,
      src: sprite_src_tux,
      SCALE_FACTOR: 8,
      ANIMATION_RATE: 50,
      pixels: { height: 256, width: 352 },
      INIT_POSITION: { x: width / 2, y: height / 2 },
      orientation: { rows: 8, columns: 11 },
      down: { row: 5, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
    };

    // Add Tux to the classes array
    this.classes.push({ class: Npc, data: sprite_data_tux });

    // NPC data for Octocat
    const sprite_src_octocat = path + "/images/gamify/octocat.png"; // Path to the Octocat sprite
    const sprite_greet_octocat = "Hi I am Octocat! Beware of my coding powers!";
    const sprite_data_octocat = {
      id: 'Octocat',
      greeting: sprite_greet_octocat,
      src: sprite_src_octocat,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 50,
      pixels: { height: 301, width: 801 },
      INIT_POSITION: { x: width / 4, y: height / 4 },
      orientation: { rows: 1, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    };

    // Add Octocat as an enemy
    this.classes.push({ class: Enemy, data: sprite_data_octocat });

    // Add other NPCs and enemies here...
  }

  // Add this method to ensure compatibility with GameLevel.js
  initialize() {
    console.log("GameLevelDesert initialized");
    this.continue = true;
  }

  // Add this method for level updates
  update() {
    // Any level-specific update logic
  }

  // Add this method for proper cleanup
  destroy() {
    console.log("GameLevelDesert destroy called");
  }
}

export default GameLevelDesert;