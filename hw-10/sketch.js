//I felt like making a dumb joke and wanted to see if I could make images for it. If anyone gets it, bless.

//Array and functions time
let dumbArray = ["Bone", "Apple", "Teeth"];

let bgColor = 200;

let idx = 0;

//Basic setup stuff; canvas, framerate, background color, etc
function setup(); {
  createCanvas(800, 400);
  frameRate(5);
}

//Basic setup stuff; background, text size, etc
function draw(); {
  background(bgColor);
  textSize(20);

//Writing the text
  text("When the meal's real good:" + dumbArray[idx], 200, 200);
//Making sure array boundaries are followed
  idx = (idx + 1) % dumbArray.length;

//Allowing new functions to be called
  bone();
  apple();
  teeth();
}

//Drawing the bone
function bone(); {

  stroke(255);
  fill('rgb(254, 255, 213)');
  rect(0, 0, 20, 10);
  circle(0, 0, 2.5);
  circle(0, 10, 2.5);
  circle(20, 0, 2.5);
  circle(20, 10, 2.5);

}

//Drawing the apple
function apple(); {

//Body
  noStroke();
  fill('rgb(175, 0, 5)');
  circle(0, 0, 10);

//Stem
  fill('black');
  line(0, 0, 20, 20);

}

//Drawing the teeth
function teeth(); {

//Mouth
  stroke('black');
  arc(0, 0, 20, 10, 0, PI + QUARTER_PI, CHORD);

//Teeth line/Gap tooth
  strokeWeight(5);
  line(0, 0, 0, 20);

}

//Attempt to make pictures move with mouse
if 
