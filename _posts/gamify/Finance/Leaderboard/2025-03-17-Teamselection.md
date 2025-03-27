---
layout: base
permalink: /leaderboard/team-selection
title: Team Selection
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Viewer</title>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/portfolio.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* General Styles */
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 0;
        }

        /* Navigation Bar */
        .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 0;
            background-color: #1c1c1c;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .nav-buttons {
            display: flex;
            gap: 15px;
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

        /* Team Viewer Container */
        .dashboard {
            padding: 40px;
            text-align: center;
        }

        /* Title Effect */
        .team-title {
            font-size: 32px;
            font-weight: bold;
            text-transform: uppercase;
            background: linear-gradient(90deg, #ff8c00, #ff22a6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            padding-bottom: 10px;
            border-bottom: 3px solid #ff22a6;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }

        /* Team Table */
        .team-table {
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
            text-transform: uppercase;
        }
        td {
            background-color: #2a2a2a;
            font-size: 16px;
            border-bottom: 1px solid #444;
            transition: background 0.3s;
        }
        tr:hover td {
            background-color: #ff22a6;
            color: #ffffff;
        }

        /* Member Styling */
        .rank {
            font-weight: bold;
            color: #ffcc00;
        }
        .balance {
            color: #00ff7f;
            font-weight: bold;
        }
        .name {
            font-weight: bold;
            color: #ffffff;
        }
    </style>
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar">
    <div class="nav-buttons">
        <a href="{{site.baseurl}}/leaderboard/overall-leaderboard">Leaderboard</a>
        <a href="{{site.baseurl}}/leaderboard/team-selection">Team Selector</a>
        <a href="{{site.baseurl}}/leaderboard/team-viewer">Team Viewer</a>
        <a href="{{site.baseurl}}/leaderboard/team-leaderboard">Team Leaderboard</a>
    </div>
</nav>

<!-- Dashboard -->
<div class="dashboard">
    <h1 class="team-title">Team Members</h1>
    <table class="team-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Balance</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody id="team-members-table">
            <!-- Team Members Populated Here -->
        </tbody>
    </table>
</div>

<script type="module">
    import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    async function fetchTeamMembers() {
        const staticData = [
            { name: "Alice", balance: 1200.50 },
            { name: "Bob", balance: 950.75 },
            { name: "Charlie", balance: 875.30 }
        ];

        try {
            const response = await fetch(`${javaURI}/api/teams/members`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch team data");
            const data = await response.json();
            populateTable(data);
        } catch (error) {
            console.error("Error fetching team data:", error);
            populateTable(staticData);
        }
    }

    function populateTable(data) {
        const teamTable = document.querySelector("#team-members-table");
        teamTable.innerHTML = "";
        data.forEach((member, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="rank">${index + 1}</td>
                <td class="balance">$${Number(member.balance).toFixed(2)}</td>
                <td class="name">${member.name}</td>
            `;
            teamTable.appendChild(row);
        });
    }

    document.addEventListener("DOMContentLoaded", fetchTeamMembers);
</script>
</body>
</html>