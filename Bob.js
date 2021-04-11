class Bob {
 


  constructor(x, y) {
    var options = {
      'isStatic':true,
        'restitution':0.3,
        'friction':0,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,20 , options);
    this.radius = 20;
   
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0, this.radius, this.radius);
    pop();
  }



}
