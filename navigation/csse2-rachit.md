---
layout: base
title: Rachit's CSSE 2
description: Hello world
---

# Rachit's CSSE 2!

<!-- Sidebar Trigger -->
<button id="sidebar-btn">☰ Menu</button>

<!-- Sidebar -->
<div id="sidebar">
  <button id="close-sidebar">&times;</button>
  <ul>
    <li><a href="https://github.com/Rachit-CSSE2">Github Organization</a></li>
    <li><a href="https://github.com/Rachit-CSSE2/portfolio_2025">Github Repository</a></li>
    <li><a href="https://github.com/orgs/Rachit-CSSE2/projects/1/views/1">Scrum Board</a></li>
    <li><a href="https://poway.instructure.com/courses/164879">Canvas</a></li>
    <li><a href="https://join.slack.com/t/cs-se-hq/shared_invite/zt-31odi3kw2-D0mci9mNfsEthKr_8ILTXg">Slack</a></li>
  </ul>
</div>

<!-- Ender Dragon Clickable Image -->
<div class="dragon-container">
  <img id="ender-dragon" src="{{ site.baseurl }}/assets/ender_dragon.png" alt="Ender Dragon">
</div>

<!-- Game Info Section -->
<div class="content-container">
  <div class="game-info">
    <h2>About Our Game</h2>
    <p>Welcome to our Ender Dragon game! This game uses an RPG game base using adventureGame and uses Platformer 4.x for the individual levels. Are you ready?</p>
  </div>

  <div class="post-list">
    {% for post in site.posts %}
      {% if post.path contains '_posts/CSSE/Rachit-CSSE2/' %}
        <div class="post-card">
          <a href="/portfolio_2025{{ post.url }}" class="post-title">{{ post.title }}</a>
          <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
          <p class="post-description">{{ post.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

<style>
  /* Background */
  body {
    background: url('{{ site.baseurl }}/assets/ender_background.png') no-repeat center center fixed;
    background-size: cover;
    font-family: 'Arial', sans-serif;
    color: #fff;
    text-align: center;
  }

  /* Content Layout */
  .content-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 30px;
  }

  /* Game Info Section */
  .game-info {
    width: 40%;
    background: rgba(26, 26, 26, 0.9);
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    text-align: left;
  }

  .game-info h2 {
    color: #9b59b6;
    font-size: 24px;
  }

  .game-info p {
    font-size: 16px;
    color: #dfe6e9;
  }

  /* Sidebar Styling */
  #sidebar {
    position: fixed;
    left: -250px;
    top: 0;
    width: 250px;
    height: 100%;
    background: rgba(10, 10, 10, 0.95);
    padding-top: 50px;
    transition: 0.3s;
  }

  #sidebar ul {
    list-style: none;
    padding: 0;
  }

  #sidebar ul li {
    padding: 15px;
    text-align: left;
  }

  #sidebar ul li a {
    color: #9b59b6;
    text-decoration: none;
    font-size: 18px;
    display: block;
    transition: 0.3s;
  }

  #sidebar ul li a:hover {
    color: #e67e22;
  }

  /* Posts on the Right */
  .post-list {
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-start;
  }

  .post-card {
    background: rgba(26, 26, 26, 0.8);
    border-radius: 8px;
    padding: 15px;
    width: 280px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  .post-card:hover {
    transform: scale(1.05);
  }

  .post-title {
    font-size: 18px;
    font-weight: bold;
    color: #9b59b6;
    text-decoration: none;
  }

  .post-title:hover {
    text-shadow: 0 0 10px #9b59b6;
  }

  .post-date {
    font-size: 14px;
    color: #b2bec3;
  }

  .post-description {
    font-size: 16px;
    color: #dfe6e9;
  }

  /* Ender Dragon Image */
  .dragon-container {
    text-align: center;
    margin: 20px 0;
  }

  #ender-dragon {
    width: 200px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  #ender-dragon:hover {
    transform: scale(1.1);
  }
  /* Close Sidebar Button */
  #close-sidebar {
    position: absolute;
    top: 10px;
    left: 15px; /* Move it to the left */
    font-size: 25px;
    border: none;
    background: none;
    color: white;
    cursor: pointer;
  }
</style>

<script>
  // Sidebar Toggle
  document.getElementById("sidebar-btn").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "0";
  });

  document.getElementById("close-sidebar").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "-250px";
  });

  // Ender Dragon Click Effect
  document.getElementById("ender-dragon").addEventListener("click", function() {
    this.src = "/CSSE/assets/ender_egg.png"; // Change image to Ender Egg
    this.style.transform = "scale(0.8) rotate(360deg)";
    setTimeout(() => {
      this.style.transform = "scale(0.8)";
    }, 500);
  });
</script>