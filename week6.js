/*
    Paste the code for your week 3 exercise below.
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
    
  push();
  noFill();
  stroke(0, 60);
  strokeCap(ROUND);
  strokeWeight(5);
  circle(mouseX-50, mouseY-50, mouseY);
  circle(mouseX+50, mouseY+50, mouseY);
  circle(mouseX/1.25, mouseY*1.25, mouseY);
  circle(mouseX*1.25, mouseY/1.25, mouseY);
  pop();
  
  noStroke();
  circle(mouseX, mouseY, mouseY+40);

  push();
  strokeCap(ROUND);
  stroke('#222222');
  strokeWeight(15);

  point(mouseX-50, mouseY-50);
  point(mouseX+50, mouseY+50);
  point(mouseX/1.25, mouseY*1.25);
  point(mouseX*1.25, mouseY/1.25);
  pop();
}