// GameLevelStarWars.js
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Projectile from './Projectile.js';
import FallingBlock from './FallingBlock.js';

class GameLevelStarWars {
  constructor(gameEnv) {
    // Store reference to game environment
    this.gameEnv = gameEnv;
    this.continue = true;
    
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_atat = path + "/images/gamify/atat_background.png";
    const image__data_atat = {
      id: 'AT-AT-Background',
      src: image_src_atat,
      pixels: { height: 570, width: 1025 }
    };

    this.backgrounds = [
      new Background(image__data_atat, gameEnv),
      new Background({ src: path + "/images/gamify/stars.png" }, gameEnv)
    ];
    this.currentBackgroundIndex = 0;
    
    // Player data for snowspeeder
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
      pixels: { height: 293, width: 358 },
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1, rotate: -Math.PI / 2 },
      downRight: { row: 0, start: 0, columns: 1, rotate: -3 * Math.PI / 4 },
      downLeft: { row: 0, start: 0, columns: 1, rotate: -Math.PI / 4 },
      left: { row: 0, start: 0, columns: 1 },
      right: { row: 0, start: 0, columns: 1, rotate: Math.PI },
      up: { row: 0, start: 0, columns: 1, rotate: Math.PI / 2 },
      upLeft: { row: 0, start: 0, columns: 1, rotate: Math.PI / 4 },
      upRight: { row: 0, start: 0, columns: 1, rotate: 3 * Math.PI / 4 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 },
      reaction: function() {
        alert("We just got hit by a projectile!");
      }
    };

    // NPC Data for Turret Anti-Air
    const sprite_src_turret = path + "/images/gamify/aa_spritesheet1.png";
    const TURRET_SCALE_FACTOR = 3;
    const sprite_data_turret = {
      id: 'Turret-Anti-Air',
      greeting: "I am the Anti-Air Turret. I am here to take down the snowspeeder!",
      src: sprite_src_turret,
      SCALE_FACTOR: TURRET_SCALE_FACTOR,
      ANIMATION_RATE: 100,
      pixels: { width: 1056, height: 236 },
      INIT_POSITION: { x: width - (height / TURRET_SCALE_FACTOR), y: height - 0.82 * (height / TURRET_SCALE_FACTOR) },
      orientation: { rows: 1, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 }
    };

    // Laser data, temporary sprite for testing
    const sprite_src_laser = path + "/images/gamify/laser_bolt.png";
    const sprite_data_laser1 = {
      id: 'AT-AT-Laser-1',
      greeting: "Simulate explosive action!",
      src: sprite_src_laser,
      pixels: { height: 500, width: 500 },
      orientation: { rows: 1, columns: 1 },
      SCALE_FACTOR: 30,
      INIT_POSITION_RATIO: { x: 1 / 1.78, y: 1 / 3.3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      TRANSLATE_SCALE_FACTOR: 10,
      TRANSLATE_POSITION_RATIO: { x: 1 / 2.78, y: 1 / 2.9 },
      TRANSLATE_SIMULATION: { miliseconds: 500 },
      down: { row: 0, start: 0, columns: 3, spin: 4 }
    };

    // Laser data, temporary sprite for testing
    const sprite_data_laser2 = {
      id: 'AT-AT-Laser-2',
      greeting: "Simulate explosive action!",
      src: sprite_src_laser,
      pixels: { height: 500, width: 500 },
      orientation: { rows: 1, columns: 1 },
      SCALE_FACTOR: 60,
      INIT_POSITION_RATIO: { x: 1 / 8, y: 1 / 1.95 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      TRANSLATE_SCALE_FACTOR: 20,
      TRANSLATE_POSITION_RATIO: { x: 1 / 20, y: 1 / 1.9 },
      TRANSLATE_SIMULATION: { miliseconds: 500 },
      down: { row: 0, start: 0, columns: 1, spin: 4 }
    };

    this.classes = [
      { class: Background, data: image__data_atat },
      { class: Player, data: sprite_data_snowspeeder },
      { class: Npc, data: sprite_data_turret },
      { class: Projectile, data: sprite_data_laser1 },
      { class: Projectile, data: sprite_data_laser2 }
    ];
    
    // Store button reference for cleanup
    this.switchButton = null;
    this.keyListener = null;
    this.fallingBlock = new FallingBlock(gameEnv);
    this.gameEnv.gameObjects.push(this.fallingBlock);
  }

  // Implementation of required methods for compatibility
  initialize() {
    console.log("GameLevelStarWars initialized");
    this.continue = true;
    
    // Add initial background to game objects
    this.gameEnv.gameObjects.push(this.backgrounds[this.currentBackgroundIndex]);
    
    // Initialize event listeners
    this.bindSwitchBackgroundKey();
    this.createSwitchBackgroundButton();
  }
  
  update(deltaTime) {
    // Level-specific update logic - manage projectiles, check for hits, etc.
    this.fallingBlock.update(deltaTime);
  }
  
  draw(context) {
    // Draw the falling block
    this.fallingBlock.draw(context);
    // ... existing code for drawing other objects ...
  }
  
  destroy() {
    console.log("GameLevelStarWars destroy called");
    
    // Remove the switch background button if it exists
    if (this.switchButton && this.switchButton.parentNode) {
      this.switchButton.parentNode.removeChild(this.switchButton);
    }
    
    // Remove event listeners
    if (this.keyListener) {
      window.removeEventListener("keydown", this.keyListener);
    }
    
    // Clean up backgrounds
    for (const background of this.backgrounds) {
      if (background && background.destroy) {
        background.destroy();
      }
    }
  }

  bindSwitchBackgroundKey() {
    this.keyListener = (event) => {
      if (event.code === "KeyK") {
        this.switchBackground();
      }
    };
    window.addEventListener("keydown", this.keyListener);
  }

  createSwitchBackgroundButton() {
    const gameContainer = document.getElementById("gameContainer");
    if (!gameContainer) {
      console.error("Game container not found");
      return;
    }
    this.switchButton = document.createElement("button");
    this.switchButton.textContent = "Switch Background";
    this.switchButton.style.position = "absolute"; 
    this.switchButton.style.bottom = "10px"; 
    this.switchButton.style.right = "10px"; 
    this.switchButton.style.zIndex = "1000";
    this.switchButton.addEventListener("click", () => {
      this.switchBackground();
    });
    gameContainer.appendChild(this.switchButton);
  }

  switchBackground() {
    this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
    this.gameEnv.gameObjects = this.gameEnv.gameObjects.filter(obj => !(obj instanceof Background));
    this.gameEnv.gameObjects.unshift(this.backgrounds[this.currentBackgroundIndex]);
    this.gameEnv.update();
  }
}

export default GameLevelStarWars;
// Note: Ensure that the paths to the images and other assets are correct.