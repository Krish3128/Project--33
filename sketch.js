const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var engine, world;
var snow=[];
function preload(){
bgImg=loadImage("snow3.jpg");
}

function setup() {
  var canvas = createCanvas(1800,1400);
  engine = Engine.create();
  world = engine.world;
 

 boy=createSprite(200,500,20,20);
 boy.shapeColor="red";

  //snow = new Snow();

}
 
function draw() {
  
  background(bgImg);

  Engine.update(engine);

  //background("black");  

  

  if( frameCount%5===0)
  { 
    snow.push(new Snow(random(20,900),10,10));
  }
  for (var i=0;i<snow.length;i++){
     snow[i].display(); 
  }


  
  
  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+5;
  }
  
  
  
  
  drawSprites();

}