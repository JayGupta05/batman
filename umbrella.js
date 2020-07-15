class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
    }
    display(){
        imageMode(CENTER);
        image(boyUmbImg,this.body.position.x,this.body.position.y+80,300,300);
    }
}