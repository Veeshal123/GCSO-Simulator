var Play = 0;
var Garage = 1;
var gameState = Play;

var Select = 2;
var Cyclap = 3;
var Torus = 4;
var Zenia = 5;
var screen = Select;

var playbg, playbgImg;
var play, playImg;
var garage, garageImg;
var start, startImg;
var cyclap, cyclapSImg, torus, torusSImg, zenia, zeniaSImg;
var cyclap2, cyclapS2Img, torus2, torusS2Img, zenia2, zeniaS2Img;
var select, selectImg;
var road, roadImg;
var wall, wallImg;
var back, backImg;
var carCrash, mouseClick;

function preload()
{
  playbgImg = loadImage("playbg.jpeg");
  playImg = loadImage("play.png");
  garageImg = loadImage("garage.png");
  cyclapSImg = loadImage("Cyclap.png");
  cyclapS2Img = loadImage("CyclapS.png")
  torusSImg = loadImage("Torus.png");
  torusS2Img = loadImage("TorusS.png");
  zeniaSImg = loadImage("Zenia.png");
  zeniaS2Img = loadImage("ZeniaS.png");
  selectImg = loadImage("select.png");
  roadImg = loadImage("road.JPG");
  wallImg = loadImage("wall.png");
  backImg = loadImage("back.png");
  carCrash = loadSound("carCrash.mp3");
}

function setup()
{
  createCanvas(1030,620)
  
  playbg = createSprite(515,310);
  playbg.addImage(playbgImg);
  playbg.scale = 1.4;
  playbg.visible = false;

  play = createSprite(350,470);
  play.addImage(playImg);
  play.scale = 0.2;
  play.visible = false;

  garage = createSprite(515,310);
  garage.addImage(garageImg);
  garage.scale = 0.32;
  garage.visible = false;

  cyclap = createSprite(240,240);
  cyclap.addImage(cyclapSImg);
  cyclap.scale = 0.08;
  cyclap.visible = false;

  torus = createSprite(510,450);
  torus.addImage(torusSImg);
  torus.scale = 0.08;
  torus.visible = false;

  zenia = createSprite(780,240);
  zenia.addImage(zeniaSImg);
  zenia.scale = 0.08;
  zenia.visible = false;

  select = createSprite(510,170);
  select.addImage(selectImg);
  select.scale = 1;
  select.visible = false;

  road = createSprite(515,200);
  road.addImage(roadImg);
  road.scale = 2;
  road.visible = false;

  wall = createSprite(860,390);
  wall.addImage(wallImg);
  wall.scale = 1.6;
  wall.visible = false;

  wall2 = createSprite(900,400,20,500);
  wall2.visible = false;

  wall3 = createSprite(800,400,20,500);
  wall3.visible = false;

  cyclap2 = createSprite(220,500);
  cyclap2.addImage((cyclapS2Img));
  cyclap2.scale = 0.26;
  cyclap2.visible = false;

  torus2 = createSprite(220,500);
  torus2.addImage((torusS2Img));
  torus2.scale = 0.26;
  torus2.visible = false;

  zenia2 = createSprite(220,490);
  zenia2.addImage((zeniaS2Img));
  zenia2.scale = 0.26;
  zenia2.visible = false;

  back = createSprite(60,60);
  back.addImage(backImg);
  back.scale = 0.16;
  back.visible = false;
}

function draw()
{
  drawSprites();

  if(gameState === Play)
  {
    playbg.visible = true;
    play.visible = true;
    if(mousePressedOver(play))
    {
      gameState = Garage;
    }
  }

  if(gameState === Garage)
  {
    garage.visible = true;
    cyclap.visible = true;
    torus.visible = true;
    zenia.visible = true;
    select.visible = true;
    select.scale = 0.1;

    if(screen === Select)
    {
      if(mousePressedOver(cyclap))
      {
        road.visible = true;
        wall.visible = true;
        back.visible = true;
        cyclap2.visible = true;
        screen = Cyclap;
      }
      if(mousePressedOver(torus))
      {
        road.visible = true;
        wall.visible = true;
        torus2.visible = true;
        back.visible = true;
        screen = Torus;
      }
      if(mousePressedOver(zenia))
      {
        road.visible = true;
        wall.visible = true;
        zenia2.visible = true;
        back.visible = true;
        screen = Zenia;
      }
    }
      if(screen === Cyclap)
      {
       if(keyDown(RIGHT_ARROW))
       {
         cyclap2.velocityX = 80;
       }
       if(wall2.isTouching(cyclap2))
        {
          cyclap2.velocityX = 0;
          fill("red");
          stroke("red");
          textSize(100);
          text("NOT SAFE!",200,200);
          fill("yellow");
          textSize(30);
          text("This accident can kill or give major injuries to the passengers!",30,300);
          fill("white");
          stroke("white");
          textSize(40);
          text("Deformation : 306",300,360);
        }
      }
      if(screen === Torus)
      {
       if(keyDown(RIGHT_ARROW))
       {
         torus2.velocityX = 70;
       }
       if(wall2.isTouching(torus2))
       {
         torus2.velocityX = 0;
         fill("red");
         stroke("red");
         textSize(100);
         text("NOT SAFE!",200,200);
         fill("yellow");
         textSize(30);
         text("This accident will definitely harm or can give fractures to the passengers!",10,300);
         fill("white");
         stroke("white");
         textSize(40);
         text("Deformation : 200",300,360);
       }
      }
      if(screen === Zenia)
      {
       if(keyDown(RIGHT_ARROW))
       {
         zenia2.velocityX = 60;
       }
       if(wall2.isTouching(zenia2))
        {
         zenia2.velocityX = 0;
         fill("green");
         stroke("green");
         textSize(100);
         text("SAFE!",310,200);
         fill("yellow");
         textSize(30);
         text("This accident can harm or give small injuries to the passengers!",20,300);
         fill("white");
         stroke("white");
         textSize(40);
         text("Deformation : 128",300,360);
        }
      }
      
      if(wall3.isTouching(cyclap2) || wall3.isTouching(torus2) || wall3.isTouching(zenia2))
      {
        wall3.velocityX = 100;
        carCrash.play();
      }

      if(mousePressedOver(back))
      {
        gameState = Garage;
        screen = Select;
        garage.visible = true;
        cyclap.visible = true;
        torus.visible = true;
        zenia.visible = true;
        select.visible = true;
        select.scale = 0.1;
        road.visible = false;
        wall.visible = false;
        cyclap2.visible = false;
        cyclap2.x = 220;
        cyclap2.velocityX = 0;
        torus2.visible = false;
        torus2.x = 220;
        torus2.velocityX = 0;
        zenia2.visible = false;
        zenia2.x = 220;
        zenia2.velocityX = 0;
        wall3.x = 800;
        wall3.velocityX = 0;
        back.visible = false;
        carCrash.stop();
      }
  }
}