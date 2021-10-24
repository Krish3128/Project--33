class Snow{
    
    constructor(x, y, r) {
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x, y,r, options);
        this.radius=r
        
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
       // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.radius);
        pop();
      }
}