import Background from './Background.js';

/** Parallax Background GameObject
 * - Layered: draw this background images on top of another
 * - Tiling: draw multiple of the image to fill the gameCanvas extents
 * - Scrolling: adds velocity or position updates to the update(), to scroll the background
 */
export class BackgroundParallax extends Background {
    /**
     * Constructor is called by GameLevel create() method
     * @param {Object} data - The data object for the background
     * @param {Object} gameEnv - The game environment object for convenient access to game properties 
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        // Initialize required properties
        this.position = data.position || { x: 0, y: 0 };
        this.velocity = data.velocity || 1;
        this.zIndex = data.zIndex || 10; 
        
        // Create an image element and load the image
        this.image = new Image();
        this.image.src = data.src;
        
        // Set up initialization flag
        this.isInitialized = false;
        
        // Set up onload handler to track when image is loaded
        this.image.onload = () => {
            console.log("BackgroundParallax image loaded successfully");
            this.width = this.image.width;
            this.height = this.image.height;
            this.isInitialized = true;
        };
        
        // Set up error handler
        this.image.onerror = (err) => {
            console.error("Error loading BackgroundParallax image:", err);
        };
        
        console.log("BackgroundParallax constructor completed, waiting for image to load");
    }

    /**
     * Update is called by GameLoop on all GameObjects 
     * @override Background update() method 
     */
    update() {
        if (!this.isInitialized || !this.image.complete) {
            return; // Skip update if not initialized
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
        if (!this.isInitialized || !this.image.complete) {
            return; // Skip drawing if not initialized
        }

        // Get the canvas context if not already available
        if (!this.ctx && this.canvas) {
            this.ctx = this.canvas.getContext("2d");
        }
        
        if (!this.ctx) {
            console.error("No canvas context available for BackgroundParallax");
            return;
        }

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
    
        // Calculate the wrapped position for scrolling
        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;
    
        if (xWrapped > 0) xWrapped -= this.width;
        if (yWrapped > 0) yWrapped -= this.height;
   
        // Calculate the number of draws needed to fill the canvas
        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        // Save the current canvas state
        this.ctx.save();
        
        // Set global transparency for snowfall effect
        this.ctx.globalAlpha = 0.7;

        // Draw the background image multiple times to fill the canvas
        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image,
                    0, 0, this.width, this.height,
                    xWrapped + i * this.width, yWrapped + j * this.height, this.width, this.height
                );
            }
        }
        
        // Restore the canvas state
        this.ctx.restore();
    }
}

export default BackgroundParallax;