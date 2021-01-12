const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1,box2;




function setup() {
  createCanvas(400,400);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,380,400,20)

  box1 = new Box(200,200,50,50);
  box2 = new Box(220,100,50,80);
  box3 = new Box(230,50,50,50);
  box4 = new Box(190,0,50,80);




  
}

function draw() {
  background(0); 

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();


 

  
}