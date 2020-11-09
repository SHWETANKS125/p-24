
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,450,50);
	bin1 = new bin(600,478,150,20);
	bin2 = new bin(523,445,20,90);
	bin3 = new bin(673,445,20,90);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 

}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  }


