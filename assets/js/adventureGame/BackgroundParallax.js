import Background from './Background.js';

/** Parallax Background GameObject */
export class BackgroundParallax extends Background {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        this.position = data.position || { x: 0, y: 0 };
        this.velocity = data.velocity || 1;
    }

    update() {
        // Update the position for parallax scrolling
        this.position.x -= this.velocity; // Move left
        this.position.y += this.velocity / 2; // Slight downward effect

        // Wrap around horizontally
        if (this.position.x < -this.width) {
            this.position.x += this.width;
        }
        if (this.position.y > this.height) {
            this.position.y -= this.height;
        }
    }

    draw() {
        if (!this.isInitialized) {
            return; // Skip drawing if not initialized
        }

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;

        if (xWrapped > 0) xWrapped -= this.width;
        if (yWrapped > 0) yWrapped -= this.height;

        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        // DO NOT clear the canvas here! Just draw the stars on top.
        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image,
                    xWrapped + i * this.width, yWrapped + j * this.height
                );
            }
        }
    }
}

export default BackgroundParallax;
