class BaseClass {
    constructor(x,y,width,height) {
      var box_options = {
        restitution: 0.8,
        friction : 1.0,
        density : 1.0
      };
  
      this.body = Bodies.rectangle(x, y, width, height, box_options);
      this.box_w = width;
      this.box_h = height;
      this.image = loadImage('sprites/base.png');
  
      World.add(world, this.body);
    }
  
    display(){
      push ();
      translate(this.body.position.x,this.body.position.y)
      angleMode(RADIANS);
      rotate (this.body.angle);
      imageMode(CENTER);
  
      image(this.image,0,0,this.box_w,this.box_h);  
      
      pop ();
  
    }
  }