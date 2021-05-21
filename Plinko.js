class Plinko{
    constructor(x,y){

      var options = {
            'isStatic' : true,
            'restitution' : 0.5,
            'friction':1.0,
            'density':1.0
        }

        this.radius = 10;
        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body);
        
    }

    display(){
        var plinPos = this.body.position;

        push();
        translate(plinPos.x, plinPos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
};
