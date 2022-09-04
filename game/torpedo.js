class Torpedo extends GameObject {
    constructor(pos, angle) {
        super()
        this.pos = createVector(pos.x, pos.y)
        this.vel = p5.Vector.fromAngle(angle)
        this.vel.mult(7)
        this.rad = 4
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