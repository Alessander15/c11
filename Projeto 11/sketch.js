var ship,shipAnimation;
var sea,seab;
function preload(){
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  seab = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);

sea = createSprite (190,190);
sea.addAnimation("sea",seab);
sea.scale = 0.3;
  
 ship = createSprite(150,200);
 ship.addAnimation ("animation",shipAnimation);
 ship.scale = 0.2;


}

function draw() {
  background("blue");
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);

  sea.addAnimation("sea",seab);
    drawSprites();

 
}
