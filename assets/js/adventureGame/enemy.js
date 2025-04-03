import Character from './Character.js';
import Player from './Player.js';

class Enemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.playerDestroyed = false; // Tracks if the player has been "killed"
        this.speed = 3; // Default speed
        this.immune = 0; // Immunity tracker
        this.id = data?.id || 'enemy'; // Ensure the enemy has an ID
    }

    // Overrides the update method to handle collision detection.
    update() {
        // Start by drawing the object
        this.draw();
        // Check if the enemy collides with the player
        if (!this.playerDestroyed && this.collisionChecks()) {
            this.handleCollisionEvent();
        }
    }

    // Checks if the Enemy collides with the Player.
    collisionChecks() {
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                if (this.isCollision(gameObj)) {
                    return true;
                }
            }
        }
        return false;
    }

    // Handles what happens when the player collides with the enemy.
    handleCollisionEvent() {
        console.log("Player collided with the Enemy.");
        this.playerDestroyed = true; // Mark the player as "destroyed"
        this.flashRedScreen(); // Flash the screen red
        setTimeout(() => {
            this.gameEnv.gameControl.currentLevel.continue = false; // End the game loop
            alert("Game Over! You collided with Octocat!");
        }, 500); // Delay to allow the red flash to be visible
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
            backgroundColor: 'red',
            opacity: '0.8',
            zIndex: '9999',
            pointerEvents: 'none',
        });

        document.body.appendChild(redOverlay);

        // Remove the red overlay after 500ms
        setTimeout(() => {
            document.body.removeChild(redOverlay);
        }, 500);
    }
}

export default Enemy;






