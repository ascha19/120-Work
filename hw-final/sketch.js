//Variables created to call ball and obstacle sketches
var nose;
var obstacles = [];

//Canvas creation; my go-to is often (windowWidth, 625) or (wndowWidth, 800) and I thought making a bigger canvas for a usually mobile game woud be kind of interesting.
function setup() {
  createCanvas(windowWidth, 625);

//Allowing sketches to be called
  nose = new Nose();
  //for (var i = 0; i < 1; i++) {
  obstacles.push(new Obstacle());
//}
}

//Draw function containing the background color, a sky blue that also matches the color of the shirt I'm wearing.
function draw() {
  background('rgb(148, 225, 245)');
  noStroke();
  fill('rgb(88, 181, 57)');
  rect(0, height/2, windowWidth, height/2);

//Calling obstacles
    for (var i = 0; i < obstacles.length; i++) {
      obstacles[i].update();
      obstacles[i].show();
      //console.log('test');

//Making the nose and pillars interact
      if (obstacles[i].hits(nose)) {
        //console.log('hit');
      }
    }

//Falling motion added to nose
  nose.update();
//Calling nose.js
  nose.show();

//Adding more obstacles per frame
  if (frameCount % 100 == 0) {
    obstacles.push(new Obstacle());
  }
}

//Function to move nose via pressing the '.' key
function keyPressed() {
  if (key == '.') {
    nose.up();
  }
}


//Obstacle class??? Last resort move
//class Obstacle {
//Positioning the obstacles
//constructor(){
  //this.top = random(height/2);
  //this.bottom = random(height/2);
  //this.x = width;
  //this.wi = 45;
  //this.speed = 3;
//}
//Drawing the obstacles
  //show() {
    //noStroke();
    //fill('black');
    //rect(this.x, 0, this.wi, this.top);
    //rect(this.x, height-this.bottom, this.wi, this.bottom);
  //}

//Speed of obstacle movement
  //update() {
    //this.x -= this.speed;
  //}
//}
