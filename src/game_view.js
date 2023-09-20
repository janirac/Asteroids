class GameView {
    constructor(game, ctx) {
      this.game = game; 
      this.ctx = ctx; 
    }
  
    start() {
      const game = this.game;
      const ctx = this.ctx;
      const frameRate = 20;
  
      
      this.intervalId = setInterval(function () {
        game.moveObjects();
        game.draw(ctx);
      }, frameRate);
    }
  
    stop() {
      clearInterval(this.intervalId);
    }
  }
  
  export default GameView;