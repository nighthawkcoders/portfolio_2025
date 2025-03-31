import Background from './Background.js';

/**
 * Parallax Background GameObject
 * - Layered: Draws background images on top of each other
 * - Tiling: Fills the canvas by repeating the image
 * - Scrolling: Moves the background to create a parallax effect
 */
export class BackgroundParallax extends Background {
    /**
     * Constructor is called by GameLevel create() method
     * @param {Object} data - The data object for the background
     * @param {Object} gameEnv - The game environment object for convenient access to game properties 
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        this.position = data.position || { x: 0, y: 0 };
        this.velocity = data.velocity || 1;

        this.image = new Image();
        this.image.src = data.src;

        this.image.onload = () => {
            this.width = this.image.width;
            this.height = this.image.height;
            this.isInitialized = true;
            this.draw(); // Ensure initial draw after loading
        };

        this.ctx = gameEnv.canvas.getContext("2d"); // Ensure the context is set
    }

    /**
     * Update is called by GameLoop on all GameObjects 
     * @override Background update() method 
     */
    update() {
        if (!this.isInitialized) return; // Prevent update until image is loaded

        // Move left for parallax effect
        this.position.x -= this.velocity; 
        this.position.y += this.velocity / 2; // Optional vertical scrolling

        // Wrap horizontally
        if (this.position.x < -this.width) {
            this.position.x += this.width;
        }

        // Wrap vertically (if enabled)
        if (this.position.y > this.height) {
            this.position.y -= this.height;
        }

        this.draw();
    }

    /**
     * Draws the background image within the canvas
     * @override Background draw() method 
     */
    draw() {
        if (!this.isInitialized) return; // Prevent drawing until image is loaded

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
    
        // Wrapped position for scrolling
        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;
    
        if (xWrapped > 0) xWrapped -= this.width;
        if (yWrapped > 0) yWrapped -= this.height;
   
        // Calculate the number of draws needed to fill the canvas
        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        // Clear the canvas before drawing
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw the background image multiple times to fill the canvas
        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image,
                    0, 0, this.width, this.height, // Source rectangle
                    xWrapped + i * this.width, yWrapped + j * this.height, this.width, this.height // Destination
                );
            }
        }
    }
}

export default BackgroundParallax;
