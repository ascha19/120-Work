//I wanted to make something like one of those flashing arrow construction signs over a disco-feeling background by altering two of the codes provided with this week's reading. Let's see how this goes.
//Warning: Flashing colors in sketch

function setup(){

  //Creating canvas and altering the frame rate so the flashing colors aren't so aggressively flashing
  createCanvas(windowWidth, 300);
  frameRate(5);
}

function draw(){

//Black background to balance out the colors that will be added later
//Removed stroke on circles because I think it looks softer and cooler
  background(0);
  noStroke();

//First for loop in the nested loop
  for (let y = 0; y <= height; y += 8) {
//Nested for loop
    for (let x = 0; x <= width; x += 10) {
//Colors randomized for pizazze. Can't decide between colors for black and white, so I guess we'll see what I decide when I post.
      fill(random(255));
//Drawing the actual circle
      ellipse(x + y, y, 16 - y/10, 16 - y/10);
    }
  }

//Made strokeWeight larger so lines don't look as small
  strokeWeight(7);

  for (let i = 5; i <= windowWidth; i += 20) {
    stroke(255, random(255), 0);
    line(i, 0, 2*i, 150);
    line(2*i, 150, 1.5*i, 300);
  }
}
