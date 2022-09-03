class Ship extends GameObject {
    constructor() {
        super()
        this.pos = createVector(width / 2, height / 2)
        this.rad = 20
        this.heading = 50
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
        force.mult(0.6)
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
        this.vel.mult(0.97)
    }

    render() {
        push()
          translate(this.pos.x, this.pos.y)
          rotate(this.heading + PI / 2)
          fill(15)
          stroke(255)
          triangle(
              -this.rad, this.rad,
              this.rad, this.rad,
              0, -this.rad
          )
        pop()
    }
}