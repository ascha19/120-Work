//Create array
let holey = [];

let holes;

function setup(){

//Create canvas
  createCanvas(windowWidth, 800);

//Execute WriggleHoles
  //holes = new WriggleHoles(size, 'yellow');

  for (let i = 0; i < 75; i++) {

  holey.push(new WriggleHoles(size, 'yellow'));

}

}

function draw() {

//Background color
  background('rgb(255, 193, 6)');

//Allowing holey.picture and holey.move to be called
for (let i = 0; i < holey.length; i++) {

  holey[i].picture();
  holey[i].move();

}

}

//The class
class WriggleHoles {

//Constructor method
  constructor() {

//Color, size, movement
  this.color = color;
  this.posX = random(width);
  this.posY = random(height);
  this.diameter = random(5, 40);
  this.movement = random(1, 5);

  }

//Picture method to draw the thing
  picture() {

//Give it color and draw it
  noStroke();
  fill(this.color);
  ellipse(this.posX, this.posY, this.diameter);

  }

//Make it move
  move() {

//Movement
  this.posX += this.movement;
  this.posY += this.movement;

  }

}
