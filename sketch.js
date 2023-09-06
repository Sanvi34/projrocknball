
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    //write a code to set value of restitution such that:
//Ball (white circle) bounces more when it hits the bottom.
   restitution: 0.75
  }

  var rock_options = {
   // write a code to set value of restitution such that:
   // Rock (Red Circle) bounces less when it hits the bottom.
   restitution:0.2 
  }
   
  btn2 = createImg('up.png');
  btn2.position(1250,30);
  btn2.size(120,160);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(600,10,20,ball_options);
  World.add(world,ball);

  
  
  rock = Bodies.circle(750,10,21,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(600,693,100000,20,ground_options);

  World.add(world, ground);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn2.mouseClicked(vForce);
}



function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();
}

function vForce()
{
 //write a code to move ball up when the button is clicked.
 console.log ("hello");
 Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}


  


