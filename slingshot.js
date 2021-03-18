class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };

    this.pointB = pointB;
    this.slingshot = Constraint.create(options);
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");

    World.add(world, this.slingshot);
  }

  bird_flying() {
    this.slingshot.bodyA = null;
  }

  display() {
    image(this.sling1,200,23);
    image(this.sling2,170,23);
    if (this.slingshot.bodyA) {

      var bodyA = this.slingshot.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);

      if(bodyA.x<200) {
        line(bodyA.x-20, bodyA.y, pointB.x-20, pointB.y);
        line(bodyA.x-20, bodyA.y, pointB.x+20, pointB.y);
        image(this.sling3,bodyA.x-30,bodyA.y-10,15,30);
      }
        else{
          line(bodyA.x+25, bodyA.y, pointB.x-20, pointB.y);
          line(bodyA.x+25, bodyA.y, pointB.x+20, pointB.y);
          image(this.sling3,bodyA.x+20,bodyA.y-10,15,30);
        }


      
    }
  }
}

