var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "white";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 500, 80, 30);
  movingRect.shapeColor = "white";
  //movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0);  
  drawSprites();

  var edges = createEdgeSprites();
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
  
 bounceOff(movingRect, fixedRect);
}