---
layout: base
title: Rachit's CSSE2 Group Blog
description: Hello world
---

# Table of Contents

<ul>
  {% for post in site.posts %}
    {% if post.path contains '_posts/CSSE/Rachit-CSSE2/' %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
        <p>{{ post.description }}</p>
      </li>
    {% endif %}
  {% endfor %}
</ul>