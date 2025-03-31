import Background from './Background.js';

/**
 * Parallax Background GameObject
 * - Layered: Draw this background image on top of others
 * - Tiling: Draw multiple of the image to fill the gameCanvas extent
 * - Scrolling: Adds velocity or position updates to simulate scrolling in the background
 */
export class BackgroundParallax extends Background {
    /**
     * Constructor is called by the GameLevel create() method.
     * @param {Object} data - The data object for the background, which includes image source, position, and velocity.
     * @param {Object} gameEnv - The game environment object providing access to the canvas and context.
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        this.position = data.position || { x: 0, y: 0 };  // Position to start drawing
        this.velocity = data.velocity || 1;  // Velocity of movement for the parallax effect
        this.zIndex = data.zIndex || 1;  // Layering index for sorting (default to 1)
        this.image = new Image();  // Image for the background
        this.image.src = data.src;  // Source for the image (provided by the level)

        // Initialization when image is loaded
        this.isInitialized = false;
        this.image.onload = () => {
            this.width = this.image.width;  // Width of the image
            this.height = this.image.height;  // Height of the image
            this.isInitialized = true;  // Image is ready to be drawn
            this.draw();  // Draw background as soon as it's initialized
        };
    }

    /**
     * Update is called by GameLoop on all GameObjects.
     * This method updates the position of the background to simulate the parallax effect.
     * @override Background update() method
     */
    update() {
        if (!this.isInitialized) return;  // Skip if the image isn't loaded

        // Move background in a parallax fashion
        this.position.x -= this.velocity;  // Move left by velocity
        this.position.y += this.velocity;  // Move down (adjust this for desired effect)

        // Wrap the position to prevent overflow beyond canvas width/height
        if (this.position.x < -this.width) {
            this.position.x = 0;  // Reset the horizontal position to the start
        }
        if (this.position.y > this.height) {
            this.position.y = 0;  // Reset the vertical position to the top
        }

        // Draw the updated background
        this.draw();
    }

    /**
     * Draws the background image multiple times to create a seamless tiling effect.
     * The method handles the wrapping and scrolling of the background image.
     * @override Background draw() method
     */
    draw() {
        if (!this.isInitialized) return;  // Skip drawing if not initialized

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        // Calculate the wrapped position for scrolling (parallax effect)
        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;

        // Ensure that the wrapping works smoothly
        if (xWrapped > 0) xWrapped -= this.width;
        if (yWrapped > 0) yWrapped -= this.height;

        // Calculate the number of draws needed to fill the canvas (tiling)
        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        // Clear the canvas before drawing new background
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw the image multiple times in both horizontal and vertical directions
        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image,  // Source image
                    0, 0, this.width, this.height,  // Source rectangle
                    xWrapped + i * this.width, yWrapped + j * this.height,  // Destination position on canvas
                    this.width, this.height  // Size of the image
                );
            }
        }
    }
}

export default BackgroundParallax;
