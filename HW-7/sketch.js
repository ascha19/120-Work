

let ball = {};
ball.width = 50;
ball.x = 15;
ball.y = 15;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(247);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_y;
    ball.y += ball.delta_y * ball.scale_x;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = 1 * -ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = 1 * -ball.delta_y;
    }

    fill(0);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseY, 0, width, 0, 10);
    ball.scale_y = map(mouseX, 0, height, 0, 10);
}
