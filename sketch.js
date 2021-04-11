const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4 ,bob5;
var roof;
var rope1;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(600,100,250,20);
  bob1 = new Bob(600 , 300);
  bob2 = new Bob(560, 300);
  bob3 = new Bob(520, 300);
  bob4 = new Bob(640, 300);
  console.log(bob1.body.position.x);
 rope1 = new Rope(bob1.body,{x:bob1.body.position.x,y:roof.body.position.y});
  bob5 = new Bob(680,300);
}

function draw(){
    background("yellow");
    Engine.update(engine);
   roof.display();
  // rope1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
   
}
/*
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
*/

function mouseReleased(){
    slingshot.fly();
}