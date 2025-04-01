// GameControl.js 
import GameLevel from "./GameLevel.js";

class GameControl {
    /**
     * Skibidi GameControl - Ultimate Level Destroyer 💥
     */
    constructor(game, levelClasses) {
        this.game = game; // Sigma game reference 💪
        this.path = game.path;
        this.gameContainer = game.gameContainer; // Where the magic goes brrrr
        this.gameCanvas = game.gameCanvas; // Canvas of pure CHAOS
        this.levelClasses = levelClasses;
        this.currentLevel = null;
        this.currentLevelIndex = 0;
        this.gameLoopCounter = 0;
        this.isPaused = false;
        this.exitKeyListener = this.handleExitKey.bind(this);
        this.gameOver = null; // Callback when we ABSOLUTELY DEMOLISH the game
        this.savedCanvasState = []; // No cap, saving game states
        this.gameCompleted = false; // Flag to track if game is fully completed
    }

    /**
     * Let's GET THIS BREAD 🍞
     */
    start() {
        this.addExitKeyListener();
        this.transitionToLevel();
    }

    /**
     * SKIBIDI LOADING TRANSITION - ULTIMATE GAMER MODE 🎮✨
     */ 
    transitionToLevel() {
        // Cleanup previous level
        if (this.currentLevel) {
            this.currentLevel.destroy(); // Ensure all objects from the previous level are removed
        }

        const fadeOverlay = document.createElement('div');
        Object.assign(fadeOverlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a1a',
            opacity: '0',
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontFamily: "'Orbitron', sans-serif",
            color: '#00ffff',
            fontSize: '18px',
            zIndex: '9999'
        });

        // Loading text
        const loadingText = document.createElement('div');
        loadingText.textContent = 'Loading...';
        loadingText.style.textShadow = '0 0 10px #00ffff';
        fadeOverlay.appendChild(loadingText);

        // Loading bar container
        const loadingBarContainer = document.createElement('div');
        loadingBarContainer.style.cssText = `
            width: 80%;
            max-width: 300px;
            background-color: #1a1a2a;
            height: 20px;
            margin-top: 15px;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #00ffff;
        `;
        
        // Loading bar fill
        const loadingBarFill = document.createElement('div');
        loadingBarFill.style.cssText = `
            width: 0%;
            background-color: #00ffff;
            height: 100%;
            border-radius: 8px;
            box-shadow: 0 0 10px #00ffff;
            transition: width 0.1s linear;
        `;
        
        // Loading percentage text
        const loadingPercentage = document.createElement('div');
        loadingPercentage.style.cssText = `
            margin-top: 10px;
            color: #00ffff;
            text-shadow: 0 0 10px #00ffff;
        `;
        loadingPercentage.textContent = '0%';
        
        loadingBarContainer.appendChild(loadingBarFill);
        fadeOverlay.appendChild(loadingBarContainer);
        fadeOverlay.appendChild(loadingPercentage);

        document.body.appendChild(fadeOverlay);

        // Fade in the overlay
        requestAnimationFrame(() => {
            fadeOverlay.style.opacity = '1';
        });

        // Update the loading bar over 1000 milliseconds
        const totalDuration = 1000; // 1 second
        const interval = 50; // Update every 50ms (smoother animation)
        const totalSteps = totalDuration / interval;
        let currentStep = 0;

        const loadingInterval = setInterval(() => {
            currentStep++;
            const progress = (currentStep / totalSteps) * 100;
            loadingBarFill.style.width = `${progress}%`;
            loadingPercentage.textContent = `${Math.round(progress)}%`;
            
            if (currentStep >= totalSteps) {
                clearInterval(loadingInterval); // Stop updating the bar
            }
        }, interval);

        setTimeout(() => {
            // Switch levels when screen is black
            if (this.currentLevelIndex < this.levelClasses.length) {
                const GameLevelClass = this.levelClasses[this.currentLevelIndex];
                this.currentLevel = new GameLevel(this);
                this.currentLevel.create(GameLevelClass);

                // Fade out the overlay
                fadeOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (fadeOverlay.parentNode) {
                        document.body.removeChild(fadeOverlay);
                    }
                }, 1000);

                // Start game loop after transition
                this.gameLoop();
            }
        }, totalDuration); // Wait for the loading duration
    }

    /**
     * The main game loop 
     */
    gameLoop() {
        // If the game is already completed, don't continue
        if (this.gameCompleted) {
            return;
        }
        
        // If the level is not set to continue, handle the level end condition 
        if (!this.currentLevel.continue) {
            this.handleLevelEnd();
            return;
        }
        // If the game level is paused, stop the game loop
        if (this.isPaused) {
            return;
        }
        // Level updates
        this.currentLevel.update();
        this.handleInLevelLogic();
        // Recurse at frame rate speed
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    /**
     * This method is a placeholder for future logic that needs to be executed during the game loop.
     * For example, a starting page or time-based events
     */
    handleInLevelLogic() {
        // This condition is established for future starting page logic
        if (this.currentLevelIndex === 0 && this.gameLoopCounter === 0) {
            console.log("Start Level.");
        }
        // This counter is established for future time-based logic, like frames per second
        this.gameLoopCounter++;
    }

    /**
     * Handles the level end with neon-styled alerts
     */
    handleLevelEnd() {
        // Neon-styled alerts
        const alertStyle = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #0a0a1a;
            color: #00ffff;
            border: 2px solid #ff00ff;
            font-family: 'Orbitron', sans-serif;
            text-shadow: 0 0 10px #00ffff;
            padding: 20px;
            text-align: center;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
        `;

        if (this.currentLevelIndex < this.levelClasses.length - 1) {
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = alertStyle;
            
            // Calculate completion percentage
            const completionPercent = ((this.currentLevelIndex + 1) / this.levelClasses.length * 100).toFixed(0);
            
            // Create progress bar container
            const progressBarContainer = document.createElement('div');
            progressBarContainer.style.cssText = `
                width: 100%;
                background-color: #1a1a2a;
                height: 20px;
                margin-top: 15px;
                border-radius: 10px;
                overflow: hidden;
            `;
            
            // Create progress bar fill
            const progressBarFill = document.createElement('div');
            progressBarFill.style.cssText = `
                width: ${completionPercent}%;
                background-color: #00ffff;
                height: 100%;
                border-radius: 8px;
                box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
                transition: width 0.5s ease-in-out;
            `;
            
            progressBarContainer.appendChild(progressBarFill);
            
            alertDiv.innerHTML = `
                <h2>LEVEL COMPLETE</h2>
                <p>Prepare for the next phase...</p>
                <p>${completionPercent}% Complete</p>
            `;
            
            alertDiv.appendChild(progressBarContainer);
            document.body.appendChild(alertDiv);
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    document.body.removeChild(alertDiv);
                }
            }, 2000);
            
            this.currentLevel.destroy();
            
            // Call the gameOver callback if it exists
            if (this.gameOver) {
                this.gameOver();
            } else {
                this.currentLevelIndex++;
                this.transitionToLevel();
            }
        } else {
            // Set the game as completed to prevent further game loop execution
            this.gameCompleted = true;
            
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = alertStyle;
            
            // Create 100% progress bar container
            const progressBarContainer = document.createElement('div');
            progressBarContainer.style.cssText = `
                width: 100%;
                background-color: #1a1a2a;
                height: 20px;
                margin-top: 15px;
                border-radius: 10px;
                overflow: hidden;
            `;
            
            // Create 100% progress bar fill (cyan)
            const progressBarFill = document.createElement('div');
            progressBarFill.style.cssText = `
                width: 100%;
                background-color: #00ffff;
                height: 100%;
                border-radius: 8px;
                box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
            `;
            
            progressBarContainer.appendChild(progressBarFill);
            
            alertDiv.innerHTML = `
                <h2>ALL LEVELS COMPLETED</h2>
                <p>100% Complete</p>
                <p style="margin-top: 15px; font-size: 18px; color: #ff00ff; text-shadow: 0 0 10px #ff00ff;">PLEASE REFRESH TO RESTART THE GAME</p>
            `;
            
            alertDiv.appendChild(progressBarContainer);
            document.body.appendChild(alertDiv);
            
            // Make sure to destroy the current level to prevent any ongoing processes
            if (this.currentLevel) {
                this.currentLevel.destroy();
            }
            
            // Call the gameOver callback if it exists
            if (this.gameOver) {
                this.gameOver();
            }
            
            // Don't try to transition to a new level or increment currentLevelIndex
            this.removeExitKeyListener(); // Remove event listeners to clean up
        }
    }

    /**
     * Exit key handler to end the current level
     * @param {*} event - The keydown event object
     */
    handleExitKey(event) {
        if (event.key === 'Escape') {
            this.currentLevel.continue = false;
        }
    }

    // Helper method to add exit key listener
    addExitKeyListener() {
        document.addEventListener('keydown', this.exitKeyListener);
    }

    // Helper method to remove exit key listener
    removeExitKeyListener() {
        document.removeEventListener('keydown', this.exitKeyListener);
    }

    // Helper method to save the current canvas id and image data in the game container
    saveCanvasState() {
        const gameContainer = document.getElementById('gameContainer');
        const canvasElements = gameContainer.querySelectorAll('canvas');
        this.savedCanvasState = Array.from(canvasElements).map(canvas => {
            return {
                id: canvas.id,
                imageData: canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
            };
        });
    }

    // Helper method to hide the current canvas state in the game container
    hideCanvasState() {
        const gameContainer = document.getElementById('gameContainer');
        const canvasElements = gameContainer.querySelectorAll('canvas');
        canvasElements.forEach(canvas => {
            if (canvas.id !== 'gameCanvas') {
                canvas.style.display = 'none';
            }
        });
    }

    // Helper method to restore the hidden canvas item to be visible
    showCanvasState() {
        const gameContainer = document.getElementById('gameContainer');
        this.savedCanvasState.forEach(hidden_canvas => {
            const canvas = document.getElementById(hidden_canvas.id);
            if (canvas) {
                canvas.style.display = 'block';
                canvas.getContext('2d').putImageData(hidden_canvas.imageData, 0, 0);
            }
        });
    }

    /**
     * Game level in Game Level helper method to pause the underlying game level
     * 1. Set the current game level to paused
     * 2. Remove the exit key listener
     * 3. Save the current canvas game containers state
     * 4. Hide the current canvas game containers
     */
    pause() {
        this.isPaused = true;
        this.removeExitKeyListener();
        this.saveCanvasState();
        this.hideCanvasState();
     }

     /**
      * Game level in Game Level helper method to resume the underlying game level
      * 1. Set the current game level to not be paused
      * 2. Add the exit key listener
      * 3. Show the current canvas game containers
      * 4. Start the game loop
      */
    resume() {
        this.isPaused = false;
        this.addExitKeyListener();
        this.showCanvasState();
        this.gameLoop();
    }
}

export default GameControl; // ULTIMATE EXPORT OF PURE GAMER ENERGY 💥🎮