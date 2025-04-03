import GamEnvBackground from './GameEnvBackground.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';

class GameLevelEnd {
  constructor(gameEnv) {
    console.log("Initializing GameLevelEnd...");
    
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    const image_src_end = path + "/images/gamify/endbackground.png";
    const image_data_end = {
        name: 'end',
        greeting: "The End opens before you, a vast black void in the distance. The stone beneath your feet is yellowish and hard, and the air tingles.",
        src: image_src_end,
        pixels: {height: 1140, width: 2460}
    };

    const sprite_src_chillguy = path + "/images/gamify/chillguy.png";
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi, I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: width/16, y: height/2 },
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/8 },
        downLeft: {row: 2, start: 0, columns: 3, rotate: -Math.PI/8 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/8 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/8 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    const sprite_src_tux = path + "/images/gamify/tux.png";
    const sprite_greet_tux = "This is the end...";
    const sprite_data_tux = {
        id: 'Tux',
        greeting: sprite_greet_tux,
        src: sprite_src_tux,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 1000000,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 2), y: (height / 2) },
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        quiz: { 
          title: "Linux Command Quiz",
          questions: [
            "It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! It's eternity in here! \n1. huh\n2. what\n3. ...\n4. ok bye"
          ] 
        },
        reaction: function() {
          alert(sprite_greet_tux);
        },
        interact: function() {
          let quiz = new Quiz();
          quiz.initialize();
          quiz.openPanel(sprite_data_tux);
        }
    };

    this.classes = [
      { class: GamEnvBackground, data: image_data_end },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux }
    ];
  }
}

export default GameLevelEnd;