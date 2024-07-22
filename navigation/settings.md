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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
}

.toggle-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.toggle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.toggle-label {
  font-size: 16px;
  color: #333;
}
</style>
<body>
<div class="toggle-wrapper">
    <div class="toggle-container">
    <span class="toggle-label">Leaf</span>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
    </div>
    <div class="toggle-container">
    <span class="toggle-label">Hacker</span>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
    </div>
    <div class="toggle-container">
    <span class="toggle-label">Hamilton</span>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
    </div>
    <div class="toggle-container">
    <span class="toggle-label">Monophase</span>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
    </div>
    <div class="toggle-container">
    <span class="toggle-label">Minimal Mistakes</span>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
    </div>
</div>
</body>