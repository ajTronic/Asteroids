let ship;
let asteroids = []
let torpedos = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship()

  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid())
  }

  strokeWeight(2)
}

function draw() {
  background(20);

  if (keyIsDown(RIGHT_ARROW)) ship.setRotation(0.1)
  if (keyIsDown(LEFT_ARROW)) ship.setRotation(-0.1)
  if (keyIsDown(UP_ARROW)) ship.boosting(true)

  asteroids.forEach(asteroid => {
    asteroid.render()
    asteroid.update()
    asteroid.edges()
  })

  torpedos.forEach(torpedo => {
    torpedo.render()
    torpedo.update()
    // torpedo.edges()

    asteroids.forEach(asteroid => {
      asteroid.render()
      asteroid.update()
      asteroid.edges()

      // TODO
      // if (torpedo.hits(asteroid)) asteroid.breakup()
    })
  })

  ship.update()
  ship.render()
  ship.turn()
  ship.edges()
}

function keyReleased() {
  ship.setRotation(0)
  ship.boosting(false)
}

function keyTyped() {
  if (key == (" ")) torpedos.push(new Torpedo(...ship.getData()))
}