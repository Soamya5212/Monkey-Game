
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 logo1=loadAnimation("logo.png");
  jungle12=loadAnimation("JUNGLE.png");
  
}


 

function setup() {
  createCanvas(600,400);
  
  
  
  
  jungle=createSprite(300,150,10,10);
  jungle.addAnimation("junglee",jungle12)
  jungle.scale=1;
  jungle.velocityX=-4;
  jungle.x=jungle.width/2
  logo=createSprite(100,70,10,10);
  logo.addAnimation("design",logo1);
  logo.scale=0.4;
  jungle.lifetime=-1;
  
  monkey=createSprite(80,340,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2
  Invisible=createSprite(300,400,600,10)
 
 
  
  
   
  

  
}


function draw() {
  fruits();
      obstacles();
 if(keyDown("space")&&monkey.y>100){
   monkey.velocityY=-10;
 }
   monkey.velocityY = monkey .velocityY + 0.8
   if (jungle.x < 200){
    jungle.x = jungle.width/2;
  }
  
 stroke("white");
  textSize=20;
  fill("white");
  text("score="+survivalTime,500,50);
  

  monkey.collide(Invisible);
  obstacle.collide(Invisible);
    
   
  
  
 
  drawSprites();
}

function fruits(){
  if(World.frameCount%80){
  banana=createSprite(300,200,10,10,);
  banana.addImage("bana",bananaImage)
  banana.scale=0.2;
    banana.velocityX=0
}

}

function obstacles(){
if(World.frameCount%80){
 obstacle=createSprite(400,400,10,10);
  obstacle.addImage("obsta",obstaceImage)
  obstacle.scale=0.2;
  obstacles.lifetime=100;  obstacles.velocityX=-4;
}
} 




