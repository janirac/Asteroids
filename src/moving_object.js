class MovingObject {
    constructor(options) {
        this.pos = options.pos || [0, 0];
        this.vel = options.vel || [0, 0];
        this.radius = options.radius || 5;
        this.color = options.color || "#00FF00";
      }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

export default MovingObject