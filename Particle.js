class Particle{
    constructor(x,y){

      var options = {
            'isStatic' : false,
            'restitution' : 0.5,
            'friction':1.0,
            'density':1.0
        }
        
        
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
        
    }

    display(){
        var plinPos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(plinPos.x, plinPos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};