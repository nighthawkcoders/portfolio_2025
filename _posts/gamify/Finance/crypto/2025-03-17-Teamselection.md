---
layout: base
title: Team Selection
type: game
permalink: /crypto/team-selection
---

<link rel="stylesheet" href="{{site.baseurl}}/assets/css/team-selection.css">

<style>
    /* General Page Styles */
    body {
        font-family: 'Orbitron', sans-serif; /* Futuristic font */
        background: #101010;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        justify-content: flex-start;
        color: #fff;
    }

    /* Navbar */
    .navbar {
        width: 100%;
        background: rgba(10, 10, 10, 0.85);
        padding: 15px 0;
        display: flex;
        justify-content: center;
        backdrop-filter: blur(15px); /* Glass effect */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .nav-buttons a {
        color: #b3b3b3;
        text-decoration: none;
        margin: 0 20px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 2px;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .nav-buttons a:hover {
        color: #00ffff;
        transform: translateY(-2px);
    }

    /* Main Container */
    .container {
        max-width: 900px;
        margin-top: 50px;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.75); /* Semi-transparent dark background */
        width: 90%;
        box-sizing: border-box;
        backdrop-filter: blur(10px); /* Glassmorphism effect */
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: #00ffff;
        margin-bottom: 30px;
        font-size: 36px;
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
    }

    /* Team List */
    .team-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin-top: 30px;
    }

    /* Team Card */
    .team-card {
        background: linear-gradient(135deg, #1b1b1b, #333333);
        color: #fff;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        text-align: center;
        width: 220px;
        font-weight: bold;
        font-size: 18px;
        transition: transform 0.3s, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        margin: 10px;
        border: 2px solid transparent;
        background-image: linear-gradient(to top left, #1b1b1b, #00bcd4);
    }

    .team-card:hover {
        transform: translateY(-10px);
        background-color: #00bcd4;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        border-color: #00bcd4;
    }

    .team-card.selected {
        background-color: #00bcd4 !important;
        transform: scale(1.1) translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        border-color: #00bcd4;
    }

    /* Confirm Button */
    .btn {
        margin-top: 40px;
        padding: 15px 30px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.3em;
        font-weight: 600;
        background-color: #00bcd4;
        color: #fff;
        letter-spacing: 1px;
        transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .btn:hover {
        background-color: #00bcd4;
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .team-list {
            flex-direction: column;
            align-items: center;
        }

        .team-card {
            width: 90%;
            margin: 15px 0;
        }

        .btn {
            width: 100%;
            font-size: 1.2em;
        }
    }
</style>

<!-- Navigation Bar -->
<nav class="navbar">
    <div class="nav-buttons">
        <a href="{{site.baseurl}}/stocks/leaderboard">Leaderboard</a>
        <a href="{{site.baseurl}}/crypto/team-selection">Team viewer</a>
        <a href="{{site.baseurl}}/stocks/leaderboard">Team selector</a>
    </div>
</nav>

<!-- Main Content -->
<div class="container">
    <h1>Select Your Team</h1>
    <div class="team-list" id="team-list-container"></div>
    <button class="btn" onclick="confirmSelection()">Confirm Selection</button>
</div>

<script>
    let selectedTeam = null;
    const teams = [
        { id: 1, name: "Alpha Warriors" },
        { id: 2, name: "Beta Strikers" },
        { id: 3, name: "Gamma Defenders" },
        { id: 4, name: "Delta Challengers" }
    ];

    function renderTeams() {
        const container = document.getElementById("team-list-container");
        container.innerHTML = "";
        teams.forEach(team => {
            const card = document.createElement("div");
            card.className = "team-card";
            card.innerText = team.name;
            card.dataset.id = team.id;
            card.onclick = () => selectTeam(team.id);
            container.appendChild(card);
        });
    }

    function selectTeam(teamId) {
        selectedTeam = teamId;
        document.querySelectorAll(".team-card").forEach(card => {
            card.classList.remove("selected");
            if (parseInt(card.dataset.id) === teamId) {
                card.classList.add("selected");
            }
        });
    }

    function confirmSelection() {
        if (selectedTeam === null) {
            alert("Please select a team first.");
        } else {
            alert(`Team ${teams.find(t => t.id === selectedTeam).name} selected!`);
            // Backend integration placeholder
        }
    }

    renderTeams();
</script>