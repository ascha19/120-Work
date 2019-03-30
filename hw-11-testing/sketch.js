
let holes = []; // array of Jitter objects

function setup() {
  createCanvas(windowWidth, 625);
  // Create objects
  for (let i = 0; i < 200; i++) {
    holes.push(new WriggleHoles(size, 'yellow'));
  }
}

function draw() {
  background('rgb(255, 193, 6)');
  for (let i = 0; i < holes.length; i++) {
    holes[i].frame();
  }
}

// WriggleHoles class
class WriggleHoles {
  constructor() {
    this.color = color;
    this.posX = random(width);
    this.posY = random(height);
    this.diameter = random(10, 50);
    this.speed = random(1, 5);
  }

  frame() {
    this.move();
    this.picture();
  }

  move() {
    this.posX += random(-this.speed, this.speed);
    this.posY += random(-this.speed, this.speed);
  }

  picture() {
    noStroke();
    fill('yellow');
    ellipse(this.posX, this.posY, this.diameter, this.diameter);
  }
}
