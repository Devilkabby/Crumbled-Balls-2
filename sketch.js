
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,
var dustbin,ball;
 var binImg,bin;
 
 function preload(){
	 binImg = loadImage("Images/bin.png");
 }


function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	
	ground = new Ground();
	crumpledpaper = new Paper();

	bin = createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binpart1 = new DustBin(902,505,10,120);
	binpart2 = new DustBin(962,565,130,10);
	binpart3 = new DustBin(1024,505,10,120);
	
}


function draw() {
  background(0)
  Engine.update(engine);
  
  ground.display();
  crumpledpaper.display();
  binpart1.display();
  binpart2.display();
  binpart3.display();

  drawSprites();

}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position);

}	

}