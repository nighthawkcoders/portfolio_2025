import Character from "./Character.js";

class Collectible extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.interact = data?.interact; // Interact function
        this.reaction = data?.reaction; // Reaction function
        this.alertTimeout = null;
        this.bindInteractKeyListeners();
        
        // Store a reference to any proximity hint UI element
        this.proximityHintElement = document.getElementById('proximity-hint');
    }

    update() {
        super.update(); // Call parent update if it exists
        this.draw();
        
        // Update proximity hint visibility based on collisions
        this.updateProximityHint();
    }

    // Check for player collisions and update hint visibility
    updateProximityHint() {
        if (!this.proximityHintElement) return;

        const players = this.gameEnv.gameObjects.filter(
            obj => obj.state && obj.state.collisionEvents && 
            obj.state.collisionEvents.includes(this.spriteData.id)
        );
        
        // Show hint if any player is colliding with this collectible
        if (players.length > 0) {
            this.proximityHintElement.style.opacity = '1';
        } else {
            this.proximityHintElement.style.opacity = '0';
        }
    }

    bindInteractKeyListeners() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        // Check for interaction keys (E or U)
        if (event.key.toLowerCase() === 'e' || event.key.toLowerCase() === 'u') {
            this.handleKeyInteract();
        }
    }

    handleKeyUp(event) {
        // Clear any pending alerts when key is released
        if (event.key.toLowerCase() === 'e' || event.key.toLowerCase() === 'u') {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }

    handleKeyInteract() {
        // Find all players that are currently colliding with this collectible
        const players = this.gameEnv.gameObjects.filter(
            obj => obj.state && 
                  obj.state.collisionEvents && 
                  obj.state.collisionEvents.includes(this.spriteData.id)
        );
        
        // If at least one player is colliding and we have an interact function, call it
        if (players.length > 0 && typeof this.interact === 'function') {
            this.interact.call(this);
            
            // Hide the proximity hint after interaction
            if (this.proximityHintElement) {
                this.proximityHintElement.style.opacity = '0';
            }
        } 
        // If no collision but we have a reaction function, show it
        else if (players.length === 0 && typeof this.reaction === 'function') {
            // Prevent multiple alerts by using a timeout
            if (!this.alertTimeout) {
                this.alertTimeout = setTimeout(() => {
                    this.reaction();
                    this.alertTimeout = null;
                }, 100);
            }
        }
    }

    // Method to move the collectible to a new position
    move(x, y) {
        if (this.sprite && this.sprite.position) {
            this.sprite.position.x = x;
            this.sprite.position.y = y;
        }
    }
    
    // Clean up event listeners when object is destroyed
    destroy() {
        window.removeEventListener('keydown', this.handleKeyDown.bind(this));
        window.removeEventListener('keyup', this.handleKeyUp.bind(this));
        
        // Call parent destroy if it exists
        if (super.destroy) {
            super.destroy();
        }
    }
}

export default Collectible;