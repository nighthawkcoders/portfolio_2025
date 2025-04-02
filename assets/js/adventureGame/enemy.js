import Character from './Character.js';
import Player from './Player.js';

class Enemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.playerDestroyed = false; // Tracks if the player has been "killed"
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
    // Returns true if a collision is detected, otherwise false.
    collisionChecks() {
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                this.isCollision(gameObj);
                if (this.collisionData.hit) {
                    return true;
                }
            }
        }
        return false;
    }

    // Handles what happens when the player collides with the enemy.
    handleCollisionEvent() {
        console.log("Player collided with the Enemy. Player is dead.");
        this.playerDestroyed = true; // Mark the player as "dead"
        this.gameEnv.gameControl.restartLevel(); // Restart the level
    }
}

export default Enemy;
;
