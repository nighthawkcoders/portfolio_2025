import Player from './Player.js';

class Fish extends Player {
    constructor(data = null) {
        super(data);
    }

    update() {
        super.update();
    }

    resize() {
        super.resize();
    }

    checkProximityToNPC() {
        var player = GameEnv.gameObjects.find(obj => obj instanceof Fish); 
        var npc = GameEnv.gameObjects.find(obj => obj instanceof NPC);

        if (player && npc) {
            var distance = Math.sqrt(
                Math.pow(player.position.x - npc.position.x, 2) + Math.pow(player.position.y - npc.position.y, 2)
            );

            if (distance <= 100) {
                super.handleResponse("Hello, Fish!");
            }
        }
    }

    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.velocity.y -= this.yVelocity;
                this.direction = 'up';
                break;
            case 65: // 'A' key
                this.velocity.x -= this.xVelocity;
                this.direction = 'left';
                break;
            case 83: // 'S' key
                this.velocity.y += this.yVelocity;
                this.direction = 'down';
                break;
            case 68: // 'D' key
                this.velocity.x += this.xVelocity;
                this.direction = 'right';
                break;
            case 32: 
                this.checkProximityToNPC();
                break;
        }
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.velocity.y = 0;
                break;
            case 65: // 'A' key
                this.velocity.x = 0;
                break;
            case 83: // 'S' key
                this.velocity.y = 0;
                break;
            case 68: // 'D' key
                this.velocity.x = 0;
                break;
        }
    }
}

export default Fish;