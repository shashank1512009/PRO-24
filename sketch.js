const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(300,100,25)
    rubber2 = new Rubber(345,100,25)
    rubber3 = new Rubber(323,100,25)
    rubber4 = new Rubber(390,100,25)
    rubber5 = new Rubber(367,100,25)
    iron = new Iron(550,350,80,35)
    stone = new Stone(500,250,100,53)
   

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    iron.display();
    stone.display();
    

    
 
}