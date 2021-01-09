class Slingshot {
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:10,

        }
        this.pointB=pointB
         this.slingshot=Constraint.create(option)
         World.add(world,this.slingshot)
    }

    fly(){
        this.slingshot.bodyA=null;
    }


    display(){
        if(this.slingshot.bodyA){
        
        line (this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}

    
}
