
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var ground, roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(300,350,30);
	bob2=new Bob(350,350,30);
	bob3=new Bob(400,350,30);
	bob4=new Bob(450,350,30);
	bob5=new Bob(500,350,30);
	ground = new Roof(400,200,300,20);
	sling1= new Rope(bob1.body,ground.body,-66*2,0);
	sling2= new Rope(bob2.body,ground.body,-33*2,0);
	sling3= new Rope(bob3.body,ground.body,-0*2,0);
	sling4= new Rope(bob4.body,ground.body,33*2,0);
	sling5= new Rope(bob5.body,ground.body,66*2,0);



	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
	sling1.display();
  	sling2.display();
  	sling3.display();
  	sling4.display();
  	sling5.display();
	  bob1.display();
	  bob2.display();
	  bob3.display();
	  bob4.display();
	  bob5.display();
	  
}

function keyPressed(){
	if(keyCode=== 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-125,y:-128});
	}
}

