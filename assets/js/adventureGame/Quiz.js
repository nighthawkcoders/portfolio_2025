import gameControlInstance from "./GameControl.js";

class Quiz {
    constructor() {
        this.isOpen = false;
        this.dim = false;
        this.currentNpc = null;
        this.currentPage = 0;
        this.injectStyles(); // Inject CSS styles dynamically
    }

    // Inject CSS styles directly into the document
    injectStyles() {
        const style = document.createElement("style");
        style.innerHTML = `
            /* Pixelated font */
            @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

            /************************************************
             * EXTREME, PARTY-TIME THEME
             * Multiple waves of confetti, swirling background,
             * spinning container, and rainbow glow edges!
             ************************************************/

            /* SCROLL APPEARANCE & RAINBOW GLOW ANIMATION */
            .scroll-edge {
                position: relative;
                border: 8px solid #5c3b0b; /* Dark wood-like color */
                padding: 15px;
                background: repeating-linear-gradient(
                    45deg,
                    rgba(245, 194, 7, 0.15) 0px,
                    rgba(245, 194, 7, 0.15) 20px,
                    rgba(245, 194, 7, 0.2) 20px,
                    rgba(245, 194, 7, 0.2) 40px
                );
                border-radius: 10px;
                /* Animated rainbow border glow */
                animation: rainbowGlow 3s infinite;
                box-shadow:
                    0px 0px 20px rgba(255, 255, 255, 0.4),
                    0px 0px 50px rgba(255, 255, 255, 0.2) inset;
            }

            /* Rainbow Glow: cycles through the hue spectrum */
            @keyframes rainbowGlow {
                0% {
                    box-shadow:
                        0 0 20px hsl(0, 100%, 50%),
                        0 0 50px rgba(255, 255, 255, 0.2) inset;
                    border-color: hsl(0, 100%, 50%);
                }
                25% {
                    box-shadow:
                        0 0 20px hsl(90, 100%, 50%),
                        0 0 50px rgba(255, 255, 255, 0.2) inset;
                    border-color: hsl(90, 100%, 50%);
                }
                50% {
                    box-shadow:
                        0 0 20px hsl(180, 100%, 50%),
                        0 0 50px rgba(255, 255, 255, 0.2) inset;
                    border-color: hsl(180, 100%, 50%);
                }
                75% {
                    box-shadow:
                        0 0 20px hsl(270, 100%, 50%),
                        0 0 50px rgba(255, 255, 255, 0.2) inset;
                    border-color: hsl(270, 100%, 50%);
                }
                100% {
                    box-shadow:
                        0 0 20px hsl(360, 100%, 50%),
                        0 0 50px rgba(255, 255, 255, 0.2) inset;
                    border-color: hsl(360, 100%, 50%);
                }
            }

            /* Optional circles for "scroll corners" */
            .scroll-edge::before,
            .scroll-edge::after {
                content: '';
                position: absolute;
                width: 60px;
                height: 60px;
                background: #5c3b0b;
                border: 8px solid #5c3b0b;
                border-radius: 50%;
                box-shadow: inset 0 0 15px rgba(0,0,0,0.6);
            }
            .scroll-edge::before {
                top: -38px;
                left: -38px;
            }
            .scroll-edge::after {
                bottom: -38px;
                right: -38px;
            }

            /* QUIZ POPUP (NOW WITH SPIN) */
            .quiz-popup {
                position: fixed;
                width: 50%;
                top: 15%;
                left: 50%;
                transform: translate(-50%, 0);
                z-index: 9999;
                max-height: 70vh;
                display: flex;
                flex-direction: column;
                font-family: 'Press Start 2P', cursive;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #f5c207;
                opacity: 0;  /* Start hidden for fade/ spin in */
                animation: fadeIn 0.3s ease-in-out forwards;
            }

            /* Spin it after submission */
            .celebration-spin {
                animation: spinMe 1s ease-in-out forwards;
            }
            @keyframes spinMe {
                0% { transform: translate(-50%, 0) rotate(0deg); }
                100% { transform: translate(-50%, 0) rotate(360deg) scale(1.1); }
            }

            /* Fade-in animation for the panel */
            @keyframes fadeIn {
                to { 
                    opacity: 1; 
                }
            }

            /* SCROLLABLE QUESTION AREA WITH SWIRLING BG */
            .quiz-content {
                overflow-y: auto;
                max-height: 50vh;
                padding: 10px;
                border-radius: 5px;
                animation: swirlBG 6s linear infinite;
            }

            /* Swirl BG: moves from top-left to bottom-right in a cyclical pattern */
            @keyframes swirlBG {
                0% {
                    background: radial-gradient(circle at 0% 0%, #000000, #1a1005, #462b07);
                }
                25% {
                    background: radial-gradient(circle at 100% 0%, #100f31, #461116, #720707);
                }
                50% {
                    background: radial-gradient(circle at 100% 100%, #000000, #070640, #46116f);
                }
                75% {
                    background: radial-gradient(circle at 0% 100%, #000000, #1a1005, #462b07);
                }
                100% {
                    background: radial-gradient(circle at 0% 0%, #000000, #1a1005, #462b07);
                }
            }

            /* TABLE */
            .quiz-table {
                width: 100%;
                border-collapse: collapse;
            }
            .quiz-table th {
                background: rgba(245, 194, 7, 0.3);
                color: #ffe567;
                padding: 12px;
                text-align: left;
                font-size: 18px;
                text-shadow: 0 0 8px rgba(245, 194, 7, 0.8);
                border-bottom: 3px solid #f5c207;
            }
            .quiz-table td {
                padding: 12px;
                border-bottom: 1px solid rgba(255, 229, 103, 0.2);
                color: #ffffff;
                font-size: 16px;
            }

            /* INPUT FIELDS */
            .quiz-input {
                width: 95%;
                padding: 8px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                background: #faf2d0;
                border-radius: 5px;
                font-size: 16px;
                margin-top: 5px;
                font-family: 'Press Start 2P', cursive;
                transition: all 0.2s ease-in-out;
            }
            .quiz-input:focus {
                outline: none;
                border: 2px solid #f5c207;
                box-shadow: 0 0 8px rgba(245, 194, 7, 0.6);
                background: #fff8d0;
            }

            /* SUBMIT BUTTON */
            .quiz-submit {
                background-color: #2ecc71;
                color: #ffffff;
                border: none;
                padding: 12px 20px;
                font-size: 18px;
                cursor: pointer;
                border-radius: 5px;
                margin-top: 15px;
                transition: 0.3s ease-in-out;
                font-family: 'Press Start 2P', cursive;
                letter-spacing: 1px;
                text-transform: uppercase;
                box-shadow: 0 0 6px #2ecc71;
            }
            .quiz-submit:hover {
                background-color: #27ae60;
                box-shadow: 0 0 15px #2ecc71;
                transform: translateY(-2px);
            }

            /* DIMMED BACKGROUND (click to close) */
            #dim {
                position: fixed;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 9998;
                top: 0;
                left: 0;
                cursor: pointer;
            }

            /************************************************
             * CONFETTI & STAR CONFETTI STYLES
             ************************************************/
            .confetti-piece, .star-confetti {
                position: fixed;
                top: -20px; /* start above the viewport */
                width: 10px;
                height: 10px;
                opacity: 0.8;
                z-index: 10000;
                pointer-events: none;
                animation: confettiFall linear forwards;
            }

            /* Square confetti default color */
            .confetti-piece {
                background-color: #f5c207;
            }

            /* We'll override each piece's animation-duration 
               and horizontal movement with inline styles in JS */
            @keyframes confettiFall {
                0% {
                    transform: translateY(-100px) rotateZ(0deg);
                }
                100% {
                    transform: translateY(110vh) rotateZ(720deg);
                }
            }

            /* STAR confetti: using a star shape trick with clip-path */
            .star-confetti {
                background: none;
                clip-path: polygon(
                    50% 0%,
                    61% 35%,
                    98% 35%,
                    68% 57%,
                    79% 91%,
                    50% 70%,
                    21% 91%,
                    32% 57%,
                    2% 35%,
                    39% 35%
                );
                background-color: #ff0055;
            }
        `;
        document.head.appendChild(style);
    }

    backgroundDim = {
        create: () => {
            this.dim = true;
            const dimDiv = document.createElement("div");
            dimDiv.id = "dim";
            document.body.append(dimDiv);
            dimDiv.addEventListener("click", this.backgroundDim.remove); // Click off to close
        },

        remove: () => {
            this.dim = false;
            const dimDiv = document.getElementById("dim");
            if (dimDiv) dimDiv.remove();
            this.isOpen = false;
            document.getElementById("promptTitle").style.display = "none";
            const promptDropDown = document.getElementById("promptDropDown");
            promptDropDown.style.width = "0"; 
            promptDropDown.style.top = "0";  
            promptDropDown.style.left = "-100%"; 
            promptDropDown.style.transition = "all 0.3s ease-in-out";
            // Also remove the spin class for next time
            promptDropDown.classList.remove("celebration-spin");
        },
    };

    createDisplayTable() {
        const table = document.createElement("table");
        table.className = "quiz-table";

        const header = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.innerText = "Answer the Questions Below:";
        header.appendChild(th);
        table.appendChild(header);

        return table;
    }

    updateTable() {
        const table = this.createDisplayTable();
        if (this.currentNpc && this.currentNpc.questions) {
            this.currentNpc.questions.forEach((question, index) => {
                const row = document.createElement("tr");

                const questionCell = document.createElement("td");
                questionCell.innerText = `${index + 1}. ${question}`;
                row.appendChild(questionCell);

                const inputCell = document.createElement("td");
                const input = document.createElement("input");
                input.type = "text";
                input.placeholder = "Your answer...";
                input.dataset.questionIndex = index;
                input.className = "quiz-input";
                inputCell.appendChild(input);
                row.appendChild(inputCell);
                table.appendChild(row);
            });

            // Submit button row
            const submitRow = document.createElement("tr");
            const submitCell = document.createElement("td");
            submitCell.colSpan = 2;
            submitCell.style.textAlign = "center";

            const submitButton = document.createElement("button");
            submitButton.innerText = "Submit";
            submitButton.className = "quiz-submit";
            submitButton.addEventListener("click", this.handleSubmit.bind(this));

            submitCell.appendChild(submitButton);
            submitRow.appendChild(submitCell);
            table.appendChild(submitRow);
        } else {
            const row = document.createElement("tr");
            const noQuestionsCell = document.createElement("td");
            noQuestionsCell.colSpan = 2;
            noQuestionsCell.innerText = "No questions available.";
            row.appendChild(noQuestionsCell);
            table.appendChild(row);
        }

        const container = document.createElement("div");
        container.className = "quiz-content";
        container.appendChild(table);
        return container;
    }

    /* 
     * Confetti effect with two waves:
     * 1) Regular square confetti
     * 2) Star-shaped confetti
     */
    triggerConfetti() {
        // Some bright colors for squares
        const confettiColors = [
            "#f5c207", "#f58b07", "#f55707", 
            "#07f5ce", "#07adf5", "#a507f5", 
            "#f507b8", "#07f53b", "#ffef00", "#f50039"
        ];
        // Additional bright colors for star confetti
        const starColors = [
            "#ff00f5", "#9100ff", "#00ffe2", "#ff00c8", "#ff8400", "#ff0000"
        ];

        /* 1) SQUARE CONFETTI */
        const confettiCount1 = 40; // Adjust for more or less
        for (let i = 0; i < confettiCount1; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti-piece");
            // Randomize color
            confetti.style.backgroundColor = 
                confettiColors[Math.floor(Math.random() * confettiColors.length)];
            // Random horizontal start (0% to 100% of viewport width)
            confetti.style.left = Math.random() * 100 + "%";
            // Random falling duration between 1s and 3s
            const fallDuration = (Math.random() * 2 + 1).toFixed(2);
            confetti.style.animationDuration = fallDuration + "s";

            document.body.appendChild(confetti);

            // Remove the piece after animation ends
            setTimeout(() => {
                confetti.remove();
            }, fallDuration * 1000);
        }

        /* 2) STAR CONFETTI */
        const confettiCount2 = 20;
        setTimeout(() => {
            for (let i = 0; i < confettiCount2; i++) {
                const star = document.createElement("div");
                star.classList.add("star-confetti");
                // Random color for the star
                star.style.backgroundColor =
                    starColors[Math.floor(Math.random() * starColors.length)];
                // Random horizontal start
                star.style.left = Math.random() * 100 + "%";
                // Random falling duration
                const starFall = (Math.random() * 2 + 1).toFixed(2);
                star.style.animationDuration = starFall + "s";

                document.body.appendChild(star);

                // Remove star after its animation
                setTimeout(() => {
                    star.remove();
                }, starFall * 1000);
            }
        }, 500); 
        // Wait half a second so the star confetti starts
        // after the squares, creating a 2-wave effect
    }

    handleSubmit() {
        const inputs = document.querySelectorAll(".quiz-input");
        const answers = Array.from(inputs).map(input => ({
            questionIndex: input.dataset.questionIndex,
            answer: input.value.trim()
        }));
        console.log("Submitted Answers:", answers);

        // Trigger multi-wave confetti
        this.triggerConfetti();

        // Make the quiz container do a "celebration spin"
        const promptDropDown = document.getElementById("promptDropDown");
        promptDropDown.classList.add("celebration-spin");

        alert("Your answers have been submitted!");
        this.isOpen = false;
        this.backgroundDim.remove();
    }

    openPanel(npc) {
        const promptDropDown = document.querySelector('.promptDropDown');
        const promptTitle = document.getElementById("promptTitle");

        if (this.isOpen) {
            this.backgroundDim.remove();
        }

        this.currentNpc = npc;
        this.isOpen = true;
        promptDropDown.innerHTML = "";

        promptTitle.style.display = "block";
        promptTitle.innerHTML = npc?.title || "Quiz Time!";
        promptDropDown.appendChild(promptTitle);

        /* Wrap the entire content in a "scroll-edge" container for theming */
        const scrollEdge = document.createElement("div");
        scrollEdge.className = "scroll-edge";
        scrollEdge.appendChild(this.updateTable());
        promptDropDown.appendChild(scrollEdge);

        this.backgroundDim.create();
        promptDropDown.classList.add("quiz-popup");
    }

    initialize() {
        const promptTitle = document.createElement("div");
        promptTitle.id = "promptTitle";
        document.getElementById("promptDropDown").appendChild(promptTitle);
    }
}

export default Quiz;