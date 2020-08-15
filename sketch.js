


function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES)
}

function draw() {
  background(0);  

  hr = hour();
  mn = minute();
  sc = second();
  
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,12,0,360)

  console.log(hr)
  console.log(mn)
  //console.log(sc)
  push();
  noFill();
  translate(400,200)
  stroke(255,0,0);
  strokeWeight(7);
  rotate(-90)
  arc(0,0,340,340,0,scAngle);   
  pop();

  push();
  noFill();
  translate(400,200)
  stroke("green");
  strokeWeight(7);
  rotate(-90)
  arc(0,0,325,325,0,mnAngle);   
  pop();

  push();
  noFill();
  translate(400,200)
  stroke("blue");
  strokeWeight(7);
  rotate(-90)
  arc(0,0,310,310,0,hrAngle);   
  pop();


  push();
  translate(400,200)
  rotate(scAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,140,0);

  pop();

  push();
  translate(400,200)
  rotate(mnAngle-90);
  stroke("green");
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  translate(400,200)
  rotate(hrAngle-90);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  drawSprites();
}