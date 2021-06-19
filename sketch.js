
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

  
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
 FoodGroup= new Group()
  obstacleGroup= new Group()
}

function setup() {
  createCanvas(400, 400);
   score=0
  survivalTime=0
  
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1

  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  console.log(ground.x)
ground.x=ground.width/2
  
}


function draw() {
 background("green")
  
  
  if(ground.x<20){
    
    ground.x=ground.width/2
}
  
  if(keyDown("space")&& monkey.y >= 310) {
    
    monkey.velocityY=-13
  
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground) 
 
  if(World.frameCount%150===0){
    fruits()
 }
  
  if(World.frameCount%120===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
 
   
   
   

 drawSprites() 
  
}

  

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(400,329,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.1
  obstacleGroup.add(obstacle)
}

