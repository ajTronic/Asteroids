class GameObject {
    edges() {
        if (this.pos.x > width + this.rad) {
            if (!this.onEdge) {
                this.pos.x = -this.rad
            } else {
                this.onEdge()
            }
        } else if (this.pos.x < -this.rad) {
            if (!this.onEdge) {
                this.pos.x = width + this.rad
            } else {
                this.onEdge()
            }
        } else if (this.pos.y > height + this.rad) {
            if (!this.onEdge) {
                this.pos.y = -this.rad
            } else {
                this.onEdge()
            }
        } else if (this.pos.y < -this.rad) {
            if (!this.onEdge) {
                this.pos.y = height + this.rad
            } else {
                this.onEdge()
            }
        }
    }

    hits(asteroid) {
        if (abs(this.pos.x - asteroid.pos.x) > 500 || abs(this.pos.y - asteroid.pos.y) > 500) { // not even close
            return
        }

        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d < asteroid.rad) return true
        return false
    }
}