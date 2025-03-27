---
layout: base
permalink: /leaderboard/team-leaderboard
title: Team Selection
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Leaderboard</title>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/portfolio.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 0;
        }
        .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 0;
            background-color: #1c1c1c;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .nav-buttons a {
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 6px;
            transition: 0.3s;
        }
        .nav-buttons a:hover {
            background-color: #ff9800;
            transform: scale(1.1);
        }
        .dashboard {
            padding: 40px;
            text-align: center;
        }
        .leaderboard-title {
            font-size: 32px;
            font-weight: bold;
            text-transform: uppercase;
            background: linear-gradient(90deg, #ff8c00, #ff22a6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            padding-bottom: 10px;
            border-bottom: 3px solid #ff22a6;
            margin-bottom: 20px;
        }
        .leaderboard-table {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            border-collapse: collapse;
            background: #1f1f1f;
            border-radius: 8px;
            box-shadow: 0px 0px 15px rgba(255, 136, 0, 0.5);
            overflow: hidden;
        }
        th, td {
            padding: 15px 20px;
            text-align: left;
        }
        th {
            background-color: #ff9800;
            color: #000;
            font-size: 18px;
        }
        td {
            background-color: #2a2a2a;
            font-size: 16px;
            border-bottom: 1px solid #444;
            transition: background 0.3s;
            position: relative;
        }
        tr:hover td {
            background-color: #ff22a6;
            color: #ffffff;
        }
        .tooltip {
            display: none;
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-radius: 6px;
            white-space: nowrap;
        }
        tr:hover .tooltip {
            display: block;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-buttons">
            <a href="{{site.baseurl}}/leaderboard/overall-leaderboard">Leaderboard</a>
            <a href="{{site.baseurl}}/leaderboard/team-selection">Team selector</a>
            <a href="{{site.baseurl}}/leaderboard/team-viewer">Team viewer</a>
            <a href="{{site.baseurl}}/leaderboard/team-leaderboard">Team leaderboard</a>
        </div>
    </nav>

    <div class="dashboard">
        <h1 class="leaderboard-title">Top Teams by Balance</h1>
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Total Balance</th>
                </tr>
            </thead>
            <tbody id="team-leaderboard">
                <tr><td colspan="3">Loading...</td></tr>
            </tbody>
        </table>
    </div>
    
    <script type="module">
        import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
        const fallbackData = [
            { team: "Alpha", balance: 12000, members: [{ name: "Alice", balance: 5000 }, { name: "Bob", balance: 7000 }] },
            { team: "Bravo", balance: 9500, members: [{ name: "Charlie", balance: 4000 }, { name: "David", balance: 5500 }] },
            { team: "Charlie", balance: 8600, members: [{ name: "Eve", balance: 3600 }, { name: "Frank", balance: 5000 }] }
        ];
        async function fetchTeamLeaderboard() {
            try {
                const response = await fetch(`${javaURI}/api/rankings/team-leaderboard`, fetchOptions);
                if (!response.ok) throw new Error("Failed to fetch team leaderboard data");
                const data = await response.json();
                populateTable(data);
            } catch (error) {
                console.error("Error fetching team leaderboard:", error);
                populateTable(fallbackData);
            }
        }
        function populateTable(teams) {
            const table = document.querySelector("#team-leaderboard");
            table.innerHTML = "";
            teams.forEach((team, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${team.team}</td>
                    <td>$${team.balance.toLocaleString()}</td>
                    <td class="tooltip">${team.members.map(m => `${m.name}: $${m.balance}`).join("<br>")}</td>
                `;
                table.appendChild(row);
            });
        }
        document.addEventListener("DOMContentLoaded", fetchTeamLeaderboard);
    </script>
</body>
</html>