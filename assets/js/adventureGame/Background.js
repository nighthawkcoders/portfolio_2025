
import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

/** Background class for primary background */
export class Background extends GameObject {
    constructor(data = null, gameEnv = null) {
        super(gameEnv);
        if (data.src) {
            this.image = new Image();
            this.image.src = data.src;
        } else {
            this.image = null;
        }
    }

    /** For primary background, update is the same as draw */
    update() {
        this.draw();
    }

    /** This method draws to GameEnv context, primary background */
    draw() {
        const ctx = this.gameEnv.ctx;
        const width = this.gameEnv.innerWidth;
        const height = this.gameEnv.innerHeight;

        if (this.image) {
            // Draw the background image scaled to the canvas size
            ctx.drawImage(this.image, 0, 0, width, height);
        } else {
            // Fill the canvas with fillstyle color if no image is provided
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(0, 0, width, height);
        }
    }

    /** For primary background, resize is the same as draw */
    resize() {
        this.draw();
    }

    /** Destroy Game Object */
    destroy() {
        const index = this.gameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            this.gameEnv.gameObjects.splice(index, 1);
        }
    }
}

/** Parallax Meteor Background */
export class BackgroundMeteor extends Background {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.meteors = [];

        // Generate random meteors
        for (let i = 0; i < 20; i++) {
            this.meteors.push({
                x: Math.random() * gameEnv.innerWidth,
                y: Math.random() * gameEnv.innerHeight,
                size: Math.random() * 5 + 2,
                speed: Math.random() * 2 + 0.5
            });
        }
    }

    update() {
        super.update();

        // Move meteors downward
        this.meteors.forEach(meteor => {
            meteor.y += meteor.speed;
            if (meteor.y > this.gameEnv.innerHeight) {
                meteor.y = -meteor.size;
                meteor.x = Math.random() * this.gameEnv.innerWidth;
            }
        });
    }

    draw() {
        super.draw();
        const ctx = this.gameEnv.ctx;

        // Draw meteors
        ctx.fillStyle = 'black';
        this.meteors.forEach(meteor => {
            ctx.fillRect(meteor.x, meteor.y, meteor.size, meteor.size);
        });
    }
}

export default Background;
