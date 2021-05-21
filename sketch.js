const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

var engine, world;

var plinko = [];
var division = [];
var particles;

function preload()
{
	
}

function setup() {
  createCanvas(800,725);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,715,800,20);

  // divisions...........................................................
  for(var i = 0; i<=width; i+= 80){
      division.push(new Division(i,650))
  }


  // plinko1
  for(var i = 40; i<width; i+= 50){
    plinko.push(new Plinko(i,75))
}


// plinko2
for(var i = 15; i<width; i+= 50){
  plinko.push(new Plinko(i,175))
}


// plinko3
for(var i = 40; i<width; i+= 50){
  plinko.push(new Plinko(i,275))
}


// plinko4
for(var i = 15; i<width; i+= 50){
plinko.push(new Plinko(i,375))
}


}

function draw() {
  background("black");
textSize(25);

// 500
text("500",25,542);
text("500",105,542);
text("500",185,542);
// 100
text("100",265,542);
text("100",345,542);
text("100",425,542);
// 200
text("200",505,542);
text("200",585,542);
text("200",665,542);
// 500
text("500",745,542);

// score
text("Score: " + score,55,29);

  Engine.update(engine);
  

  // divisions.........................................................
  for(var i = 0; i<division.length; i++){
    division[i].display();
}

ground.display();

// plinko
for(var i = 0; i<plinko.length; i++){
  plinko[i].display();
}

// if (frameCount % 60 === 0){
//   particle.push(new Particle(random(100,700),10))
  
// }

// for(var i = 0; i<particle.length; i++){
//   particle[i].display();
// }


if(particles != null){
  particles.display();

if(particles.body.position.y>560){

  if(particles.body.position.x<238 || particles.x>720){
    score = score + 500;
    particles = null;

  }
  else if(particles.body.position.x>240 && particles.body.position.x<480){
    score = score + 100;
    particles = null;
  }
  else if(particles.body.position.x>480 && particles.body.position.x<720){
    score = score + 200;
    particles = null;
  }

};
}

}

function keyPressed(){
  if(keyCode === 32){
    particles = new Particle(random(50,750),10);
    console.log("hi");
  }
}