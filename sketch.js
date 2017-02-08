function setup() {
  createCanvas(800,600);
  background(220);
}

function draw() {
  stroke(0);
  line(width/2,380,width/2,250);
  line(width/2+12,380,width/2+12,250);
  line(width/2+24,380,width/2+24,250);
  line(width/2-25,190,width/2+12,250);
  line(width/2+60,120,width/2+12,250);
  line(width/2+100,270,width/2+12,250);
  
  noStroke();
  fill(100);
  ellipse(width/2,520,80,80);
  
  fill(0);
  rectMode(CENTER);
  rect(width/2,450,110,140);
  
  fill(100);
  rect(width/2,405,110,6);
  
  fill(0);
  ellipse(width/2+12,250,120,120);
  
  fill(255);
  ellipse(width/2+27,245,35,35);
  
  fill(0);
  ellipse(width/2+27,245,7,7);
  
  fill(150);
  ellipse(width/2+38,220,10,10);
  ellipse(width/2+50,260,5,5);
  ellipse(width/2-5,240,14,14);
  
}