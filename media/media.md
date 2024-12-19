---
layout: post
title: Media Bias Game
permalink: /media
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <p>Drag the images into the correct bins (Left, Center, or Right). You have 3 lives!</p>
    <div id="username-container" style="margin-bottom: 20px;">
        <label for="username">Enter your username:</label>
        <input type="text" id="username" placeholder="Username">
        <button id="set-username">Set Username</button>
        <p id="display-username" style="font-size: 18px; margin-top: 10px;">Username: <span id="current-username">Guest</span></p>
    </div>
    <div id="info" style="display: flex; justify-content: space-between; margin-bottom: 20px;">
        <div id="lives" style="font-size: 24px;">Lives: 😺😺😺</div>
        <div id="score" style="font-size: 24px;">Score: 0</div>
    </div>
    <div id="bins" style="display: flex; justify-content: space-around; margin-bottom: 20px;">
        <div class="bin" data-bin="Left" style="width: 30%; padding: 10px; border: 1px solid black; min-height: 100px;">Left</div>
        <div class="bin" data-bin="Center" style="width: 30%; padding: 10px; border: 1px solid black; min-height: 100px;">Center</div>
        <div class="bin" data-bin="Right" style="width: 30%; padding: 10px; border: 1px solid black; min-height: 100px;">Right</div>
    </div>
    <div id="images" style="display: flex; flex-wrap: wrap; gap: 10px;">
        <script>
            const imageFiles = [
                { src: "atlanticL.png", company: "Atlantic", bin: "Left" },
                { src: "buzzfeedL.png", company: "Buzzfeed", bin: "Left" },
                { src: "cnnL.png", company: "CNN", bin: "Left" },
                { src: "epochR.png", company: "Epoch Times", bin: "Right" },
                { src: "forbesC.png", company: "Forbes", bin: "Center" },
                { src: "hillC.png", company: "The Hill", bin: "Center" },
                { src: "nbcL.png", company: "NBC", bin: "Left" },
                { src: "newsweekC.png", company: "Newsweek", bin: "Center" },
                { src: "nytL.png", company: "NY Times", bin: "Left" },
                { src: "voxL.png", company: "Vox", bin: "Left" },
                { src: "wtR.png", company: "Washington Times", bin: "Right" },
                { src: "bbcC.png", company: "BBC", bin: "Center" },
                { src: "callerR.png", company: "The Daily Caller", bin: "Right" },
                { src: "dailywireR.png", company: "Daily Wire", bin: "Right" },
                { src: "federalistR.png", company: "Federalist", bin: "Right" },
                { src: "foxR.png", company: "Fox News", bin: "Right" },
                { src: "marketwatchC.png", company: "MarketWatch", bin: "Center" },
                { src: "newsmaxR.png", company: "Newsmax", bin: "Right" },
                { src: "nprL.png", company: "NPR", bin: "Left" },
                { src: "reutersC.png", company: "Reuters", bin: "Center" },
                { src: "wsjC.png", company: "Wall Street Journal", bin: "Center" }
            ];
            imageFiles.forEach((file, index) => {
                document.write(`
                    <img src="assets/${file.src}" 
                         class="image" 
                         draggable="true" 
                         id="img-${index}" 
                         data-company="${file.company}" 
                         data-bin="${file.bin}" 
                         style="width: 80px; height: auto; border: 1px solid black; padding: 5px;">
                `);
            });
        </script>
    </div>
    <button id="submit" style="margin-top: 20px;">Submit</button>
    <script type="module">
        import {javaURI, fetchOptions} from "{{site.baseurl}}/assets/js/api/config.js";
        const bins = document.querySelectorAll('.bin');
        const images = document.querySelectorAll('.image');
        const livesElement = document.getElementById('lives');
        const scoreElement = document.getElementById('score');
        const usernameInput = document.getElementById('username');
        const setUsernameButton = document.getElementById('set-username');
        const displayUsername = document.getElementById('current-username');
        let lives = 3;
        let score = 0;
        setUsernameButton.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            if (username) {
                displayUsername.innerText = username;
                usernameInput.value = '';
            } else {
                alert('Please enter a valid username.');
            }
        });
        images.forEach(img => {
            img.addEventListener('dragstart', e => {
                e.dataTransfer.setData('image-id', e.target.id);
            });
        });
        bins.forEach(bin => {
            bin.addEventListener('dragover', e => e.preventDefault());
            bin.addEventListener('drop', e => {
                const imageId = e.dataTransfer.getData('image-id');
                const img = document.getElementById(imageId);
                if (img.dataset.bin === bin.dataset.bin) {
                    bin.appendChild(img);
                    score++;
                    scoreElement.innerText = `Score: ${score}`;
                } else {
                    lives--;
                    livesElement.innerText = `Lives: ${"😺".repeat(lives)}`;
                    if (lives === 0) {
                        alert(`Game over! ${displayUsername.innerText}, your final score: ${score}`);
                        postScore(displayUsername.innerText, score);
                        location.reload();
                    }
                }
            });
        });
        function postScore(username, finalScore) {
            fetch(`${javaURI}/api/media/score/${username}/${finalScore}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    console.log('Score successfully saved!');
                } else {
                    console.error('Failed to save score');
                }
            })
            .catch(error => {
                console.error('Error saving score:', error);
            });
        }
        document.getElementById('submit').addEventListener('click', () => {
            alert(`${displayUsername.innerText}, your final score: ${score}`);
            postScore(displayUsername.innerText, score);
            location.reload();
        });
    </script>
</body>
</html>
