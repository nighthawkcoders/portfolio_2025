import GameObject from './GameObject.js';

class PlayerTwo extends GameObject {
    constructor(data = null, gameEnv = null) {
        super(gameEnv);
        this.data = data || {};
        
        // Initialize spriteData for collision detection
        this.spriteData = {
            id: this.data.id || "PlayerTwo",
            greeting: this.data.greeting || "I am Player Two!",
            reaction: this.data.reaction || (() => console.log("Player Two collision"))
        };
        
        // Initialize properties with defaults if not provided in data
        this.keypress = this.data.keypress || {up: 73, left: 74, down: 75, right: 76}; // I, J, K, L
        this.velocity = this.data.velocity || { x: 0, y: 0 };
        this.xVelocity = 5; // Default step size
        this.yVelocity = 5; // Default step size
        this.direction = 'down'; // Default direction
        this.pressedKeys = {}; // active keys array
        
        // Create canvas for the player
        this.canvas = document.createElement("canvas");
        this.canvas.id = this.data.id || "playerTwo";
        this.canvas.width = this.data.pixels?.width || 50;
        this.canvas.height = this.data.pixels?.height || 50;
        this.ctx = this.canvas.getContext('2d');
        
        // Add canvas to game container
        document.getElementById("gameContainer").appendChild(this.canvas);
        
        // Set initial position
        this.position = this.data.INIT_POSITION || { x: 0, y: 0 };
        
        // Set size
        this.width = 50;
        this.height = 50;
        
        // Bind event listeners
        this.bindMovementKeyListners();
    }

    /**
     * Binds key event listeners to handle object movement.
     */
    bindMovementKeyListners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    /**
     * Updates the player's state.
     */
    update() {
        this.move();
        this.draw();
        this.collisionChecks();
    }

    /**
     * Draws the player on the canvas.
     */
    draw() {
        if (!this.ctx) return;
        
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Set up styles for player - use red for Player Two
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Position the canvas
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${this.position.x}px`;
        this.canvas.style.top = `${this.gameEnv.top + this.position.y}px`;
    }

    /**
     * Handles key down events to change the player's velocity.
     */
    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 73: // 'I' key (up)
                this.velocity.y = -this.yVelocity;
                this.direction = 'up';
                break;
            case 74: // 'J' key (left)
                this.velocity.x = -this.xVelocity;
                this.direction = 'left';
                break;
            case 75: // 'K' key (down)
                this.velocity.y = this.yVelocity;
                this.direction = 'down';
                break;
            case 76: // 'L' key (right)
                this.velocity.x = this.xVelocity;
                this.direction = 'right';
                break;
        }
    }

    /**
     * Handles key up events to stop the player's velocity.
     */
    handleKeyUp({ keyCode }) {
        switch (keyCode) {
            case 73: // 'I' key (up)
                if (this.velocity.y < 0) this.velocity.y = 0;
                break;
            case 74: // 'J' key (left)
                if (this.velocity.x < 0) this.velocity.x = 0;
                break;
            case 75: // 'K' key (down)
                if (this.velocity.y > 0) this.velocity.y = 0;
                break;
            case 76: // 'L' key (right)
                if (this.velocity.x > 0) this.velocity.x = 0;
                break;
        }
    }

    /**
     * Moves the player according to velocity and ensures boundaries.
     */
    move() {
        // Update position according to velocity
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Ensure the player stays within the canvas boundaries
        if (this.position.y + this.height > this.gameEnv.innerHeight) {
            this.position.y = this.gameEnv.innerHeight - this.height;
            this.velocity.y = 0;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
        if (this.position.x + this.width > this.gameEnv.innerWidth) {
            this.position.x = this.gameEnv.innerWidth - this.width;
            this.velocity.x = 0;
        }
        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
    }

    /**
     * Resizes the player based on game environment changes.
     */
    resize() {
        // This would handle window resize events
        this.draw();
    }

    /**
     * Removes the player from the game.
     */
    destroy() {
        // Remove canvas from DOM
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        
        // Remove from gameObjects array
        const index = this.gameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            this.gameEnv.gameObjects.splice(index, 1);
        }
    }
}

export default PlayerTwo;