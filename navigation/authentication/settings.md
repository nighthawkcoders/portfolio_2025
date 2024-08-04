---
layout: post
title: Theme Toggler
permalink: /theme
menu: nav/home.html
search_exclude: true
show_reading_time: false
---
<style>
    body {
        font-family: Arial, sans-serif;
        height: 100vh;
    }

    .dropdown-container {
        position: relative;
        display: inline-block;
    }

    .styled-dropdown {
        padding: 10px 20px;
        border: 2px solid #007BFF;
        cursor: pointer;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        border-radius: 5px;
        appearance: none;
        -webkit-appearance: none;
        background-color: white;
        color: black;
        font-size: 16px;
    }

    .styled-dropdown:hover {
        background-color: #f0f0f0;
    }

    .styled-dropdown:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    /* Custom arrow */
    .dropdown-container::after {
        content: '\25BC';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: #007BFF;
    }
</style>


<body>
    <div class="dropdown-container">
        <select class="styled-dropdown">
            <option value="" disabled selected>Select a theme</option>
            <option value="hacker">Hacker</option>
            <option value="leaf">Leaf</option>
            <option value="dracula">Dracula</option>
            <option value="hamilton">Hamilton</option>
            <option value="monophase">Monophase</option>
            <option value="minimalMistakes">Minimal Mistakes</option>
        </select>
    </div>
</body>