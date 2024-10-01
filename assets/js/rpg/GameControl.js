import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Fish from './PlayerFish.js';
import Turtle from './PlayerTurtle.js';

/**
 * The GameControl object manages the game.
 * 
 * This code uses the JavaScript "object literal pattern" which is nice for centralizing control logic.
 * 
 * The object literal pattern is a simple way to create singleton objects in JavaScript.
 * It allows for easy grouping of related functions and properties, making the code more organized and readable.
 * In the context of GameControl, this pattern helps centralize the game's control logic, 
 * making it easier to manage game states, handle events, and maintain the overall flow of the game.
 * 
 * @type {Object}
 * @property {Player} turtle - The player object.
 * @property {Player} fish 
 * @property {function} start - Initialize game assets and start the game loop.
 * @property {function} gameLoop - The game loop.
 * @property {function} resize - Resize the canvas and player object when the window is resized.
 */
const GameControl = {

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World, this is pre-requisite for all game objects.
        this.background = new Background(assets.image || null);
        this.turtle = new Turtle(assets.turtle || null);
        this.fish = new Fish(assets.fish || null);
        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.turtle.update(); // Change from this.Turtle to this.turtle
        this.fish.update();   // Change from this.Fish to this.fish
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    resize: function() {
        GameEnv.resize(); // Adapts the canvas to the new window size
        this.turtle.resize(); // Change from this.Turtle to this.turtle
        this.fish.resize();   // Change from this.Fish to this.fish
    }
};

// Detect window resize events and call the resize function.
window.addEventListener('resize', GameControl.resize.bind(GameControl));

export default GameControl;