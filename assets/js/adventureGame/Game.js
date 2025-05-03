import GameControl from './GameEngine/GameControl.js';
import Quiz from './Quiz.js';
import Inventory from "./Inventory.js";
import { defaultItems } from "./items.js";
import GameLevelEnd from './GameLevelEnd.js'; // Import GameLevelEnd

class Game {
    constructor() {
        // initialize user and launch GameControl 
        this.main(environment);
        console.log("Initializing game inventory...");
        this.inventory = Inventory.getInstance();
        
        // Give starting items to the player
        this.giveStartingItems();
    }

    // initialize user and launch GameControl 
    static main(environment) {
        // setting Web Application path
        this.environment = environment;
        this.path = environment.path;

        // setting Element IDs
        this.gameContainer = environment.gameContainer;
        this.gameCanvas = environment.gameCanvas;

        // setting API environment variables 
        this.pythonURI = environment.pythonURI;
        this.javaURI = environment.javaURI;
        this.fetchOptions = environment.fetchOptions;

        // prepare user data for scoring and stats 
        this.uid;
        this.id;
        this.initUser();
        this.initStatsUI();
        this.createStopwatch();

        this.gname = null;
        
        // Initialize game timer and level reference
        this.gameTimer = 0;
        this.timerInterval = null;
        this.currentLevelInstance = null;

        // start the game immediately
        const gameLevelClasses = environment.gameLevelClasses;
        this.gameControl = new GameControl(this, gameLevelClasses);
        this.gameControl.start();
        
        // Start the stopwatch
        this.startStopwatch();
    }

    // Set the current level instance for time checks
    static setCurrentLevelInstance(instance) {
        this.currentLevelInstance = instance;
        console.log("Current level instance set:", instance);
    }

    static initUser() {
        const pythonURL = this.pythonURI + '/api/id';
        fetch(pythonURL, this.fetchOptions)
            .then(response => {
                if (response.status !== 200) {
                    console.error("HTTP status code: " + response.status);
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                this.uid = data.uid;
                console.log("User ID:", this.uid);

                const javaURL = this.javaURI + '/rpg_answer/person/' + this.uid;
                return fetch(javaURL, this.fetchOptions);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                this.id = data.id;
                this.fetchStats(data.id);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    static fetchStats(personId) {
        const endpoints = {
            balance: this.javaURI + '/rpg_answer/getBalance/' + personId,
            questionAccuracy: this.javaURI + '/rpg_answer/getQuestionAccuracy/' + personId
        };
    
        for (let [key, url] of Object.entries(endpoints)) {
            fetch(url, this.fetchOptions)
                .then(response => response.json())
                .then(data => {
                    if (key === "questionAccuracy") {
                        const accuracyPercent = Math.round((data ?? 0) * 100);
                        document.getElementById(key).innerHTML = `${accuracyPercent}%`;
                        localStorage.setItem(key, `${accuracyPercent}%`);
                    } else {
                        document.getElementById(key).innerHTML = data ?? 0;
                        localStorage.setItem(key, data ?? 0);
                    }
                })
                .catch(err => console.error(`Error fetching ${key}:`, err));
        }
    }

    static async createStats(stats, gname, uid) {
        try {
            const response = await fetch(`${this.javaURI}/createStats`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ uid, gname, stats })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error creating stats:", error);
            return "Error creating stats";
        }
    }

    static async getStats(uid) {
        try {
            const response = await fetch(`${this.javaURI}/getStats/${uid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching stats:", error);
            return "Error fetching stats";
        }
    }

    static async updateStats(stats, gname, uid) {
        try {
            const response = await fetch(`${this.javaURI}/updateStats`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ uid, gname, stats })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error updating stats:", error);
            return "Error updating stats";
        }
    }

    static async fetchQuestionByCategory(category) {
        try {
            const personId = this.id;
            const response = await fetch(
                `${this.javaURI}/rpg_answer/getQuestion?category=${category}&personid=${personId}`, 
                this.fetchOptions
            );
    
            if (!response.ok) {
                throw new Error("Failed to fetch questions");
            }
    
            const questions = await response.json();
            console.log(questions);
            return questions;
        } catch (error) {
            console.error("Error fetching question by category:", error);
            return null;
        }
    }
    
    static async attemptQuizForNpc(npcCategory, callback = null) {
        const personId = this.id;
    
        try {
            const response = await this.fetchQuestionByCategory(npcCategory);
            const allQuestions = response?.questions || [];
    
            if (allQuestions.length === 0) {
                alert(`✅ You've already completed all of ${npcCategory}'s questions!`);
                return;
            }
    
            const quiz = new Quiz();
            quiz.initialize();
            quiz.openPanel(npcCategory, callback, allQuestions);
    
        } catch (error) {
            console.error("Error during NPC quiz attempt:", error);
            alert("⚠️ There was a problem loading the quiz. Please try again.");
        }
    }
    
    static async updateStatsMCQ(questionId, choiceId, personId) {
        try {
            console.log("Submitting answer with:", { questionId, choiceId, personId });

            const response = await fetch(this.javaURI + '/rpg_answer/submitMCQAnswer', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ questionId, personId, choiceId })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return response;
        } catch (error) {
            console.error("Error submitting MCQ answer:", error);
            throw error;
        }
    }

    static async transitionToWallstreet(personId) {
        try {
            const response = await fetch(`${this.javaURI}/question/transitionToWallstreet/${personId}`, this.fetchOptions);
            if (!response.ok) {
                throw new Error("Failed to fetch questions");
            }
            const questionsAnswered = await response.json();
            return questionsAnswered >=12;
        } catch (error) {
            console.error("Error transitioning to Paradise:", error);
            return null;
        }
    }

    static initStatsUI() {
        // Create theme colors for consistent UI
        const themeColor = '#4a86e8'; // Main theme color (blue)
        const themeShadow = 'rgba(74, 134, 232, 0.7)'; // Shadow color matching theme
        
        const statsContainer = document.createElement('div');
        statsContainer.id = 'stats-container';
        statsContainer.style.position = 'fixed';
        statsContainer.style.top = '75px';
        statsContainer.style.right = '10px';
        statsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        statsContainer.style.color = 'white';
        statsContainer.style.padding = '15px';
        statsContainer.style.borderRadius = '10px';
        statsContainer.style.border = `2px solid ${themeColor}`;
        statsContainer.style.boxShadow = `0 0 15px ${themeShadow}`;
        statsContainer.style.fontFamily = "'Montserrat', sans-serif";
    
        statsContainer.innerHTML = `
            <div style="font-size: 14px; margin-bottom: 8px; display: flex; align-items: center;">
                <span style="margin-right: 8px;">💰</span>
                <span>Balance: <span id="balance" style="color: ${themeColor}; font-weight: bold;">0</span></span>
            </div>
            <div style="font-size: 14px; display: flex; align-items: center;">
                <span style="margin-right: 8px;">📊</span>
                <span>Accuracy: <span id="questionAccuracy" style="color: ${themeColor}; font-weight: bold;">0%</span></span>
            </div>
        `;
        
        // Add Google font for better typography
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        
        document.body.appendChild(statsContainer);
    }
    
    // Create a styled stopwatch
    static createStopwatch() {
        // Use the theme color for consistent design
        const themeColor = '#4a86e8';
        const themeShadow = 'rgba(74, 134, 232, 0.7)';
        
        const stopwatchContainer = document.createElement('div');
        stopwatchContainer.id = 'stopwatch-container';
        stopwatchContainer.style.position = 'fixed';
        stopwatchContainer.style.top = '10px';
        stopwatchContainer.style.left = '50%';
        stopwatchContainer.style.transform = 'translateX(-50%)';
        stopwatchContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        stopwatchContainer.style.borderRadius = '20px';
        stopwatchContainer.style.padding = '12px 25px';
        stopwatchContainer.style.boxShadow = `0 0 15px ${themeShadow}`;
        stopwatchContainer.style.zIndex = '1000';
        stopwatchContainer.style.display = 'flex';
        stopwatchContainer.style.flexDirection = 'column';
        stopwatchContainer.style.alignItems = 'center';
        stopwatchContainer.style.justifyContent = 'center';
        stopwatchContainer.style.border = `2px solid ${themeColor}`;
        stopwatchContainer.style.fontFamily = "'Montserrat', sans-serif";
        
        // Create the display for the timer
        const timerDisplay = document.createElement('div');
        timerDisplay.id = 'timer-display';
        timerDisplay.style.fontFamily = "'Digital-7', monospace";
        timerDisplay.style.fontSize = '32px';
        timerDisplay.style.fontWeight = 'bold';
        timerDisplay.style.color = themeColor;
        timerDisplay.style.textShadow = `0 0 10px ${themeShadow}`;
        timerDisplay.textContent = '00:00';
        
        // Create the progress bar
        const progressBarContainer = document.createElement('div');
        progressBarContainer.style.width = '100%';
        progressBarContainer.style.height = '8px';
        progressBarContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        progressBarContainer.style.borderRadius = '5px';
        progressBarContainer.style.margin = '8px 0 0 0';
        progressBarContainer.style.overflow = 'hidden';
        
        const progressBar = document.createElement('div');
        progressBar.id = 'timer-progress';
        progressBar.style.height = '100%';
        progressBar.style.width = '0%';
        progressBar.style.backgroundColor = themeColor;
        progressBar.style.borderRadius = '5px';
        progressBar.style.transition = 'width 0.5s ease';
        
        // Label for the stopwatch
        const timerLabel = document.createElement('div');
        timerLabel.textContent = 'TIME ATTACK';
        timerLabel.style.fontSize = '12px';
        timerLabel.style.fontWeight = 'bold';
        timerLabel.style.color = 'white';
        timerLabel.style.marginBottom = '5px';
        timerLabel.style.letterSpacing = '1px';
        
        // Add custom font for digital look
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.cdnfonts.com/css/digital-7-mono';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        
        // Assemble the stopwatch
        progressBarContainer.appendChild(progressBar);
        stopwatchContainer.appendChild(timerLabel);
        stopwatchContainer.appendChild(timerDisplay);
        stopwatchContainer.appendChild(progressBarContainer);
        document.body.appendChild(stopwatchContainer);
    }
    
    // Game timer functionality
    static startStopwatch() {
        // Theme colors
        const themeColor = '#4a86e8';
        const themeShadow = 'rgba(74, 134, 232, 0.7)';
        const warningColor = '#f6b26b'; // Orange
        const warningShadow = 'rgba(246, 178, 107, 0.7)';
        const dangerColor = '#ff5252'; // Red
        const dangerShadow = 'rgba(255, 82, 82, 0.7)';
        
        // Get the elements
        const timerDisplay = document.getElementById('timer-display');
        const progressBar = document.getElementById('timer-progress');
        if (!timerDisplay || !progressBar) {
            console.error("Timer elements not found in the DOM");
            return;
        }
        
        // Clear any existing interval
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        // Set timer to 0
        this.gameTimer = 0;
        this.updateTimerDisplay(timerDisplay, this.gameTimer);
        progressBar.style.width = '0%';
        
        // Start the stopwatch (updating every 100ms for smoother progress bar)
        this.timerInterval = setInterval(() => {
            this.gameTimer += 0.1;
            
            // Update timer display every 100ms
            this.updateTimerDisplay(timerDisplay, this.gameTimer);
            
            // Update progress bar (0-45 seconds = 0-100%)
            const progressPercentage = (this.gameTimer / 45) * 100;
            progressBar.style.width = `${progressPercentage}%`;
            
            // Change color as time progresses
            if (this.gameTimer > 30) {
                progressBar.style.backgroundColor = dangerColor; // Red for last 15 seconds
                progressBar.style.boxShadow = `0 0 10px ${dangerShadow}`;
                timerDisplay.style.color = dangerColor;
                timerDisplay.style.textShadow = `0 0 10px ${dangerShadow}`;
            } else if (this.gameTimer > 15) {
                progressBar.style.backgroundColor = warningColor; // Orange for middle 15 seconds
                progressBar.style.boxShadow = `0 0 10px ${warningShadow}`;
                timerDisplay.style.color = warningColor;
                timerDisplay.style.textShadow = `0 0 10px ${warningShadow}`;
            }
            
            // Add pulsing effect in the last 5 seconds
            if (this.gameTimer > 40) {
                const stopwatchContainer = document.getElementById('stopwatch-container');
                stopwatchContainer.style.animation = 'pulse 0.5s infinite alternate';
                if (!document.getElementById('pulse-animation')) {
                    const style = document.createElement('style');
                    style.id = 'pulse-animation';
                    style.innerHTML = `
                        @keyframes pulse {
                            from { transform: translateX(-50%) scale(1); }
                            to { transform: translateX(-50%) scale(1.05); }
                        }
                    `;
                    document.head.appendChild(style);
                }
            }
            
            // Check if we're in the end level and the time limit has been reached
            if (this.currentLevelInstance && 
                this.currentLevelInstance.constructor.name === 'GameLevelEnd') {
                // Check time limit using GameLevelEnd's static method
                const gameEnded = GameLevelEnd.checkTimeLimit(this.currentLevelInstance);
                
                // If the game has ended due to time limit, stop the timer
                if (gameEnded) {
                    clearInterval(this.timerInterval);
                }
            }
            
            // When timer reaches 45 seconds, stop the game if we're not in the end level
            if (this.gameTimer >= 45 && 
                (!this.currentLevelInstance || 
                this.currentLevelInstance.constructor.name !== 'GameLevelEnd')) {
                this.stopGame();
            }
        }, 100); // Update every 100ms for smoother animation
    }
    
    static updateTimerDisplay(display, time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const tenths = Math.floor((time * 10) % 10);
        
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${tenths}`;
    }
    
    static stopGame() {
        // Clear the timer interval
        clearInterval(this.timerInterval);
        
        // Stop the game
        if (this.gameControl && typeof this.gameControl.stop === 'function') {
            // Stop all game mechanics, animations, and inputs
            this.gameControl.stop();
        }
        
        // Create explosion effect
        this.createExplosionEffect();
        
        // Show game over screen after a brief delay for the explosion effect
        setTimeout(() => {
            this.showGameOverScreen();
        }, 1000);
    }
    
    static createExplosionEffect() {
        // Create a full-screen explosion effect
        const explosion = document.createElement('div');
        explosion.style.position = 'fixed';
        explosion.style.top = '0';
        explosion.style.left = '0';
        explosion.style.width = '100%';
        explosion.style.height = '100%';
        explosion.style.backgroundColor = 'white';
        explosion.style.opacity = '0';
        explosion.style.zIndex = '9999';
        explosion.style.transition = 'opacity 0.1s ease-in';
        document.body.appendChild(explosion);
        
        // Flash the screen
        setTimeout(() => {
            explosion.style.opacity = '1';
            setTimeout(() => {
                explosion.style.opacity = '0';
                setTimeout(() => {
                    explosion.remove();
                }, 500);
            }, 100);
        }, 0);
    }
    
    static showGameOverScreen() {
        // Use theme colors for consistent design
        const themeColor = '#4a86e8';
        const themeShadow = 'rgba(74, 134, 232, 0.7)';
        
        // Create game over container with cool styling
        const gameOverDiv = document.createElement('div');
        gameOverDiv.id = 'game-over';
        gameOverDiv.style.position = 'fixed';
        gameOverDiv.style.top = '0';
        gameOverDiv.style.left = '0';
        gameOverDiv.style.width = '100%';
        gameOverDiv.style.height = '100%';
        gameOverDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        gameOverDiv.style.display = 'flex';
        gameOverDiv.style.flexDirection = 'column';
        gameOverDiv.style.justifyContent = 'center';
        gameOverDiv.style.alignItems = 'center';
        gameOverDiv.style.zIndex = '1000';
        gameOverDiv.style.backdropFilter = 'blur(10px)';
        gameOverDiv.style.fontFamily = "'Montserrat', sans-serif";
        
        // Add a pulsing border effect
        const innerDiv = document.createElement('div');
        innerDiv.style.padding = '40px';
        innerDiv.style.borderRadius = '20px';
        innerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        innerDiv.style.boxShadow = `0 0 30px ${themeShadow}`;
        innerDiv.style.border = `3px solid ${themeColor}`;
        innerDiv.style.textAlign = 'center';
        innerDiv.style.animation = 'pulse-border 2s infinite alternate';
        
        // Create animation style
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes pulse-border {
                from { box-shadow: 0 0 30px ${themeShadow}; }
                to { box-shadow: 0 0 50px ${themeShadow}; }
            }
            
            @keyframes slide-in {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes glow {
                from { text-shadow: 0 0 10px ${themeShadow}; }
                to { text-shadow: 0 0 30px ${themeShadow}; }
            }
            
            .restart-btn {
                background: linear-gradient(to bottom, ${themeColor}, #2b5797);
                color: white;
                border: none;
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 30px;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-top: 30px;
                font-weight: bold;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                text-transform: uppercase;
                letter-spacing: 1px;
                font-family: 'Montserrat', sans-serif;
            }
            
            .restart-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 8px 20px rgba(0,0,0,0.4);
                background: linear-gradient(to bottom, #5a96f8, ${themeColor});
            }
        `;
        document.head.appendChild(style);
        
        // Game over content
        innerDiv.innerHTML = `
            <h1 style="font-size: 60px; margin: 0; color: ${themeColor}; font-weight: bold; animation: glow 1.5s infinite alternate, slide-in 0.5s ease-out;">TIME'S UP!</h1>
            <p style="font-size: 24px; color: white; margin: 20px 0; animation: slide-in 0.5s ease-out 0.2s both;">Your 45-second challenge has ended</p>
            <div style="margin: 20px 0; font-size: 18px; color: #cccccc; animation: slide-in 0.5s ease-out 0.4s both;">
                Final score: <span style="color: ${themeColor}; font-weight: bold;">${document.getElementById('balance')?.innerHTML || '0'}</span>
            </div>
            <button id="restart-button" class="restart-btn" style="animation: slide-in 0.5s ease-out 0.6s both;">
                PLAY AGAIN
            </button>
        `;
        
        gameOverDiv.appendChild(innerDiv);
        document.body.appendChild(gameOverDiv);
        
        // Add event listener to restart button
        document.getElementById('restart-button').addEventListener('click', () => {
            location.reload(); // Reload the page to restart the game
        });
    }

    // Add method to give items to player
    giveItem(itemId, quantity = 1) {
        console.log("Giving item:", itemId, "quantity:", quantity);
        const item = defaultItems[itemId];
        if (!item) {
            console.error(`Item ${itemId} not found in defaultItems`);
            return false;
        }

        const itemToAdd = {
            ...item,
            quantity: quantity
        };

        console.log("Adding item to inventory:", itemToAdd);
        return this.inventory.addItem(itemToAdd);
    }

    // Add method to remove items from player
    removeItem(itemId, quantity = 1) {
        return Inventory.getInstance().removeItem(itemId, quantity);
    }

    // Add method to check if player has an item
    hasItem(itemId) {
        return Inventory.getInstance().items.some(item => item.id === itemId);
    }

    // Add method to get item quantity
    getItemQuantity(itemId) {
        const item = Inventory.getInstance().items.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    }

    // Add method to give starting items
    giveStartingItems() {
        console.log("Giving starting items to player...");
        
        // Trading items
        this.giveItem('stock_certificate', 5);  // 5 stock certificates
        this.giveItem('bond', 3);               // 3 bonds
        
        // Power-ups
        this.giveItem('trading_boost', 2);      // 2 trading boosts
        this.giveItem('speed_boost', 2);        // 2 speed boosts
        
        // Tools
        this.giveItem('calculator', 1);         // 1 calculator
        this.giveItem('market_scanner', 1);     // 1 market scanner
        
        // Collectibles
        this.giveItem('rare_coin', 1);          // 1 rare coin
        this.giveItem('trading_manual', 1);     // 1 trading manual

        // Add ROI Calculator
        console.log("Adding ROI Calculator...");
        this.giveItem('roi_calculator', 1);     // 1 ROI Calculator
    }
}
export default Game;