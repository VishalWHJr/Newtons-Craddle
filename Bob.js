class Bob{
    constructor(x,y,radius){
        var options={
            density:1.2,
            restitution:1.3,
            friction:1.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill ("purple");
        stroke("purple");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius+33);
    }
}