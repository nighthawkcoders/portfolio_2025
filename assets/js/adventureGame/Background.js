import GameObject from './GameObject.js';

/** Background GameObject
 */
export class Background extends GameObject {
    /**
     * Constructor is called by GameLevel create() method
     * @param {Object} data - The data object for the background
     * @param {Object} gameEnv - The game environment object for convenient access to game properties 
     */
    constructor(data = null, gameEnv = null) {
        super(gameEnv);

        if (!data || !data.src) {
            console.error('Background requires a src property in data', data);
            throw new Error('Background requires a src property in data');
        }

        console.log("Background constructor called with data:", data);
        
        this.data = data;
        // Set the properties of the background
        this.image = new Image();
        this.image.src = data.src;
        this.isInitialized = false; // Flag to track initialization

        // Finish initializing the background after the image loads 
        this.image.onload = () => {
            console.log("Background image loaded:", data.src);
            
            // Width and height come from the image
            this.width = this.image.width;
            this.height = this.image.height;

            // Create the canvas element and context
            this.canvas = document.createElement("canvas");
            this.canvas.style.position = "absolute";
            this.canvas.style.zIndex = this.data.zIndex || "0";
            this.canvas.id = data.id || "background";
            this.ctx = this.canvas.getContext("2d");
            
            // Align the canvas size to the gameCanvas
            this.alignCanvas();

            // Append the canvas to the DOM
            document.getElementById("gameContainer").appendChild(this.canvas);
            this.isInitialized = true; // Mark as initialized
            
            console.log("Background initialized:", {
                id: this.canvas.id,
                width: this.canvas.width,
                height: this.canvas.height,
                zIndex: this.canvas.style.zIndex
            });
        };
        
        this.image.onerror = (error) => {
            console.error("Error loading background image:", data.src, error);
        };
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

        // Clear the canvas
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // Draw the image scaled to fit the canvas
        this.ctx.drawImage(this.image, 0, 0, canvasWidth, canvasHeight);
    }
    
    /**
     * Resize method is called by resize listner on all GameObjects
     */
    resize() {
        console.log("Background resize called");
        this.alignCanvas(); // Align the canvas to the gameCanvas
        this.draw(); // Redraw the canvas after resizing
    }
    
    /**
     * Destroy method to clean up resources
     */
    destroy() {
        console.log("Background destroy called");
        
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

export default Background;