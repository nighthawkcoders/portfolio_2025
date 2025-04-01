import Background from './Background.js';

/**
 * Parallax Background GameObject
 * - Layered: draw this background images on top of another
 * - Tiling: draw multiple of the image to fill the gameCanvas extents
 * - Scrolling: adds velocity or position updates to the update(), to scroll the background
 */
export class BackgroundParallax extends Background {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        this.position = data.position || { x: 0, y: 0 };
        this.velocity = data.velocity || 1;

        // Ensure image is loaded before proceeding
        this.image.onload = () => {
            this.isInitialized = true;
        };
    }

    update() {
        // Ensure image is loaded before updating
        if (!this.isInitialized) {
            console.log("Parallax image not loaded yet.");
            return;
        }

        // Update the position for parallax scrolling
        this.position.x -= this.velocity; // Move left
        this.position.y += this.velocity; // Move down (for snowfall effect)

        // Wrap the position to prevent overflow
        if (this.position.x <= -this.width) {
            this.position.x = 0;
        }
        if (this.position.y >= this.height) {
            this.position.y = 0;
        }

        // Draw the updated background
        this.draw();
    }

    draw() {
        if (!this.isInitialized) {
            console.log("Parallax background is not initialized.");
            return;
        }

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        // Calculate wrapped position
        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;

        if (xWrapped > 0) xWrapped -= this.width;
        if (yWrapped > 0) yWrapped -= this.height;

        // Calculate number of tiles needed to fill the screen
        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        // Clear the canvas before drawing
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw multiple images to fill the screen
        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image, // Source image
                    0, 0, this.width, this.height, // Source rectangle
                    xWrapped + i * this.width, yWrapped + j * this.height, this.width, this.height // Destination rectangle
                );
            }
        }
    }
}

export default BackgroundParallax;
