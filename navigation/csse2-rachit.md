---
layout: base
title: Rachit's CSSE 2
description: Hello world
---

# Table of Contents

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

<style>
  .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .post-card {
    background: #1a1a1a;
    border-radius: 8px;
    padding: 15px;
    width: calc(33.333% - 10px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }
  
  .post-card:hover {
    transform: scale(1.05);
  }
  
  .post-title {
    font-size: 18px;
    font-weight: bold;
    color: #9b59b6; /* Ender Dragon purple */
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
</style>