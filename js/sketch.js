const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var monster1;
var spaceship1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
     spaceship1 = createSprite(200,400);
    monster1 = createSpreite(200,200);
    
}

function draw(){
    background("space.jpg");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
}