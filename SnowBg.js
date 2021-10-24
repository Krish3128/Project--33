class Snowbg{
    
        constructor(x, y, width, height, angle) {
            var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.image = loadImage("snow3.jpg");
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 1000, 700,2100,1400);
            pop();
          }
}