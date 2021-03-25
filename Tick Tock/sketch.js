var h, m, s;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  h = hour();
  m = minute();
  s = second();
  
   
  stroke(255)
  strokeWeight(1)
  fill(255)
  textSize(24)
  textAlign(CENTER, CENTER)
  text(`${h} : ${m} : ${s}`,200, height - 20)
  
  h = map(h, 0, 24, 0, 360)
  m = map(m, 0, 60, 0, 360)
  s = map(s, 0, 60, 0, 360)
  
  angleMode(DEGREES)
  
  
  push()
  stroke(255, 0 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(h)
  line(0, 0, 0, -50);
  pop()
  
  push()
  stroke(0, 255 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(m)
  line(0, 0, 0, -75);
  pop()
  
  push()
  stroke(0, 0 , 255);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(s)
  line(0, 0, 0, -100);
  pop()
  
  noFill()
  strokeWeight(7)
  stroke(255, 0, 0)
  arc(width/2, height/2, 275, 275, -90, h - 90)
  stroke(0, 255, 0)
  arc(width/2, height/2, 300, 300, -90, m - 90)
  stroke( 0, 0, 255)
  arc(width/2, height/2, 325, 325, -90, s - 90)
 
}var h, m, s;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  h = hour();
  m = minute();
  s = second();
  
   
  stroke(255)
  strokeWeight(1)
  fill(255)
  textSize(24)
  textAlign(CENTER, CENTER)
  text(`${h} : ${m} : ${s}`,200, height - 20)
  
  h = map(h, 0, 24, 0, 360)
  m = map(m, 0, 60, 0, 360)
  s = map(s, 0, 60, 0, 360)
  
  angleMode(DEGREES)
  
  
  push()
  stroke(255, 0 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(h)
  line(0, 0, 0, -50);
  pop()
  
  push()
  stroke(0, 255 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(m)
  line(0, 0, 0, -75);
  pop()
  
  push()
  stroke(0, 0 , 255);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(s)
  line(0, 0, 0, -100);
  pop()
  
  noFill()
  strokeWeight(7)
  stroke(255, 0, 0)
  arc(width/2, height/2, 275, 275, -90, h - 90)
  stroke(0, 255, 0)
  arc(width/2, height/2, 300, 300, -90, m - 90)
  stroke( 0, 0, 255)
  arc(width/2, height/2, 325, 325, -90, s - 90)
 
}