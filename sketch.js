
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1 , bob2 , bob3 ,bob4 , bob5 ;
var ground ; 
var rod1 ; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(300,300);
	bob2= new Bob(400,300);
	bob3= new Bob(500,300);
	bob4= new Bob(600,300);
	bob5= new Bob(700,300);

  ground= Bodies.rectangle(400,490,800,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
  
  drawSprites();
  rect(ground.position.x,ground.position.y,800,30)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}

