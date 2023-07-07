

let speedX = 1.2;
let speedY = 2.5;
let scoreP1 = 0;
let scoreP2 = 0;
let eX = 300;
let eY = 300;
let x = 300;
let x2 = 300;
let dead = false;

function setup() {
createCanvas(600, 600);
}

function draw() {
  background(0);fill(255,0,0)
  rect(x-40, 100, 80, 20);
  rect(x2-40, 500, 80, 20);
  
  
  
  ellipse(eX,eY, 25,25);
  fill(255)
  textSize(50)
  text(scoreP1,290,50);
  text(scoreP2,290,580);
  
  if( eX >= 600 || eX <= 0 ){
  speedX = - speedX;
    
  }
  
  eX = eX + speedX;
  eY = eY + speedY;
  
  if(eY >= 100 && eY <= 120 && eX >= x-520 && eX <= x+40){
  speedY = - speedY;
  scoreP1++
  }
 
  if(eY >= 500  && eY <= 520 && eX >= x2-40 && eX <= x2+40){
  speedY = - speedY;
  scoreP2++
}
  
  if (keyIsDown(68)) {
    x += 4;
  }

  if (keyIsDown(65)) {
    x -= 4;
  }
  
  if (keyIsDown(39)) {
    x2 += 4;
  }

  if (keyIsDown(37)) {
    x2 -= 4;
  }
  
  
  
  if(eY >= 580 || eY <= 20){
  speedY = 0;
  speedX = 0;
  fill(255,0,0);
  textAlign(CENTER);
  textSize(60);
  text('GAME OVER',300,250);
  dead = true;
  if(dead == true){
    if (mouseIsPressed === true){
      fill(255)
      speedY = 1.5;
      speedX = 2.5;
      eX = 300;
      eY = 300;
      x = 300;
      x2 = 300;
    }
  }
        

  }
}
