//Was gonna make him squish when clicked, now it's going to be blinked. Hopefully. I also don't know where to put an array.
//Update: He winks now, and his name is now Denom. Click for it to get worse.

let whatMouthDo = ["blep", "mlem" , "lick" , "slorp" , "*eats u*" , "rawr" , "come to me Eddie" , "*is alien*" , "*winks in symbiote*" , "*is space*"];

let idx = 0;

//Basic setup stuff
function setup() {
  createCanvas( 600, 600 );
  background( 'rgb(204, 228, 254)' );
}

//Adding draw function
function draw() {

//Allowing new functions to work later
  drawDenom();
  tongue();
}

  //Denom function
  function drawDenom() {
    noStroke();
    fill(65);

  //Background legs
    rect(200, 270, 10, 283, 0, 0, 75, 3);
    rect(350, 275, 10, 275, 0, 0, 3, 75);

  //Body
    fill(75);
    noStroke();
    ellipse(300, 200, 300, 200);

  //Foreground legs
    rect(250, 275, 10, 300, 0, 0, 55, 3);
    rect(400, 260, 10, 315, 0, 0, 3, 55);

  //Left eye
    stroke(55);
    strokeWeight(4);
    fill(255);
    rect(155, 165, 50, 35, 15, 95, 0, 100);

  //Right eye
    rect(250, 165, 75, 35, 95, 0, 95, 0);

  //Tongue
    noStroke();
    fill('rgb(255, 166, 176)');
    triangle(200, 235, 215, 243, 150, 265);
    triangle(150, 265, 165, 257, 100, 240);
    triangle(100, 240, 110, 245, 105, 200);
    triangle(105, 210, 125, 210, 105, 200);
    
  //Mouth
    noFill();
    stroke(45);
    arc(200, 225, 20, 20, 0, radians(270));
    arc(220, 232, 25, 20, radians(280), radians(215));
  }

function mousePressed() {

//Boundaries of the array
  idx = (idx + 1 ) % whatMouthDo.length;

  //Sound effect
     noStroke();
     fill(random(225), random(255), random(255));
     textSize(20);
     text(whatMouthDo[idx], random(600), random(600));

//Left eye blink
  stroke(55);
  strokeWeight(4);
  fill(55);
  rect(155, 165, 50, 35, 15, 95, 0, 100);
//Right eye blink
  //rect(250, 165, 75, 35, 95, 0, 95, 0);

//Eye whites attempt
  stroke('white');
  line(155, 175, 203, 200);

//His Name + Catchphrase(TM)
   noStroke();
   fill('black');
   text("Denom: Venom's derpy cousin", 0, 20);
}
