class Polygon{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(x, y ,r,  options);
        World.add(world, this.body);

   }
   display(){
       var Mpos=this.body.position;
       push ()
       translate (Mpos.x,Mpos.y);
       imageMode (CENTER);
       image (this.image,0,0,this.r*2,this.r*2);
       pop ();


    }
}