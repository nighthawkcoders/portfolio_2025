import Character from "./Character.js";

class NPC extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.interact = data?.interact; // Interact function
        this.currentQuestionIndex = 0;
        this.alertTimeout = null;
        this.interacted = false;
        this.bindInteractKeyListeners();
    }

    update() {
        this.draw();
        if (this.checkInteraction() && !this.interacted) {
            this.interacted = true;
            this.triggerLevelChange();
        }
    }

    bindInteractKeyListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown({ key }) {
        if (key === 'e' || key === 'u') {
            this.handleKeyInteract();
        }
    }

    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }

    handleKeyInteract() {
        const players = this.gameEnv.gameObjects.filter(
            obj => obj.state.collisionEvents.includes(this.spriteData.id)
        );
        const hasInteract = this.interact !== undefined;

        if (players.length > 0 && hasInteract) {
            this.interact();
        }
    }

    checkInteraction() {
        // Placeholder for interaction logic
        // Return true if the player interacts with the NPC
        return true;
    }

    triggerLevelChange() {
        // Trigger the level change
        this.gameEnv.gameControl.loadLevel('PlatformerLevel');
    }

    destroy() {
        // Cleanup if necessary
    }
}

export default NPC;
