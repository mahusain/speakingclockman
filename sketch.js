

let mic;
let meSpin;
let meSpeak;
let meSpeak2;
let micLevel;
let hatBeat = 10;
let moveVar = 0.77;

function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  mic = new p5.AudioIn();
  mic.start();
  micLevel = mic.getLevel();
 
   
  
  
}

function draw(){
  
  background(200, 200, 100);
  
  console.log("mouse y is " + mouseX);
  console.log("mouse y is " + mouseY);
  console.log("mic level is " + mic.getLevel());
  meSpin = map(mouseX)
  meSpeak = map(mic.getLevel(), 0, 1, 0.1, 100)
  meSpeak2 = map(mic.getLevel(), 0, 1, 0.1, -100)
  
  
 
  
  drawBody();
  drawHead();
  drawHat(hatBeat);
  drawFace();
  drawTopMouth();
  drawBottomMouth();
  drawNose(meSpin);
  movement1();
  
}
function drawHat(){
  fill(10);
  stroke(0);
  strokeWeight(10);
  rect(120, hatBeat + 10 , 150, 100);

  fill(10);
  stroke(0);
  strokeWeight(10);
  rect(70, hatBeat + 60, 250, 50);
  

}

function mousePressed(){
  
   if(mouseX > 200 && mouseX < 400 && mouseY > 100 && mouseY < 300) {
      console.log("mouse beep");
      }
}

  

function drawBody(){
  
  fill(200);
  stroke(0);
  strokeWeight(10);
  rect(170, 290, 50, 50);
  
  fill(10);
  stroke(0);
  strokeWeight(10);
  rect(120, 350, 150, 150);
  
  
}

function drawHead(){
  fill(200);
  stroke(255);
  strokeWeight(10);
  circle(200, 200, 200);
}

function drawFace(){
  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;
  
  fill(50);
  ellipse(160, 170, 10, 50);
  fill(50);
  ellipse(240, 170, 10, 50);
}

function drawTopMouth(){
  fill(10);
  stroke(0);
  strokeWeight(10);
  push();
  translate(0,10)
  rect(155, 230, 90, meSpeak2);
  pop();
}

function drawBottomMouth(){
  fill(10);
  stroke(0);
  strokeWeight(10);
  rect(155, 250, 90, 1 * meSpeak);
}

function drawNose(xPos, yPos, rotation){
  
  line(200, 200, mouseX, 55);
  
}
function movement1() {
  hatBeat = hatBeat + moveVar;
  if ((frameCount % 10) == 0) {
    moveVar = moveVar*-1;
  }
  
}