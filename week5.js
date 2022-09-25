/*
    Paste the code for your week 5 exercise below.
*/
let circleX = 0;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 3;

function setup() {
  if(windowWidth > windowHeight){
    createCanvas (windowHeight, windowHeight)
  }else{
    createCanvas(windowWidth, windowWidth)
  }  
}

function draw() {
  // no background so the animation keeps all frames
  frameRate(24);
  textFont('Helvetica');
  
  square(circleX, circleY, 40);
  text(' error', circleX, circleY, 40)

  circleX = circleX + random(-2, 2);
  circleY = circleY + random(-2, 2);
  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  
  if(circleX < 0) {
    xSpeed = xSpeed * -1;
  }

  if(circleX > width) {
    xSpeed = xSpeed * -1;
  }

  if(circleY < 0) {
    ySpeed = ySpeed * -1;
  }

  if(circleY > width) {
    ySpeed = ySpeed * -1;
  }
}