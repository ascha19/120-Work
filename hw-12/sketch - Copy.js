//Wanted to make something similar to the first example sketch but I wanted to see if I could make the bubbles passed through each other and simply change color, rather than have them bounce off each other.
//This was susprisingly more difficult than anticipated.

let bubble = [];
const bubbleLimit = 45;

function setup() {
//Canvas and stuff
    createCanvas(windowWidth, 625);

//New ball object
    let inX = 75;
    let inY = 75;
    for (let i = 0; i < bubbleLimit; i++) {
      bubble.push(new Bubbles(inX, inY,));
//Move starting position so bubbles don't start overlapped
      inX += 150;
      if(inX > width) {
        inX = 75;
        inY += 150;
      }
    }
}

function draw() {
//Background color
  background( 'rgb(131, 181, 255)' );

  for (let i = 0; i < bubble.length; i++) {
    bubble[i].bubbleCheck(bubble, i);
    bubble[i].edgeCheck();
    bubble[i].move();
    bubble[i].display();
  }
}

//Class time
class Bubbles {
//constructor method; variables and stuff
  constructor(x, y, size) {
    this.color = (255);
    this.size = random(15, 125);
    this.rad = this.size / 2;
    this.posX = x;
    this.posY = y;
    this.deltaX = random(-10, 10);
    this.deltaY = random(-10, 10);
  }

  //frame() {
    //this.display();
    //this.move();
    //this.edgeCheck();
    //this.bubbleCheck(bubble, i);
  //}

//Image method, coloring and drawing the bubbles
  display() {
    push();
    noStroke();
    fill(this.color);
    translate(this.posX, this.posY);
    ellipse(0, 0, this.size);
    pop();
  }

//Move method to make the lads move
  move() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }

//Making sure bubbles don't fly off the page by stopping them at the edge
  edgeCheck(){
    if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
      this.deltaX *= -1;
      this.color = (255);
    }
    if (this.posY + this.rad >= height || this.posY - this.rad <=0) {
      this.deltaY *= -1;
      this.color = (255);
    }
  }

  bubbleCheck(otherBubble, myId) {
    for (let n = 0; n < otherBubble.length; n++) {
      if (n != myId) {
        let d = dist(this.posX, this.posY, otherBubble[n].posX, otherBubble[n].posY);
        let combinedR = this.rad + otherBubble[n].rad;
        if (d <= combinedR) {
          if( this.color == ('rgb(149, 242, 255)')) {
              this.color = ('rgb(255, 208, 240)');
          } else {
              this.color = ('rgb(149, 242, 255)');
          }
        }
      }
    }
  }
}
