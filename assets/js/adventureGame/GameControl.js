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
            try {
                // Switch levels when screen is black
                if (this.currentLevelIndex < this.levelClasses.length) {
                    const GameLevelClass = this.levelClasses[this.currentLevelIndex];
                    this.currentLevel = new GameLevel(this);
                    this.currentLevel.create(GameLevelClass);

                    // Fade out the overlay
                    fadeOverlay.style.opacity = '0';
                    setTimeout(() => {
                        if (document.body.contains(fadeOverlay)) {
                            document.body.removeChild(fadeOverlay);
                        }
                    }, 1000);

                    // Start game loop after transition
                    this.gameLoop();
                }
            } catch (error) {
                console.error("Error in level transition:", error);
                fadeOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (document.body.contains(fadeOverlay)) {
                        document.body.removeChild(fadeOverlay);
                    }
                }, 1000);
            }
        }, totalDuration); // Wait for the loading duration
    }

    /**
     * The main game loop 
     */
    gameLoop() {
        try {
            // If the game is already completed, don't continue
            if (this.gameCompleted) {
                return;
            }
            
            // If the level is not set to continue, handle the level end condition 
            if (!this.currentLevel || !this.currentLevel.continue) {
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
        } catch (error) {
            console.error("Error in game loop:", error);
            // Try to recover from error or show error message
            this.showErrorScreen("Game error occurred! Please refresh.");
        }
    }

    /**
     * Show error screen when something goes wrong
     */
    showErrorScreen(message) {
        const errorOverlay = document.createElement('div');
        errorOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(10, 10, 26, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Orbitron', sans-serif;
            color: #ff3333;
            text-shadow: 0 0 10px #ff3333;
            font-size: 24px;
            z-index: 10000;
        `;
        
        errorOverlay.innerHTML = `
            <div>${message}</div>
            <div style="margin-top: 20px; font-size: 18px; color: #00ffff;">Click anywhere to refresh</div>
        `;
        
        document.body.appendChild(errorOverlay);
        
        errorOverlay.addEventListener('click', () => {
            window.location.reload();
        });
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
     * Shows the "All Levels Completed" screen
     */
    showCompletionScreen() {
        this.gameCompleted = true;
        
        // Remove any existing end screens first
        const existingScreens = document.querySelectorAll('.completion-screen');
        existingScreens.forEach(screen => {
            if (document.body.contains(screen)) {
                document.body.removeChild(screen);
            }
        });
        
        const completionOverlay = document.createElement('div');
        completionOverlay.className = 'completion-screen';
        completionOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(10, 10, 26, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Orbitron', sans-serif;
            color: #00ffff;
            z-index: 10000;
        `;
        
        const title = document.createElement('h1');
        title.style.cssText = `
            color: #ff00ff;
            text-shadow: 0 0 15px #ff00ff;
            font-size: 36px;
            margin-bottom: 20px;
        `;
        title.textContent = 'ALL LEVELS COMPLETED';
        
        const message = document.createElement('p');
        message.style.cssText = `
            color: #00ffff;
            text-shadow: 0 0 10px #00ffff;
            font-size: 22px;
            margin-bottom: 30px;
            text-align: center;
        `;
        message.textContent = 'Sorry, there are no more levels available.';
        
        // Progress bar container
        const progressBarContainer = document.createElement('div');
        progressBarContainer.style.cssText = `
            width: 80%;
            max-width: 400px;
            background-color: #1a1a2a;
            height: 30px;
            margin: 20px 0;
            border-radius: 15px;
            overflow: hidden;
            border: 2px solid #00ffff;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        `;
        
        // Progress bar fill
        const progressBarFill = document.createElement('div');
        progressBarFill.style.cssText = `
            width: 100%;
            background-color: #00ffff;
            height: 100%;
            border-radius: 12px;
            box-shadow: 0 0 15px #00ffff inset;
        `;
        
        // Progress text
        const progressText = document.createElement('div');
        progressText.style.cssText = `
            font-size: 20px;
            margin: 10px 0 30px 0;
            color: #00ffff;
            text-shadow: 0 0 10px #00ffff;
        `;
        progressText.textContent = '100% Complete';
        
        // Refresh button
        const refreshButton = document.createElement('button');
        refreshButton.style.cssText = `
            background-color: #ff00ff;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 30px;
            font-family: 'Orbitron', sans-serif;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 20px;
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
            text-shadow: 0 0 5px white;
        `;
        refreshButton.textContent = 'REFRESH TO RESTART';
        refreshButton.addEventListener('mouseover', () => {
            refreshButton.style.backgroundColor = '#cc00cc';
            refreshButton.style.transform = 'scale(1.05)';
        });
        refreshButton.addEventListener('mouseout', () => {
            refreshButton.style.backgroundColor = '#ff00ff';
            refreshButton.style.transform = 'scale(1)';
        });
        refreshButton.addEventListener('click', () => {
            window.location.reload();
        });
        
        progressBarContainer.appendChild(progressBarFill);
        
        completionOverlay.appendChild(title);
        completionOverlay.appendChild(message);
        completionOverlay.appendChild(progressBarContainer);
        completionOverlay.appendChild(progressText);
        completionOverlay.appendChild(refreshButton);
        
        document.body.appendChild(completionOverlay);
        
        // Clean up event listeners and game objects
        this.removeExitKeyListener();
        if (this.currentLevel) {
            this.currentLevel.destroy();
            this.currentLevel = null;
        }
    }

    /**
     * Handles the level end with neon-styled alerts
     */
    handleLevelEnd() {
        try {
            // If already in completed state, don't process again
            if (this.gameCompleted) {
                return;
            }
            
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

            // For exactly 2 levels, we'll set specific completion percentages
            const percentages = [50, 100]; // 50% for first level, 100% for second level

            if (this.currentLevelIndex < this.levelClasses.length - 1) {
                const alertDiv = document.createElement('div');
                alertDiv.style.cssText = alertStyle;
                
                // Get specific percentage for this level
                const completionPercent = percentages[this.currentLevelIndex];
                
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
                
                // Clean up current level
                if (this.currentLevel) {
                    this.currentLevel.destroy();
                    this.currentLevel = null;
                }
                
                setTimeout(() => {
                    if (document.body.contains(alertDiv)) {
                        document.body.removeChild(alertDiv);
                    }
                    
                    // Call the gameOver callback if it exists
                    if (this.gameOver) {
                        this.gameOver();
                    } else {
                        this.currentLevelIndex++;
                        this.transitionToLevel();
                    }
                }, 2000);
            } else {
                // Final level completed
                this.gameCompleted = true;
                this.showCompletionScreen();
            }
        } catch (error) {
            console.error("Error in handleLevelEnd:", error);
            this.showErrorScreen("Error occurred during level transition! Please refresh.");
        }
    }

    /**
     * Exit key handler to end the current level
     * @param {*} event - The keydown event object
     */
    handleExitKey(event) {
        if (event.key === 'Escape') {
            // If we're on the last level, show the special completion screen
            if (this.currentLevelIndex === this.levelClasses.length - 1) {
                this.showCompletionScreen();
            } else if (this.currentLevel) {
                this.currentLevel.continue = false;
            }
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
        try {
            const gameContainer = document.getElementById('gameContainer');
            if (!gameContainer) return;
            
            const canvasElements = gameContainer.querySelectorAll('canvas');
            this.savedCanvasState = Array.from(canvasElements).map(canvas => {
                return {
                    id: canvas.id,
                    imageData: canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
                };
            });
        } catch (error) {
            console.error("Error saving canvas state:", error);
        }
    }

    // Helper method to hide the current canvas state in the game container
    hideCanvasState() {
        try {
            const gameContainer = document.getElementById('gameContainer');
            if (!gameContainer) return;
            
            const canvasElements = gameContainer.querySelectorAll('canvas');
            canvasElements.forEach(canvas => {
                if (canvas.id !== 'gameCanvas') {
                    canvas.style.display = 'none';
                }
            });
        } catch (error) {
            console.error("Error hiding canvas state:", error);
        }
    }

    // Helper method to restore the hidden canvas item to be visible
    showCanvasState() {
        try {
            const gameContainer = document.getElementById('gameContainer');
            if (!gameContainer) return;
            
            this.savedCanvasState.forEach(hidden_canvas => {
                const canvas = document.getElementById(hidden_canvas.id);
                if (canvas) {
                    canvas.style.display = 'block';
                    canvas.getContext('2d').putImageData(hidden_canvas.imageData, 0, 0);
                }
            });
        } catch (error) {
            console.error("Error showing canvas state:", error);
        }
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