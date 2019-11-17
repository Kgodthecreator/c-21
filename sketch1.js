var movingrect, fixedrect;



function setup() {
  createCanvas(800,400);
movingrect=createSprite(200,100, 20,20);
movingrect.shapeColor="black";
fixedrect=createSprite(200,400, 20, 20);
fixedrect.shapeColor="red";
fixedrect.velocityY=-3;
movingrect.velocityY=3;

}

function draw() {
  background("purple");  
 
 bounceOff(movingrect,fixedrect);
 
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2){
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }

}