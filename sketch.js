// var bg, bgImg
// var bottomGround
// var topGround
// var balloon, balloonAnimation 
// var obsBottom1Image, obsBottom2Image, obsBottom3Image
// var obsTop1Image, obsTop2Image

// function preload () {
// bgImg = loadImage ('assets/bg.png')  
// obsBottom1Image = loadImage ('assets/obsBottom1.png') 
// obsBottom2Image = loadImage ('assets/obsBottom2.png') 
// obsBottom3Image = loadImage ('assets/obsBottom3.png') 
// obsTop1Image = loadImage ('assets/obsTop1.png')
// obsTop2Image= loadImage ('assets/obsTop2.png')
// balloonAnimation = loadAnimation ('assets/balloon1.png','assets/balloon2.png','assets/balloon3.png') 
// Obstacle
// } 

// function setup () {
// createCanvas (700,700)
// balloon = createSprite (80,150,90,70) 
// balloon.addAnimation ('airballoon',balloonAnimation) 
// balloon.scale= 0.4 
// balloon.velocityY = 4 
// } 

// function draw () {
// background (bgImg) 
// if (keyDown('space')) {
//   balloon.velocityY = -4 
// }
// balloon.velocityY = balloon.velocityY+ 0.5 
// TopObs () 
// BottomObs ()
// drawSprites ()  
// } 

// function TopObs () { 
//   if (frameCount%50==0) {
//     var Top = createSprite (700,90,60,60)  
//     Top.velocityX = - 7  
//     var Image = Math.round(random (1,2)) 
//   if (Image == 1) {Top.addImage(obsTop1Image)}
//   if (Image == 2) {Top.addImage(obsTop2Image)} 
//   Top.scale = 0.3
//   }
 



// }


// function BottomObs () {
// if (frameCount%60==0) {
//   var Bottom = createSprite(700,625,60,60) 
//   Bottom.velocityX = -9 
//   var Image2 = Math.round(random(1,3)) 
//  if (Image2 == 1) {Bottom.addImage(obsBottom1Image)} 
//  if (Image2 == 2) {Bottom.addImage(obsBottom2Image)} 
//  if (Image2 == 3) {Bottom.addImage(obsBottom3Image)}  
//  Bottom.scale = 0.2
// }
// }

var bg, bgImg
var bottomGround
var topGround
var balloon, balloonAnimation 
var obsBottom1Image, obsBottom2Image, obsBottom3Image
var obsTop1Image, obsTop2Image 
var gameState = "Play" 
var topObsGroup, bottomObsGroup 
var gameOverSpriteImage
//var gameOverSprite 
var restartImage 
//var restartSprite

function preload () {
bgImg = loadImage ('assets/bg.png')  
obsBottom1Image = loadImage ('assets/obsBottom1.png') 
obsBottom2Image = loadImage ('assets/obsBottom2.png') 
obsBottom3Image = loadImage ('assets/obsBottom3.png') 
obsTop1Image = loadImage ('assets/obsTop1.png')
obsTop2Image= loadImage ('assets/obsTop2.png')
balloonAnimation = loadAnimation ('assets/balloon1.png','assets/balloon2.png','assets/balloon3.png')  
gameOverSpriteImage = loadImage ('assets/gameOver.png') 
restartImage = loadImage ('assets/restart.png')
} 

function setup () {
createCanvas (700,700)
balloon = createSprite (80,150,90,70) 
balloon.debug = true
balloon.addAnimation ('airballoon',balloonAnimation) 
balloon.scale= 0.4 
balloon.velocityY = 4 
var gameOverSprite = createSprite (350,350,65,98) 
      gameOverSprite.addImage (gameOverSpriteImage) 
      var restartSprite = createSprite (380,400,65,98)
      restartSprite.addImage (restartImage)

topObsGroup = new Group () 
bottomObsGroup = new Group ()
} 

function draw () {
    background (bgImg) 
    if (gameState == 'Play') 
    {
      if (keyDown('space')) 
      {
        balloon.velocityY = -4 
      } 
      balloon.velocityY = balloon.velocityY+ 0.5
      TopObs () 
      BottomObs ()
      if (balloon.isTouching (topObsGroup)) {
        gameState = 'End' 
    
      
      }
      if (balloon.isTouching (bottomObsGroup)) {
        gameState = 'End' 
      }  
      if (balloon.y> 700) {
        gameState = 'End'
      }
    } 
    else if (gameState == "End") 
    { 
      console.log ("Error")
      balloon.velocityX = 0 
      balloon.x = 80 
      balloon.y = 300
      topObsGroup.setVelocityXEach (0)  
      bottomObsGroup.setVelocityXEach (0)  
      
      topObsGroup.setLifetimeEach (-5)
      bottomObsGroup.setLifetimeEach (-5) 
      if (mousePressedOver (restartSprite)) {
        gameState = 'Play'  
        topObsGroup.destroyEach () 
        bottomObsGroup.destroyEach () 
        gameOverSprite.visible = false 
        restartSprite.visible = false
      }
      
    }
   
     
   
    drawSprites ()  
} 

function TopObs () { 

  if (frameCount%50==0) { 
   
            var Top = createSprite (700,90,60,60)  
            Top.velocityX = - 7   
            Top.lifetime = 100
            Top.debug = true
            var Image = Math.round(random (1,2)) 
          if (Image == 1) {
            Top.addImage(obsTop1Image)
          }

          if (Image == 2) {
            Top.addImage(obsTop2Image)
          } 

          Top.scale = 0.3 
          topObsGroup.add (Top) 
  }
 }


function BottomObs () {
    if (frameCount%60==0) { 
          var Bottom = createSprite(700,625,60,60)  
          Bottom.debug = true
          Bottom.velocityX = -7
          Bottom.lifetime = 100
          var Image2 = Math.round(random(1,3)) 
        if (Image2 == 1) {
          Bottom.addImage(obsBottom1Image)
        } 
        if (Image2 == 2) {
          Bottom.addImage(obsBottom2Image)
        } 
        if (Image2 == 3) {
          Bottom.addImage(obsBottom3Image)
        }  
        Bottom.scale = 0.2 
        bottomObsGroup.add (Bottom)
    }
}


























// function preload(){
// bgImg = loadImage("assets/bg.png")

// balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
// }

// function setup(){

// //background image
// bg = createSprite(165,485,1,1);
// bg.addImage(bgImg);
// bg.scale = 1.3

// //creating top and bottom grounds
// bottomGround = createSprite(200,390,800,20);
// bottomGround.visible = false;

// topGround = createSprite(200,10,800,20);
// topGround.visible = false;
      
// //creating balloon     
// balloon = createSprite(100,200,20,50);
// balloon.addAnimation("balloon",balloonImg);
// balloon.scale = 0.2;



// }

// function draw() {
  
//   background("black");
        
//           //making the hot air balloon jump
//           if(keyDown("space")) {
//             balloon.velocityY = -6 ;
            
//           }

//           //adding gravity
//            balloon.velocityY = balloon.velocityY + 2;
   
//         drawSprites();
        
// } 

// function preload(){
//   bgImg = loadImage("assets/bg.png")
  
//   balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
//   }
  
//   function setup(){
  
//   //background image
//   bg = createSprite(165,485,1,1);
//   bg.addImage(bgImg);
//   bg.scale = 1.3
  
//   //creating top and bottom grounds
//   bottomGround = createSprite(200,390,800,20);
//   bottomGround.visible = false;
  
//   topGround = createSprite(200,10,800,20);
//   topGround.visible = false;
        
//   //creating balloon     
//   balloon = createSprite(100,200,20,50);
//   balloon.addAnimation("balloon",balloonImg);
//   balloon.scale = 0.2;
  
  
  
//   }
  
//   function draw() {
    
//     background("black");
          
//             //making the hot air balloon jump
//             if(keyDown("space")) {
//               balloon.velocityY = -6 ;
              
//             }
  
//             //adding gravity
//              balloon.velocityY = balloon.velocityY + 2;
     
//           drawSprites();
          
//   }