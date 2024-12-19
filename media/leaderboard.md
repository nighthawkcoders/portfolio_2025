---
layout: post
title: Media Bias Game Leaderboard
permalink: /media/leaderboard
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
</head>
<body>
    <h1>Leaderboard</h1>
    <table id="leaderboard-table" border="1" style="width: 50%; margin: 0 auto;">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody id="leaderboard-body">
            <!-- Leaderboard rows will be inserted here -->
        </tbody>
    </table>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            fetch('http://localhost:8085/api/media/')
                .then(response => response.json())
                .then(data => {
                    const leaderboardBody = document.getElementById("leaderboard-body");
                    leaderboardBody.innerHTML = '';
                    data.forEach(entry => {
                        const row = document.createElement("tr");
                        const rankCell = document.createElement("td");
                        rankCell.textContent = entry.rank;
                        const usernameCell = document.createElement("td");
                        usernameCell.textContent = entry.username;
                        const scoreCell = document.createElement("td");
                        scoreCell.textContent = entry.score;
                        row.appendChild(rankCell);
                        row.appendChild(usernameCell);
                        row.appendChild(scoreCell);
                        leaderboardBody.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching leaderboard:', error));
        });
    </script>
</body>
</html>