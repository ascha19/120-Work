// I'm hoping to make something annoying but fun, so I want to make a stick figure that follows the cursor, while a bigger stick figure dances in the background. Let's see how this goes.

// Change of plans; I'm going to make really weird space.

let blue_val = 0;

function setup() {
  //Creating the canvas with createCanvas, windowWidth, and WindowHeight. Includes background color.
  createCanvas( windowWidth, windowHeight);
  background( 28, 30, blue_val );

  //Frame rate change so stuff isn't flying all over the place
  frameRate( 10 );
}

//Tried to make background change colors but it doesn't work whether I have the background color already mentioned above or not


function draw() {
  // Background color change. Gets too bright for my liking but still cool
  //Backround frame set
  background( 0, 0, blue_val );
  //Updating blue_val by +1
  blue_val = blue_val + 1;
  //Limiting blue_val too 225
  blue_val = blue_val % 255

  //Stars because space.
  stroke('white');
  strokeWeight(5);
  point(100, 100);
  point(300, 100);
  point(500, 100);
  point(700, 100);
  point(900, 100);
  point(1100, 100);

  //Smaller stars; stroke to 2
  strokeWeight(2);
  point(90, 90);
  point(110, 90);
  point(290, 90);
  point(310, 90);
  point(490, 90);
  point(510, 90);
  point(690, 90);
  point(710, 90);
  point(890, 90);
  point(910, 90);
  point(1090, 90);
  point(1110, 90);

  //Translate by (150, 150) to move stars around; big Stars
  strokeWeight(5);
  translate(150, 150);
  point(-100, 100);
  point(100, 100);
  point(300, 100);
  point(500, 100);
  point(700, 100);
  point(900, 100);
  point(1100, 100);

  //Small stars; 2
  strokeWeight(2);
  point(-110, 90);
  point(-90, 90);
  point(90, 90);
  point(110, 90);
  point(290, 90);
  point(310, 90);
  point(490, 90);
  point(510, 90);
  point(690, 90);
  point(710, 90);
  point(890, 90);
  point(910, 90);

  //Translate again to move stars again;
  strokeWeight(5);
  translate(150, 150);
  point(-300, 100);
  point(-100, 100);
  point(100, 100);
  point(300, 100);
  point(500, 100);
  point(700, 100);
  point(900, 100);

  //Smaller stars; 2
  strokeWeight(2);
  point(-290, 90)
  point(-310, 90);
  point(-90, 90);
  point(-110, 90);
  point(90, 90);
  point(110, 90);
  point(290, 90);
  point(310, 90);
  point(490, 90);
  point(510, 90);
  point(690, 90);
  point(710, 90);

  //Translate once more; 5
  strokeWeight(5);
  translate(150, 150);
  point(-300, 100);
  point(-100, 100);
  point(100, 100);
  point(300, 100);
  point(500, 100);
  point(700, 100);

  //Smaller stars; 2
  strokeWeight(2);
  point(-290, 90)
  point(-310, 90);
  point(-90, 90);
  point(-110, 90);
  point(90, 90);
  point(110, 90);
  point(290, 90);
  point(310, 90);
  point(490, 90);
  point(510, 90);
  point(690, 90);
  point(710, 90);

  //Drawing planet cursor
  translate(-450, -450);
  noCursor();
  strokeWeight(1);

  //Making Starboi follow the mouse
  translate( mouseX, mouseY );

  //Drawing the rings of the planet
  //Different colored shapes and "rings" because space.

  //Blue ring, accent to green-purple; darker fill with lighter stroke
  stroke('rgb(8, 136, 218)');
  fill('rgb(0, 4, 167)');
  ellipse( 0, 0, 35, 160);

  //Green ring, accent to purple; darker fill with lighter stroke
  stroke('rgb(0, 190, 59)');
  fill('rgb(41, 157, 0)');
  ellipse( 0, 0, 30, 155);

  //Purple ring with darker fill and lighter stroke
  stroke( 'rgb(190, 129, 251)' );
  fill( 'rgb(159, 53, 252)' );
  ellipse( 0, 0, 25, 150);

  //Purple ring, accent to green-yellow; darker fill with lighter stroke
  stroke( 'rgb(190, 129, 251)' );
  fill( 'rgb(159, 53, 252)' );
  ellipse( 0, 0, 190, 35);

  //Green ring, accent to yellow; lighter fill with darker stroke
  stroke('rgb(0, 161, 6)');
  fill('rgb(66, 251, 0)');
  ellipse( 0, 0, 185, 30);

  //Yellow ring with lighter fill and darker stroke
  stroke('rgb(255, 236, 108)' );
  fill( 'rgb(247, 217, 12)' );
  ellipse( 0, 0, 180, 25);

  //The planet, adjusting stroke and color to preference; darker fill with lighter stroke
  stroke( 'rgb(85, 12, 219)' );
  fill( 'rgb(37, 0, 115)' );
  ellipse( 0, 0, 75, 75);

  //Stars? Stars!
  stroke('white');

  //Bottom right stars
  point(50, 50);
  point(55, 45);
  point(57, 56);

  //Top left stars
  point(-50, -50);
  point(-55, -45);
  point(-45, -55);
  point(-50, -65);
}
