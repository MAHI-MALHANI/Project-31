class Umbrella{
    constructor(x, y){

        var options = {
            stiffness: 0.04,
            length: 10,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, options);
        this.image=loadImage("umbrella.jpg");
        
    }

    display(){
       ImageMode(CENTER);
       var pos=this.body.position;
    }
    
}