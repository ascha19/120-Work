//I felt like making a dumb joke and wanted to see if I could make images for it. If anyone gets it, bless.

//Array and functions time
let dumbArray = ["Bone", "Apple", "Teeth"];

let bgColor = 200;

let idx = 0;

let arrayWord = dumbArray[idx];
let boneBoi = 'function bone();'
let appleLady = 'function apple();'
let smileyGap = 'function teeth();'

//Basic setup stuff; canvas, framerate, background color, etc
function setup() {
  createCanvas(800, 400);
  frameRate(1);

}

//Basic setup stuff; background, text size, etc
function draw() {
  background(bgColor);
  textSize(20);
  noStroke();
  fill('black');

//Writing the text
  text("When the meal's real good: " + dumbArray[idx], 200, 200);
//Making sure array boundaries are followed
  idx = (idx+1) % 3;

//Allowing new functions to be called
    bone();
    apple();
    teeth();

}

//Drawing the bone
function bone(){

  if (arrayWord === dumbArray[0]) {

    //stroke(255);
    //strokeWeight(2);
    noStroke();
    fill(254, 255, 213);
    rect(50, 50, 40, 20);

    ellipse(50, 50, 20);
    ellipse(90, 50, 20);
    ellipse(90, 70, 20);
    ellipse(50, 70, 20);
  }
else {}
}


//Drawing the apple
function apple(){

if (arrayWord === dumbArray[1]) {

  //Stem
      stroke(2);
      fill('brown');
      line(100, 100, 100, 70);

  //Body
    noStroke();
    fill(175, 0, 5);
    ellipse(100,100, 40);
   }
else{}

}

//Drawing the teeth
function teeth(){

if (arrayWord === dumbArray[2]) {

  //Mouth
    stroke('black');
    strokeWeight(2);
    fill('white');
    arc(100, 200, 40, 40, 0, PI + QUARTER_PI, CHORD);

  //Teeth line/Gap tooth
    strokeWeight(5);
    line(100, 193, 90, 215);
   }

else{}

}

//function mousePressed(); {

//}
