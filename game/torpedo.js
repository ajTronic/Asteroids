import GameObject from "./gameobject.js"
import controler from "./controls/controler.json" assert {type: "json"}

class Torpedo extends GameObject {
    constructor(pos, angle) {
        super()
        this.pos = createVector(pos.x, pos.y)
        this.vel = p5.Vector.fromAngle(angle)
        this.vel.mult(controler.torpedo.speed)
        this.rad = controler.torpedo.rad
        this.finished = false
    }

    isFinished() {
        return this.finished
    }

    onEdge() {
        this.finished = true
    }

    update() {
        this.pos.add(this.vel)
    }

    render() {
        push()
          stroke("white")
          strokeWeight(this.rad)
          point(this.pos.x, this.pos.y)
        pop()
    }
}

export default Torpedo