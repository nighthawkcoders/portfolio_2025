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
        if (this.currentLevel) {
            this.currentLevel.destroy();
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

        const loadingText = document.createElement('div');
        loadingText.textContent = 'Loading...';
        fadeOverlay.appendChild(loadingText);

        const progressBarContainer = document.createElement('div');
        Object.assign(progressBarContainer.style, {
            width: '80%',
            height: '20px',
            border: '2px solid white',
            marginTop: '10px',
            position: 'relative',
        });

        const progressBar = document.createElement('div');
        Object.assign(progressBar.style, {
            width: '0%',
            height: '100%',
            backgroundColor: 'cyan',
            transition: 'width 1s ease-in-out',
        });
        
        const progressText = document.createElement('div');
        Object.assign(progressText.style, {
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
        });
        progressText.textContent = '0%';

        progressBarContainer.appendChild(progressBar);
        progressBarContainer.appendChild(progressText);
        fadeOverlay.appendChild(progressBarContainer);

        document.body.appendChild(fadeOverlay);

        requestAnimationFrame(() => {
            fadeOverlay.style.opacity = '1';
        });

        const totalDuration = 1000;
        const interval = 100;
        let currentProgress = 0;

        const loadingInterval = setInterval(() => {
            currentProgress += 10;
            progressBar.style.width = `${currentProgress}%`;
            progressText.textContent = `${currentProgress}%`;
            if (currentProgress >= 100) {
                clearInterval(loadingInterval);
            }
        }, interval);

        setTimeout(() => {
            const GameLevelClass = this.levelClasses[this.currentLevelIndex];
            this.currentLevel = new GameLevel(this);
            this.currentLevel.create(GameLevelClass);

            fadeOverlay.style.opacity = '0';
            setTimeout(() => document.body.removeChild(fadeOverlay), 1000);

            this.gameLoop();
        }, totalDuration);
    }

    /**
     * Handles the level end with neon-styled alerts
     */
    handleLevelEnd() {
        const alertStyle = `
            background-color: #0a0a1a;
            color: #00ffff;
            border: 2px solid white;
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
                <h2>SORRY, ALL GAME LEVELS DESIGNED ARE FINISHED.</h2>
            `;
            document.body.appendChild(alertDiv);
        }

        this.currentLevel.destroy();
        if (this.gameOver) {
            this.gameOver();
        } else {
            this.currentLevelIndex++;
            if (this.currentLevelIndex < this.levelClasses.length) {
                this.transitionToLevel();
            }
        }
    }
}

export default GameControl;
