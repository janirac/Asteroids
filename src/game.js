import Asteroid from "./asteroid";

class Game{

    constructor(){
        this.DIM_X = 800;
        this.DIM_Y = 600;
        this.NUM_ASTEROIDS = 10;
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids(){
        for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
            const pos = this.randomPosition();
            this.asteroids.push(new Asteroid(pos));
        }
    }

    randomPosition() {
        const x = Math.random() * this.DIM_X;
        const y = Math.random() * this.DIM_Y;
        return [x, y];
    }

    draw(ctx){
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.asteroids.forEach((asteroid) => {
        asteroid.draw(ctx);
        });
    }

    moveObjects(){
        this.asteroids.forEach((asteroid) => {
            asteroid.move();
        });
    }
}

export default Game