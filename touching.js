var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "white";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "white";
  //movingRect.debug = true;
}

function draw() {
  background(0);  
  drawSprites();
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if (isTouching(movingRect, fixedRect)) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
 } else {
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
 }

}

function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width / 2 + object1.width / 2 
        && object2.x - object1.x < object1.width / 2 + object2.width / 2 
        && object1.y - object2.y < object2.height / 2 + object1.height / 2 
        && object2.y - object1.y < object1.height / 2 + object2.height / 2) {
        return true;
      } else {
        return false;
      }
}
