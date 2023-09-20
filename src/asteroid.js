import MovingObject from "./moving_object";
import { Util } from "./util";

class Asteroid extends MovingObject {
    static COLOR = "gray"
    static RADIUS = 25

    constructor(pos){
        super({
            pos: pos,
            vel: Util.randomVec(2),
            radius: Asteroid.RADIUS,
            color: Asteroid.COLOR
        })
    }
}

export default Asteroid