class Division {
    constructor(x,y){
       var options = {
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,10,250,options);
       this.w = 10;
       this.h = 250;
       World.add(world,this.body);
    }
    display(){
        
        var dpos = this.body.position;

        push();
        translate(dpos.x,dpos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h);
        pop();
    }

};
