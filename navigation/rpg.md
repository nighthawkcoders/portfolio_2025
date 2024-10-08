---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>
<div id="prompt" style="display:none; position:absolute; top:50px; left:50px; background-color: white; padding: 10px; border: 1px solid black;">Hello!</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    const path = "{{site.baseurl}}";

    // Start game engine
    GameControl.start(path);
</script>
