var arrowimg, arrowimg2, targetImg, bg_img, stone_arrowimg;
var target;
var stone_arrow2img;
var stoneArrow_group1, stoneArrow_group2;


function preload(){
  //loading the images
 arrowimg = loadImage("arrow1.png");
 arrowimg2 = loadImage("arrow2.png");
 targetImg = loadImage("target1.png");
 bg_img = loadImage("bg.jpg");
 stone_arrowimg = loadImage("stone_arrow.png");
 stone_arrow2img = loadImage("stone_arrow2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  arrow1 = createSprite(width/2-400, 500);
  arrow1.addImage("arrow", arrowimg);
  arrow1.scale = 0.5;
  arrow1.velocityX = 10;

  if (arrow1.x>900) {
    arrow1.velocityX = 0;
  }

  arrow2 = createSprite(width/2-400, 50);
  arrow2.addImage("arrow2", arrowimg2);
  arrow2.scale = 0.5;

  target1 = createSprite(width/2-400, 300);
  target1.addImage("target", targetImg);
  target1.scale = 0.4;

  stoneArrow_group1 = new Group();
  stoneArrow_group2 = new Group();

} 

function draw() {
  background(bg_img);
  //image(bg_img,0,0,490,690);

//shootArrow1();
//shootArrow2();
 
        drawSprites();
    
 
 
}

function shootArrow1(){

stone_arrow = createSprite(width/2-400, 490);
stone_arrow.addImage("stone_arrow", stone_arrowimg);
stone_arrow.scale = 0.3;
stone_arrow.velocityY = -50;

stoneArrow_group1.add(stone_arrow);
}

function shootArrow2(){

  stone_arrow2 = createSprite(width/2-400, 100);
  stone_arrow2.addImage("stone_arrow2", stone_arrow2img);
  stone_arrow2.scale = 0.3;
  stone_arrow2.velocityY = 50;

  stoneArrow_group2.add(stone_arrow2);
  }
  
