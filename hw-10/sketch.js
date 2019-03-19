//I felt like making a dumb joke and wanted to see if I could make images for it. If anyone gets it, bless.

//Array and functions time
let dumbArray = ["Bone", "Apple", "Teeth"];

let background_color = ('rgb(201, 219, 227)');

function bone(); {

}

//Basic setup stuff; canvas, framerate, background color, etc
function setup(); {
  createCanvas(800, 400);
  frameRate(4);

  let idx = 0;
}

//Basic setup stuff; background, text size, etc
function draw(); {
  background(background_color);
  textSize(27);

  //Writing the text
  text("When the meal's real good:" + dumbArray[idx], 200, 200);

  idx = (idx + 1) % dumbArray.length;
}
