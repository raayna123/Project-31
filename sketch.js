const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 150;

var ground;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;


  ground = new Ground(240, 780, 480, 10);

  for(var i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i, height - divisionHeight, 10, divisionHeight*2));
  }
  
  for(var r = 40; r<= width; r = r + 50) {
    plinkos.push(new Plinko(r, 75, 15));
  }

  for(var r = 15; r<= width; r = r + 50) {
    plinkos.push(new Plinko(r, 175, 15));
  }

  for(var r = 40; r<= width; r = r + 50) {
    plinkos.push(new Plinko(r, 275, 15));
  }

  for(var r = 15; r<= width; r = r + 50) {
    plinkos.push(new Plinko(r, 375, 15));
  }

  
  Engine.run(engine);
}

function draw() {
  background(0,0,0);  

  ground.display();

  for(var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  for(var r = 0; r < plinkos.length; r++) {
    plinkos[r].display();
  }

  if(frameCount % 90 === 0) {
    particles.push(new Particle(random(width/2 + 10, width/2 - 10), 10, 10));
  }

  for(var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
  drawSprites();
}