class Torpedo extends GameObject {
    constructor(pos, angle) {
        super()
        this.pos = createVector(pos.x, pos.y)
        this.vel = p5.Vector.fromAngle(angle)
        this.vel.mult(5)
        this.rad = 4
    }

    hits(asteroid) {
        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d < asteroid.rad) return true
        return false
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