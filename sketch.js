const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball, blower, blowerMouth;
var button;

function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;

  blower = new Blower(500, 400, 500, 500);
  blowerMouth = new BlowerMouth(350, 350, 100, 10);
  ball = new Ball(400, 200, 30, 30);

  button = createButton("Click to Blow");
  button.position(width/2, height-100);
  button.size(100,50);
  button.class("blowButton");
  button.mousePressed(blow);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(173, 173, 133);

  Engine.update(engine);
  
  blower.show();
  blowerMouth.show();
  ball.show();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:1.5});
}