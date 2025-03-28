// GameControl.js 🚀🤪
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
        // Cringe-proof fade overlay (real ones know)
        const fadeOverlay = document.createElement('div');
        Object.assign(fadeOverlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a1a', // Ultra sigma dark mode
            opacity: '0',
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            fontFamily: "'Orbitron', sans-serif", // Futuristic gamer font fr
        });

        // Loading bar container (no cap zone)
        const loadingBarContainer = document.createElement('div');
        Object.assign(loadingBarContainer.style, {
            width: '60%',
            height: '30px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            border: '2px solid #ff00ff', // Sigma border energy
            boxShadow: '0 0 10px #ff00ff, inset 0 0 10px #ff00ff', 
        });

        // Rainbow neon loading bar (MAXIMUM DRIP)
        const loadingBar = document.createElement('div');
        Object.assign(loadingBar.style, {
            width: '0%',
            height: '100%',
            background: 'linear-gradient(to right, #ff00ff, #00ffff, #00ff00, #ffff00, #ff0000)', 
            backgroundSize: '400% 100%',
            animation: 'rainbowGamer 5s ease infinite',
            transition: 'width 3s linear',
        });

        // Gamer animation (NO WEAKNESS)
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbowGamer {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(rainbowStyle);

        // Loading text (MAXIMUM SWAG)
        const loadingText = document.createElement('div');
        Object.assign(loadingText.style, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#ff00ff', 
            fontSize: '18px',
            fontWeight: 'bold',
            textShadow: '0 0 10px #ff00ff',
            zIndex: '10',
        });

        // ULTIMATE LOADING PHRASES (PURE ZOOMER ENERGY)
        const updatePercentage = () => {
            let percent = 0;
            const loadingPhrases = [
                'SKIBIDI LOADER ACTIVATED 🤯',
                'RIZZING UP THE LOADING 💅',
                'SIGMA MODE: DEPLOYING 🚀',
                'ABSOLUTELY DEMOLISHING LOADING BAR 💥',
                'NO CAP, LOADING GOES BRRRR 🔥',
                'SHEEEESH LOADING INCOMING 😱',
                'GYATT TIER LOADING 💢',
                'ZAMN, WE LOADING FR 🤌'
            ];
            const interval = setInterval(() => {
                percent++;
                if (percent < 100) {
                    loadingText.textContent = `${loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]} ${percent}%`;
                } else {
                    clearInterval(interval);
                    loadingText.textContent = 'ULTIMATE GAMER LEVEL UNLOCKED 🏆✨';
                    loadingText.style.color = '#00ffff';
                    loadingText.style.textShadow = '0 0 10px #00ffff';
                }
            }, 30);
        };

        // Append elements
        loadingBarContainer.appendChild(loadingBar);
        loadingBarContainer.appendChild(loadingText);
        fadeOverlay.appendChild(loadingBarContainer);
        document.body.appendChild(fadeOverlay);

        // Gamer font injection (NO MERCY)
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        // FADE AND LOAD (SIGMA PROTOCOL)
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
                <h2>LEVEL WON. VICTORY</h2>
                <p>Level conquered. Game complete.</p>
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