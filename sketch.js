const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground1;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon
var slingshot;

function setup(){
    createCanvas(1200, 400);


	engine = Engine.create();
    world = engine.world;

    



    ground1=new Ground(390,270,190,30);

    block8=new Box(330,235,30,40);
    block9=new Box(360,235,30,40);
    block10=new Box(390,235,30,40);
    block11=new Box(420,235,30,40);
    block12=new Box(450,235,30,40);
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
    block16=new Box(390,155,30,40);

    polygon=new Polygon(50,200,20);


    slingshot=new Slingshot(polygon.body,{x:100,y:200});
    Engine.run(engine);

}


function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygon.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        Slingshot.attach(this.polygon);
    }
}