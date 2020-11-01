class Umbrellla{
    constructor(x, y){
        this.umbrella = Bodies.circle();
        this.radius = 50;
        this.image = loadImage("Walking Frame/walking_8.png");

        this.umbrella = Bodies.circle(x, y, this.radius, {isStatic: true});
    }

    display(){
        
    }

    


    
}