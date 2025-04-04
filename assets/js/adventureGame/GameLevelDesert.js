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
import Enemy from './Enemy.js'; 

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
      STEP_FACTOR: 500,
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

    // Add Octocat as an Enemy
    this.classes.push({ class: Enemy, data: sprite_data_octocat });


          // NPC Data for End Portal
          const sprite_src_endportal = path + "/images/gamify/exitportalfull.png"; // be sure to include the path
          const sprite_greet_endportal = "Teleport to the End? Press E";
          const sprite_data_endportal = {
            id: 'End Portal',
            greeting: sprite_greet_endportal,
            src: sprite_src_endportal,
            SCALE_FACTOR: 6,  // smaller = baller
            ANIMATION_RATE: 100,
            pixels: {width: 2029, height: 2025},
            INIT_POSITION: { x: (width * 2 / 5), y: (height * 1 / 10)}, // Adjusted position
            orientation: {rows: 1, columns: 1 },
            down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            /* Reaction function
            *  This function is called when the player collides with the NPC
            *  It displays an alert with the greeting message
            */
            reaction: function() {
              alert(sprite_greet_endportal);
            },
            /* Interact function
            *  This function is called when the player interacts with the NPC
            *  It pauses the main game, creates a new GameControl instance with the StarWars level,
            */
            interact: function() {
              // Set a primary game reference from the game environment
              let primaryGame = gameEnv.gameControl;
              // Define the game in game level
              let levelArray = [GameLevelEnd];
              // Define a new GameControl instance with the StarWars level
              let gameInGame = new GameControl(gameEnv.game,levelArray);
              // Pause the primary game 
              primaryGame.pause();
              // Start the game in game
              gameInGame.start();
              // Setup "callback" function to allow transition from game in gaame to the underlying game
              gameInGame.gameOver = function() {
                // Call .resume on primary game
                primaryGame.resume();
              }
            }
    
          };


          
    const sprite_src_stocks = path + "/images/gamify/stockguy.png"; // Path to the NPC sprite
    const sprite_greet_stocks = "Darn it, I lost some money on the stock market.. come with me to help me out?";
    
    const sprite_data_stocks = {
        id: 'Stock-NPC',
        greeting: sprite_greet_stocks,
        src: sprite_src_stocks,
        SCALE_FACTOR: 10,
        ANIMATION_RATE: 50,
        pixels: {height: 441, width: 339},
        INIT_POSITION: { x: width * 0.75, y: height * 0.6 },
        orientation: {rows: 1, columns: 1},
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Reaction when player approaches NPC
        reaction: function() {
            alert(sprite_greet_stocks);
        },
        // Interact when player presses "E"
        interact: function() {
            const confirmTeleport = window.confirm("Teleport to the stock market?");
            if (confirmTeleport) {
                window.location.href = "https://nighthawkcoders.github.io/portfolio_2025/stocks/home"; // Replace with your link
            }
        }
    };

    const sprite_src_crypto = path + "/images/gamify/bitcoin.png"; // Path to the NPC sprite
    const sprite_greet_crypto = "*cha-ching*";
    
    const sprite_data_crypto = {
        id: 'Crypto-NPC',
        greeting: sprite_greet_crypto,
        src: sprite_src_crypto,
        SCALE_FACTOR: 10,
        ANIMATION_RATE: 50,
        pixels: {height: 600, width: 600},
        INIT_POSITION: { x: width / 3, y: height / 3 },
        orientation: {rows: 1, columns: 1},
        down: {row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Reaction when player approaches NPC
        reaction: function() {
            alert(sprite_greet_crypto);
        },
        // Interact when player presses "E"
        interact: function() {
            const confirmTeleport = window.confirm("Teleport to gambling hub?");
            if (confirmTeleport) {
                window.location.href = "https://nighthawkcoders.github.io/portfolio_2025/gamify/casinohomepage"; // Replace with your lin
            }
        }
    };
    
    const sprite_src_robot = path + "/images/gamify/robot.png"; // be sure to include the path
    const sprite_greet_robot = "Hi I am Robot, the Jupyter Notebook mascot.  I am very happy to spend some linux shell time with you!";
    const sprite_data_robot = {
      id: 'Robot',
      greeting: sprite_greet_robot,
      src: sprite_src_robot,
      SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {height: 316, width: 627},
      INIT_POSITION: { x: (width * 3 / 4), y: (height * 1 / 4)},
      orientation: {rows: 3, columns: 6 },
      down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      // Linux command quiz

      quiz: { 
        title: "Jupyter Notebook Command Quiz",
        questions: [
          "Which shortcut is used to run a cell in Jupyter Notebook?\n1. Shift + Enter\n2. Ctrl + Enter\n3. Alt + Enter\n4. Tab + Enter",
          "Which shortcut adds a new cell above the current cell?\n1. A\n2. B\n3. C\n4. D",
          "Which shortcut adds a new cell below the current cell?\n1. B\n2. A\n3. C\n4. D",
          "Which shortcut changes a cell to Markdown format?\n1. M\n2. Y\n3. R\n4. K",
          "Which shortcut changes a cell to Code format?\n1. Y\n2. M\n3. C\n4. D",
          "Which shortcut deletes the current cell?\n1. D, D\n2. X\n3. Del\n4. Ctrl + D",
          "Which shortcut saves the current notebook?\n1. Ctrl + S\n2. Alt + S\n3. Shift + S\n4. Tab + S",
          "Which shortcut restarts the kernel?\n1. 0, 0\n2. R, R\n3. K, K\n4. Shift + R",
          "Which shortcut interrupts the kernel?\n1. I, I\n2. Ctrl + C\n3. Shift + I\n4. Alt + I",
          "Which shortcut toggles line numbers in a cell?\n1. L\n2. N\n3. T\n4. G"
        ] 
      },
      reaction: function() {
        alert(sprite_greet_robot);
      },

      interact: function() {
        // Set a primary game reference from the game environment
        let primaryGame = gameEnv.gameControl;
        // Define the game in game level
        let levelArray = [GameLevelMeteorBlaster];
        // Define a new GameControl instance with the StarWars level
        let gameInGame = new GameControl(gameEnv.game, levelArray);
        // Pause the primary game 
        primaryGame.pause();
        // Start the game in game
        gameInGame.start();
        // Setup "callback" function to allow transition from game in gaame to the underlying game
        gameInGame.gameOver = function() {
          // Call .resume on primary game
          primaryGame.resume();
        }
      }
    }

    // NPC Data for R2D2
    const sprite_src_r2d2 = path + "/images/gamify/r2_idle.png"; // be sure to include the path
    const sprite_greet_r2d2 = "Hi I am R2D2.  Leave this planet and help defent the rebel base on Hoth!";
    const sprite_data_r2d2 = {
      id: 'StarWarsR2D2',
      greeting: sprite_greet_r2d2,
      src: sprite_src_r2d2,
      SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {width: 505, height: 223},
      INIT_POSITION: { x: (width * 1 / 4), y: (height * 3 / 4)}, // Adjusted position
      orientation: {rows: 1, columns: 3 },
      down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      /* Reaction function
      *  This function is called when the player collides with the NPC
      *  It displays an alert with the greeting message
      */
      reaction: function() {
        alert(sprite_greet_r2d2);
      },
      /* Interact function
      *  This function is called when the player interacts with the NPC
      *  It pauses the main game, creates a new GameControl instance with the StarWars level,
      */
      interact: function() {
        // Set a primary game reference from the game environment
        let primaryGame = gameEnv.gameControl;
        // Define the game in game level
        let levelArray = [GameLevelStarWars];
        // Define a new GameControl instance with the StarWars level
        let gameInGame = new GameControl(gameEnv.game,levelArray);
        // Pause the primary game 
        primaryGame.pause();
        // Start the game in game
        gameInGame.start();
        // Setup "callback" function to allow transition from game in gaame to the underlying game
        gameInGame.gameOver = function() {
          // Call .resume on primary game
          primaryGame.resume();
        }
      }

    };

    const sprite_src_minesweeper = path + "/images/gamify/robot.png"; // Using robot sprite for Minesweeper NPC
    const sprite_greet_minesweeper = "Want to play a game of Minesweeper? Right-click to flag mines!";
    const sprite_data_minesweeper = {
      id: 'Minesweeper',
      greeting: sprite_greet_minesweeper,
      src: sprite_src_minesweeper,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 100,
      pixels: {height: 316, width: 627},
      INIT_POSITION: { x: (width * 2 / 3), y: (height * 2 / 3)},
      orientation: {rows: 3, columns: 6},
      down: {row: 1, start: 0, columns: 6},
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      reaction: function() {
        alert(sprite_greet_minesweeper);
      },
      interact: function() {
        let primaryGame = gameEnv.gameControl;
        let levelArray = [GameLevelMinesweeper];
        let gameInGame = new GameControl(gameEnv.game, levelArray);
        primaryGame.pause();
        gameInGame.start();
        gameInGame.gameOver = function() {
          primaryGame.resume();
        }
      }
    };




    this.classes.push({ class: Npc, data: sprite_data_minesweeper });
    this.classes.push({ class: Npc, data: sprite_data_r2d2 });
    this.classes.push({ class: Npc, data: sprite_data_stocks });
    this.classes.push({ class: Npc, data: sprite_data_crypto });
    this.classes.push({ class: Npc, data: sprite_data_robot });
    this.classes.push({ class: Npc, data: sprite_data_endportal });
    this.classes.push({ class: Npc, data: sprite_data_tux });
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