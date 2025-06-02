import GameControl from './GameEngine/GameControl.js';


class Game {
    constructor(environment) {
        this.environment = environment;
        this.path = environment.path;
        this.gameContainer = environment.gameContainer;
        this.gameCanvas = environment.gameCanvas;
        this.pythonURI = environment.pythonURI;
        this.javaURI = environment.javaURI;
        this.fetchOptions = environment.fetchOptions;
        this.uid = null;
        this.id = null;
        this.gname = null;

        // Only initialize user (game-specific logic should be in subclasses)
        this.initUser();
    }

    static main(environment) {
        return new Game(environment);
    }

    // This method can be overridden by subclasses for custom user initialization
    initUser() {
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

                const javaURL = this.javaURI + '/rpg_answer/person/' + this.uid;
                return fetch(javaURL, this.fetchOptions);
            })
            .then(response => {
                if (!response || !response.ok) {
                    throw new Error(`Spring server response: ${response?.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                this.id = data.id;
                // Game-specific logic for stats, etc. should be handled in subclasses
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
}

export default Game;