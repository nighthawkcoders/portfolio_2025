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
            color: 'white',
            fontSize: '18px',
        });

        // Loading text
        const loadingText = document.createElement('div');
        loadingText.textContent = 'Loading...';
        fadeOverlay.appendChild(loadingText);

        // Loading bar container with white border
        const loadingBarContainer = document.createElement('div');
        Object.assign(loadingBarContainer.style, {
            width: '300px',
            height: '30px',
            border: '2px solid white',
            marginTop: '15px',
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden'
        });

        // Loading bar fill (cyan)
        const loadingBarFill = document.createElement('div');
        Object.assign(loadingBarFill.style, {
            height: '100%',
            width: '0%',
            backgroundColor: '#00ffff', // Cyan color
            transition: 'width 0.1s linear'
        });
        
        // Percentage text (white)
        const percentText = document.createElement('div');
        Object.assign(percentText.style, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px #000'
        });
        percentText.textContent = '0%';

        loadingBarContainer.appendChild(loadingBarFill);
        loadingBarContainer.appendChild(percentText);
        fadeOverlay.appendChild(loadingBarContainer);

        document.body.appendChild(fadeOverlay);

        // Fade in the overlay
        requestAnimationFrame(() => {
            fadeOverlay.style.opacity = '1';
        });

        // Update the loading bar over 1000 milliseconds
        const totalDuration = 1000; // 1 second
        const interval = 50; // Update every 50ms for smoother animation
        const totalSteps = totalDuration / interval;
        let currentStep = 0;

        const loadingInterval = setInterval(() => {
            currentStep++;
            const percentComplete = Math.round((currentStep / totalSteps) * 100);
            loadingBarFill.style.width = `${percentComplete}%`;
            percentText.textContent = `${percentComplete}%`;
            
            if (currentStep >= totalSteps) {
                clearInterval(loadingInterval); // Stop updating the bar
            }
        }, interval);

        setTimeout(() => {
            // Switch levels when screen is black
            const GameLevelClass = this.levelClasses[this.currentLevelIndex];
            this.currentLevel = new GameLevel(this);
            this.currentLevel.create(GameLevelClass);

            // Fade out the overlay
            fadeOverlay.style.opacity = '0';
            setTimeout(() => document.body.removeChild(fadeOverlay), 1000);

            // Start game loop after transition
            this.gameLoop();
        }, totalDuration); // Wait for the loading duration
    }

    /**
     * The main game loop 
     */
    gameLoop() {
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
            background-color: #0a0a1a;
            color: #00ffff;
            border: 2px solid #ff00ff;
            font-family: 'Orbitron', sans-serif;
            text-shadow: 0 0 10px #00ffff;
            padding: 20px;
            text-align: center;
        `;

        if (this.currentLevelIndex < this.levelClasses.length - 1) {
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = alertStyle;
            alertDiv.innerHTML = `
                <h2>LEVEL COMPLETE</h2>
                <p>Prepare for the next phase...</p>
            `;
            document.body.appendChild(alertDiv);
            setTimeout(() => document.body.removeChild(alertDiv), 2000);
        } else {
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = alertStyle;
            alertDiv.innerHTML = `
                <h2>LEVEL WON. VICTORY</h2>
                <p>Sorry all game levels designed are finished.</p>
            `;
            document.body.appendChild(alertDiv);
        }

        this.currentLevel.destroy();
        // Call the gameOver callback if it exists
        if (this.gameOver) {
            this.gameOver();
        } else {
            this.currentLevelIndex++;
            this.transitionToLevel();
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