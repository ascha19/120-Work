//The global variables
var r = red
var g = green
var b = blue

function setup(){
  //Canvas creation, etc
  createCanvas( windowWidth, windowHeight);
  framerate( 5 );
}

function draw() {
  let r = floor( random( 256) );
  let g = floor( random( 256) );
  let b = floor( random( 256) );
  background( r, g, b );
}
