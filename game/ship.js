import GameObject from "./gameobject.js"
import controler from "./controls/controler.json" assert {type: "json"}

class Ship extends GameObject {
    constructor() {
        super()
        this.pos = createVector(width / 2, height / 2)
        this.rad = controler.ship.rad
        this.heading = 0
        this.rotation = 0
        this.vel = createVector(0, 0)
        this.isBoosting = false
    }

    getData() {
        return [this.pos, this.heading]
    }

    boosting(b) {
        this.isBoosting = b
    }

    boost() {
        const force = p5.Vector.fromAngle(this.heading)
        force.mult(controler.ship.speed)
        this.vel.add(force)
    }

    setRotation(angle) {
        this.rotation = angle
    }


    turn() {
        this.heading += this.rotation
    }

    update() {
        if (this.isBoosting) this.boost()
        this.pos.add(this.vel)
        this.vel.mult(controler.ship.slowdown)
    }

    render() {
        push()
          translate(this.pos.x, this.pos.y)
          rotate(this.heading + PI / 2)
          fill(20)
          stroke(255)
          triangle(
              -this.rad, this.rad,
              this.rad, this.rad,
              0, -this.rad
          )
        pop()
    }
}

export default Ship