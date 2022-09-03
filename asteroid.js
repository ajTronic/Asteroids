class Asteroid extends GameObject {
    constructor() {
        super()
        this.pos = createVector(random(width), random(height))
        this.vel = p5.Vector.random2D()
        this.rad = 40
        this.total = floor(random(5, 15))
        this.offset = []
        for (let i  = 0; i < this.total; i++) this.offset.push(random(-15, 15))
    }

    update() {
        this.pos.add(this.vel)
    }

    render() {
        push()
            stroke(255)
            noFill()
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