class GameObject {
    edges() {
        if (this.pos.x > width + this.rad) this.pos.x = -this.rad
        if (this.pos.x < -this.rad) this.pos.x = width + this.rad
        if (this.pos.y > height + this.rad) this.pos.y = -this.rad
        if (this.pos.y < -this.rad) this.pos.y = height + this.rad
    }
}