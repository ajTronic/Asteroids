let ship;
let asteroids = []
let torpedos = []

window.setup = () => {
  createCanvas(windowWidth, windowHeight);

  ship = new Ship()

  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid())
  }

  strokeWeight(2)
}

window.draw = () => {
  background(20);

  if (keyIsDown(RIGHT_ARROW)) ship.setRotation(0.1)
  if (keyIsDown(LEFT_ARROW)) ship.setRotation(-0.1)
  if (keyIsDown(UP_ARROW)) ship.boosting(true)

  for (let i = torpedos.length - 1; i >= 0; i--) {
    const torpedo = torpedos[i]

    torpedo.edges()
    if (torpedo.isFinished()) {
      torpedos.splice(i, 1)
      break
    }

    torpedo.render()
    torpedo.update()

    for (let j = asteroids.length - 1; j >= 0; j--) {
      const asteroid = asteroids[j]

      if (torpedo.hits(asteroid)) {
        breakupAsteroid(asteroid)
        asteroids.splice(j, 1)
        torpedos.splice(i, 1)
        break
      }
    }
  }

  ship.update()
  ship.render()
  ship.turn()
  ship.edges()

  asteroids.forEach(asteroid => {
    asteroid.render()
    asteroid.update()
    asteroid.edges()

    if (ship.hits(asteroid)) {
      breakupAsteroid(asteroid)
      asteroids.splice(asteroids.indexOf(asteroid), 1)
    }
  })
}

const breakupAsteroid = (asteroid) => {
  if (asteroid.rad > 15) {
    const newAsteroids = asteroid.breakup()
    asteroids.push(...newAsteroids)
  }
}

window.keyReleased = () => {
  ship.setRotation(0)
  ship.boosting(false)
}

window.keyTyped = (e) => {
  e.preventDefault()
  if (e.key == " ") {
    torpedos.push(new Torpedo(...ship.getData()))
  }
}