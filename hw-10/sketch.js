//Note: Comments are written above action they're written about
function setup() {
  //Created 600x600px canvas because is usually the size I use to work with in art programs
  createCanvas( 600, 600 );
  //Light blue background just because I think it's pretty and for whatever reason, it's the color I envisioned
  background( 'rgb(204, 228, 254)' );
  //Dark gray body so lines are still visible for pieces that have a stroke; Venom's body is an inky black
  stroke(45);
  fill(65);
  //Background legs made, shorter than foreground legs and with a stroke to better indicate they're on the other side of Venom's body
  rect(200, 270, 10, 283, 0, 0, 75, 3);
  //Legs' curves reversed to give a little dimension; very little difference but I wanted the change to be there anyway
  rect(350, 275, 10, 275, 0, 0, 3, 75);
  //Stroke removed to foreground pieces of body to give dimension
  fill(75);
  noStroke()
  ellipse(300, 200, 300, 200);
  //Foreground legs, longer and with no stroke to blend with body
  rect(250, 275, 10, 300, 0, 0, 55, 3);
  //Back leg made to be longer than front leg to blend with curve of body
  rect(400, 260, 10, 315, 0, 0, 3, 55);
  //Left eye added; stroke returns to give dark outline of eye
  //StrokeWeight made thicker to create more dimensional look
  stroke(55);
  strokeWeight(4);
  fill(255);
  rect(155, 165, 50, 35, 15, 95, 0, 100);
  //Right eye added; diagonal corners adjusted the same amount, two rounded and two unaffected to create somewhat of a cat's eye shape
  rect(250, 165, 75, 35, 95, 0, 95, 0);
  //Tongue added via three triangles with no stroke and pink noFill
  noStroke()
  fill('rgb(255, 166, 176)');
  triangle(200, 235, 215, 243, 150, 265);
  triangle(150, 265, 165, 257, 100, 240);
  triangle(100, 240, 110, 245, 105, 200);
  triangle(105, 210, 125, 210, 105, 200);
  //Mouth added with two arcs and without fill
  noFill()
  stroke(45);
  arc(200, 225, 20, 20, 0, radians(270));
  arc(220, 232, 25, 20, radians(280), radians(215));
}
