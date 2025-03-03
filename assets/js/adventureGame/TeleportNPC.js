// TeleportNpc.js

class TeleportNpc extends Npc {
    constructor(name, x, y, targetLevel) {
        super(name, x, y);
        this.targetLevel = targetLevel; // The level to teleport to
    }

    interact(player) {
        if (player.isChillGuy) {
            console.log(`${this.name}: "You're ready! Let’s go to ${this.targetLevel}!"`);
            player.showTeleportAnimation();
            setTimeout(() => this.teleportPlayer(player), 1500); // Delay for animation
        } else {
            console.log(`${this.name}: "Hey! Only ChillGuy can teleport."`);
        }
    }

    teleportPlayer(player) {
        console.log(`${player.name} is teleporting to ${this.targetLevel}...`);
        GameControl.changeLevel(this.targetLevel);
        player.position = { x: 100, y: 200 }; // Adjust position after teleport
    }
}

export default TeleportNpc;
