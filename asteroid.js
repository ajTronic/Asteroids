class Asteroid {
    constructor() {
        this.pos = createVector(random(width), random(height))
        this.rad = 50
        this.total = floor(random(5, 15))

        console.log(this.pos);
    }

    render() {
        push()
            stroke(255)
            noFill()
            translate(this.pos.x, this.pos.y)
            beginShape()
            for (let i = 0; i < this.total; i++) {
                let angle = map(i, 0, this.total, 0, TWO_PI)
                let x = this.rad * cos(angle)
                let y = this.rad * sin(angle)
                vertex(x, y)
            }
            endShape(CLOSE)
        pop()
    }
}