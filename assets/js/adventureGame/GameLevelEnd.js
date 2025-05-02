import GamEnvBackground from './GameEngine/GameEnvBackground.js';
import BackgroundParallax from './GameEngine/BackgroundParallax.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';
import Collectible from './GameEngine/Collectible.js';
import Quiz from './Quiz.js';
import Game from './Game.js';

class GameLevelEnd {
  constructor(gameEnv) {
    console.log("Initializing GameLevelEnd...");
    
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;
    
    // Track ender eyes collection
    this.eyesCollected = 0;
    this.endTime = null;
    this.startTime = Date.now();
    this.gameCompleted = false;
    
    // Parallax background configuration
    const image_src_parallax = path + "/images/gamify/parallaxbg.png";
    const image_data_parallax = {
        name: 'parallax_background',
        id: 'parallax-background',
        greeting: "A mysterious parallax effect in the background.",
        src: image_src_parallax,
        pixels: {height: 1140, width: 2460},
        position: { x: 0, y: 0 },
        velocity: 0.2,  // Slower velocity for a more subtle effect
        layer: 0,  // Explicitly set the layer to 0 (furthest back)
        zIndex: 1  // Use positive z-index but keep it low
    };
    
    const image_src_end = path + "/images/gamify/TransparentEnd.png";
    const image_data_end = {
        name: 'end',
        id: 'end-background',
        greeting: "The End opens before you, a vast black void in the distance. The stone beneath your feet is yellowish and hard, and the air tingles.",
        src: image_src_end,
        pixels: {height: 1140, width: 2460},
        layer: 1,  // Set layer to 1 to be in front of parallax
        zIndex: 5  // Higher z-index to appear above parallax
    };
    
    const sprite_src_chillguy = path + "/images/gamify/Steve.png";
    const CHILLGUY_SCALE_FACTOR = 7;
    const sprite_data_chillguy = {
        id: 'Steve',
        greeting: "Hi, I am Steve.",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 25,
        
        INIT_POSITION: { x: width/16, y: height/2 },
        pixels: {height: 256, width: 128},
        orientation: {rows: 8, columns: 4 },
        down: {row: 1, start: 0, columns: 4 },
        downRight: {row: 7, start: 0, columns: 4, rotate: Math.PI/8 },
        downLeft: {row: 5, start: 0, columns: 4, rotate: -Math.PI/8 },
        left: {row: 5, start: 0, columns: 4 },
        right: {row: 7, start: 0, columns: 4 },
        up: {row: 3, start: 0, columns: 4 },
        upLeft: {row: 5, start: 0, columns: 4, rotate: Math.PI/8 },
        upRight: {row: 7, start: 0, columns: 4, rotate: -Math.PI/8 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }
    };
    
    const sprite_src_alex = path + "/images/gamify/Alex.png";
    const alex_SCALE_FACTOR = 7;
    const sprite_data_alex = {
        id: 'Alex',
        greeting: "Hi, I am Alex",
        src: sprite_src_alex,
        SCALE_FACTOR: alex_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 25,
        
        INIT_POSITION: { x: 0, y: height/2 },
        pixels: {height: 256, width: 128},
        orientation: {rows: 8, columns: 4 },
        down: {row: 1, start: 0, columns: 4 },
        downRight: {row: 7, start: 0, columns: 4, rotate: Math.PI/8 },
        downLeft: {row: 5, start: 0, columns: 4, rotate: -Math.PI/8 },
        left: {row: 5, start: 0, columns: 4 },
        right: {row: 7, start: 0, columns: 4 },
        up: {row: 3, start: 0, columns: 4 },
        upLeft: {row: 5, start: 0, columns: 4, rotate: Math.PI/8 },
        upRight: {row: 7, start: 0, columns: 4, rotate: -Math.PI/8 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 73, left: 74, down: 75, right: 76 } // Using I, J, K, L for Alex to differentiate from Steve 
    };
        
    const sprite_src_tux = path + "/images/gamify/tux.png";
    const sprite_greet_tux = "THIS IS HOW IT ENDS - Tejo :P";
    const sprite_data_tux = {
        id: 'Tux',
        greeting: sprite_greet_tux,
        src: sprite_src_tux,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 1000000,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 2), y: (height / 2) },
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        zIndex: 10,  // Same z-index as player
        quiz: {
          title: "Linux Command Quiz",
          questions: [
            "It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! \n1. huh\n2. what\n3. ...\n4. ok bye"
          ]
        },
        reaction: function() {
          alert(sprite_greet_tux);
        },
        interact: function() {
          let quiz = new Quiz();
          quiz.initialize();
          quiz.openPanel(sprite_data_tux);
        }
    };

    // Store a reference to the current instance to use in closures
    const self = this;

    const sprite_src_eye = path + "/images/gamify/eyeOfEnder.png";
    const sprite_data_eye = {
        id: 'Eye of Ender',
        greeting: `Press E to claim this Eye of Ender.`,
        src: sprite_src_eye,
        SCALE_FACTOR: 20,
        ANIMATION_RATE: 9007199254740991,
        pixels: {height: 16, width: 16},
        INIT_POSITION: { x: (Math.random()*width/2.6)+width/19, y: (Math.random()*height/3.5)+height/2.7 },
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 0 },
        hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
        zIndex: 10,  // Same z-index as player
        reaction: function() {
          alert(`Press E to claim this Eye of Ender.`);
        },
        interact: function() {
          self.eyesCollected++;
          
          // Update the eye counter display
          self.updateEyeCounter();
          
          if (self.eyesCollected >= 12) {
            // Record end time when all eyes are collected
            self.endTime = Date.now();
            self.gameCompleted = true;
            
            // Calculate time taken in seconds
            const timeTaken = (self.endTime - self.startTime) / 1000;
            
            // Stop the game timer if it's running
            if (Game.timerInterval) {
              clearInterval(Game.timerInterval);
            }
            
            // Show success screen with time score
            self.showSuccessScreen(timeTaken);
          } else {
            // Move the eye to a new random position
            this.move((Math.random()*width/2.6)+width/19, (Math.random()*height/3.5)+height/2.7);
          }
        }
    };
    
    this.classes = [
      { class: BackgroundParallax, data: image_data_parallax },  // Add parallax background first
      { class: GamEnvBackground, data: image_data_end },         // Then regular background
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux },
      { class: Collectible, data: sprite_data_eye },
      { class: Player, data: sprite_data_alex }
    ];
    
    // Create eye counter UI
    this.createEyeCounter();
  }
  
  // Create a UI counter for the eyes
  createEyeCounter() {
    const counterContainer = document.createElement('div');
    counterContainer.id = 'eye-counter-container';
    counterContainer.style.position = 'fixed';
    counterContainer.style.top = '150px';
    counterContainer.style.right = '10px';
    counterContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    counterContainer.style.color = 'white';
    counterContainer.style.padding = '10px';
    counterContainer.style.borderRadius = '5px';
    counterContainer.style.display = 'flex';
    counterContainer.style.alignItems = 'center';
    counterContainer.style.fontFamily = "'Minecraft', sans-serif";
    counterContainer.style.zIndex = '1000';
    counterContainer.style.border = '2px solid #8A2BE2';
    counterContainer.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.7)';
    
    // Load Minecraft-style font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Create eye icon
    const eyeIcon = document.createElement('div');
    eyeIcon.style.width = '25px';
    eyeIcon.style.height = '25px';
    eyeIcon.style.backgroundImage = "url('./images/gamify/eyeOfEnder.png')";
    eyeIcon.style.backgroundSize = 'contain';
    eyeIcon.style.backgroundRepeat = 'no-repeat';
    eyeIcon.style.marginRight = '10px';
    
    // Create counter text
    const counterText = document.createElement('div');
    counterText.id = 'eye-counter';
    counterText.textContent = `0/12`;
    counterText.style.fontSize = '18px';
    counterText.style.color = '#8A2BE2';
    counterText.style.textShadow = '0 0 5px rgba(138, 43, 226, 0.7)';
    
    // Assemble counter
    counterContainer.appendChild(eyeIcon);
    counterContainer.appendChild(counterText);
    document.body.appendChild(counterContainer);
  }
  
  // Update the eye counter display
  updateEyeCounter() {
    const counterText = document.getElementById('eye-counter');
    if (counterText) {
      counterText.textContent = `${this.eyesCollected}/12`;
      
      // Add visual feedback when collecting an eye
      counterText.style.transform = 'scale(1.5)';
      counterText.style.color = '#00FFFF';
      
      // Reset after animation
      setTimeout(() => {
        counterText.style.transform = 'scale(1)';
        counterText.style.color = '#8A2BE2';
      }, 300);
    }
  }
  
  // Show success screen when all eyes are collected
  showSuccessScreen(timeTaken) {
    // Format time nicely
    const minutes = Math.floor(timeTaken / 60);
    const seconds = Math.floor(timeTaken % 60);
    const milliseconds = Math.floor((timeTaken % 1) * 100);
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    
    // Create success container with cool styling
    const successDiv = document.createElement('div');
    successDiv.id = 'success-screen';
    successDiv.style.position = 'fixed';
    successDiv.style.top = '0';
    successDiv.style.left = '0';
    successDiv.style.width = '100%';
    successDiv.style.height = '100%';
    successDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    successDiv.style.display = 'flex';
    successDiv.style.flexDirection = 'column';
    successDiv.style.justifyContent = 'center';
    successDiv.style.alignItems = 'center';
    successDiv.style.zIndex = '9999';
    successDiv.style.backdropFilter = 'blur(10px)';
    
    // Add a pulsing border effect
    const innerDiv = document.createElement('div');
    innerDiv.style.padding = '40px';
    innerDiv.style.borderRadius = '20px';
    innerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    innerDiv.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.7)';
    innerDiv.style.border = '3px solid #8A2BE2';
    innerDiv.style.textAlign = 'center';
    innerDiv.style.animation = 'pulse-border 2s infinite alternate';
    
    // Create animation style
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse-border {
            from { box-shadow: 0 0 30px rgba(138, 43, 226, 0.7); }
            to { box-shadow: 0 0 50px rgba(138, 43, 226, 0.9); }
        }
        
        @keyframes slide-in {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes glow {
            from { text-shadow: 0 0 10px rgba(138, 43, 226, 0.7); }
            to { text-shadow: 0 0 30px rgba(138, 43, 226, 0.9); }
        }
        
        @keyframes confetti-fall {
            0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(1000px) rotate(720deg); opacity: 0; }
        }
        
        .restart-btn {
            background: linear-gradient(to bottom, #9B30FF, #8A2BE2);
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
            font-family: 'Press Start 2P', cursive;
        }
        
        .restart-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            background: linear-gradient(to bottom, #B041FF, #9B30FF);
        }
        
        .trophy {
            font-size: 80px;
            margin-bottom: 20px;
            animation: glow 2s infinite alternate;
        }
    `;
    document.head.appendChild(style);
    
    // Success content
    innerDiv.innerHTML = `
        <div class="trophy">🏆</div>
        <h1 style="font-size: 48px; margin: 0; color: #8A2BE2; font-weight: bold; animation: glow 1.5s infinite alternate, slide-in 0.5s ease-out; font-family: 'Press Start 2P', cursive;">SUCCESS!</h1>
        <p style="font-size: 24px; color: white; margin: 20px 0; animation: slide-in 0.5s ease-out 0.2s both; font-family: 'Press Start 2P', cursive;">All 12 Eyes of Ender collected!</p>
        <div style="margin: 20px 0; font-size: 36px; color: #00FFFF; animation: slide-in 0.5s ease-out 0.4s both; font-family: 'Press Start 2P', cursive; font-weight: bold;">
            TIME: ${formattedTime}
        </div>
        <button id="restart-button" class="restart-btn" style="animation: slide-in 0.5s ease-out 0.6s both;">
            PLAY AGAIN
        </button>
    `;
    
    successDiv.appendChild(innerDiv);
    document.body.appendChild(successDiv);
    
    // Create confetti effect
    this.createConfetti(successDiv);
    
    // Add event listener to restart button
    document.getElementById('restart-button').addEventListener('click', () => {
        location.reload(); // Reload the page to restart the game
    });
  }
  
  // Show failure screen when time runs out
  showFailureScreen() {
    // Create failure container with styling
    const failureDiv = document.createElement('div');
    failureDiv.id = 'failure-screen';
    failureDiv.style.position = 'fixed';
    failureDiv.style.top = '0';
    failureDiv.style.left = '0';
    failureDiv.style.width = '100%';
    failureDiv.style.height = '100%';
    failureDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    failureDiv.style.display = 'flex';
    failureDiv.style.flexDirection = 'column';
    failureDiv.style.justifyContent = 'center';
    failureDiv.style.alignItems = 'center';
    failureDiv.style.zIndex = '9999';
    failureDiv.style.backdropFilter = 'blur(10px)';
    
    // Add a pulsing border effect
    const innerDiv = document.createElement('div');
    innerDiv.style.padding = '40px';
    innerDiv.style.borderRadius = '20px';
    innerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    innerDiv.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.7)';
    innerDiv.style.border = '3px solid red';
    innerDiv.style.textAlign = 'center';
    innerDiv.style.animation = 'pulse-border 2s infinite alternate';
    
    // Create animation style
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse-border {
            from { box-shadow: 0 0 30px rgba(255, 0, 0, 0.7); }
            to { box-shadow: 0 0 50px rgba(255, 0, 0, 0.9); }
        }
        
        @keyframes slide-in {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes glow {
            from { text-shadow: 0 0 10px rgba(255, 0, 0, 0.7); }
            to { text-shadow: 0 0 30px rgba(255, 0, 0, 0.9); }
        }
        
        .restart-btn {
            background: linear-gradient(to bottom, #ff3333, #cc0000);
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
            font-family: 'Press Start 2P', cursive;
        }
        
        .restart-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            background: linear-gradient(to bottom, #ff5555, #ff0000);
        }
        
        .womp-womp {
            font-size: 60px;
            margin-bottom: 20px;
            animation: glow 1.5s infinite alternate;
        }
    `;
    document.head.appendChild(style);
    
    // Failure content
    innerDiv.innerHTML = `
        <div class="womp-womp">😢</div>
        <h1 style="font-size: 48px; margin: 0; color: red; font-weight: bold; animation: glow 1.5s infinite alternate, slide-in 0.5s ease-out; font-family: 'Press Start 2P', cursive;">WOMP WOMP</h1>
        <p style="font-size: 24px; color: white; margin: 20px 0; animation: slide-in 0.5s ease-out 0.2s both; font-family: 'Press Start 2P', cursive;">Time's up!</p>
        <div style="margin: 20px 0; font-size: 24px; color: #cccccc; animation: slide-in 0.5s ease-out 0.4s both; font-family: 'Press Start 2P', cursive;">
            Eyes collected: <span style="color: yellow; font-weight: bold;">${this.eyesCollected}/12</span>
        </div>
        <button id="restart-button" class="restart-btn" style="animation: slide-in 0.5s ease-out 0.6s both;">
            TRY AGAIN
        </button>
    `;
    
    failureDiv.appendChild(innerDiv);
    document.body.appendChild(failureDiv);
    
    // Add event listener to restart button
    document.getElementById('restart-button').addEventListener('click', () => {
        location.reload(); // Reload the page to restart the game
    });
  }
  
  // Create confetti animation for success screen
  createConfetti(container) {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = this.getRandomColor();
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.top = '-50px';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.opacity = '1';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(confetti);
    }
  }
  
  // Get random color for confetti
  getRandomColor() {
    const colors = ['#8A2BE2', '#9B30FF', '#7B68EE', '#6A5ACD', '#00FFFF', '#FFFF00', '#FF00FF', '#00FF00'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

// Add static method to check if game should end due to time limit
GameLevelEnd.checkTimeLimit = function(gameLevelInstance) {
  // If 45 seconds have passed and the game hasn't been completed yet, show failure screen
  const currentTime = Date.now();
  const elapsedTime = (currentTime - gameLevelInstance.startTime) / 1000;
  
  if (elapsedTime >= 45 && !gameLevelInstance.gameCompleted) {
    clearInterval(Game.timerInterval);
    gameLevelInstance.showFailureScreen();
    return true;
  }
  return false;
};

export default GameLevelEnd;