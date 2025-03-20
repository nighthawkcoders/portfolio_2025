---
layout: page
title: Hacks 1 and 3 documentation made by Zhengji Li and Ruhaan Bansal
description: Hacks 1 and 3
permalink: /hck13
---

# Documentation
 - Replaced the original player data objects:
 - Removed player1_data object with properties for a red square (id, greeting, scale, position, color, hitbox, WASD keypress)
 - Removed player2_data object with properties for a green square (id, greeting, scale, position, color, hitbox, arrow keypress)
 - Implemented new Player class with physics-based movement:
 - Added properties for vertical velocity, jump force, gravity, and jumping states
 - Created update() method for handling gravity, jumping, and ground collision
 - Added jump() method for initiating jumps when grounded
 - Included example usage with spacebar jump control and game loop
 - Enhanced player visuals:
 - Added idle sprite animation for players
 - Created a brand new sprite sheet for Player 1 and Player 2