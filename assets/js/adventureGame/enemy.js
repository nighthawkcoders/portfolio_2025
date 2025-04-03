import Character from './Character.js';
import Player from './Player.js';

class Enemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.playerDestroyed = false; // Tracks if the player has been "killed"
        this.speed = 3; // Default speed
        this.immune = 0; // Immunity tracker
        this.id = data?.id || 'enemy'; // Ensure the enemy has an ID
        this.lives = 2; // Initialize lives counter
        this.collisionCooldown = false; // Add collision cooldown flag
        this.cooldownDuration = 1000; // 1 second cooldown
        console.log("Enemy created:", this.id); // Debug log
    }

    // Overrides the update method to handle collision detection.
    update() {
        // Start by drawing the object
        this.draw();
        
        // Check if the enemy collides with the player
        if (!this.playerDestroyed && this.collisionChecks()) {
            console.log("Collision detected with player"); // Debug log
            this.handleCollisionEvent();
        }
    }

    // Checks if the Enemy collides with the Player.
    collisionChecks() {
        if (this.collisionCooldown) return false; // Skip collision check if in cooldown
        
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                if (this.isCollision(gameObj)) {
                    console.log("Player collision confirmed"); // Debug log
                    return true;
                }
            }
        }
        return false;
    }

    // Custom isCollision implementation if needed
    isCollision(other) {
        // Call parent isCollision method from GameObject
        super.isCollision(other);
        
        // Return true if hit is detected
        return this.collisionData && this.collisionData.hit;
    }

    // Handles what happens when the player collides with the enemy.
    handleCollisionEvent() {
        console.log("Player collided with the Enemy:", this.id);
        
        if (this.playerDestroyed || this.collisionCooldown) return; // Skip if already handled or in cooldown
        
        // Set collision cooldown
        this.collisionCooldown = true;
        setTimeout(() => {
            this.collisionCooldown = false;
        }, this.cooldownDuration);
        
        // Decrease lives counter
        this.lives--;
        
        // Move player down by 100 pixels
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                // Ensure we're modifying the actual position
                gameObj.position.y += 100;
                console.log("Player moved down to:", gameObj.position.y); // Debug log
                break;
            }
        }
        
        // Check if lives are depleted
        if (this.lives <= 0) {
            this.playerDestroyed = true; // Mark the player as "destroyed"
            this.flashRedScreen(); // Flash the screen red
            
            setTimeout(() => {
                // Make sure we're still active before ending the game
                if (this.playerDestroyed && this.gameEnv && this.gameEnv.gameControl) {
                    this.gameEnv.gameControl.currentLevel.continue = false; // End the game loop
                    alert("Game Over! You collided with Octocat!");
                }
            }, 500); // Delay to allow the red flash to be visible
        }
    }

    // Flashes the screen red
    flashRedScreen() {
        const redOverlay = document.createElement('div');
        Object.assign(redOverlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            opacity: '0.8',
            zIndex: '9999',
            pointerEvents: 'none',
        });

        document.body.appendChild(redOverlay);

        // Remove the red overlay after 500ms
        setTimeout(() => {
            if (document.body.contains(redOverlay)) {
                document.body.removeChild(redOverlay);
            }
        }, 500);
    }
}

export default Enemy;






