import Player from "./Player.js";

class NPC extends Player {
    constructor(data = null) {
        super(data);
    }

    update() {
        super.update();
    }

    checkProximityToNPC() {
        return 0;
    }

    resize() {
        super.resize();
    }

    handleKeyDown(NULL) {
        return 0;
    }

    handleKeyUp(NULL) {
        return 0;
    }
}

export default NPC;