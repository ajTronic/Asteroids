let ship;
let asteroids = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship()
  
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid())
  }
}

function draw() {
  background(20);
  ship.update()
  ship.render()
  ship.turn()
  // ship.edges()

  asteroids.forEach(astroid => {
    astroid.render()
  })
}

function keyReleased() {
  ship.setRotation(0)
  ship.boosting(false)
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1)
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1)
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true)
  }
}