---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    // Background data
    const image_src = "{{site.baseurl}}/images/rpg/water.png";
    const image_data = {
        pixels: {height: 580, width: 1038}
    };
    const image = {src: image_src, data: image_data};

    // Sprite data
    const sprite_src_turtle = "{{site.baseurl}}/images/rpg/turtle.png";
    const sprite_data_turtle = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        pixels: {height: 280, width: 256},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
    };
    const turtle = {src: sprite_src_turtle, data: sprite_data_turtle};

    const sprite_src_fish = "{{site.baseurl}}/images/rpg/fishies.png";
    const sprite_data_fish = {
        SCALE_FACTOR: 16,  // Adjust this based on your scaling needs
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 384},
        orientation: {rows: 8, columns: 12 },
        down: {row: 0, start: 0, columns: 3 },  // 1st row
        left: {row: 1, start: 0, columns: 3 },  // 2nd row
        right: {row: 2, start: 0, columns: 3 }, // 3rd row
        up: {row: 3, start: 0, columns: 3 },    // 4th row
    };

    const fish = {src: sprite_src_fish, data: sprite_data_fish};
    // Assets for game
    //const assets = {}
    //const assets = {image: image}
    //const assets = {turtle: turtle}
    const assets = {image: image, turtle: turtle, fish: fish}

    // Start game engine
    GameControl.start(assets);
</script>
