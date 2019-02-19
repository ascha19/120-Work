//All the variables
let pt1_x, pt1_y;
let pt2_x, pt2_y;
let pt3_x;
let pt3_y;

//Color variables
var r = 10;
var g = 0;
var b = 0;

//Roundboi variables
let roundX;
let roundY;
let roundThicc = 100;

//Roundboi movement variables
let roundMaxMove = 10;

//Wall variables


//Weird bubble variables
let firstSize = 5
let firstPlace = 10

function setup() {

//Creating canvas and gradient placement
    createCanvas( windowWidth, windowHeight );
    background(0);

    pt1_x = 0 - width;
    pt1_y = height;

    pt2_x = width;
    pt2_y = 0 - height;

    pt3_x = width;
    pt3_y = height;

    frameRate(10);

//Roundboi setup
    roundX = width * 0.5;
    roundY = height / 2;
}

function draw() {

//Making of background gradient
    pt1_x += random(0, 50);
    pt2_y += random(0, 50);

    r += random(0, 10);
    b += random(0, 10);

//Protection for going over 255
    r = r % 255;
    b = b % 255;

//Background colors
    noStroke();
    fill(r, g, b + 40);
    triangle(pt1_x, pt1_y, pt2_x, pt2_y, pt3_x, pt3_y);

//Roundboi
    noStroke();
    b = map( windowWidth, 0, windowHeight, 255, 0);
    ellipse(roundX, roundY, roundThicc, roundThicc);

//Roundboi jitters!
    roundX += random(-roundMaxMove, roundMaxMove);
    roundY += random(-roundMaxMove, roundMaxMove);

//Weird bubble time
    fill('pink');
    ellipse(firstSize, firstSize, firstPlace, firstPlace);
    ellipse(pow(firstSize, 2), pow(firstSize, 2), firstPlace * 2, firstPlace * 2);
    ellipse(firstPlace * 5, firstPlace * 5, sq(firstSize), sq(firstSize));
}
