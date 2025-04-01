import GameControl from './GameControl.js';
import GameLevelDesert from "./GameLevelDesert.js";
import GameLevelEnd from "./GameLevelEnd.js";
import GameLevelSquares from './GameLevelSquares.js';
import GameLevelTesting from './testing.js';


class Game {
    // initialize user and launch GameControl 
    static main(environment) {
        // setting Web Application path
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

        this.gname = null;
        

        // start the game
        const gameLevelClasses = [GameLevelDesert, GameLevelEnd, GameLevelSquares, GameLevelTesting]
        new GameControl(this, gameLevelClasses).start();

        // Show instructions before starting the game
        this.showInstructions(() => {
            // start the game after instructions are closed
            const gameLevelClasses = [GameLevelTesting, GameLevelEnd, GameLevelDesert, GameLevelSquares]
            new GameControl(this, gameLevelClasses).start();
        });
    }

    static showInstructions(callback) {
        // Create the instructions popup
        const instructionsDiv = document.createElement('div');
        instructionsDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 30px;
            border-radius: 15px;
            z-index: 1000;
            max-width: 600px;
            width: 90%;
            font-family: 'Press Start 2P', cursive;
            border: 3px solid #f5c207;
            box-shadow: 0 0 20px rgba(245, 194, 7, 0.5);
        `;

        // Create the content
        instructionsDiv.innerHTML = `
            <h2 style="color: #f5c207; margin-bottom: 15px; text-align: center;">Welcome!</h2>
            <div style="margin-bottom: 15px;">
                <h3 style="color: #f5c207;">Controls:</h3>
                <p>• WASD - Move</p>
                <p>• E/U - Interact with NPCs</p>
                <p>• ESC - Exit mini-games</p>
            </div>
            <div style="margin-bottom: 15px;">
                <h3 style="color: #f5c207;">NPCs:</h3>
                <p>• Robot - Meteor Blaster game</p>
                <p>• R2D2 - Star Wars game</p>
                <p>• Tux/Octocat - Quizzes</p>
                <p>• Stock Guy - Stock Market</p>
                <p>• Bitcoin - Casino</p>
            </div>
            <div style="text-align: center;">
                <button id="startGameBtn" style="
                    background: #f5c207;
                    color: black;
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

        // Add the popup to the document
        document.body.appendChild(instructionsDiv);

        // Add click handler for the start button
        document.getElementById('startGameBtn').addEventListener('click', () => {
            instructionsDiv.remove();
            if (callback) callback();
        });

        // Add hover effect to the button
        const startButton = document.getElementById('startGameBtn');
        startButton.addEventListener('mouseover', () => {
            startButton.style.transform = 'scale(1.1)';
            startButton.style.boxShadow = '0 0 15px #f5c207';
        });
        startButton.addEventListener('mouseout', () => {
            startButton.style.transform = 'scale(1)';
            startButton.style.boxShadow = 'none';
        });

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
                console.log("User ID:", this.uid);  // Ensure this prints correctly
    
                // Now that this.uid is set, fetch from the Java backend
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
            chatScore: this.javaURI + '/rpg_answer/getChatScore/' + personId,
            questionsAnswered: this.javaURI + '/rpg_answer/getQuestionsAnswered/' + personId
        };

        for (let [key, url] of Object.entries(endpoints)) {
            fetch(url, this.fetchOptions)
                .then(response => response.json())
                .then(data => {
                    document.getElementById(key).innerHTML = data ?? 0;
                    localStorage.setItem(key, data ?? 0);
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
                body: JSON.stringify({
                    uid: uid,
                    gname: gname,
                    stats: stats
                })
            });
     
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
            return data; // returns the stats JSON
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
                body: JSON.stringify({
                    uid: uid,
                    gname: gname,
                    stats: stats
                })
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

            const response = await fetch(`${this.javaURI}/rpg_answer/getQuestion?category=${category}`, this.fetchOptions);
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

    static async updateStatsMCQ(questionId, choiceId, personId) {
        try {
            const response = await fetch(this.javaURI + '/rpg_answer/submitMCQAnswer', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    questionId: questionId,
                    personId: personId,
                    choiceId: choiceId
                })
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            // You can decide what to return – here we assume the response includes a score or a confirmation.
            return data.score || "Answer submitted";
        } catch (error) {
            console.error("Error submitting MCQ answer:", error);
            throw error;
        }
    }


    static initStatsUI() {
        const statsContainer = document.createElement('div');
        statsContainer.id = 'stats-container';
        statsContainer.style.position = 'fixed';
        statsContainer.style.top = '75px'; 
        statsContainer.style.right = '10px';
        statsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        statsContainer.style.color = 'white';
        statsContainer.style.padding = '10px';
        statsContainer.style.borderRadius = '5px';
        statsContainer.innerHTML = `
            <div>Balance: <span id="balance">0</span></div>
            <div>Chat Score: <span id="chatScore">0</span></div>
            <div>Questions Answered: <span id="questionsAnswered">0</span></div>
        `;
        document.body.appendChild(statsContainer);
    }
}
export default Game;
