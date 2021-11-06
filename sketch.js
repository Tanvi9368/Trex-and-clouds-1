
var trex ,trex_running;
var edges
var ground ,groundImage
var invisibleGround
var cloudImage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadAnimation("ground2.png")
cloudImage=loadAnimation("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(100,180,10,20)
 trex.addAnimation("trex",trex_running)
 trex.scale=0.5
 ground=createSprite(300,180,600,20)
 ground.addAnimation("ground",groundImage)
 ground.velocityX=-2
 ground.x=ground.width/2
 invisibleGround=createSprite(300,190,600,20)
 invisibleGround.visible=false
 edges=createEdgeSprites ()
}

function draw(){
  background("white")
var number
number=Math.round(random(10,90))
console.log(number)
  if (keyDown("space")&&trex.y>=100) {

trex.velocityY=-13
  }
 // console.log(trex.y)
  trex.velocityY=trex.velocityY+0.8
  if (ground.x<0) {
ground.x=ground.width/2    
  }
  trex.collide (invisibleGround)
spawnClouds()
  drawSprites()
}
function spawnClouds() {
  if (frameCount % 60===0) {
    var cloud = createSprite(550,36,40,10)
    cloud.velocityX=-4
    cloud.addAnimation("cloud",cloudImage)
    cloud.y=Math.round(random(10,100))
    cloud.scale=0.8
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
  }

}