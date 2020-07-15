const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var boyUmbImg;
var boy,thunder;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var engine, world;
var drops = [];
var maxDrops = 200;

function preload(){
   boyUmbImg = loadImage("boyUmbrella.jpg"); 
   thunderImg1 = loadImage("Thunder_1.jpg");
   thunderImg2 = loadImage("Thunder_2.jpg");
   thunderImg3 = loadImage("Thunder_3.jpg");
   thunderImg4 = loadImage("Thunder_4.jpg");
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;
   boy = new Umbrella(180,400);
   for(var i = 0; i < maxDrops; i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }
   
}

function draw(){
   Engine.update(engine);
   background("black");
   var rand = Math.round(random(1,4));
   if(frameCount % 60 === 0){
      //console.log("if is working");
      thunder = createSprite(100,100,50,50);
      switch(rand){
         case 1 : thunder.addImage(thunderImg1);
         break;
         case 2 : thunder.addImage(thunderImg2);
         break;
         case 3 : thunder.addImage(thunderImg3);
         break;
         case 4 : thunder.addImage(thunderImg4);
         break;
      }
      thunder.scale = random(0.3,0.6);
   }
    boy.display();
    for(var i = 0; i < maxDrops; i++){
     drops[i].display();
     drops[i].update();
   }
}   

