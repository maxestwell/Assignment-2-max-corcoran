/*
    Paste the code for your week 4 exercise below.
*/
function setup() {
  if(windowWidth > windowHeight){
    createCanvas (windowHeight, windowHeight)
  }else{
    createCanvas(windowWidth, windowWidth)
  }  
}

function draw() {
  background('#B1CCC1');
  strokeCap(ROUND);
  stroke('#222222');

  push();
  translate(width/2, height/2);

  rectMode(CORNER);
  fill('#222222');
  strokeWeight(4);
  rect(-150, -150, 300, 354, 15, 0, 15, 0);
  
  rectMode(CENTER);
  fill('#CCCCCC');
  strokeWeight(4);
  rect(0, 0, 300, 300, 15, 0, 15, 0);
  
  drawLogo (0, 0);
  pop();
}

function drawLogo(x, y) {
  strokeWeight(6);
  line(x-100,y-100, x-50,y-100);
  line(x-50,y-100, x-50,y+100);
  line(x-100, y, x, y-50);
  line(x, y-50, x, y+100);
  line(x, y+100, x+100, y);
  line(x+50, y, x+100, y+50);
  
  textAlign(CENTER);
  textStyle(BOLD);
  fill('#CCCCCC');
  textSize(19);
  noStroke();
  text('MAXWELL CORCORAN', x, y+185);
}
