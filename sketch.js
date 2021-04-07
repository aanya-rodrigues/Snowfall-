const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow=[];
var maxsnow=100;
var snowImg;
var backgroundImg;

function preload(){
  backgroundImg=loadImage("snow3.jpg");
  snowImg=loadImage("snow4.webp")
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,600);

  if(frameCount % 150 === 0){

  
}

}

function draw() {
  Engine.update(engine);

  background(backgroundImg); 
  for(var i=0; i<maxsnow; i++){
    snow.push(new createSnow(random(0,400), random(0,400)));
}

  for(var i = 0; i<maxsnow; i++){
    snow[i].showSnow();
    snow[i].updateY()
    
}

  drawSprites();
}