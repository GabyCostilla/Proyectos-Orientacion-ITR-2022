let screen = 0;
let y=-20;
let x=200;
let speed = 20;
let score= 10;
function setup() {
  createCanvas(600, 400);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(126,69,214)
		fill(255)
		textAlign(CENTER);
		text('beinvenido a agarrar la bolita', width / 2, height / 2)
		text('click para ganar', width / 2, height / 2 + 20);
		reset();
}

function gameOn(){
	background(12,250,239)
  text("puntuacion = " + score, 50,20)
  ellipse(x,y,20,20)
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		background(255,97,0)
		textAlign(CENTER);
		text('perdiste xd', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click pa juga de nuevo by google y gabnzana', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
