import GameObject from "./gameobject.js"

class Asteroid extends GameObject {
    constructor(pos, rad) {
        super()
        this.pos = pos ? pos.copy() : createVector(random(width), random(height))
        this.vel = p5.Vector.random2D()
        if (rad) this.rad = rad
        else this.rad = random(15, 40)

        this.total = floor(random(5, 15))
        this.offset = []

        for (let i = 0; i < this.total; i++) this.offset.push(random(-this.rad * 0.3, this.rad * 0.3))
    }

    update() {
        this.pos.add(this.vel)
    }

    breakup() {
        let newAsteroids = []
        let numNew = floor(random(2, 4))
        for (let i = 0; i < numNew; i++) {
            newAsteroids[i] = new Asteroid(this.pos, this.rad / numNew)
        }
        return newAsteroids
    }

    render() {
        push()
        stroke(255)
        fill(10)
        translate(this.pos.x, this.pos.y)
        beginShape()
        for (let i = 0; i < this.total; i++) {
            let angle = map(i, 0, this.total, 0, TWO_PI)
            let x = this.rad * cos(angle) + this.offset[i]
            let y = this.rad * sin(angle)
            vertex(x, y)
        }
        endShape(CLOSE)
        pop()
    }
}

export default Asteroid