var frect, mrect;
var ob1, ob2, ob3, ob4;



function setup() {
  createCanvas(800,400);
  frect = createSprite(650,175,20,40);
  frect.shapeColor = "yellow";
  frect.debug = true;
  mrect = createSprite(480, 300,20,30);
  mrect.shapeColor = "black";
  mrect.debug = true;
  ob1 = createSprite(100,100,50,50);
  ob2 = createSprite(100,200,50,50);
  ob3 = createSprite(100,300,50,50);
  ob4 = createSprite(100,400,50,50);
  ob1.shapeColor = "red";
  ob2.shapeColor = "red";
  ob3.shapeColor = "red";
  ob4.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 
  if(isTouching(ob2, mrect)){
    ob2.shapeColor = "blue";
    mrect.shapeColor = "orange";
  }
  else{
    ob2.shapeColor = "red";
    mrect.shapeColor = "black";

  }
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){
     return true;
    }
    else{
      return false;

    }
} 