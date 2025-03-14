// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import Player from './Player.js';
import Npc from './NPC.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';
import GameLevelMeteorBlaster from './GameLevelMeteorBlaster.js';

class GameLevelDesert {
  constructor(gameEnv) {
    // Values dependent on this.gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_desert = path + "/images/gamify/desert.png"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };

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
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC data for Tux 
    const sprite_src_tux = path + "/images/gamify/ender_dragon.png"; // be sure to include the path
    const sprite_greet_tux = "Hi I am Tux, the Linux mascot.  I am very happy to spend some linux shell time with you!";
    const sprite_data_tux = {
        id: 'Tux',
        greeting: sprite_greet_tux,
        src: sprite_src_tux,
        SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 4800, width: 4800},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 16, columns: 16 },
        down: {row: 1, start: 0, columns: 1 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        reaction: function() {
          alert(sprite_greet_tux);
        },
        interact: function() {
          // Transition to a new level (e.g., GameLevelMeteorBlaster)
          let primaryGame = gameEnv.gameControl;
          let levelArray = [GameLevelMeteorBlaster];
          let gameInGame = new GameControl(gameEnv.game, levelArray);
          primaryGame.pause();
          gameInGame.start();
          gameInGame.gameOver = function() {
            primaryGame.resume();
          }
        }
    };

    // NPC data for Octocat
    const sprite_src_octocat = path + "/images/gamify/octocat.png"; // be sure to include the path
    const sprite_greet_octocat = "Hi I am Octocat! I am the GitHub code code code collaboration mascot";
    const sprite_data_octocat = {
        id: 'Octocat',
        greeting: sprite_greet_octocat,
        src: sprite_src_octocat,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 301, width: 801},
        INIT_POSITION: { x: (width / 4), y: (height / 4)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        reaction: function() {
          alert(sprite_greet_octocat);
        },
        interact: function() {
          // Transition to a new level (e.g., GameLevelStarWars)
          let primaryGame = gameEnv.gameControl;
          let levelArray = [GameLevelStarWars];
          let gameInGame = new GameControl(gameEnv.game, levelArray);
          primaryGame.pause();
          gameInGame.start();
          gameInGame.gameOver = function() {
            primaryGame.resume();
          }
        }
    };

    // List of objects definitions for this level
    this.classes = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_octocat },
    ];
  }
}

export default GameLevelDesert;