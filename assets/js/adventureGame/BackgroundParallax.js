import Background from './Background.js';

/** Parallax Background GameObject */
export class BackgroundParallax extends Background {
    /**
     * Constructor is called by GameLevel create() method
     * @param {Object} data - The data object for the background
     * @param {Object} gameEnv - The game environment object for convenient access to game properties 
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        this.position = data?.position || { x: 0, y: 0 };
        this.velocity = data?.velocity || 1;
    }

    /**
     * Update is called by GameLoop on all GameObjects 
     * @override Background update() method 
     */
    update() {
        if (!this.image) {
            console.warn("Parallax background image is not loaded yet.");
            return;
        }

        // Update the position for parallax scrolling
        this.position.x -= this.velocity; // Move left
        this.position.y += this.velocity; // Move down (for snowfall effect)

        // Wrap the position to prevent overflow
        if (this.position.x < -this.width) {
            this.position.x = 0;
        }
        if (this.position.y > this.height) {
            this.position.y = 0;
        }

        // Draw the background image
        this.draw();
    }

    /**
     * Draws the background image within the canvas
     * @override Background draw() method 
     */
    draw() {
        if (!this.isInitialized) {
            console.warn("Parallax background is not initialized.");
            return;
        }

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        // Ensure background is cleared before drawing new frames
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;

        if (xWrapped > 0) xWrapped -= this.width;
        if (yWrapped > 0) yWrapped -= this.height;

        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image,
                    0, 0, this.width, this.height,
                    xWrapped + i * this.width, yWrapped + j * this.height, this.width, this.height
                );
            }
        }
    }
}

export default BackgroundParallax;
