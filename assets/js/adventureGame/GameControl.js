// GameControl.js
import GameLevel from "./GameLevel.js";

class GameControl {
    /**
     * GameControl class to manage the game levels and transitions
     * @param {*} path - The path to the game assets
     * @param {*} levelClasses - The classes of for each game level
     */
    constructor(game, levelClasses) {
        // GameControl properties
        this.game = game; // Reference required for game-in-game logic
        this.path = game.path;
        this.gameContainer = game.gameContainer; // Document element that contains the game
        this.gameCanvas = game.gameCanvas; // Document element that contains the game canvas
        this.levelClasses = levelClasses;
        this.currentLevel = null;
        this.currentLevelIndex = 0;
        this.gameLoopCounter = 0;
        this.isPaused = false;
        this.exitKeyListener = this.handleExitKey.bind(this);
        this.gameOver = null; // Callback for when the game is over 
        this.savedCanvasState = []; // Save the current levels game elements 
    }

    /**
     * Starts the game by 
     * 1. Adding an exit key listener
     * 2. Transitioning to the first level
     */
    start() {
        this.addExitKeyListener();
        this.transitionToLevel();
    }

    /**
     * Transitions to the next level with an enhanced neon loading bar
     */ 
    transitionToLevel() {
        // Create neon-styled fade overlay
        const fadeOverlay = document.createElement('div');
        Object.assign(fadeOverlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a1a', // Deep dark blue-black
            opacity: '0',
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            fontFamily: "'Orbitron', sans-serif", // Neon-futuristic font
        });

        // Create loading bar container with neon border
        const loadingBarContainer = document.createElement('div');
        Object.assign(loadingBarContainer.style, {
            width: '60%',
            height: '30px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            border: '2px solid #00ffff', // Cyan neon border
            boxShadow: '0 0 10px #00ffff, inset 0 0 10px #00ffff', // Neon glow effect
        });

        // Create loading bar with neon gradient
        const loadingBar = document.createElement('div');
        Object.assign(loadingBar.style, {
            width: '0%',
            height: '100%',
            background: 'linear-gradient(to right, #00ffff, #ff00ff)', // Cyan to magenta gradient
            transition: 'width 3s linear',
        });

        // Create loading text with neon styling
        const loadingText = document.createElement('div');
        Object.assign(loadingText.style, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#00ffff', // Cyan neon color
            fontSize: '18px',
            fontWeight: 'bold',
            textShadow: '0 0 10px #00ffff', // Neon text glow
            zIndex: '10',
        });

        // Update percentage during loading
        const updatePercentage = () => {
            let percent = 0;
            const interval = setInterval(() => {
                percent++;
                loadingText.textContent = `Loading... ${percent}%`;
                if (percent >= 100) {
                    clearInterval(interval);
                    loadingText.textContent = 'Entering Cyberspace';
                    loadingText.style.color = '#ff00ff'; // Change to magenta for final state
                    loadingText.style.textShadow = '0 0 10px #ff00ff';
                }
            }, 30);
        };

        // Append elements
        loadingBarContainer.appendChild(loadingBar);
        loadingBarContainer.appendChild(loadingText);
        fadeOverlay.appendChild(loadingBarContainer);
        document.body.appendChild(fadeOverlay);

        // Inject neon font
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        // Fade to black and start loading bar
        requestAnimationFrame(() => {
            fadeOverlay.style.opacity = '1';
            
            setTimeout(() => {
                loadingBar.style.width = '100%';
                updatePercentage();
            }, 50);
        });

        setTimeout(() => {
            // Switch levels when screen is black
            const GameLevelClass = this.levelClasses[this.currentLevelIndex];
            this.currentLevel = new GameLevel(this);
            this.currentLevel.create(GameLevelClass);

            // Fade back in with neon effect
            fadeOverlay.style.opacity = '0';
            setTimeout(() => document.body.removeChild(fadeOverlay), 1000);

            // Start game loop after transition
            this.gameLoop();
        }, 3000);
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
                <h2>SYSTEM VICTORY</h2>
                <p>All levels conquered. Simulation complete.</p>
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

export default GameControl;