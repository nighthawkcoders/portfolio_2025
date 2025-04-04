import GameObject from './GameObject.js';

/** Parallax Background GameObject
 * - Layered: draw this background images on top of another
 * - Tiling: draw multiple of the image to fill the gameCanvas extents
 * - Scrolling: adds velocity or position updates to the update(), to scroll the background
 */
export class BackgroundParallax extends GameObject {
    /**
     * Constructor is called by GameLevel create() method
     * @param {Object} data - The data object for the background
     * @param {Object} gameEnv - The game environment object for convenient access to game properties 
     */
    constructor(data = null, gameEnv = null) {
        super(gameEnv);
        
        console.log("BackgroundParallax constructor called", data);
        
        if (!data || !data.src) {
            console.error('BackgroundParallax requires a src property in data', data);
            throw new Error('BackgroundParallax requires a src property in data');
        }
        
        this.data = data;
        this.position = data.position || { x: 0, y: 0 };
        this.velocity = data.velocity || 1;
        this.logCounter = 0; // Counter to reduce log frequency
        
        // Set the properties of the background
        this.image = new Image();
        this.image.src = data.src;
        this.isInitialized = false; // Flag to track initialization
        
        // Create debug overlay
        this.createDebugOverlay();
        
        // Finish initializing the background after the image loads 
        this.image.onload = () => {
            console.log("BackgroundParallax image loaded:", data.src);
            
            // Width and height come from the image
            this.width = this.image.width;
            this.height = this.image.height;

            // Create the canvas element and context
            this.canvas = document.createElement("canvas");
            this.canvas.style.position = "absolute";
            this.canvas.id = data.id || "parallax-background";
            this.ctx = this.canvas.getContext("2d");
            
            // Set z-index and opacity directly instead of using data
            this.canvas.style.zIndex = "1"; // Use positive value to ensure visibility
            this.canvas.style.opacity = "0.3"; // 30% opacity
            
            // Align the canvas size to the gameCanvas
            this.alignCanvas();

            // Append the canvas to the DOM first in the container to be behind everything
            const gameContainer = document.getElementById("gameContainer");
            if (gameContainer.firstChild) {
                gameContainer.insertBefore(this.canvas, gameContainer.firstChild);
            } else {
                gameContainer.appendChild(this.canvas);
            }
            
            this.isInitialized = true; // Mark as initialized
            
            console.log("BackgroundParallax initialized:", {
                id: this.canvas.id,
                width: this.canvas.width,
                height: this.canvas.height,
                zIndex: this.canvas.style.zIndex,
                opacity: this.canvas.style.opacity
            });
        };
        
        this.image.onerror = (error) => {
            console.error("Error loading background parallax image:", data.src, error);
        };
    }
    
    /**
     * Create a debug overlay to show status
     */
    createDebugOverlay() {
        this.debugOverlay = document.createElement('div');
        this.debugOverlay.style.position = 'fixed';
        this.debugOverlay.style.top = '10px';
        this.debugOverlay.style.left = '10px';
        this.debugOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.debugOverlay.style.color = 'white';
        this.debugOverlay.style.padding = '10px';
        this.debugOverlay.style.zIndex = '9999';
        this.debugOverlay.style.fontFamily = 'monospace';
        this.debugOverlay.style.fontSize = '12px';
        this.debugOverlay.style.maxWidth = '300px';
        this.debugOverlay.innerHTML = 'Parallax Debug: Initializing...';
        document.body.appendChild(this.debugOverlay);
    }
    
    /**
     * Update debug overlay with current state
     */
    updateDebugOverlay() {
        if (!this.debugOverlay) return;
        
        // Only update every 30 frames to reduce overhead
        if (this.logCounter++ % 30 !== 0) return;
        
        const status = this.isInitialized ? 'Initialized' : 'Not Initialized';
        const imageStatus = this.image.complete ? 'Loaded' : 'Loading';
        const canvasInfo = this.canvas ? 
            `Canvas: ${this.canvas.width}x${this.canvas.height}, z-index: ${this.canvas.style.zIndex}, opacity: ${this.canvas.style.opacity}` :
            'Canvas: Not created';
        
        this.debugOverlay.innerHTML = `
            <div>Parallax Debug:</div>
            <div>Status: ${status}</div>
            <div>Image: ${imageStatus} (${this.image.src.split('/').pop()})</div>
            <div>${canvasInfo}</div>
            <div>Position: X=${this.position.x.toFixed(2)}, Y=${this.position.y.toFixed(2)}</div>
            <div>Velocity: ${this.velocity}</div>
        `;
    }

    /**
     * Align canvas to be the same size and position as the gameCanvas 
     */
    alignCanvas() {
        // align the canvas to the gameCanvas, Layered
        const gameCanvas = document.getElementById("gameCanvas");
        if (!gameCanvas) {
            console.error("Game canvas not found");
            return;
        }
        
        this.canvas.width = gameCanvas.width;
        this.canvas.height = gameCanvas.height;
        this.canvas.style.left = gameCanvas.style.left;
        this.canvas.style.top = gameCanvas.style.top;
    }

    /**
     * Update is called by GameLoop on all GameObjects 
     */
    update() {
        // Update debug info first (throttled internally)
        this.updateDebugOverlay();
        
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
     */
    draw() {
        if (!this.isInitialized) {
            return; // Skip drawing if not initialized
        }

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
    
        // Calculate the wrapped position, Scrolling
        let xWrapped = this.position.x % this.width;
        let yWrapped = this.position.y % this.height;
    
        if (xWrapped > 0) {
            xWrapped -= this.width;
        }
        if (yWrapped > 0) {
            yWrapped -= this.height;
        }
   
        // Calculate the number of draws needed to fill the canvas, Tiling
        const numHorizontalDraws = Math.ceil(canvasWidth / this.width) + 1;
        const numVerticalDraws = Math.ceil(canvasHeight / this.height) + 1;

        // Clear the canvas
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw the background image multiple times to fill the canvas, Tiling
        for (let i = 0; i < numHorizontalDraws; i++) {
            for (let j = 0; j < numVerticalDraws; j++) {
                this.ctx.drawImage(
                    this.image, // Source image
                    0, 0, this.width, this.height, // Source rectangle
                    xWrapped + i * this.width, yWrapped + j * this.height, this.width, this.height); // Destination rectangle
            }
        }
    }
    
    /**
     * Resize method is called by resize listener on all GameObjects
     */
    resize() {
        console.log("BackgroundParallax resize called");
        this.alignCanvas(); // Align the canvas to the gameCanvas
        this.draw(); // Redraw the canvas after resizing
    }
    
    /**
     * Destroy method to clean up resources
     */
    destroy() {
        console.log("BackgroundParallax destroy called");
        
        // Remove debug overlay
        if (this.debugOverlay && this.debugOverlay.parentNode) {
            this.debugOverlay.parentNode.removeChild(this.debugOverlay);
        }
        
        // Check if canvas exists before trying to remove it
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        
        // Remove from gameObjects array if not already removed
        if (this.gameEnv && this.gameEnv.gameObjects) {
            const index = this.gameEnv.gameObjects.indexOf(this);
            if (index !== -1) {
                this.gameEnv.gameObjects.splice(index, 1);
            }
        }
    }
}

export default BackgroundParallax;