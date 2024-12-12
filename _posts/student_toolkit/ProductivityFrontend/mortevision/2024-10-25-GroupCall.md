---
layout: post
title: MorteVision
description: Student Teach and Software Development Objectives for Sprint 2
type: ccc
courses: {'csa': {'week': 8}}
comments: True
---

{% include MorteVision/head.html %}
{% include MorteVision/navbar.html %}

<h1>Queue Management</h1>
<div class="dropdown-container">
        <label for="assignmentDropdown">Choose an Assignment:</label>
        <select id="assignmentDropdown"></select>
        <button id="initializeQueue">Begin Presentations</button>
    </div>

<div class="queue-container">
        <div class="column">
            <h2>Not Gone</h2>
            <ul id="notGoneList">
            </ul>
        </div>
        <div class="column">
            <h2>Queue</h2>
            <ul id="queueList">
            </ul>
        </div>
        <div class="column">
            <h2>Done</h2>
            <ul id="doneList">
            </ul>
        </div>
    </div>

<div class="controls">
        <button id="addQueue">Add to Queue</button>
        <button id="removeQueue">Remove from Queue</button>
        <button id="beginTimer">Begin Timer</button>
        <button id="resetQueue">Reset Queue</button>
    </div>

<div class="timer">
        <span id="timerDisplay">00:10</span>
    </div>

<div id="streamWrapper">
<div id="streamOffline">
<img id="StreamOfflineMort" src="{{ '/assets/MorteVision/image/logo.png?v=' | append: site.github.build_revision | relative_url }}">
<h1 id="StreamOfflineHead">Stream Offline</h1>
<span id="StreamOfflineWitty">Make sure you connect to the stream, or start your own!</span>
</div>
<video id="mortStream" autoplay playsinline></video>
</div>

<div id="streamControl">
<button alt="Begin Streaming" onclick="streamerInit()" id="broadcastButton"><span class="material-symbols-outlined">podcasts</span></button>
<button alt="Connect To Stream" onclick="consumerInit()"><span class="material-symbols-outlined">play_circle</span></button>
<button alt="Fullscreen" onclick="document.getElementById('mortStream').webkitRequestFullScreen()"><span class="material-symbols-outlined">fullscreen</span></button>
</div>

<script src="{{ '/assets/MorteVision/js/queue.js?v=' | append: site.github.build_revision | relative_url }}"></script>
