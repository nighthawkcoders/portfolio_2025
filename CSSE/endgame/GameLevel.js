// GameLevel.js
import GameEnv from "./GameEnv.js"

class GameLevel {

  constructor(gameControl) {
    this.gameEnv = new GameEnv()
    // Set properties for easy access within game objects
    this.gameEnv.game = gameControl.game
    this.gameEnv.path = gameControl.path
    this.gameEnv.gameContainer = gameControl.gameContainer
    this.gameEnv.gameCanvas = gameControl.gameCanvas
    this.gameEnv.gameControl = gameControl
  }

  create(GameLevelClass) {
    this.continue = true
    this.gameEnv.create()
    this.gameLevel = new GameLevelClass(this.gameEnv)
    this.gameObjectClasses = this.gameLevel.classes

    // Create game objects
    for (let gameObjectClass of this.gameObjectClasses) {
      if (!gameObjectClass.data) gameObjectClass.data = {}
      let gameObject = new gameObjectClass.class(gameObjectClass.data, this.gameEnv)
      this.gameEnv.gameObjects.push(gameObject)
    }

    // Initialize the game level if it has an initialize method
    if (typeof this.gameLevel.initialize === "function") {
      this.gameLevel.initialize()

    }

    // Add event listener for window resize
    window.addEventListener("resize", this.resize.bind(this))
  }

  destroy() {
    // Call the game level's destroy method if it exists
    if (typeof this.gameLevel.destroy === "function") {
      this.gameLevel.destroy()
    }

    for (let index = this.gameEnv.gameObjects.length - 1; index >= 0; index--) {
      this.gameEnv.gameObjects[index].destroy()
    }
    // Remove event listener for window resize
    window.removeEventListener("resize", this.resize.bind(this))
  }

  update() {
    this.gameEnv.clear()

    // Update all game objects
    for (let gameObject of this.gameEnv.gameObjects) {
      gameObject.update()
    }

    // Call the game level's update method if it exists
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

