var fixedrect, movingrect;
var ob1, ob2, ob3, ob4;


function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400,200, 20,20);
fixedrect.shapeColor="black";
movingrect=createSprite(200,300, 20, 20);
movingrect.shapeColor="red";
ob1=createSprite(100,100,20,20);
ob2=createSprite(200,100,20,20);
ob3=createSprite(300,100,20,20);
ob4=createSprite(400,100,20,20);

ob1.shapeColor="pink";
ob2.shapeColor="orange";
ob3.shapeColor="white";
ob4.shapeColor="green";


}

function draw() {
  background("purple");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(ob1,movingrect)){
     movingrect.shapeColor="blue";
     ob1.shapeColor="yellow";
  } 
 else{
   movingrect.shapeColor="red";
   ob1.shapeColor="pink";
 }


  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
   }
   else{
    return false;
  }
}