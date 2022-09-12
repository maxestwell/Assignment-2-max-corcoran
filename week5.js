/*
    Paste the code for your week 5 exercise below.
*/
function setup() {
  if(windowWidth > windowHeight){
    createCanvas (windowHeight, windowHeight)
  }else{
    createCanvas(windowWidth, windowWidth)
  }  
}

function draw() {
  translate(width/2, height/2);
  //scale(1, -1);
  background('#B1CCC1');
}