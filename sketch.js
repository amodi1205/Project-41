const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var maxDrops = 100;
var drops = [];
var umbrella;
var person, person1;


function preload(){

    person1 = loadImage("W/Walk.png");
    
}

function setup(){
    createCanvas(400, 700)

    engine = Engine.create();
    world = engine.world;

if(frameCount % 100==0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 400), random(0, 700)))
    }
}


person = createSprite(10, 10, 200, 650);
person.addImage(person1);
//World.add(world, person);

}

function draw(){
    Engine.update(engine);
    background("black");

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    
} 

