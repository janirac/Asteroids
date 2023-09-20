import MovingObject from "./moving_object.js"
import GameView from "./game_view.js"
import Game from "./game.js"

document.addEventListener('DOMContentLoaded', () => {

    window.MovingObject = MovingObject;
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
  
    const game = new Game();
  
    const gameView = new GameView(game, ctx);

    gameView.start();
});