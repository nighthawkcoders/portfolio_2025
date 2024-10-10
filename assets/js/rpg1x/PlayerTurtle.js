import Player from "./Player.js";
import GameEnv from "./GameEnv.js";
import NPC from './NPC.js';
class Turtle extends Player {

    constructor(imageSrc = null) {
        super(imageSrc);
    }
    update() {
        super.update();
    }
    resize() {
        super.resize();
    }


    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 73: // 'I' key
                this.velocity.y -= this.yVelocity;
                this.direction = 'up';
                break;
            case 74: // 'J' key
                this.velocity.x -= this.xVelocity;
                this.direction = 'left';
                break;
            case 75: // 'K' key
                this.velocity.y += this.yVelocity;
                this.direction = 'down';
                break;
            case 76: // 'L' key
                this.velocity.x += this.xVelocity;
                this.direction = 'right';
                break;
            case 32:
                this.checkProximityToNPC();
                break;
        }
    }
    
    handleKeyUp({ keyCode }) {
        switch (keyCode) {
            case 73: // 'I' key
                this.velocity.y = 0;
                break;
            case 74: // 'J' key
                this.velocity.x = 0;
                break;
            case 75: // 'K' key
                this.velocity.y = 0;
                break;
            case 76: // 'L' key
                this.velocity.x = 0;
                break;
        }
    }

    checkProximityToNPC() {
        var player = GameEnv.gameObjects.find(obj => obj instanceof Turtle); 
        var npc = GameEnv.gameObjects.find(obj => obj instanceof NPC);

        if (player && npc) {
            var distance = Math.sqrt(
                Math.pow(player.position.x - npc.position.x, 2) + Math.pow(player.position.y - npc.position.y, 2)
            );

            if (distance <= 100) {
                super.handleResponse("Hello, Turtle!");
            }
        }
    }
}

export default Turtle;