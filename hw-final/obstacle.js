function Obstacle() {
//Positioning the obstacles
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.wi = 85;
  this.speed = 3;
  this.boop = false;

//If the nose is within the obstacles' range, it hits.
  this.hits = function(nose) {
    if (nose.y < this.top || nose.y > height - this.bottom) {
      if (nose.x > this.x && nose.x < this.x + this.wi) {
        this.boop = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

//Drawing the obstacles
  this.show = function() {
    stroke('gray');
    strokeWeight(3);
    fill('rgb(185, 185, 185)');
    if (this.boop) {
      fill('rgb(255, 248, 74)');
    }
    rect(this.x, 0, this.wi, this.top);
    rect(this.x, height-this.bottom, this.wi, this.bottom);
  }

//Speed of obstacle movement
  this.update = function() {
    this.x -= this.speed;
  }
}
