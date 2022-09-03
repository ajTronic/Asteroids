class Ship {
    constructor() {
        this.pos = createVector(width / 2, height / 2)
        this.rad = 20
        this.heading = 50
        this.rotation = 0
        this.vel = createVector(0, 0)
        this.isBoosting = false
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

    edges() {
        if (this.pos.x > width + this.rad) this.pos.x = -this.rad
        if (this.pos.x < -this.rad) this.pos.x = width + this.rad
        if (this.pos.y > height + this.rad) this.pos.y = -this.rad
        if (this.pos.y < -this.rad) this.pos.y = height + this.rad
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
          noFill()
          stroke(255)
          triangle(
              -this.rad, this.rad,
              this.rad, this.rad,
              0, -this.rad
          )
        pop()
    }
}