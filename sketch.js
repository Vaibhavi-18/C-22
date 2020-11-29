const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , ground , ball






function setup() {
  createCanvas(400,400);
  
engine = Engine.create();
world = engine.world;


var groundoption = {
  isStatic:true 
}
ground = Bodies.rectangle(200,390,400,20, groundoption)
World.add(world, ground)

var balloption = {
  restitution:1
}

ball = Bodies.circle(200,200,30,balloption)
World.add(world , ball)

}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
fill("yellow")
  rect(ground.position.x , ground.position.y , 400 , 30)


ellipseMode(RADIUS)
fill("limegreen")
ellipse(ball.position.x , ball.position.y , 40 , 30)



}