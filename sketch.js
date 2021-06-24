const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var btn1,btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball  = new Ball(200,100,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn1 = createImg("right.png");
  btn1.position(220,30);
  btn1.mouseClicked(hForce);
  btn1.size(50,50);

  btn2 = createImg("up.png");
  btn2.position(20,30);
  btn2.mouseClicked(vForce);
  btn2.size(50,50);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ball.show();
}

function hForce(){

  Body.applyForce(ball.body, ball.body.position, {x : 0.05,y : 0});
}

function vForce(){

  Body.applyForce(ball.body, ball.body.position, {x : 0,y : -0.05});
}
