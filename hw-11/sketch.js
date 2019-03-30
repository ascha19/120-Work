//This went from being vibrating cheese to planets/stars being like 'Bye!' and zooming off the screen.

//Create array
let planets = [];

//let holes;

function setup(){
//Create canvas
  createCanvas(windowWidth, 625);
//Attempt two
  for (let i = 0; i < 200; i++) {
  planets.push(new PlanetYeet());
}
}

function draw() {
//Background color
  background('rgb(8, 22, 34)');

//Allowing holey.picture and holey.move to be called
for (let i = 0; i < planets.length; i++) {
  planets[i].frame();
}
}

//The class
class PlanetYeet {

//Constructor method
  constructor() {
//Color, size, movement
  //this.color = color;
  this.posX = random(width);
  this.posY = random(height);
  this.diameter = random(10, 50);
  this.speed = random(1, 5);
  }

  frame() {
    this.move();
    this.picture();
  }

//Make it move
  move() {
//Movement
  this.posX += this.speed;
  this.posY += this.speed;
  }

  //Picture method to draw the thing
    picture() {
  //Give it color and draw it
  //Frame rate change so the colors don't change so fast
    frameRate(5);
    noStroke();
    fill(random(255), random(255), random(255));

    //Frame rate change again so circles/stars/planets don't move so slow
    frameRate(200);
    ellipse(this.posX, this.posY, this.diameter, this.diameter);
    }
}
