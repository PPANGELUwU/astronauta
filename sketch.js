var bg;
var mimido;
var astronauta;
var cepillardientes;
var comer;
var ejercicio;
var bañarse;
var moverse;


function preload(){
  bg= loadImage("iss.png");
  mimido= loadAnimation("sleep.png");
  cepillardientes=loadAnimation("brush.png");
  comer=loadAnimation("eat1.png","eat2.png");
  ejercicio=loadAnimation("gym1","gym2");
  bañarse=loadAnimation("bath1.png","bath2.png");
  moverse=loadAnimation("move1.png","move2.png");
}


function setup() {
  createCanvas(1400,800);
  astronauta= createSprite(700, 600, 50, 50);
  astronauta.addImage(mimido);
  astronauta.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill('#81EDA8')
  text("flecha hacia arriba para cepillarce",20,55);
  text("flecha hacia abajo para ejercitarce",20,80);
  text("flecha hacia la izquierda para comer",20,105);
  text("flecha hacia la derecha para bañarse",20,130);
  text("tecla M para moverse",20,155);
  edges=createEdgeSprites();
  astronauta.bounceOff(edges);
  if (keyDown("UP_ARROW")){
    astronauta.addAnimation("cepillar",cepillardientes);
    astronauta.changeAnimation("cepillar");
    astronauta.y=700;
    astronauta.velocityX=0;
    astronauta.velocityY=0;
  }
  if (keyDown("DOWN_ARROW")){
    astronauta.addAnimation("ejercitarce",ejercicio);
    astronauta.changeAnimation("ejercitarce");
    astronauta.y=700;
    astronauta.velocityX=0;
    astronauta.velocityY=0;
  }
  if (keyDown("LEFT_ARROW")){
    astronauta.addAnimation("comer",comer);
    astronauta.changeAnimation("comer");
    astronauta.y=700;
    astronauta.velocityX=0;
    astronauta.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")){
    astronauta.addAnimation("bañarse",bañarse);
    astronauta.changeAnimation("beñarse");
    astronauta.y=700;
    astronauta.velocityX=0;
    astronauta.velocityY=0;
  }
  if (keyDown("M")){
    astronauta.addAnimation("moverse",moverse);
    astronauta.changeAnimation("moverse");
    astronauta.y=700;
    astronauta.velocityX=0;
    astronauta.velocityY=0;
  }
}