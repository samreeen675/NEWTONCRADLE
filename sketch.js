
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const cons = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 =new Bob(300,350,30);
	bob2 =new Bob(360,350,30);
	bob3 =new Bob(420,350,30);
	bob4 =new Bob(480,350,30);
	bob5 =new Bob(540,350,30);
	ground1 = new Ground(420,100,400,10);
	rope1 = new Rope(bob3.body,ground1.body ,0,0)
	rope2 = new Rope(bob1.body,ground1.body, -120,0)
	rope5 = new Rope(bob5.body,ground1.body, 120,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display()
  rope2.display()
  rope5.display()
  ground1.display();
}



