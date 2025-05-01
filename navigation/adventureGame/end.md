---
layout: base
title: Adventure Game
permalink: /gamify/end
---

<div id="gameContainer">
    <div id="timer" style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 5px; font-family: Arial, sans-serif; z-index: 9999; font-size: 20px; font-weight: bold;">45</div>
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
    <canvas id='gameCanvas'></canvas>
</div>

<script type="module">
    // Adventure Game assets locations
    import Game from "{{site.baseurl}}/assets/js/adventureGame/Game.js";
    import GameLevelEnd from "{{site.baseurl}}/assets/js/adventureGame/GameLevelEnd.js";
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    const gameLevelClasses = [GameLevelEnd];

    const instructionsStyle = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, black, purple);
        color: white;
        padding: 30px;
        border-radius: 15px;
        z-index: 1000;
        max-width: 600px;
        width: 90%;
        font-family: 'Press Start 2P', cursive;
        border: 3px solid purple;
        box-shadow: 0 0 20px rgba(128, 0, 128, 0.5);
    `;

    const instructionsHTML = `
        <h2 style="color: purple; margin-bottom: 15px; text-align: center;">Welcome to the END!!!!</h2>
        <div style="margin-bottom: 15px;">
            <h3 style="color: purple;">Controls:</h3>
            <p>• WASD - Move</p>
            <p>• WASD - Move (Steve)</p>
            <p>• IJKL - Move (Alex)</p>
            <p>• WASD - Move (Steve)</p>
            <p>• IJKL - Move (Alex)</p>
            <p>• E/U - Interact with NPCs</p>
            <p>• ESC - Exit mini-games/End the level (no pun intended)</p>
        </div>
        <div style="margin-bottom: 15px;">
            <h3 style="color: purple;">NPCs:</h3>
            <p>• Tux: ...</p>
        </div>
        <div style="text-align: center;">
            <button id="startGameBtn" style="
                background: purple;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
                font-family: 'Press Start 2P', cursive;
                font-size: 12px;
                transition: all 0.3s ease;
            ">Start Game</button>
        </div>
    `;

    // Timer functionality
    let timerValue = 45;
    let timerInterval;
    let gameStarted = false;
    
    function startTimer() {
        const timerElement = document.getElementById('timer');
        if (!gameStarted) {
            gameStarted = true;
            timerInterval = setInterval(() => {
                timerValue--;
                timerElement.textContent = timerValue;
                
                // Change color when time is running out
                if (timerValue <= 10) {
                    timerElement.style.color = 'red';
                    timerElement.style.fontWeight = 'bold';
                }
                
                if (timerValue <= 0) {
                    clearInterval(timerInterval);
                    endGame();
                }
            }, 1000);
        }
    }
    
    function endGame() {
        // Show game over screen
        const gameOverDiv = document.createElement('div');
        gameOverDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            font-family: 'Press Start 2P', cursive;
        `;
        
        const gameOverContent = document.createElement('div');
        gameOverContent.style.cssText = `
            background: linear-gradient(135deg, black, purple);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            color: white;
            border: 3px solid purple;
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.5);
        `;
        
        gameOverContent.innerHTML = `
            <h2 style="margin-bottom: 20px;">TIME'S UP!</h2>
            <p style="margin-bottom: 30px;">Your adventure has come to an end.</p>
            <button id="restartBtn" style="
                background: purple;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
                font-family: 'Press Start 2P', cursive;
                font-size: 12px;
                transition: all 0.3s ease;
            ">Try Again</button>
        `;
        
        gameOverDiv.appendChild(gameOverContent);
        document.body.appendChild(gameOverDiv);
        
        // Stop the game
        if (typeof Game.stopGame === 'function') {
            Game.stopGame();
        }
        
        // Add restart functionality
        document.getElementById('restartBtn').addEventListener('click', () => {
            location.reload();
        });
    }

    // Web Server Environment data
    const environment = {
        path:"{{site.baseurl}}",
        pythonURI: pythonURI,
        javaURI: javaURI,
        fetchOptions: fetchOptions,
        gameContainer: document.getElementById("gameContainer"),
        gameCanvas: document.getElementById("gameCanvas"),
        instructionsStyle: instructionsStyle,
        instructionsHTML: instructionsHTML,
        gameLevelClasses: gameLevelClasses
    }
    
    // Launch Adventure Game
    Game.main(environment);
    
    // Connect timer to game start
    // Start timer when game starts
    document.addEventListener('click', (e) => {
        if (e.target.id === 'startGameBtn') {
            startTimer();
        }
    });
    
    // Make timer visible immediately
    window.addEventListener('load', () => {
        const timerElement = document.getElementById('timer');
        timerElement.style.display = 'block';
    });
</script>