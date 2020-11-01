class Drops{
    constructor(x, y){
        this.radius = 5;
        var options ={
            friction: 0.01,
            restitution: 0.1
        }
        this.rain = Bodies.circle(x, y, this.radius, options)
        World.add(world, this.rain);
        
    }

    update(){
        if(this.rain.position.y>height){
            Body.setPosition(this.rain, {
                x: random(0, 400),
                y: random(0, 700)
            })
        }
    }

    display(){
        fill(32, 101, 136);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }

}