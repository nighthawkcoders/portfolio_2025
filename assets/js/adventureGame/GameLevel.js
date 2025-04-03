// GameLevel.js
import GameEnv from "./GameEnv.js"

class GameLevel {

  constructor(gameControl) {
    this.gameEnv = new GameEnv()
    this.gameEnv.game = gameControl.game
    this.gameEnv.path = gameControl.path
    this.gameEnv.gameContainer = gameControl.gameContainer
    this.gameEnv.gameCanvas = gameControl.gameCanvas
    this.gameEnv.gameControl = gameControl
  }
  create(GameLevelClass) {
    this.continue = true;
    this.gameEnv.create();
    
    try {
        this.gameLevel = new GameLevelClass(this.gameEnv);
        console.log(`Created ${GameLevelClass.name} successfully`);
        
        // Get classes from the game level
        this.gameObjectClasses = this.gameLevel.classes || [];
        
        // Create game objects from classes
        for (let gameObjectClass of this.gameObjectClasses) {
            if (!gameObjectClass.data) gameObjectClass.data = {};
            try {
                let gameObject = new gameObjectClass.class(gameObjectClass.data, this.gameEnv);
                this.gameEnv.gameObjects.push(gameObject);
                
                // Store reference to the instance for easier cleanup
                gameObjectClass.instance = gameObject;
            } catch (error) {
                console.error(`Error creating game object ${gameObjectClass.class.name}:`, error);
            }
        }
        
        // Call initialize if it exists
        if (typeof this.gameLevel.initialize === "function") {
            this.gameLevel.initialize();
        }
        
        window.addEventListener("resize", this.resize.bind(this));
    } catch (error) {
        console.error("Error in GameLevel.create():", error);
        // Setup an empty continue flag so the game loop can still run
        this.continue = false;
    }
    }
    destroy() {
      console.log("GameLevel destroy called");
      
      // Call the level-specific destroy if it exists
      if (this.gameLevel && typeof this.gameLevel.destroy === "function") {
          try {
              this.gameLevel.destroy();
          } catch (error) {
              console.error("Error in level-specific destroy:", error);
          }
      }
      
      // Clean up all game objects
      if (this.gameEnv && this.gameEnv.gameObjects) {
          for (let index = this.gameEnv.gameObjects.length - 1; index >= 0; index--) {
              try {
                  const gameObject = this.gameEnv.gameObjects[index];
                  if (gameObject && typeof gameObject.destroy === "function") {
                      gameObject.destroy();
                  } else {
                      console.warn(`Game object at index ${index} missing destroy method`);
                      // Remove from array anyway
                      this.gameEnv.gameObjects.splice(index, 1);
                  }
              } catch (error) {
                  console.error(`Error destroying game object at index ${index}:`, error);
                  // Remove the problematic object
                  this.gameEnv.gameObjects.splice(index, 1);
              }
          }
      }
      
      // Remove event listener
      window.removeEventListener("resize", this.resize.bind(this));
    }
  update() {
    this.gameEnv.clear()

    for (let gameObject of this.gameEnv.gameObjects) {
      gameObject.update()
    }

    if (typeof this.gameLevel.update === "function") {
      this.gameLevel.update()
    }
  }

  resize() {
    this.gameEnv.resize()
    for (let gameObject of this.gameEnv.gameObjects) {
      gameObject.resize()
    }
  }
}

export default GameLevel

