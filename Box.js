class Box {
  constructor(x,y,w,h){
    var options={
			//isStatic:true,
			restitution:0,
			friction:0,
			
			
			}

		this.visibility=255;
		this.x=x;
		this.y=y;
        this.w=w;
        this.h=h;
		
		this.body=Bodies.rectangle(x, y, w, h, options)
		World.add(world, this.body);

	}
	display()
	{

		console.log(this.body.speed);
		if(this.body.speed<3){
			var angle=this.body.angle;
		
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rotate (angle)
			rectMode(CENTER)
			
			fill(255,0,255)
			
			rect(0,0,this.w, this.h);
			pop()
		}else{
			World.remove(world, this.body);
			push();
			this.Visiblity = this.Visiblity - 5;
			tint(255,this.Visiblity);
			pop();
		}
  }
}
